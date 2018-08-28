/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
declare var android: any;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function tap() {
    let btn = new android.widget.Button(null);
}