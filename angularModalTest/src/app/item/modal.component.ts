import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-modals",
    moduleId: module.id,
    templateUrl: "./modal.component.html",
})
export class ModalComponent {

    constructor(private _params: ModalDialogParams) {
        
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