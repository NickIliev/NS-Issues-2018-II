
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { create as createPickerContext } from "nativescript-imagepicker";
import { fromAsset } from "tns-core-modules/image-source";

export function pickAndConvert(args: EventData) {

    let context = createPickerContext({
        mode: "single" // use "multiple" for multiple selection
    });

    
    context.authorize()
    .then(() => {
        return context.present();
    })
    .then(selection => {
        fromAsset(selection[0])
            .then(res => {
                console.log(res.toBase64String("jpeg"));
            });
    });

}