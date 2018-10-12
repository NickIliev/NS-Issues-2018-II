import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private _page: Page, private _cdr: ChangeDetectorRef) { 
        this._page.on(Page.loadedEvent, () => {
            this.items.map(x => x.id);
            this._cdr.detectChanges();
        });
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}