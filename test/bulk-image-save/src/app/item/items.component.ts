import { AfterViewInit, Component, OnInit } from "@angular/core";

import { isAndroid } from "tns-core-modules/platform";

import { Page } from "tns-core-modules/ui/page";

import { RoverPhoto } from "../models/rover-model";
import { ItemService as RoverPhotosService } from "./item.service";
import { Observable as RxObservable } from "rxjs";

import { onSaveFile as onSaveFileHelper } from "../helpers/save";

@Component({
    selector: "cosmos-rovers",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit, AfterViewInit {
    roverPhotos: RxObservable<Array<RoverPhoto>>;
    day: number;
    month: number;
    year: number;
    rover: string;

    private _tempArr: Array<RoverPhoto> = [];
    private _pageIndex: number;
    private _subscr;

    constructor(
        private _roverService: RoverPhotosService,
        private _page: Page
    ) {
        if (isAndroid) {
            this._page.actionBarHidden = true;
        }
    }

    ngOnInit() {
        this.rover = "Curiosity";
        this.day = 6;
        this.month = 12;
        this.year = 2018;
    }

    ngAfterViewInit() {
        this._pageIndex = 1;
        this.extractData(
            this.rover,
            this.year,
            this.month,
            this.day,
            this._pageIndex
        );
    }

    // onSaveFile() {
    //     console.log(`this._tempArr[0].imageUri: ${this._tempArr[0].imageUri}`)
    //     onSaveFileHelper(this._tempArr[0].imageUri);
    // }

    private extractData(rover: string, year: number, month: number, day: number, _pageIndex: number) {
        this._roverService
            .getPhotosWithDateAndPageIndex(rover, year, month, day, _pageIndex)
            .subscribe(itemsList => {
                    if (itemsList.length === 0) {
                        console.log("No availabel photos for the selected date!");
                    }

                    this._tempArr = itemsList;

                    this.roverPhotos = RxObservable.create(subscriber => {
                        this._subscr = subscriber;
                        subscriber.next(this._tempArr);
                    });
                },error => {
                    console.log(error);
                }
            );
    }

    public onLoadMoreItemsRequested(args) {
        console.log(">>> onLoadMoreItemsRequested <<<");
        console.log(`this._pageIndex ${this._pageIndex}`);

        this._roverService
            .getPhotosWithDateAndPageIndex(
                this.rover,
                this.year,
                this.month,
                this.day,
                ++this._pageIndex
            )
            .subscribe(itemsList => {
                itemsList.forEach(element => {
                    this._tempArr.push(element);
                });

                this._subscr.next(this._tempArr);
            });
    }
}
