import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent  {
    public selectedIndex = 1;
    public items: Array<string>;
 
    constructor() {
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }
}