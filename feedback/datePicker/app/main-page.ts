import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { DatePicker, dateProperty } from "ui/date-picker";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onDatePickerLoaded(args) {
    let datePicker = args.object;

    datePicker.on("dateChange", (args) => {
        console.dir(args);
    })

    datePicker.on("dayChange", (args) => {
        console.dir(args);
    })

    datePicker.on("monthChange", (args) => {
        console.dir(args);
    })

    datePicker.on("yearChange", (args) => {
        console.dir(args);
    })
} 

export function onTimePickerLoaded(args) {
    let timePicker = args.object;

    timePicker.on("hourChange", (args) => {
        console.dir(args);
    })

    timePicker.on("minuteChange", (args) => {
        console.dir(args);
    })
} 

export function onTextViewLoaded(args) {
    let textView = args.object;

    textView.on("textChange", (args) => {
        console.dir(args);
    })

}