"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var utils = require("utils/utils");
var color_1 = require("color");
var frame = require("ui/frame");
var font_1 = require("ui/styling/font");
var scroll_view_1 = require("ui/scroll-view");
var sizeMap = new Map([
    [UIContentSizeCategoryExtraSmall, 0.5],
    [UIContentSizeCategorySmall, 0.7],
    [UIContentSizeCategoryMedium, 0.85],
    [UIContentSizeCategoryLarge, 1],
    [UIContentSizeCategoryExtraLarge, 1.15],
    [UIContentSizeCategoryExtraExtraLarge, 1.30],
    [UIContentSizeCategoryExtraExtraExtraLarge, 1.50],
    [UIContentSizeCategoryAccessibilityMedium, 2],
    [UIContentSizeCategoryAccessibilityLarge, 2.5],
    [UIContentSizeCategoryAccessibilityExtraLarge, 3],
    [UIContentSizeCategoryAccessibilityExtraExtraLarge, 3.5],
    [UIContentSizeCategoryAccessibilityExtraExtraExtraLarge, 4],
]);
var ignoreScale = new Set([
    "Ionicons, ionicons",
    "FontAwesome, fontawesome-webfont"
]);
var cachedFontScale = 1, isKeyboardVisible, loaderView;
function init() {
    var pageControl = UIPageControl.appearance();
    pageControl.pageIndicatorTintColor = new color_1.Color("#C4C4C4").ios;
    pageControl.currentPageIndicatorTintColor = new color_1.Color("#990000").ios;
    application.ios.addNotificationObserver(UIKeyboardDidShowNotification, function () {
        isKeyboardVisible = true;
    });
    application.ios.addNotificationObserver(UIKeyboardDidHideNotification, function () {
        isKeyboardVisible = false;
    });
}
exports.init = init;
function dismissSoftInput() {
    if (isKeyboardVisible) {
        utils.ios
            .getter(UIApplication, UIApplication.sharedApplication)
            .keyWindow
            .endEditing(true);
    }
}
exports.dismissSoftInput = dismissSoftInput;
function showLoader(message) {
    if (message === void 0) { message = "Loading..."; }
    if (loaderView) {
        return;
    }
    utils.ios.getter(UIApplication, UIApplication.sharedApplication).beginIgnoringInteractionEvents();
    var currentView = frame.topmost().ios.controller.view;
    loaderView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 90, 90));
    loaderView.center = currentView.center;
    loaderView.layer.cornerRadius = 4;
    loaderView.backgroundColor = new color_1.Color("#CC000000").ios;
    var indicator = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(0 /* WhiteLarge */);
    indicator.center = CGPointMake(45, 45);
    loaderView.addSubview(indicator);
    currentView.addSubview(loaderView);
    indicator.startAnimating();
}
exports.showLoader = showLoader;
function hideLoader() {
    if (!loaderView) {
        return;
    }
    loaderView.removeFromSuperview();
    utils.ios.getter(UIApplication, UIApplication.sharedApplication).endIgnoringInteractionEvents();
    loaderView = null;
}
exports.hideLoader = hideLoader;
var ios;
(function (ios) {
    /**
    * Controls the status bar background color.
    */
    function setStatusBarColor(color) {
        utils.ios.getter(UIApplication, UIApplication.sharedApplication)
            .valueForKey("statusBar").backgroundColor = new color_1.Color(color).ios;
    }
    ios.setStatusBarColor = setStatusBarColor;
    /**
     * Returns the calculated font scale based on the prefered content size category.
     */
    function getSystemFontScale() {
        return sizeMap.get(utils.ios
            .getter(UIApplication, UIApplication.sharedApplication)
            .preferredContentSizeCategory);
    }
    ios.getSystemFontScale = getSystemFontScale;
    /**
     * Sets the cached font scale.
     */
    function setFontScale(value) {
        cachedFontScale = value;
    }
    ios.setFontScale = setFontScale;
    /**
     * Returns the cached font scale.
     */
    function getFontScale() {
        return cachedFontScale;
    }
    ios.getFontScale = getFontScale;
    /**
    * Custom deletegate to detect key path changes in object.
    */
    var KeyPathObserver = /** @class */ (function (_super) {
        __extends(KeyPathObserver, _super);
        function KeyPathObserver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KeyPathObserver.initWithCallback = function (callback) {
            var observer = new KeyPathObserver();
            observer._callback = callback;
            return observer;
        };
        KeyPathObserver.prototype.observeValueForKeyPathOfObjectChangeContext = function (path, obj, change, context) {
            this._callback(path, obj, change, context);
        };
        return KeyPathObserver;
    }(NSObject));
    ios.KeyPathObserver = KeyPathObserver;
    /**
     * Custom deletegate to detect user initiated drag event in ScrollView.
     */
    var AppUIScrollViewDelegateImpl = /** @class */ (function (_super) {
        __extends(AppUIScrollViewDelegateImpl, _super);
        function AppUIScrollViewDelegateImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppUIScrollViewDelegateImpl_1 = AppUIScrollViewDelegateImpl;
        AppUIScrollViewDelegateImpl.initWithOriginalDelegate = function (originalDelegate) {
            var delegate = new AppUIScrollViewDelegateImpl_1();
            delegate._originalDelegate = originalDelegate;
            return delegate;
        };
        AppUIScrollViewDelegateImpl.prototype.scrollViewWillBeginDragging = function (sv) {
            var owner = this._originalDelegate._owner.get();
            if (owner) {
                owner.notify({
                    object: owner,
                    eventName: "drag",
                    scrollX: owner.horizontalOffset,
                    scrollY: owner.verticalOffset
                });
            }
        };
        AppUIScrollViewDelegateImpl.prototype.scrollViewDidScroll = function (sv) {
            this._originalDelegate.scrollViewDidScroll(sv);
        };
        var AppUIScrollViewDelegateImpl_1;
        AppUIScrollViewDelegateImpl = AppUIScrollViewDelegateImpl_1 = __decorate([
            ObjCClass(UIScrollViewDelegate)
        ], AppUIScrollViewDelegateImpl);
        return AppUIScrollViewDelegateImpl;
    }(NSObject));
    ios.AppUIScrollViewDelegateImpl = AppUIScrollViewDelegateImpl;
    /**
     * Deletegate to support wrapped text for DropDown plugin
     */
    var AppDropDownListPickerDelegateImpl = /** @class */ (function (_super) {
        __extends(AppDropDownListPickerDelegateImpl, _super);
        function AppDropDownListPickerDelegateImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppDropDownListPickerDelegateImpl_1 = AppDropDownListPickerDelegateImpl;
        AppDropDownListPickerDelegateImpl.initWithOriginalDelegate = function (originalDelegate) {
            var delegate = new AppDropDownListPickerDelegateImpl_1();
            delegate._originalDelegate = originalDelegate;
            return delegate;
        };
        AppDropDownListPickerDelegateImpl.prototype.pickerViewDidSelectRowInComponent = function (pickerView, row, component) {
            this._originalDelegate.pickerViewDidSelectRowInComponent(pickerView, row, component);
        };
        AppDropDownListPickerDelegateImpl.prototype.pickerViewRowHeightForComponent = function (pickerView, component) {
            return utils.layout.toDeviceIndependentPixels(240);
        };
        AppDropDownListPickerDelegateImpl.prototype.pickerViewViewForRowForComponentReusingView = function (pickerView, row, component, view) {
            var label = this._originalDelegate
                .pickerViewViewForRowForComponentReusingView(pickerView, row, component, view);
            label.lineBreakMode = 4 /* ByTruncatingTail */;
            label.numberOfLines = 2;
            return label;
        };
        var AppDropDownListPickerDelegateImpl_1;
        AppDropDownListPickerDelegateImpl = AppDropDownListPickerDelegateImpl_1 = __decorate([
            ObjCClass(UIPickerViewDelegate)
        ], AppDropDownListPickerDelegateImpl);
        return AppDropDownListPickerDelegateImpl;
    }(NSObject));
    ios.AppDropDownListPickerDelegateImpl = AppDropDownListPickerDelegateImpl;
})(ios = exports.ios || (exports.ios = {}));
font_1.Font.prototype.withFontSize = function (size) {
    var fontFamily = this.fontFamily;
    if (!ignoreScale.has(fontFamily)) {
        size = size * cachedFontScale;
    }
    return new font_1.Font(fontFamily, size, this.fontStyle, this.fontWeight);
};
scroll_view_1.ScrollView.prototype.originalAttachNative = scroll_view_1.ScrollView.prototype.attachNative;
scroll_view_1.ScrollView.prototype.attachNative = function () {
    this.originalAttachNative();
    var newDelegate = ios.AppUIScrollViewDelegateImpl.initWithOriginalDelegate(this._delegate);
    this._delegate = newDelegate;
    this.nativeViewProtected.delegate = newDelegate;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaGVscGVyLmlvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLWhlbHBlci5pb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMkM7QUFDM0MsbUNBQXFDO0FBQ3JDLCtCQUE4QjtBQUM5QixnQ0FBa0M7QUFDbEMsd0NBQXVDO0FBQ3ZDLDhDQUE2RDtBQUU3RCxJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBaUI7SUFDcEMsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUM7SUFDdEMsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUM7SUFDakMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUM7SUFDdkMsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUM7SUFDNUMsQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUM7SUFDakQsQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUM7SUFDOUMsQ0FBQyw0Q0FBNEMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLENBQUM7SUFDeEQsQ0FBQyxzREFBc0QsRUFBRSxDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDO0FBRUgsSUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDeEIsb0JBQW9CO0lBQ3BCLGtDQUFrQztDQUNyQyxDQUFDLENBQUM7QUFFSCxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQ25CLGlCQUEwQixFQUMxQixVQUFrQixDQUFDO0FBRXZCLFNBQWdCLElBQUk7SUFDaEIsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLFdBQVcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7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LElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzVCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDcEQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IEZvbnQgfSBmcm9tIFwidWkvc3R5bGluZy9mb250XCI7XG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcblxuY29uc3Qgc2l6ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFtcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5RXh0cmFTbWFsbCwgMC41XSxcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5U21hbGwsIDAuN10sXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeU1lZGl1bSwgMC44NV0sXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUxhcmdlLCAxXSxcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5RXh0cmFMYXJnZSwgMS4xNV0sXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUV4dHJhRXh0cmFMYXJnZSwgMS4zMF0sXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUV4dHJhRXh0cmFFeHRyYUxhcmdlLCAxLjUwXSxcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5QWNjZXNzaWJpbGl0eU1lZGl1bSwgMl0sXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUFjY2Vzc2liaWxpdHlMYXJnZSwgMi41XSxcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5QWNjZXNzaWJpbGl0eUV4dHJhTGFyZ2UsIDNdLFxuICAgIFtVSUNvbnRlbnRTaXplQ2F0ZWdvcnlBY2Nlc3NpYmlsaXR5RXh0cmFFeHRyYUxhcmdlLCAzLjVdLFxuICAgIFtVSUNvbnRlbnRTaXplQ2F0ZWdvcnlBY2Nlc3NpYmlsaXR5RXh0cmFFeHRyYUV4dHJhTGFyZ2UsIDRdLFxuXSk7XG5cbmNvbnN0IGlnbm9yZVNjYWxlID0gbmV3IFNldChbXG4gICAgXCJJb25pY29ucywgaW9uaWNvbnNcIixcbiAgICBcIkZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250XCJcbl0pO1xuXG5sZXQgY2FjaGVkRm9udFNjYWxlID0gMSxcbiAgICBpc0tleWJvYXJkVmlzaWJsZTogYm9vbGVhbixcbiAgICBsb2FkZXJWaWV3OiBVSVZpZXc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHBhZ2VDb250cm9sID0gVUlQYWdlQ29udHJvbC5hcHBlYXJhbmNlKCk7XG4gICAgcGFnZUNvbnRyb2wucGFnZUluZGljYXRvclRpbnRDb2xvciA9IG5ldyBDb2xvcihcIiNDNEM0QzRcIikuaW9zO1xuICAgIHBhZ2VDb250cm9sLmN1cnJlbnRQYWdlSW5kaWNhdG9yVGludENvbG9yID0gbmV3IENvbG9yKFwiIzk5MDAwMFwiKS5pb3M7XG5cbiAgICBhcHBsaWNhdGlvbi5pb3MuYWRkTm90aWZpY2F0aW9uT2JzZXJ2ZXIoVUlLZXlib2FyZERpZFNob3dOb3RpZmljYXRpb24sICgpID0+IHtcbiAgICAgICAgaXNLZXlib2FyZFZpc2libGUgPSB0cnVlO1xuICAgIH0pO1xuICAgIGFwcGxpY2F0aW9uLmlvcy5hZGROb3RpZmljYXRpb25PYnNlcnZlcihVSUtleWJvYXJkRGlkSGlkZU5vdGlmaWNhdGlvbiwgKCkgPT4ge1xuICAgICAgICBpc0tleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzbWlzc1NvZnRJbnB1dCgpIHtcbiAgICBpZiAoaXNLZXlib2FyZFZpc2libGUpIHtcbiAgICAgICAgdXRpbHMuaW9zXG4gICAgICAgICAgICAuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXG4gICAgICAgICAgICAua2V5V2luZG93XG4gICAgICAgICAgICAuZW5kRWRpdGluZyh0cnVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TG9hZGVyKG1lc3NhZ2U6IHN0cmluZyA9IFwiTG9hZGluZy4uLlwiKSB7XG4gICAgaWYgKGxvYWRlclZpZXcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuYmVnaW5JZ25vcmluZ0ludGVyYWN0aW9uRXZlbnRzKCk7XG5cbiAgICBjb25zdCBjdXJyZW50VmlldyA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlci52aWV3O1xuICAgIGxvYWRlclZpZXcgPSBVSVZpZXcuYWxsb2MoKS5pbml0V2l0aEZyYW1lKENHUmVjdE1ha2UoMCwgMCwgOTAsIDkwKSk7XG4gICAgbG9hZGVyVmlldy5jZW50ZXIgPSBjdXJyZW50Vmlldy5jZW50ZXI7XG4gICAgbG9hZGVyVmlldy5sYXllci5jb3JuZXJSYWRpdXMgPSA0O1xuICAgIGxvYWRlclZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI0NDMDAwMDAwXCIpLmlvcztcblxuICAgIGNvbnN0IGluZGljYXRvciA9IFVJQWN0aXZpdHlJbmRpY2F0b3JWaWV3LmFsbG9jKCkuaW5pdFdpdGhBY3Rpdml0eUluZGljYXRvclN0eWxlKFVJQWN0aXZpdHlJbmRpY2F0b3JWaWV3U3R5bGUuV2hpdGVMYXJnZSk7XG4gICAgaW5kaWNhdG9yLmNlbnRlciA9IENHUG9pbnRNYWtlKDQ1LCA0NSk7XG5cbiAgICBsb2FkZXJWaWV3LmFkZFN1YnZpZXcoaW5kaWNhdG9yKTtcbiAgICBjdXJyZW50Vmlldy5hZGRTdWJ2aWV3KGxvYWRlclZpZXcpO1xuXG4gICAgaW5kaWNhdG9yLnN0YXJ0QW5pbWF0aW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xuICAgIGlmICghbG9hZGVyVmlldykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9hZGVyVmlldy5yZW1vdmVGcm9tU3VwZXJ2aWV3KCk7XG4gICAgdXRpbHMuaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKS5lbmRJZ25vcmluZ0ludGVyYWN0aW9uRXZlbnRzKCk7XG5cbiAgICBsb2FkZXJWaWV3ID0gbnVsbDtcbn1cblxuZXhwb3J0IG1vZHVsZSBpb3Mge1xuXG4gICAgLyoqXG4gICAgKiBDb250cm9scyB0aGUgc3RhdHVzIGJhciBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgKDxVSVZpZXc+dXRpbHMuaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKVxuICAgICAgICAgICAgLnZhbHVlRm9yS2V5KFwic3RhdHVzQmFyXCIpKS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoY29sb3IpLmlvcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGZvbnQgc2NhbGUgYmFzZWQgb24gdGhlIHByZWZlcmVkIGNvbnRlbnQgc2l6ZSBjYXRlZ29yeS5cbiAgICAgKi9cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0U3lzdGVtRm9udFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBzaXplTWFwLmdldChcbiAgICAgICAgICAgIHV0aWxzLmlvc1xuICAgICAgICAgICAgICAgIC5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcbiAgICAgICAgICAgICAgICAucHJlZmVycmVkQ29udGVudFNpemVDYXRlZ29yeVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNhY2hlZCBmb250IHNjYWxlLlxuICAgICAqL1xuICAgIGV4cG9ydCBmdW5jdGlvbiBzZXRGb250U2NhbGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBjYWNoZWRGb250U2NhbGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWNoZWQgZm9udCBzY2FsZS5cbiAgICAgKi9cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Rm9udFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBjYWNoZWRGb250U2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDdXN0b20gZGVsZXRlZ2F0ZSB0byBkZXRlY3Qga2V5IHBhdGggY2hhbmdlcyBpbiBvYmplY3QuXG4gICAgKi9cbiAgICBleHBvcnQgY2xhc3MgS2V5UGF0aE9ic2VydmVyIGV4dGVuZHMgTlNPYmplY3Qge1xuXG4gICAgICAgIHByaXZhdGUgX2NhbGxiYWNrOiAocGF0aDogc3RyaW5nLCBvYmo6IE9iamVjdCwgY2hhbmdlOiBOU0RpY3Rpb25hcnk8YW55LCBhbnk+LCBjb250ZXh0OiBhbnkpID0+IHZvaWQ7XG5cbiAgICAgICAgc3RhdGljIGluaXRXaXRoQ2FsbGJhY2soXG4gICAgICAgICAgICBjYWxsYmFjazogKHBhdGg6IHN0cmluZywgb2JqOiBPYmplY3QsIGNoYW5nZTogTlNEaWN0aW9uYXJ5PGFueSwgYW55PiwgY29udGV4dDogYW55KSA9PiB2b2lkXG4gICAgICAgICk6IEtleVBhdGhPYnNlcnZlciB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBLZXlQYXRoT2JzZXJ2ZXIoKTtcbiAgICAgICAgICAgIG9ic2VydmVyLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVZhbHVlRm9yS2V5UGF0aE9mT2JqZWN0Q2hhbmdlQ29udGV4dChwYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICBvYmo6IE9iamVjdCwgY2hhbmdlOiBOU0RpY3Rpb25hcnk8YW55LCBhbnk+LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKHBhdGgsIG9iaiwgY2hhbmdlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBkZWxldGVnYXRlIHRvIGRldGVjdCB1c2VyIGluaXRpYXRlZCBkcmFnIGV2ZW50IGluIFNjcm9sbFZpZXcuXG4gICAgICovXG4gICAgQE9iakNDbGFzcyhVSVNjcm9sbFZpZXdEZWxlZ2F0ZSlcbiAgICBleHBvcnQgY2xhc3MgQXBwVUlTY3JvbGxWaWV3RGVsZWdhdGVJbXBsIGV4dGVuZHMgTlNPYmplY3QgaW1wbGVtZW50cyBVSVNjcm9sbFZpZXdEZWxlZ2F0ZSB7XG5cbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luYWxEZWxlZ2F0ZTogVUlTY3JvbGxWaWV3RGVsZWdhdGU7XG5cbiAgICAgICAgc3RhdGljIGluaXRXaXRoT3JpZ2luYWxEZWxlZ2F0ZShvcmlnaW5hbERlbGVnYXRlOiBVSVNjcm9sbFZpZXdEZWxlZ2F0ZSk6IEFwcFVJU2Nyb2xsVmlld0RlbGVnYXRlSW1wbCB7XG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IG5ldyBBcHBVSVNjcm9sbFZpZXdEZWxlZ2F0ZUltcGwoKTtcbiAgICAgICAgICAgIGRlbGVnYXRlLl9vcmlnaW5hbERlbGVnYXRlID0gb3JpZ2luYWxEZWxlZ2F0ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbFZpZXdXaWxsQmVnaW5EcmFnZ2luZyhzdjogVUlTY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICBjb25zdCBvd25lciA9ICg8V2Vha1JlZjxTY3JvbGxWaWV3Pj4oPGFueT50aGlzLl9vcmlnaW5hbERlbGVnYXRlKS5fb3duZXIpLmdldCgpO1xuICAgICAgICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgICAgICAgICAgb3duZXIubm90aWZ5KDxTY3JvbGxFdmVudERhdGE+e1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG93bmVyLFxuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IFwiZHJhZ1wiLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBvd25lci5ob3Jpem9udGFsT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBvd25lci52ZXJ0aWNhbE9mZnNldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsVmlld0RpZFNjcm9sbChzdjogVUlTY3JvbGxWaWV3KTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5hbERlbGVnYXRlLnNjcm9sbFZpZXdEaWRTY3JvbGwoc3YpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlZ2F0ZSB0byBzdXBwb3J0IHdyYXBwZWQgdGV4dCBmb3IgRHJvcERvd24gcGx1Z2luXG4gICAgICovXG4gICAgQE9iakNDbGFzcyhVSVBpY2tlclZpZXdEZWxlZ2F0ZSlcbiAgICBleHBvcnQgY2xhc3MgQXBwRHJvcERvd25MaXN0UGlja2VyRGVsZWdhdGVJbXBsIGV4dGVuZHMgTlNPYmplY3QgaW1wbGVtZW50cyBVSVBpY2tlclZpZXdEZWxlZ2F0ZSB7XG5cbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luYWxEZWxlZ2F0ZTogVUlQaWNrZXJWaWV3RGVsZWdhdGU7XG5cbiAgICAgICAgc3RhdGljIGluaXRXaXRoT3JpZ2luYWxEZWxlZ2F0ZShvcmlnaW5hbERlbGVnYXRlOiBVSVBpY2tlclZpZXdEZWxlZ2F0ZSk6IEFwcERyb3BEb3duTGlzdFBpY2tlckRlbGVnYXRlSW1wbCB7XG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IG5ldyBBcHBEcm9wRG93bkxpc3RQaWNrZXJEZWxlZ2F0ZUltcGwoKTtcbiAgICAgICAgICAgIGRlbGVnYXRlLl9vcmlnaW5hbERlbGVnYXRlID0gb3JpZ2luYWxEZWxlZ2F0ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBpY2tlclZpZXdEaWRTZWxlY3RSb3dJbkNvbXBvbmVudChwaWNrZXJWaWV3OiBVSVBpY2tlclZpZXcsIHJvdzogbnVtYmVyLCBjb21wb25lbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxEZWxlZ2F0ZS5waWNrZXJWaWV3RGlkU2VsZWN0Um93SW5Db21wb25lbnQocGlja2VyVmlldywgcm93LCBjb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGlja2VyVmlld1Jvd0hlaWdodEZvckNvbXBvbmVudChwaWNrZXJWaWV3OiBVSVBpY2tlclZpZXcsIGNvbXBvbmVudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5sYXlvdXQudG9EZXZpY2VJbmRlcGVuZGVudFBpeGVscygyNDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcGlja2VyVmlld1ZpZXdGb3JSb3dGb3JDb21wb25lbnRSZXVzaW5nVmlldyhwaWNrZXJWaWV3OiBVSVBpY2tlclZpZXcsIHJvdzogbnVtYmVyLCBjb21wb25lbnQ6IG51bWJlciwgdmlldzogVUlWaWV3KTogVUlWaWV3IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gPFVJTGFiZWw+dGhpcy5fb3JpZ2luYWxEZWxlZ2F0ZVxuICAgICAgICAgICAgICAgIC5waWNrZXJWaWV3Vmlld0ZvclJvd0ZvckNvbXBvbmVudFJldXNpbmdWaWV3KHBpY2tlclZpZXcsIHJvdywgY29tcG9uZW50LCB2aWV3KTtcblxuICAgICAgICAgICAgbGFiZWwubGluZUJyZWFrTW9kZSA9IE5TTGluZUJyZWFrTW9kZS5CeVRydW5jYXRpbmdUYWlsO1xuICAgICAgICAgICAgbGFiZWwubnVtYmVyT2ZMaW5lcyA9IDI7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkZvbnQucHJvdG90eXBlLndpdGhGb250U2l6ZSA9IGZ1bmN0aW9uIChzaXplOiBudW1iZXIpOiBGb250IHtcbiAgICBjb25zdCBmb250RmFtaWx5ID0gdGhpcy5mb250RmFtaWx5O1xuICAgIGlmICghaWdub3JlU2NhbGUuaGFzKGZvbnRGYW1pbHkpKSB7XG4gICAgICAgIHNpemUgPSBzaXplICogY2FjaGVkRm9udFNjYWxlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvbnQoZm9udEZhbWlseSwgc2l6ZSwgdGhpcy5mb250U3R5bGUsIHRoaXMuZm9udFdlaWdodCk7XG59O1xuXG4oPGFueT5TY3JvbGxWaWV3LnByb3RvdHlwZSkub3JpZ2luYWxBdHRhY2hOYXRpdmUgPSAoPGFueT5TY3JvbGxWaWV3LnByb3RvdHlwZSkuYXR0YWNoTmF0aXZlO1xuKDxhbnk+U2Nyb2xsVmlldy5wcm90b3R5cGUpLmF0dGFjaE5hdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9yaWdpbmFsQXR0YWNoTmF0aXZlKCk7XG4gICAgY29uc3QgbmV3RGVsZWdhdGUgPSBpb3MuQXBwVUlTY3JvbGxWaWV3RGVsZWdhdGVJbXBsLmluaXRXaXRoT3JpZ2luYWxEZWxlZ2F0ZSh0aGlzLl9kZWxlZ2F0ZSk7XG4gICAgdGhpcy5fZGVsZWdhdGUgPSBuZXdEZWxlZ2F0ZTtcbiAgICB0aGlzLm5hdGl2ZVZpZXdQcm90ZWN0ZWQuZGVsZWdhdGUgPSBuZXdEZWxlZ2F0ZTtcbn07Il19