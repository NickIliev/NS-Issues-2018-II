import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "./modal.component";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    results: string ="";

    constructor(private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) { }


    showModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false,
            stretched: true
        };

        this._modalService.showModal(ModalComponent, options)
            .then((result: string) => {
                console.log(">>>>>>>>>>>>>> closeCallback RESULT: ", result);
            });
    }
}