import { Component, OnInit } from "@angular/core";

import { ListView, ItemEventData } from "ui/list-view";
import { Label } from "ui/label";
import { Page } from "ui/page";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private _itemService: ItemService, private _page: Page) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(args: ItemEventData) {

        let lb = <Label>this._page.getViewById(args.view.id);
        if (lb.className === "list-group-item item-selected") {
            lb.className = "list-group-item";
        } else {
            lb.className = "list-group-item item-selected";
        }

        // let listview = args.object as ListView;
        // listview.refresh();
    }
}