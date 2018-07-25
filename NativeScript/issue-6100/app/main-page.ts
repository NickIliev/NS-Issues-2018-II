import { EventData, Observable } from 'tns-core-modules/data/observable/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import * as builder from 'tns-core-modules/ui/builder/builder';

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    let vm = new Observable();

    let items = [
        { someName: "000", someJob: "TSE", id: 1 },
        { someName: "001", someJob: "TSE", id: 1 },
        { someName: "002", someJob: "TSE", id: 2 },
        { someName: "003", someJob: "Dev", id: 3 },
        { someName: "004", someJob: "TSE", id: 1 },
        { someName: "005", someJob: "TSE", id: 2 },
        { someName: "006", someJob: "TSE", id: 1 },
        { someName: "007", someJob: "TSE", id: 2 },
        { someName: "008", someJob: "Dev", id: 3 },
        { someName: "009", someJob: "TSE", id: 1 },
        { someName: "010", someJob: "TSE", id: 1 },
        { someName: "011", someJob: "TSE", id: 1 },
        { someName: "012", someJob: "TSE", id: 2 },
        { someName: "013", someJob: "Dev", id: 3 },
        { someName: "014", someJob: "TSE", id: 2 },
        { someName: "015", someJob: "Dev", id: 3 },
        { someName: "016", someJob: "TSE", id: 1 },
        { someName: "017", someJob: "Dev", id: 3 },
        { someName: "018", someJob: "TSE", id: 1 },
        { someName: "019", someJob: "TSE", id: 2 },
        { someName: "020", someJob: "Dev", id: 3 },
        { someName: "021", someJob: "Dev", id: 3 },
    ];

    vm.set("items", items);

    page.bindingContext = vm;
}