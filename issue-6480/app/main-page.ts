import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

let worker = new Worker('./worker');

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();


    worker.postMessage({ method: "GET", url: 'https://docs.nativescript.org', auth: "auth" });

    worker.onmessage = (msg) => {
        console.log(msg);
    }

    worker.onerror = (err) => {
        console.log(`An unhandled error occurred in worker: ${err.filename}, line: ${err.lineno} :`);
        console.log(err.message);
    }
}
