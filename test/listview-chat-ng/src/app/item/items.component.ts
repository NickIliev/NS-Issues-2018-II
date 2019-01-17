import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { SetupItemViewArgs } from "nativescript-angular/directives";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListView } from "tns-core-modules/ui/list-view";
import { isAndroid, isIOS } from "tns-core-modules/platform"; 

@Component({
    selector: "ns-items",
    moduleId: module.id,
    styleUrls:["./items.component.css"],
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    message: string;
    
    @ViewChild("tf") tf: ElementRef;
    textField: TextField;

    @ViewChild("lv") lv: ElementRef;
    listView: ListView;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        this.textField = this.tf.nativeElement;
        this.listView = this.lv.nativeElement;

        setTimeout(() => {
            if (isAndroid) {
                this.listView.android.smoothScrollToPosition(this.items.length - 1);
            } else {
                this.listView.scrollToIndexAnimated(this.items.length -1);
            }
        }, 300);
    }

    onSetupItemView(args: SetupItemViewArgs) {
        args.view.context.left = this.items[args.index].from === "John";
        args.view.context.right = this.items[args.index].from === "Ann";
    }

    onSendViaReturn(args: EventData) {
        
        console.log(`this.textField..text ${this.textField.text}`);
        this.items.push({id: 1234, from: "Ann", message: this.textField.text});

        setTimeout(() => {
            if (isAndroid) {
                this.listView.android.smoothScrollToPosition(this.items.length - 1);
            } else {
                this.listView.scrollToIndexAnimated(this.items.length -1);
            }
        }, 300);

        this.textField.text = "";
    }

    onSend(args: EventData) {
        console.log(`onSend`);
        const btn = args.object as Button;
        
        console.log(`this.textField..text ${this.textField.text}`);
        this.items.push({id: 1234, from: "Ann", message: this.textField.text});

        setTimeout(() => {
            if (isAndroid) {
                this.listView.android.smoothScrollToPosition(this.items.length - 1);
            } else {
                this.listView.scrollToIndexAnimated(this.items.length -1);
            }
        }, 300);

        this.textField.text = "";
    }
}