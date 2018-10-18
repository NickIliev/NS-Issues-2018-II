import { NgModule, Injectable } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, CanActivate } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { Observable, timer } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TheGuard implements CanActivate {
    canActivate(): Observable<boolean> {
        return timer(2000).pipe(
            map(_ => true)
        );

        // or simply
        // canActivate(): boolean {
        //     return true;
        // }
    }
}

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent, canActivate: [TheGuard]},
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }