import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-modals",
    moduleId: module.id,
    templateUrl: "./modal.component.html",
})
export class ModalComponent {

    constructor(private _params: ModalDialogParams, private _page: Page) {
        this._page.on("unloaded", () => {
            console.log(">>>>>>>>>>>>>>>> PAGE unloaded >>>>>>>>>>>>>");
            this._params.closeCallback("[ngOnDestroy] Happy New Year!!!");
        })
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
        this._params.closeCallback("[ngOnDestroy] Happy New Year!!!");
    }

    onLoaded() {
        console.log("Stack Loaded");
    }

    onUnloaded() {
        console.log("Stack Unloaded");
        this._params.closeCallback("[onUnloaded] Happy New Year!!!");
    }

    closeModal() {
        this._params.closeCallback("[closeModal] Happy New Year!!!");
    }
}