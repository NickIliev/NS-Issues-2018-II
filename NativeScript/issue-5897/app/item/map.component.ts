import { Component, OnInit } from "@angular/core";



@Component({
    selector: "ns-map",
    moduleId: module.id,
    templateUrl: "./map.component.html",
})
export class MapComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    onMapReady() {
        console.log("onMapReady");
    }
}