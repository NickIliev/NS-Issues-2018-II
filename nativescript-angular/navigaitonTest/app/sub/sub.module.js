"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var sub_component_1 = require("./sub.component");
exports.routerConfig = [
    {
        path: "",
        component: sub_component_1.SubComponent
    }
];
var SubModule = /** @class */ (function () {
    function SubModule() {
    }
    SubModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild(exports.routerConfig)
            ],
            declarations: [sub_component_1.SubComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SubModule);
    return SubModule;
}());
exports.SubModule = SubModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Yi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHNEQUF1RTtBQUV2RSxpREFBK0M7QUFFbEMsUUFBQSxZQUFZLEdBQUc7SUFDeEI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0QkFBWTtLQUMxQjtDQUNKLENBQUM7QUFhRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBWHJCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLG9CQUFZLENBQUM7YUFDbEQ7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTdWJDb21wb25lbnQgfSBmcm9tIFwiLi9zdWIuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXJDb25maWcgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICBjb21wb25lbnQ6IFN1YkNvbXBvbmVudFxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlckNvbmZpZylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1N1YkNvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWJNb2R1bGUgeyB9XG4iXX0=