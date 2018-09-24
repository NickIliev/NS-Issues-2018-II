import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    // the page binding context will be accerss in components/my-toolbar
    page.bindingContext = new HelloWorldModel();
}