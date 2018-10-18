import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, private _page: Page) { 
        this._page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}