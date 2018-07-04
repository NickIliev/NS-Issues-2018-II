
import { EventData, Observable } from 'data/observable';
import * as fs from "file-system";
import { Page } from "ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();

    // Gets the root folder for the current application. 
    // This Folder is private for the application and not accessible from Users/External apps. 
    // iOS - this folder is read-only and contains the app and all its resources.

    let currentApp = fs.knownFolders.currentApp();
    console.log(currentApp.path);

    let cssFile = currentApp.getFile('files/test.css');
    console.log(cssFile);

    setTimeout(() => {
        cssFile.readText().then(res => {
            console.log("TEXT: ", res);

            vm.set("fileContent", res);
        }).catch(err => {
            console.log("ERR: ", err);
        })
    }, 300);

    page.bindingContext = vm;
}