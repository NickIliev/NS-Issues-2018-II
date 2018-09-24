import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SubComponent } from "./sub.component";

export const routerConfig = [
    {
        path: "",
        component: SubComponent
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [SubComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SubModule { }
