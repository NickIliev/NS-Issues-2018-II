import { EventData, Observable } from 'tns-core-modules/data/observable/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import * as builder from 'tns-core-modules/ui/builder/builder';

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    let vm = new Observable();

    let items = [
        { someName: "000", someJob: "TSE" },
        { someName: "001", someJob: "TSE" },
        { someName: "002", someJob: "TSE" },
        { someName: "003", someJob: "Dev" },
        { someName: "004", someJob: "TSE" },
        { someName: "005", someJob: "TSE" },
        { someName: "006", someJob: "TSE" },
        { someName: "007", someJob: "TSE" },
        { someName: "008", someJob: "Dev" },
        { someName: "009", someJob: "TSE" },
        { someName: "010", someJob: "TSE" },
        { someName: "011", someJob: "TSE" },
        { someName: "012", someJob: "TSE" },
        { someName: "013", someJob: "Dev" },
        { someName: "014", someJob: "TSE" },
        { someName: "015", someJob: "Dev" },
        { someName: "016", someJob: "TSE" },
        { someName: "017", someJob: "Dev" },
        { someName: "018", someJob: "TSE" },
        { someName: "019", someJob: "TSE" },
        { someName: "020", someJob: "Dev" },
        { someName: "021", someJob: "Dev" },
    ];

    vm.set("items", items);

    page.bindingContext = vm;
}