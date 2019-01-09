import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ModalViewComponent } from "./item/modal-view.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    {
        path: "items", component: ItemsComponent,
        children: [
            {
                path: "modal-view", component: ModalViewComponent
            }
        ]
    }
];


@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }