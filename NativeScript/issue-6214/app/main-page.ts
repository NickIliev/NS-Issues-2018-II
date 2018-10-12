import { EventData, Observable, PropertyChangeData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    let vm = new HelloWorldModel();

    page.bindingContext = vm;

    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        console.log(propertyChangeData);
    });
}

