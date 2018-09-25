import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { MainComponent } from "./pages/main/main.component";


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [AppComponent, MainComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
