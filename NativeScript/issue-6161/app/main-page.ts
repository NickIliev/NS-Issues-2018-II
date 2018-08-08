

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

const FormattedString = require('text/formatted-string').FormattedString;
const Span = require('text/span').Span;

export function navigatingTo(args: EventData) {

    const page = <Page>args.object;
    const vm = new HelloWorldModel();


    let fstring = new FormattedString();
    let fspan = new Span();
    fspan.text = "anything";
    fspan.color = "red";
    fstring.spans.push(fspan);
    let answer_formatted = fstring; // attached to page binding context model

    vm.set("answer", answer_formatted);

    page.bindingContext = vm;
}