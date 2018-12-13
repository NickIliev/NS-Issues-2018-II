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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaGVscGVyLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1aS1oZWxwZXIuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxtQ0FBcUM7QUFDckMsZ0NBQWtDO0FBQ2xDLHFDQUFvQztBQU1wQyxJQUFJLFVBQXNDLENBQUM7QUFDM0MsU0FBUyxlQUFlLENBQUMsSUFBcUQ7SUFDMUUsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLEVBQUU7UUFDNUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNSLFNBQVMsRUFBRSxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCO1lBQ2xFLE1BQU0sRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDO0FBRUQsU0FBZ0IsSUFBSTtJQUNoQixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZHLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7QUFDMUQsQ0FBQztBQUhELG9CQUdDO0FBRUQsU0FBZ0IsZ0JBQWdCO0lBQzVCLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixVQUFVLENBQUMsT0FBOEI7SUFBOUIsd0JBQUEsRUFBQSxzQkFBOEI7SUFDckQsSUFBSSxVQUFVLEVBQUU7UUFDWixPQUFPO0tBQ1Y7SUFFRCxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RHLENBQUM7QUFORCxnQ0FNQztBQUVELFNBQWdCLFVBQVU7SUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNiLE9BQU87S0FDVjtJQUVELFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLENBQUM7QUFQRCxnQ0FPQztBQUVELElBQWMsRUFBRSxDQVlmO0FBWkQsV0FBYyxFQUFFO0lBQ1o7O09BRUc7SUFDSDtRQUFtQyxpQ0FBSTtRQUF2Qzs7UUFPQSxDQUFDO1FBTkcsd0NBQWdCLEdBQWhCO1lBQ0ksSUFBTSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEUsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FBQyxBQVBELENBQW1DLFdBQUksR0FPdEM7SUFQWSxnQkFBYSxnQkFPekIsQ0FBQTtBQUNMLENBQUMsRUFaYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFZZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5cbmV4cG9ydCBtb2R1bGUgaW9zIHtcblxufVxuXG5sZXQgbG9hZGVyVmlldzogYW5kcm9pZC5hcHAuUHJvZ3Jlc3NEaWFsb2c7XG5mdW5jdGlvbiBvbkJhY2tCdXR0b25UYXAoYXJnczogYXBwbGljYXRpb24uQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gZnJhbWUudG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xuICAgIGlmIChwYWdlLmhhc0xpc3RlbmVycyhhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50KSkge1xuICAgICAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gICAgICAgIHBhZ2Uubm90aWZ5KHtcbiAgICAgICAgICAgIGV2ZW50TmFtZTogYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCxcbiAgICAgICAgICAgIG9iamVjdDogcGFnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgb25CYWNrQnV0dG9uVGFwLCB0aGlzKTtcbiAgICBmcmFtZS5GcmFtZS5kZWZhdWx0VHJhbnNpdGlvbiA9IHsgbmFtZTogXCJzbGlkZUxlZnRcIiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzbWlzc1NvZnRJbnB1dCgpIHtcbiAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKG1lc3NhZ2U6IHN0cmluZyA9IFwiTG9hZGluZy4uLlwiKSB7XG4gICAgaWYgKGxvYWRlclZpZXcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvYWRlclZpZXcgPSBhbmRyb2lkLmFwcC5Qcm9ncmVzc0RpYWxvZy5zaG93KGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LCBcIlwiLCBtZXNzYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XG4gICAgaWYgKCFsb2FkZXJWaWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZXJWaWV3LmRpc21pc3MoKTtcbiAgICBsb2FkZXJWaWV3ID0gbnVsbDtcbn1cblxuZXhwb3J0IG1vZHVsZSBhZCB7XG4gICAgLyoqXG4gICAgICogSGVscHMgdG8gcmVtb3ZlIGZvY3VzIGZyb20gYFRleHRGaWVsZGAgaW4gQW5kcm9pZFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBBdXRvRm9jdXNWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgICAgIGNyZWF0ZU5hdGl2ZVZpZXcoKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lYXJMYXlvdXQgPSBuZXcgYW5kcm9pZC53aWRnZXQuTGluZWFyTGF5b3V0KHRoaXMuX2NvbnRleHQpO1xuICAgICAgICAgICAgbGluZWFyTGF5b3V0LnNldEZvY3VzYWJsZUluVG91Y2hNb2RlKHRydWUpO1xuICAgICAgICAgICAgbGluZWFyTGF5b3V0LnNldEZvY3VzYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBsaW5lYXJMYXlvdXQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19