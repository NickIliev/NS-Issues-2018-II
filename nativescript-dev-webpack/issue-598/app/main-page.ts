import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { StackLayout } from 'ui/layouts/stack-layout';
import { TouchGestureEventData} from "ui/gestures"

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}


export function onItemTouch(args: TouchGestureEventData) {
    const stackLayout = <StackLayout>args.object;
    if(args.action === "up"){
            stackLayout.page.showModal('modals/some-page', "context", () => {}, false, false);
    }
}