var view = require("ui/core/view");
const dataManager = require("~/shared/dataManager.js").DataManager;
require("nativescript-dom");
const frameModule = require("tns-core-modules/ui/frame");
var mapsModule = require("nativescript-google-maps-sdk");
var geolocation = require("nativescript-geolocation");
const gplaces = require("~/shared/gplaces.js").GPlaces;
const locationHelper = require("~/shared/locationHelper.js").LocationHelper;
var Directions = require("nativescript-directions").Directions;
var categoria = null;
var mapView = null;
var stkEstaciones = null;
var stkParking = null;
var stkAutocorp = null;
const colorCategoriaElegida = "#d2d2d2";
var ultimaPosBusquedaLugares = null;
var directions;
var myLocation = null;

function onNavigatingTo(args) {
    const page = args.object;
    //page.bindingContext = viewModel;
    stkEstaciones = page.getElementById("stkEstaciones");
    stkParking = page.getElementById("stkParking");
    stkAutocorp = page.getElementById("stkAutocorp");
    directions = new Directions();
    //global.SetTabIndex(3);
}
exports.onNavigatingTo = onNavigatingTo;

function onPageLoaded(args) {
    RefreshPage();
}
exports.onPageLoaded = onPageLoaded;

function onPageUnLoaded(args) {

}
exports.onPageUnLoaded = onPageUnLoaded;

function RefreshPage() {
    try {
        if (mapView != null && categoria != null) {
            switch (categoria) {
                case "gas_station":
                    stkEstaciones.backgroundColor = colorCategoriaElegida;
                    stkParking.backgroundColor = "white";
                    stkAutocorp.backgroundColor = "white";
                    break;

                case "parking":
                    stkEstaciones.backgroundColor = "white";
                    stkParking.backgroundColor = colorCategoriaElegida;
                    stkAutocorp.backgroundColor = "white";
                    break;

                case "autocorp":
                    stkEstaciones.backgroundColor = "white";
                    stkParking.backgroundColor = "white";
                    stkAutocorp.backgroundColor = colorCategoriaElegida;
                    break;
            }

            mapView.settings.zoomGesturesEnabled = true;
            mapView.zoom = 15;
            mapView.settings.compassEnabled = true;
            mapView.settings.myLocationButtonEnabled = true;
            ultimaPosBusquedaLugares = null;

            if (categoria == "autocorp")
                MostrarAutocorp();
            else
                BuscarLugares(mapView.longitude, mapView.latitude);
        }
    } catch (e) {
        console.log("Error: " + e)
    }
}

function onTapEstaciones(args) {
    categoria = "gas_station";
    RefreshPage();
}
exports.onTapEstaciones = onTapEstaciones;

function onTapParking(args) {
    categoria = "parking";
    RefreshPage();
}
exports.onTapParking = onTapParking;

function onTapAutocorp(args) {
    categoria = "autocorp";
    RefreshPage();
}
exports.onTapAutocorp = onTapAutocorp;

function PonerMarkerMiPos(lat, long) {
    try {
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(lat, long);
        marker.title = "Mi posición";
        marker.color = "red";
        mapView.addMarker(marker);
    } catch (e) {
        console.log("Error: " + e)
    }
}

