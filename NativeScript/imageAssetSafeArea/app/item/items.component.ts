import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    imageUri: string;
 s
    onTap() {
        console.log("tap");
        this.imageUri = "res://icon";
    }
}