
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

import { ImageAsset, ImageAssetOptions } from "tns-core-modules/image-asset";
import { fromResource, fromAsset } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import { takePicture, requestPermissions, CameraOptions } from "nativescript-camera";
import { HelloWorldModel } from "./main-view-model";

const vm = new HelloWorldModel();
let page;

export function navigatingTo(args: EventData) {

    page = <Page>args.object;
    page.bindingContext = vm;

    requestPermissions();
}

export function takePhoto() {
    let options: CameraOptions = {
        keepAspectRatio: false
    }

    takePicture(options).then(asset => {
        vm.set("taken", asset);
    }).then(() => {

        let strechedNone: Image = page.getViewById("str-none");
        console.log(`strechedNone height: ${strechedNone.height }`);

        let strechedAspect: Image = page.getViewById("str-aspect");
        console.log(`strechedAspect height: ${strechedAspect.height}`);

    })
}