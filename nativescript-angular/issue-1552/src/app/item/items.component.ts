import { Component } from "@angular/core";
import { requestPermissions, takePicture} from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    src: ImageAsset

    constructor() {
        requestPermissions().then(() => {
            console.log("permissions granted!");
        });
    }

    takePicture() {
        
        takePicture().
            then((imageAsset) => {
                console.log("Result is an image asset instance");
                this.src = imageAsset;
            }).catch((err) => {
                console.log("Error -> " + err.message);
            });
    }
}