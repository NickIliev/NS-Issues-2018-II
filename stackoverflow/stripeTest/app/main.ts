// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import * as app from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";

declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
platformNativeScriptDynamic().bootstrapModule(AppModule);
