
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import * as builder from "tns-core-modules/ui/builder";

var myComponentInstance = builder.load({
        path: "~/components",
        name: "some-fragment"
});

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    let stack = <StackLayout>page.getViewById("stack");
    stack.addChild(myComponentInstance);
}