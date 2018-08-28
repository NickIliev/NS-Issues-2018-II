"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var application = require("application");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        application.on(application.uncaughtErrorEvent, function (errData) {
            if (platform_1.isAndroid) {
                // For Android applications, args.android is an NativeScriptError.
                console.log(" *** NativeScriptError *** : " + errData.android);
                console.log(" *** StackTrace *** : " + errData.android.stackTrace);
                console.log(" *** nativeException *** : " + errData.android.nativeException);
            }
            else if (platform_1.isIOS) {
                // For iOS applications, args.ios is NativeScriptError.
                console.log("NativeScriptError: " + errData.ios);
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMscUNBQTRDO0FBQzVDLHlDQUEyQztBQVEzQztJQUNJO1FBQ0ksV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxPQUFPO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLGtFQUFrRTtnQkFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pGLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsdURBQXVEO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBZlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDOztPQUVXLFlBQVksQ0FnQnZCO0lBQUQsbUJBQUM7Q0FBQSxBQWhCRixJQWdCRTtBQWhCVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgYXBwbGljYXRpb24ub24oYXBwbGljYXRpb24udW5jYXVnaHRFcnJvckV2ZW50LCAoZXJyRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIE5hdGl2ZVNjcmlwdEVycm9yLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiICoqKiBOYXRpdmVTY3JpcHRFcnJvciAqKiogOiBcIiArIGVyckRhdGEuYW5kcm9pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgKioqIFN0YWNrVHJhY2UgKioqIDogXCIgKyBlcnJEYXRhLmFuZHJvaWQuc3RhY2tUcmFjZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgKioqIG5hdGl2ZUV4Y2VwdGlvbiAqKiogOiBcIiArIGVyckRhdGEuYW5kcm9pZC5uYXRpdmVFeGNlcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgTmF0aXZlU2NyaXB0RXJyb3IuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYXRpdmVTY3JpcHRFcnJvcjogXCIgKyBlcnJEYXRhLmlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gfVxuIl19