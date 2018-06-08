import { EventData, fromObject} from 'data/observable';
import { Page } from 'ui/page';

import { Device } from "./device-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    const page = <Page>args.object;

    const vm = fromObject({device: new Device()});

    page.bindingContext = vm;
}