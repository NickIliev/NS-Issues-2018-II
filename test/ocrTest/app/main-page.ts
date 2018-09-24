
import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { OCR, RetrieveTextResult } from "nativescript-ocr";
import { ImageSource } from "image-source";
import * as fs from "file-system";

let vm: Observable;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    vm = new Observable();

    page.bindingContext = vm;
}

export function decodeImage() {
    let img: ImageSource = new ImageSource();
    let ocr = new OCR();
    console.log("decode iamge");

    img.fromFile("~/samples/sacnned.png")
        .then((success: boolean) => {
            console.log("success: ", success);
            console.log("img: ", img);
        }).then(() => {
            ocr.retrieveText({
                image: img,
                whitelist: "ABCDEF",     // you can include only certain characters in the result
                blacklist: "0123456789", // .. or you can exclude certain characters from the result
                onProgress: (percentage: number) => {
                    console.log(`Decoding progress: ${percentage}%`);
                }
            }).then(
                (result: RetrieveTextResult) => {
                    console.log(`Result: ${result.text}`);
                    vm.set("result", result.text);
                }, (error: string) => {
                    console.log(`Error: ${error}`);
                })
        })

}