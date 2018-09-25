import { AppModuleNgFactory } from "./app.module.ngfactory";
import { platformNativeScript } from "nativescript-angular/platform-static";

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
