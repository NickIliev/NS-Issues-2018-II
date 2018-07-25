import { EventData } from 'data/observable';
import { TimePicker } from 'ui/time-picker';

export function navigatingTo(args: EventData) { }

export function onPickerLoaded(args) {
    let picker = <TimePicker>args.object;
    console.log(picker.minuteInterval);
}