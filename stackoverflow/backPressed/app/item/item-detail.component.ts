import { Component, OnInit, NgZone } from "@angular/core";
import { android, AndroidApplication, AndroidActivityBackPressedEventData } from "application";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {

    shopList: string[] = [];

    constructor(private _zone: NgZone) {
        this.shopList = [];
        this.shopList.push('sugar');
        this.shopList.push('milk');
    }

reload(args: AndroidActivityBackPressedEventData): void {
    console.log ('back pressed');
    console.log (this.shopList);  // <<--- "undefined"
}

ngOnInit(): void {
    let that = this;

    android.on(AndroidApplication.activityBackPressedEvent, (args: AndroidActivityBackPressedEventData) => {
        that.reload(args);
    });
}
}
