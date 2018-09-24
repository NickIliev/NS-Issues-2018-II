import { Component, OnInit } from "@angular/core";

import { requestPermissions, takePicture } from "nativescript-camera";

import * as fs from "tns-core-modules/file-system";
import * as enums from "ui/enums";
import { fromAsset } from "image-source";
import { ImageAsset } from "image-asset";

declare let UIImage: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    getPermissions() {
        requestPermissions();
    }

    onTakePhoto() {
        takePicture().then((imageAsset: ImageAsset) => {

            console.log(imageAsset.ios);

            fromAsset(imageAsset).then((source) => {
    
                let folder = fs.knownFolders.documents();
                const baseName = new Date().getTime();
                const pictureName = baseName + '.' + enums.ImageFormat.jpeg;
                const path = fs.path.join(folder.path, pictureName);
    
                source.saveToFile(path, "jpeg");
                const currentImage = UIImage.imageWithContentsOfFile(path);
                console.log("currentImage: ", currentImage);
                console.log('orientation: ', currentImage.imageOrientation); // -> allways return 0
            });
        });
    }
}