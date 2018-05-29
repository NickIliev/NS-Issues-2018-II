
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as http from "http";

const vm = new HelloWorldModel();
let image: any;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    vm.set("myLogo", "");

    page.bindingContext = vm;


    let options = {
        url: "http://23.97.179.10:8081/api/MobileCommon/GetUserImage?userName=Admin",
        method: "GET"
    }

    let nativescriptOptions = {
        url: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png",
        method: "GET"
    }

    // http.request(options).then(res => {
    //     console.log("request");
    //     console.log("res", res);
    //     // const result = res.content.toJSON();
    //     // console.log("result", result);
    // }).catch(err => {
    //     console.log("err: ", err);
    // })

http.request(options).then(res => {
    console.log("request");
    console.dir(res);
    console.dir(res.content.raw);

    res.content.toImage().then(img => {
        console.log(img);
        image = img;
        vm.set("myLogo", image);
    })

}).catch(err => {
    console.log("err: ", err);
})

}