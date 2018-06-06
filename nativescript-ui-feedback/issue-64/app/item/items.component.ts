import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ListViewEventData } from "nativescript-ui-listview";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    private _numberOfAddedItems;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private _changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this._numberOfAddedItems = this.items.length;

        this._changeDetectionRef.detectChanges();
    }

    onPullToRefreshInitiated(args: ListViewEventData) {
        const listView = args.object;
        let initialNumberOfItems = this._numberOfAddedItems;

        for (var i = this._numberOfAddedItems; i < initialNumberOfItems + 5; i++) {
            this.items.splice(0, 0, { id: i, name: "JohnSmith"+i, role: "Not defined role" });
            this._numberOfAddedItems++;
        }

        listView.notifyPullToRefreshFinished();
    }
}