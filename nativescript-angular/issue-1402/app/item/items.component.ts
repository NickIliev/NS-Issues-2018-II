import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<any>;
    selectedListPickerIndex: 3;

    isEnabled: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.items = [1, 1, 2, 3, 5, 8];
    }

    toggle() {
        this.isEnabled = !this.isEnabled;
    }
}