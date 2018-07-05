import { EventData } from 'data/observable';
import { Page, ShownModallyData } from 'ui/page';

export function onTap(args: EventData) {
    console.log("tapped");
}

export function onShowingModally(args: ShownModallyData) {
    console.log("onShowingModally");
}