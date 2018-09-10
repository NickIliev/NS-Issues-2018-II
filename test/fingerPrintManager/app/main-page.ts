import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as app from "tns-core-modules/application";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    let appContext = app.android.context;

    let fingerprintManager: android.hardware.fingerprint.FingerprintManager;
    fingerprintManager = appContext.getSystemService(android.content.Context.FINGERPRINT_SERVICE);

    console.log(fingerprintManager);
}