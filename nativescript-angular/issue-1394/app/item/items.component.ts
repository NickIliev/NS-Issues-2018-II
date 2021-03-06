import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService) {
        // alert("constructor"); // throws err - no dialog
     }

    ngOnInit(): void {
        // alert("ngOnInit"); // throws err - no dialog
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        alert("ngAfterViewInit"); // throws err - no dialog
    }
}