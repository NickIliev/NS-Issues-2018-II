"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.textField = this.tf.nativeElement;
    };
    ItemsComponent.prototype.hideKeyboard = function () {
        if (platform_1.isIOS) {
            // utils.ad.dismissSoftInput(); // doesn't work on iOS  but we can directly call the dismissSoftInput for the NativeScript view
            this.textField.focus();
            this.textField.dismissSoftInput();
            // OR use native approaches
            // UIApplication.sharedApplication.sendActionToFromForEvent(
            //     "resignFirstResponder", null, null, null
            // );
            // utils.ios.getter(UIApplication, UIApplication.sharedApplication)
            //         .keyWindow
            //         .endEditing(true);
        }
    };
    __decorate([
        core_1.ViewChild("tf"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "tf", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLHNEQUFrRDtBQVVsRDtJQUFBO0lBMkJBLENBQUM7SUF0Qkcsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxJQUFJLGdCQUFLLEVBQUU7WUFFWCwrSEFBK0g7WUFDL0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFFbEMsMkJBQTJCO1lBRTNCLDREQUE0RDtZQUM1RCwrQ0FBK0M7WUFDL0MsS0FBSztZQUVMLG1FQUFtRTtZQUNuRSxxQkFBcUI7WUFDckIsNkJBQTZCO1NBQzVCO0lBQ0wsQ0FBQztJQXhCZ0I7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQUssaUJBQVU7OENBQUM7SUFGdkIsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQztPQUNXLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5cbmRlY2xhcmUgbGV0IFVJQXBwbGljYXRpb246IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZChcInRmXCIpIHRmOiBFbGVtZW50UmVmO1xuICAgIHRleHRGaWVsZDogVGV4dEZpZWxkO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBoaWRlS2V5Ym9hcmQoKSB7XG4gICAgICAgIGlmIChpc0lPUykge1xuXG4gICAgICAgIC8vIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTsgLy8gZG9lc24ndCB3b3JrIG9uIGlPUyAgYnV0IHdlIGNhbiBkaXJlY3RseSBjYWxsIHRoZSBkaXNtaXNzU29mdElucHV0IGZvciB0aGUgTmF0aXZlU2NyaXB0IHZpZXdcbiAgICAgICAgdGhpcy50ZXh0RmllbGQuZm9jdXMoKTsgXG4gICAgICAgIHRoaXMudGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICAgICAgICAvLyBPUiB1c2UgbmF0aXZlIGFwcHJvYWNoZXNcblxuICAgICAgICAvLyBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLnNlbmRBY3Rpb25Ub0Zyb21Gb3JFdmVudChcbiAgICAgICAgLy8gICAgIFwicmVzaWduRmlyc3RSZXNwb25kZXJcIiwgbnVsbCwgbnVsbCwgbnVsbFxuICAgICAgICAvLyApO1xuXG4gICAgICAgIC8vIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcbiAgICAgICAgLy8gICAgICAgICAua2V5V2luZG93XG4gICAgICAgIC8vICAgICAgICAgLmVuZEVkaXRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19