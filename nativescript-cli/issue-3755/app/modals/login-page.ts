import { ShownModallyData } from "tns-core-modules/ui/page";

let context: any;
let closeCallback: Function;

export function onShownModally(args: ShownModallyData): void {
    context = args.context;
    closeCallback = args.closeCallback;

    console.log("ALA BALA");
}

export function onLoginButtonTap(): void {
    closeCallback("some context for the closeback");
}