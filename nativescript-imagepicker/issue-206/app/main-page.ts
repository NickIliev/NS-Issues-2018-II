
import { EventData, Observable } from 'data/observable';
import { create as createPickerContext } from "nativescript-imagepicker";
import { fromAsset, fromBase64 } from "tns-core-modules/image-source";
import { Page } from "tns-core-modules/ui/page";

let context = createPickerContext({
    mode: "single" // use "multiple" for multiple selection
});

let vm: Observable = new Observable();

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    vm
    vm.set("base64img", "test");

    page.bindingContext = vm;
}

export function pickAndConvert(args: EventData) {

    context.authorize()
        .then(() => {
            return context.present();
        })
        .then(selection => {
            fromAsset(selection[0])
                .then(res => {
                    let base64img = res.toBase64String("jpeg");
                    console.log(base64img);

                    vm.set("base64img", base64img.toString());
                });
        });

}