function IrDireccion(mapView) {
    try {
        var location = geolocation.getCurrentLocation({
            desiredAccuracy: 50,
            updateDistance: null,
            maximumAge: 30000,
            timeout: 20000
        }).
        then(function (loc) {
            if (loc) {
                mapView.latitude = loc.latitude;
                mapView.longitude = loc.longitude;
                mapView.settings.zoomGesturesEnabled = true;
                mapView.zoom = 15;
                mapView.settings.compassEnabled = true;
                mapView.settings.myLocationButtonEnabled = true;
                //console.log("Current location is: " + loc);

                myLocation = {};
                myLocation.latitude = loc.latitude;
                myLocation.longitude = loc.longitude;

                mapView.clear();
                PonerMarkerMiPos(loc.latitude, loc.longitude);
            } else
                console.log("loc null");
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    } catch (e) {
        console.log("Error: " + e)
    }
}

function onMapReady(args) {
    try {
        mapView = args.object;

        myLocation = {};
        myLocation.latitude = -34.6037345;
        myLocation.longitude = -58.3837591;

        //if (categoria != "autocorp") {
        mapView.latitude = myLocation.latitude;
        mapView.longitude = myLocation.longitude;
        //}

        mapView.settings.zoomGesturesEnabled = true;
        mapView.settings.compassEnabled = true;
        mapView.settings.myLocationButtonEnabled = true;
        mapView.zoom = 15;

        RefreshPage();

        PonerMarkerMiPos(myLocation.latitude, myLocation.longitude);
        console.log("onMapReady");

        //setTimeout(function () {
        geolocation.isEnabled().then(function (isEnabled) {
            if (!isEnabled) {
                geolocation.enableLocationRequest().then(function () {
                    IrDireccion(mapView);
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            } else {
                IrDireccion(mapView);
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
        //}, 2000);
    } catch (e) {
        console.log("Error: " + e)
    }
}
exports.onMapReady = onMapReady;

function onMarkerSelect(args) {
    try {
        console.log("Clicked on " + args.marker);

        // myLocation.latitude = loc.latitude;
        // myLocation.longitude = loc.longitude;

        if (myLocation != null && args.marker.title != "Mi posición") {
            directions.navigate({
                from: { // optional, default 'current location'
                    lat: myLocation.latitude,
                    lng: myLocation.longitude
                },
                to: { // either pass in a single object or an Array (see the TypeScript example below)
                    lat: args.marker.position.latitude,
                    lng: args.marker.position.longitude
                }
                // for iOS-specific options, see the TypeScript example below.
            }).then(
                function () {
                    console.log("Maps app launched.");
                },
                function (error) {
                    console.log(error);
                }
            );
        }
    } catch (e) {
        console.log("Error: " + e)
    }
}
exports.onMarkerSelect = onMarkerSelect;

function onCameraChanged(args) {
    //console.log("Camera changed: " + JSON.stringify(args.camera));

    try {
        BuscarLugares(args.camera.longitude, args.camera.latitude);
    } catch (e) {
        console.log("Error: " + e)
    }
}
exports.onCameraChanged = onCameraChanged;

function onCameraMove(args) {
    //console.log("Camera moving: " + JSON.stringify(args.camera));
}
exports.onCameraMove = onCameraMove;

function BuscarLugares(longitude, latitude) {
    try {
        if (mapView != null && categoria != null && categoria != "autocorp") {
            if (ultimaPosBusquedaLugares == null || locationHelper.GetDistanceKM(latitude, longitude, ultimaPosBusquedaLugares.lat, ultimaPosBusquedaLugares.long) > 2) {

                if (ultimaPosBusquedaLugares != null)
                    console.log("Distancia: " + locationHelper.GetDistanceKM(latitude, longitude, ultimaPosBusquedaLugares.lat, ultimaPosBusquedaLugares.long));

                gplaces.GetPlaces(longitude, latitude, 3000, categoria, function (places) {
                    let color = "gray";

                    switch (categoria) {
                        case "gas_station":
                            color = "orange";
                            break;

                        case "parking":
                            color = "blue";
                            break;

                        case "autocorp":
                            color = "red";
                            break;
                    }

                    ultimaPosBusquedaLugares = {};
                    ultimaPosBusquedaLugares.long = longitude;
                    ultimaPosBusquedaLugares.lat = latitude;

                    mapView.clear();
                    //console.log("Encontrados " + places.length + " lugares");

                    for (var i = 0; i < places.length; i++) {
                        var marker = new mapsModule.Marker();
                        marker.position = mapsModule.Position.positionFromLatLng(places[i].lat, places[i].lng);
                        marker.title = places[i].name;
                        marker.snippet = places[i].address;
                        marker.color = color;
                        // marker.userData = {
                        //     index: 1
                        // };
                        mapView.addMarker(marker);
                    }

                    PonerMarkerMiPos(myLocation.latitude, myLocation.longitude);
                    mapView.latitude = myLocation.latitude;
                    mapView.longitude = myLocation.longitude;
                });
            }
        }
    } catch (e) {
        console.log("Error: " + e)
    }
}

function MostrarAutocorp() {
    try {
        mapView.clear();
        PonerMarkerMiPos(myLocation.latitude, myLocation.longitude);

        dataManager.GetUserData(function (userData) {
            let marker = new mapsModule.Marker();
            let coord = userData.Contact.Coordinates.split(",");
            let lat = parseFloat(coord[0]);
            let long = parseFloat(coord[1]);
            marker.position = mapsModule.Position.positionFromLatLng(lat, long);
            marker.title = "AutoCorp";
            marker.color = "green";
            mapView.addMarker(marker);

            mapView.latitude = lat;
            mapView.longitude = long;
        });
    } catch (e) {
        console.log("Error: " + e)
    }
}

