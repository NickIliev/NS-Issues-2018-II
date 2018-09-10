import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

declare let myGlobal: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    console.log(myGlobal.MyScarySecret);
}