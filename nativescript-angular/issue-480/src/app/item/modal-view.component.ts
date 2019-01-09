import { Component, OnInit } from "@angular/core";

import { ModalDialogParams } from "nativescript-angular";
import * as imagepicker from "nativescript-imagepicker";

@Component({
    selector: "ns-modal",
    moduleId: module.id,
    templateUrl: "./modal-view.component.html",
})
export class ModalViewComponent {
    public imageUrl: any;

    constructor(private params: ModalDialogParams) {
        this.imageUrl = "res://logo";
    }

    public uploadImage(): void {
        let context = imagepicker.create({
            mode: "single"
        });

        this.startSelection(context);
    }

    public startSelection(context): void {
        context
            .authorize()
            .then(() => {
                return context.present();
            })
            .then((selection) => {

                selection.forEach((selected) => {
                    this.imageUrl = selected;
                });
                
            })
            .catch((e)=> {
                console.log(e);
            });
    }

    public save(res: any): void {
        this.params.closeCallback(res);
    }

    public cancel() {
        this.params.closeCallback('Cancel');
    }
}