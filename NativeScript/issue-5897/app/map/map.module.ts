import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MapComponent } from "./map.component";

export const routerConfig = [
    {
        path: "",
        component: MapComponent
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [MapComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule { }