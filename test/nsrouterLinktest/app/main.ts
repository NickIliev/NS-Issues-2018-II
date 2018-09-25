import "reflect-metadata"; // fixes https://github.com/NativeScript/nativescript-dev-webpack/issues/660

import { AppModule } from "./app.module";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

platformNativeScriptDynamic().bootstrapModule(AppModule);
