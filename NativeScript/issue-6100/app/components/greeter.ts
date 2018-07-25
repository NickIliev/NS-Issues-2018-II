import { EventData } from "tns-core-modules/data/observable/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

export function onLoad(args: EventData) {
    let container = <StackLayout>args.object;
    container.bindingContext = { 
        myName: args.object["name"],
        myJob: args.object["job"]
    };
};