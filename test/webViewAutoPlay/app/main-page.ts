import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { WebView } from "tns-core-modules/ui/web-view";
import { isAndroid } from "tns-core-modules/platform";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
}

export function onWebViewLoaded(args) {
    let webView = <WebView>args.object;

    if (isAndroid) {
        setTimeout(() => {
            console.log(webView.nativeView)
            webView.nativeView.getSettings().setMediaPlaybackRequiresUserGesture(false);
        }, 100);
    }
}