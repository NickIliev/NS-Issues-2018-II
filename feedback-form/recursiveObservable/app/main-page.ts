
import { EventData, fromObject, fromObjectRecursive, PropertyChangeData, Observable } from 'data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from "tns-core-modules/ui/label";
import { TextView } from "tns-core-modules/ui/text-view";

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    let vm = new Observable();
    
    vm.set() fromObjectRecursive({
        client: "JohnDoe",
        favoriteColor: { hisColor: "Green" } // hisColor is an Observable
    })

    page.bindingContext = vm;

    vm.addEventListener(Observable.propertyChangeEvent, (args: PropertyChangeData) => {
        // args is of type PropertyChangeData
        console.log("propertyChangeEvent [eventName]: ", args.eventName);
        console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
        console.log("propertyChangeEvent [value]: ", args.value);
        console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
    });
}
