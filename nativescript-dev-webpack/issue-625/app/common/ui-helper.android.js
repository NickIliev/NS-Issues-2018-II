"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var utils = require("utils/utils");
var frame = require("ui/frame");
var view_1 = require("ui/core/view");
var loaderView;
function onBackButtonTap(args) {
    var page = frame.topmost().currentPage;
    if (page.hasListeners(application.AndroidApplication.activityBackPressedEvent)) {
        args.cancel = true;
        page.notify({
            eventName: application.AndroidApplication.activityBackPressedEvent,
            object: page
        });
    }
}
function init() {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, onBackButtonTap, this);
    frame.Frame.defaultTransition = { name: "slideLeft" };
}
exports.init = init;
function dismissSoftInput() {
    utils.ad.dismissSoftInput();
}
exports.dismissSoftInput = dismissSoftInput;
function showLoader(message) {
    if (message === void 0) { message = "Loading..."; }
    if (loaderView) {
        return;
    }
    loaderView = android.app.ProgressDialog.show(application.android.foregroundActivity, "", message);
}
exports.showLoader = showLoader;
function hideLoader() {
    if (!loaderView) {
        return;
    }
    loaderView.dismiss();
    loaderView = null;
}
exports.hideLoader = hideLoader;
var ad;
(function (ad) {
    /**
     * Helps to remove focus from `TextField` in Android
     */
    var AutoFocusView = /** @class */ (function (_super) {
        __extends(AutoFocusView, _super);
        function AutoFocusView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AutoFocusView.prototype.createNativeView = function () {
            var linearLayout = new android.widget.LinearLayout(this._context);
            linearLayout.setFocusableInTouchMode(true);
            linearLayout.setFocusable(true);
            return linearLayout;
        };
        return AutoFocusView;
    }(view_1.View));
    ad.AutoFocusView = AutoFocusView;
})(ad = exports.ad || (exports.ad = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaGVscGVyLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1aS1oZWxwZXIuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxtQ0FBcUM7QUFDckMsZ0NBQWtDO0FBQ2xDLHFDQUFvQztBQUVwQyxJQUFJLFVBQXNDLENBQUM7QUFFM0MseUJBQXlCLElBQXFEO0lBQzFFLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNSLFNBQVMsRUFBRSxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCO1lBQ2xFLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUFFRDtJQUNJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkcsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUMxRCxDQUFDO0FBSEQsb0JBR0M7QUFFRDtJQUNJLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxvQkFBMkIsT0FBOEI7SUFBOUIsd0JBQUEsRUFBQSxzQkFBOEI7SUFDckQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFFRCxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RHLENBQUM7QUFORCxnQ0FNQztBQUVEO0lBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxnQ0FPQztBQUVELElBQWMsRUFBRSxDQVlmO0FBWkQsV0FBYyxFQUFFO0lBQ1o7O09BRUc7SUFDSDtRQUFtQyxpQ0FBSTtRQUF2Qzs7UUFPQSxDQUFDO1FBTkcsd0NBQWdCLEdBQWhCO1lBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBUEQsQ0FBbUMsV0FBSSxHQU90QztJQVBZLGdCQUFhLGdCQU96QixDQUFBO0FBQ0wsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcbmxldCBsb2FkZXJWaWV3OiBhbmRyb2lkLmFwcC5Qcm9ncmVzc0RpYWxvZztcclxuXHJcbmZ1bmN0aW9uIG9uQmFja0J1dHRvblRhcChhcmdzOiBhcHBsaWNhdGlvbi5BbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IGZyYW1lLnRvcG1vc3QoKS5jdXJyZW50UGFnZTtcclxuICAgIGlmIChwYWdlLmhhc0xpc3RlbmVycyhhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50KSkge1xyXG4gICAgICAgIGFyZ3MuY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICBwYWdlLm5vdGlmeSh7XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCxcclxuICAgICAgICAgICAgb2JqZWN0OiBwYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBvbkJhY2tCdXR0b25UYXAsIHRoaXMpO1xyXG4gICAgZnJhbWUuRnJhbWUuZGVmYXVsdFRyYW5zaXRpb24gPSB7IG5hbWU6IFwic2xpZGVMZWZ0XCIgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc21pc3NTb2Z0SW5wdXQoKSB7XHJcbiAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKG1lc3NhZ2U6IHN0cmluZyA9IFwiTG9hZGluZy4uLlwiKSB7XHJcbiAgICBpZiAobG9hZGVyVmlldykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkZXJWaWV3ID0gYW5kcm9pZC5hcHAuUHJvZ3Jlc3NEaWFsb2cuc2hvdyhhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSwgXCJcIiwgbWVzc2FnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xyXG4gICAgaWYgKCFsb2FkZXJWaWV3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlclZpZXcuZGlzbWlzcygpO1xyXG4gICAgbG9hZGVyVmlldyA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBtb2R1bGUgYWQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwcyB0byByZW1vdmUgZm9jdXMgZnJvbSBgVGV4dEZpZWxkYCBpbiBBbmRyb2lkXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBBdXRvRm9jdXNWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICAgICAgY3JlYXRlTmF0aXZlVmlldygpIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZWFyTGF5b3V0ID0gbmV3IGFuZHJvaWQud2lkZ2V0LkxpbmVhckxheW91dCh0aGlzLl9jb250ZXh0KTtcclxuICAgICAgICAgICAgbGluZWFyTGF5b3V0LnNldEZvY3VzYWJsZUluVG91Y2hNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBsaW5lYXJMYXlvdXQuc2V0Rm9jdXNhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGluZWFyTGF5b3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==