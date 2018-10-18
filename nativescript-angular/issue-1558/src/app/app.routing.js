"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var TheGuard = /** @class */ (function () {
    function TheGuard() {
    }
    TheGuard.prototype.canActivate = function () {
        return rxjs_1.timer(2000).pipe(operators_1.map(function (_) { return true; }));
        // or simply
        // canActivate(): boolean {
        //     return true;
        // }
    };
    TheGuard = __decorate([
        core_1.Injectable()
    ], TheGuard);
    return TheGuard;
}());
exports.TheGuard = TheGuard;
var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: items_component_1.ItemsComponent, canActivate: [TheGuard] },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUNyRCxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUVuRSw2QkFBeUM7QUFDekMsNENBQXFDO0FBR3JDO0lBQUE7SUFXQSxDQUFDO0lBVkcsOEJBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxZQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNuQixlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQ2pCLENBQUM7UUFFRixZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixJQUFJO0lBQ1IsQ0FBQztJQVZRLFFBQVE7UUFEcEIsaUJBQVUsRUFBRTtPQUNBLFFBQVEsQ0FXcEI7SUFBRCxlQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksNEJBQVE7QUFhckIsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUM7SUFDcEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUN2RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIENhbkFjdGl2YXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRpbWVyKDIwMDApLnBpcGUoXG4gICAgICAgICAgICBtYXAoXyA9PiB0cnVlKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIG9yIHNpbXBseVxuICAgICAgICAvLyBjYW5BY3RpdmF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtUaGVHdWFyZF19LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19