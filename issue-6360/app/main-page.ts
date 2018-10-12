
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import * as elasticsearch from 'elasticsearch';
const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
    }, (error) => {
        if (error) {
            console.log('elasticsearch cluster is down!');
        } else {
            console.log('All is well');
        }
    });
}