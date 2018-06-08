
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as utils from "utils/utils";

declare let android: any;

const context = utils.ad.getApplicationContext();
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
 
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
    try {
        const NOTIFICATION_CHANNEL_ID = "1";
        const builder = new android.support.v4.app.NotificationCompat.Builder(context, NOTIFICATION_CHANNEL_ID);
        console.log(builder);
    } catch (error) {
        console.log(error);
    }
}