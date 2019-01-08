import { Component, ViewContainerRef} from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ModalViewComponent } from "./modal-view.component";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    constructor(
        private _vcRef: ViewContainerRef,
        private _modalService: ModalDialogService,
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this._routerExtensions.navigate(["modal-view"], { relativeTo: this._activeRoute });
    }

    onTap() {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: true
        };
    
        this._modalService.showModal(ModalViewComponent, options)
            .then((result: string) => {
                // console.log(result);
            });
    }
}