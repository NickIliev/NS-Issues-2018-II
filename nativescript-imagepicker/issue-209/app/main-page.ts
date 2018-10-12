import * as imagePicker from "nativescript-imagepicker";

import { EventData } from 'tns-core-modules/data/observable';
import { ImageAsset, ImageAssetOptions } from "tns-core-modules/image-asset";
import { ImageSource } from "tns-core-modules/image-source";
import { Page } from 'tns-core-modules/ui/page';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function getImage() {
    let context = imagePicker.create({
        mode: "single",
        mediaType: 1
    });
    context.authorize().then(() => {
        return context.present();
    }).then((selection) => {
        selection.forEach((selectedImageAsset) => {
            selectedImageAsset.nativeImage
            console.dir(selectedImageAsset.options)

            let options: ImageAssetOptions = selectedImageAsset.options;

            let source = new ImageSource();
            source.fromAsset(selectedImageAsset).then((source) => {
                console.log(source.width + "x" + source.height); // <-- 2880 x 2160
            })
        })
    }, (error) => {
        console.log("Error: " + error);
    });

}