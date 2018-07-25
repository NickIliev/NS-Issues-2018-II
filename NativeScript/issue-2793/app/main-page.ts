import { EventData, Observable, fromObject } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'ui/page';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    let vm = new Observable();

    let items = new ObservableArray(
        fromObject({ index: 0, text: "Option 1", selected: true }),
        fromObject({ index: 1, text: "Option 2", selected: false }),
        fromObject({ index: 2, text: "Option 3", selected: false }),
        fromObject({ index: 3, text: "Option 4", selected: false }),
        fromObject({ index: 4, text: "Option 4", selected: true }),
        fromObject({ index: 5, text: "Option 4", selected: false }),
    );

    vm.set("items", items);

    page.bindingContext = vm;
}
