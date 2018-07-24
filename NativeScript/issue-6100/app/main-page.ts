import { EventData, Observable } from 'tns-core-modules/data/observable/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import * as builder from 'tns-core-modules/ui/builder/builder';

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    let vm = new Observable();

    let items = [
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "Nick Iliev", someJob: "TSE", id: 1 },
        { someName: "N.Tsonev", someJob: "TSE", id: 2 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
        { someName: "V.Chimev", someJob: "Dev", id: 3 },
    ];

    vm.set("items", items);

    page.bindingContext = vm;
}