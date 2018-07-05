import { EventData, fromObject } from 'data/observable';
import { Page } from "ui/page";

declare let de: any;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;

    console.dir(de.mannodermaus.rxbonjour.BonjourEvent);

    page.bindingContext = fromObject({"msg": de.mannodermaus.rxbonjour.BonjourEvent["class"]});
}