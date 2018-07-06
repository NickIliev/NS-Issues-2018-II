

import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';


import { format, compareAsc } from "date-fns"

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();

    const date1 = new Date();
    vm.set("date1", format(date1, 'MM/DD/YY'));

    const date2 = new Date();
    vm.set("date2", format(date2, 'MM/DD/YY'));

    vm.set("compare", compareAsc(date1, date2));

    page.bindingContext = vm;
}