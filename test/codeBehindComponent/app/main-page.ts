
import { EventData } from 'tns-core-modules/data/observable/observable';
import { Page } from 'tns-core-modules/ui/page/page';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}