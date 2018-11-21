"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var keyboard = require("nativescript-keyboardshowing");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
        console.log("keyboard is", keyboard.isShowing() ? "showing" : "hidden");
        exports.onKeyboard = function (evt) {
            console.log("Keyboard is now", evt.showing ? 'showing' : 'hidden');
        };
    };
    ItemsComponent.prototype.hideKeyboard = function () {
        // ad.dismissSoftInput(); // doesn't work on iOS 
        if (platform_1.isIOS) {
            UIApplication.sharedApplication.sendActionToFromForEvent("resignFirstResponder", null, null, null);
            // iOSUtils.getter(UIApplication, UIApplication.sharedApplication)
            //         .keyWindow
            //         .endEditing(true);
        }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBSWxELHNEQUFrRDtBQUVsRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUUsOEJBQThCLENBQUUsQ0FBQztBQVN6RDtJQUVJO0lBRUEsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEUsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUc7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTCxxQ0FBWSxHQUFaO1FBQ0ksaURBQWlEO1FBQ2pELElBQUksZ0JBQUssRUFBRTtZQUNQLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FDcEQsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQzNDLENBQUM7WUFFRixrRUFBa0U7WUFDbEUscUJBQXFCO1lBQ3JCLDZCQUE2QjtTQUNoQztJQUNMLENBQUM7SUExQlksY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxjQUFjLENBMkIxQjtJQUFELHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGFkLCBpb3MgYXMgaU9TVXRpbHMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xudmFyIGtleWJvYXJkID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQta2V5Ym9hcmRzaG93aW5nXCIgKTtcblxuZGVjbGFyZSBsZXQgVUlBcHBsaWNhdGlvbjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImtleWJvYXJkIGlzXCIsIGtleWJvYXJkLmlzU2hvd2luZygpID8gXCJzaG93aW5nXCIgOiBcImhpZGRlblwiKTtcbiAgICAgICAgXG4gICAgICAgIGV4cG9ydHMub25LZXlib2FyZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS2V5Ym9hcmQgaXMgbm93XCIsIGV2dC5zaG93aW5nID8gJ3Nob3dpbmcnIDogJ2hpZGRlbicpO1xuICAgICAgICB9O1xuICAgIH1cblxuaGlkZUtleWJvYXJkKCkge1xuICAgIC8vIGFkLmRpc21pc3NTb2Z0SW5wdXQoKTsgLy8gZG9lc24ndCB3b3JrIG9uIGlPUyBcbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5zZW5kQWN0aW9uVG9Gcm9tRm9yRXZlbnQoXG4gICAgICAgICAgICBcInJlc2lnbkZpcnN0UmVzcG9uZGVyXCIsIG51bGwsIG51bGwsIG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpT1NVdGlscy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcbiAgICAgICAgLy8gICAgICAgICAua2V5V2luZG93XG4gICAgICAgIC8vICAgICAgICAgLmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgfVxufVxufSJdfQ==