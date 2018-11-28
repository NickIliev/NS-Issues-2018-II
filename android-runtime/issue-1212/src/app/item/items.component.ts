import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    @ViewChild("MapView") mapView: ElementRef;

    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
    };
}