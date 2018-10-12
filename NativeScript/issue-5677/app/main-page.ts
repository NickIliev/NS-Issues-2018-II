import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { TextField } from 'tns-core-modules/ui/text-field';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function onTfLoaded(args: EventData) {
    let tf = <TextField>args.object;

    tf.on("textChange", (args) => {
        console.dir(args);
    })
}