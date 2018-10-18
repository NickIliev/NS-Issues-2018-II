
import { EventData, Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import * as http from "tns-core-modules/http";

const vm = new Observable();
let image: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    vm.set("myLogo", "");

    let options = {
        url: "http://23.97.179.10:8081/api/MobileCommon/GetUserImage?userName=Admin",
        method: "GET"
    }
    let nativescriptOptions = {
        url: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png",
        method: "GET"
    }

    page.bindingContext = vm;
}