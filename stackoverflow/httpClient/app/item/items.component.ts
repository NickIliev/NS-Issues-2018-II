import { Component, OnInit } from "@angular/core";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    userId: number;
    title: string;
    body: string

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {

        this._itemService.load()
            .subscribe((result) => {

                let res: any = result;

                this.userId = res.userId;
                this.title = res.title;
                this.body = res.body;

            }, (error) => {
                console.log(error);
            });

    }

}