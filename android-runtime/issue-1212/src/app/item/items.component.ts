import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums"; // used to describe at what accuracy the location should be get

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    @ViewChild("MapView") mapView: ElementRef;

    constructor() {
        geolocation.enableLocationRequest();
    }

    //Map events
    onMapReady(event) {
        console.log("Map Ready");
    };
}