"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var featured_routing_module_1 = require("./featured-routing.module");
var featured_component_1 = require("./featured.component");
var FeaturedModule = /** @class */ (function () {
    function FeaturedModule() {
    }
    FeaturedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                featured_routing_module_1.FeaturedRoutingModule
            ],
            declarations: [
                featured_component_1.FeaturedComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], FeaturedModule);
    return FeaturedModule;
}());
exports.FeaturedModule = FeaturedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBY3pEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBWjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2ZlYXR1cmVkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVkQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZWQuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlZFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBGZWF0dXJlZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZE1vZHVsZSB7IH1cclxuIl19