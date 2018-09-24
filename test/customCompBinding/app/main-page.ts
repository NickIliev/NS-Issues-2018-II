import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

declare let myGlobal: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    console.log(myGlobal.MyScarySecret);
}