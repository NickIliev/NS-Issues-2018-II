import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.uploadImages();
    }
}