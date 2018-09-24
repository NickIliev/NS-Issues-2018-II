import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    imageUri: string;
 
    onTap() {
        this.imageUri = "res://icon";
    }
}