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
        AppUIScrollViewDelegateImpl = AppUIScrollViewDelegateImpl_1 = __decorate([
            ObjCClass(UIScrollViewDelegate)
        ], AppUIScrollViewDelegateImpl);
        return AppUIScrollViewDelegateImpl;
        var AppUIScrollViewDelegateImpl_1;
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
        AppDropDownListPickerDelegateImpl = AppDropDownListPickerDelegateImpl_1 = __decorate([
            ObjCClass(UIPickerViewDelegate)
        ], AppDropDownListPickerDelegateImpl);
        return AppDropDownListPickerDelegateImpl;
        var AppDropDownListPickerDelegateImpl_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktaGVscGVyLmlvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLWhlbHBlci5pb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMkM7QUFDM0MsbUNBQXFDO0FBQ3JDLCtCQUE4QjtBQUM5QixnQ0FBa0M7QUFDbEMsd0NBQXVDO0FBQ3ZDLDhDQUE2RDtBQUU3RCxJQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBaUI7SUFDcEMsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUM7SUFDdEMsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUM7SUFDakMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUM7SUFDdkMsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUM7SUFDNUMsQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUM7SUFDakQsQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLENBQUM7SUFDOUMsQ0FBQyw0Q0FBNEMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLENBQUM7SUFDeEQsQ0FBQyxzREFBc0QsRUFBRSxDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDO0FBRUgsSUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDeEIsb0JBQW9CO0lBQ3BCLGtDQUFrQztDQUNyQyxDQUFDLENBQUM7QUFFSCxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQ25CLGlCQUEwQixFQUMxQixVQUFrQixDQUFDO0FBRXZCO0lBQ0ksSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9DLFdBQVcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxD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QW9CLEdBQVMsd0JBQVUsQ0FBQyxTQUFVLENBQUMsWUFBWSxDQUFDO0FBQ3RGLHdCQUFVLENBQUMsU0FBVSxDQUFDLFlBQVksR0FBRztJQUN2QyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM1QixJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsMkJBQTJCLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdGLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IEZvbnQgfSBmcm9tIFwidWkvc3R5bGluZy9mb250XCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xyXG5cclxuY29uc3Qgc2l6ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFtcclxuICAgIFtVSUNvbnRlbnRTaXplQ2F0ZWdvcnlFeHRyYVNtYWxsLCAwLjVdLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeVNtYWxsLCAwLjddLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeU1lZGl1bSwgMC44NV0sXHJcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5TGFyZ2UsIDFdLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUV4dHJhTGFyZ2UsIDEuMTVdLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUV4dHJhRXh0cmFMYXJnZSwgMS4zMF0sXHJcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5RXh0cmFFeHRyYUV4dHJhTGFyZ2UsIDEuNTBdLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUFjY2Vzc2liaWxpdHlNZWRpdW0sIDJdLFxyXG4gICAgW1VJQ29udGVudFNpemVDYXRlZ29yeUFjY2Vzc2liaWxpdHlMYXJnZSwgMi41XSxcclxuICAgIFtVSUNvbnRlbnRTaXplQ2F0ZWdvcnlBY2Nlc3NpYmlsaXR5RXh0cmFMYXJnZSwgM10sXHJcbiAgICBbVUlDb250ZW50U2l6ZUNhdGVnb3J5QWNjZXNzaWJpbGl0eUV4dHJhRXh0cmFMYXJnZSwgMy41XSxcclxuICAgIFtVSUNvbnRlbnRTaXplQ2F0ZWdvcnlBY2Nlc3NpYmlsaXR5RXh0cmFFeHRyYUV4dHJhTGFyZ2UsIDRdLFxyXG5dKTtcclxuXHJcbmNvbnN0IGlnbm9yZVNjYWxlID0gbmV3IFNldChbXHJcbiAgICBcIklvbmljb25zLCBpb25pY29uc1wiLFxyXG4gICAgXCJGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udFwiXHJcbl0pO1xyXG5cclxubGV0IGNhY2hlZEZvbnRTY2FsZSA9IDEsXHJcbiAgICBpc0tleWJvYXJkVmlzaWJsZTogYm9vbGVhbixcclxuICAgIGxvYWRlclZpZXc6IFVJVmlldztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgcGFnZUNvbnRyb2wgPSBVSVBhZ2VDb250cm9sLmFwcGVhcmFuY2UoKTtcclxuICAgIHBhZ2VDb250cm9sLnBhZ2VJbmRpY2F0b3JUaW50Q29sb3IgPSBuZXcgQ29sb3IoXCIjQzRDNEM0XCIpLmlvcztcclxuICAgIHBhZ2VDb250cm9sLmN1cnJlbnRQYWdlSW5kaWNhdG9yVGludENvbG9yID0gbmV3IENvbG9yKFwiIzk5MDAwMFwiKS5pb3M7XHJcblxyXG4gICAgYXBwbGljYXRpb24uaW9zLmFkZE5vdGlmaWNhdGlvbk9ic2VydmVyKFVJS2V5Ym9hcmREaWRTaG93Tm90aWZpY2F0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgaXNLZXlib2FyZFZpc2libGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBhcHBsaWNhdGlvbi5pb3MuYWRkTm90aWZpY2F0aW9uT2JzZXJ2ZXIoVUlLZXlib2FyZERpZEhpZGVOb3RpZmljYXRpb24sICgpID0+IHtcclxuICAgICAgICBpc0tleWJvYXJkVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNtaXNzU29mdElucHV0KCkge1xyXG4gICAgaWYgKGlzS2V5Ym9hcmRWaXNpYmxlKSB7XHJcbiAgICAgICAgdXRpbHMuaW9zXHJcbiAgICAgICAgICAgIC5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcclxuICAgICAgICAgICAgLmtleVdpbmRvd1xyXG4gICAgICAgICAgICAuZW5kRWRpdGluZyh0cnVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkZXIobWVzc2FnZTogc3RyaW5nID0gXCJMb2FkaW5nLi4uXCIpIHtcclxuICAgIGlmIChsb2FkZXJWaWV3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuYmVnaW5JZ25vcmluZ0ludGVyYWN0aW9uRXZlbnRzKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFZpZXcgPSBmcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIudmlldztcclxuICAgIGxvYWRlclZpZXcgPSBVSVZpZXcuYWxsb2MoKS5pbml0V2l0aEZyYW1lKENHUmVjdE1ha2UoMCwgMCwgOTAsIDkwKSk7XHJcbiAgICBsb2FkZXJWaWV3LmNlbnRlciA9IGN1cnJlbnRWaWV3LmNlbnRlcjtcclxuICAgIGxvYWRlclZpZXcubGF5ZXIuY29ybmVyUmFkaXVzID0gNDtcclxuICAgIGxvYWRlclZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI0NDMDAwMDAwXCIpLmlvcztcclxuXHJcbiAgICBjb25zdCBpbmRpY2F0b3IgPSBVSUFjdGl2aXR5SW5kaWNhdG9yVmlldy5hbGxvYygpLmluaXRXaXRoQWN0aXZpdHlJbmRpY2F0b3JTdHlsZShVSUFjdGl2aXR5SW5kaWNhdG9yVmlld1N0eWxlLldoaXRlTGFyZ2UpO1xyXG4gICAgaW5kaWNhdG9yLmNlbnRlciA9IENHUG9pbnRNYWtlKDQ1LCA0NSk7XHJcblxyXG4gICAgbG9hZGVyVmlldy5hZGRTdWJ2aWV3KGluZGljYXRvcik7XHJcbiAgICBjdXJyZW50Vmlldy5hZGRTdWJ2aWV3KGxvYWRlclZpZXcpO1xyXG5cclxuICAgIGluZGljYXRvci5zdGFydEFuaW1hdGluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWRlcigpIHtcclxuICAgIGlmICghbG9hZGVyVmlldykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkZXJWaWV3LnJlbW92ZUZyb21TdXBlcnZpZXcoKTtcclxuICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuZW5kSWdub3JpbmdJbnRlcmFjdGlvbkV2ZW50cygpO1xyXG5cclxuICAgIGxvYWRlclZpZXcgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgbW9kdWxlIGlvcyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENvbnRyb2xzIHRoZSBzdGF0dXMgYmFyIGJhY2tncm91bmQgY29sb3IuXHJcbiAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXR1c0JhckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICAoPFVJVmlldz51dGlscy5pb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXHJcbiAgICAgICAgICAgIC52YWx1ZUZvcktleShcInN0YXR1c0JhclwiKSkuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKGNvbG9yKS5pb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWxjdWxhdGVkIGZvbnQgc2NhbGUgYmFzZWQgb24gdGhlIHByZWZlcmVkIGNvbnRlbnQgc2l6ZSBjYXRlZ29yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUZvbnRTY2FsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBzaXplTWFwLmdldChcclxuICAgICAgICAgICAgdXRpbHMuaW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXHJcbiAgICAgICAgICAgICAgICAucHJlZmVycmVkQ29udGVudFNpemVDYXRlZ29yeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjYWNoZWQgZm9udCBzY2FsZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNldEZvbnRTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgY2FjaGVkRm9udFNjYWxlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWNoZWQgZm9udCBzY2FsZS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnRTY2FsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWRGb250U2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEN1c3RvbSBkZWxldGVnYXRlIHRvIGRldGVjdCBrZXkgcGF0aCBjaGFuZ2VzIGluIG9iamVjdC5cclxuICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgS2V5UGF0aE9ic2VydmVyIGV4dGVuZHMgTlNPYmplY3Qge1xyXG5cclxuICAgICAgICBwcml2YXRlIF9jYWxsYmFjazogKHBhdGg6IHN0cmluZywgb2JqOiBPYmplY3QsIGNoYW5nZTogTlNEaWN0aW9uYXJ5PGFueSwgYW55PiwgY29udGV4dDogYW55KSA9PiB2b2lkO1xyXG5cclxuICAgICAgICBzdGF0aWMgaW5pdFdpdGhDYWxsYmFjayhcclxuICAgICAgICAgICAgY2FsbGJhY2s6IChwYXRoOiBzdHJpbmcsIG9iajogT2JqZWN0LCBjaGFuZ2U6IE5TRGljdGlvbmFyeTxhbnksIGFueT4sIGNvbnRleHQ6IGFueSkgPT4gdm9pZFxyXG4gICAgICAgICk6IEtleVBhdGhPYnNlcnZlciB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEtleVBhdGhPYnNlcnZlcigpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JzZXJ2ZVZhbHVlRm9yS2V5UGF0aE9mT2JqZWN0Q2hhbmdlQ29udGV4dChwYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIG9iajogT2JqZWN0LCBjaGFuZ2U6IE5TRGljdGlvbmFyeTxhbnksIGFueT4sIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayhwYXRoLCBvYmosIGNoYW5nZSwgY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3VzdG9tIGRlbGV0ZWdhdGUgdG8gZGV0ZWN0IHVzZXIgaW5pdGlhdGVkIGRyYWcgZXZlbnQgaW4gU2Nyb2xsVmlldy5cclxuICAgICAqL1xyXG4gICAgQE9iakNDbGFzcyhVSVNjcm9sbFZpZXdEZWxlZ2F0ZSlcclxuICAgIGV4cG9ydCBjbGFzcyBBcHBVSVNjcm9sbFZpZXdEZWxlZ2F0ZUltcGwgZXh0ZW5kcyBOU09iamVjdCBpbXBsZW1lbnRzIFVJU2Nyb2xsVmlld0RlbGVnYXRlIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfb3JpZ2luYWxEZWxlZ2F0ZTogVUlTY3JvbGxWaWV3RGVsZWdhdGU7XHJcblxyXG4gICAgICAgIHN0YXRpYyBpbml0V2l0aE9yaWdpbmFsRGVsZWdhdGUob3JpZ2luYWxEZWxlZ2F0ZTogVUlTY3JvbGxWaWV3RGVsZWdhdGUpOiBBcHBVSVNjcm9sbFZpZXdEZWxlZ2F0ZUltcGwge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IG5ldyBBcHBVSVNjcm9sbFZpZXdEZWxlZ2F0ZUltcGwoKTtcclxuICAgICAgICAgICAgZGVsZWdhdGUuX29yaWdpbmFsRGVsZWdhdGUgPSBvcmlnaW5hbERlbGVnYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxWaWV3V2lsbEJlZ2luRHJhZ2dpbmcoc3Y6IFVJU2Nyb2xsVmlldykge1xyXG4gICAgICAgICAgICBjb25zdCBvd25lciA9ICg8V2Vha1JlZjxTY3JvbGxWaWV3Pj4oPGFueT50aGlzLl9vcmlnaW5hbERlbGVnYXRlKS5fb3duZXIpLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAob3duZXIpIHtcclxuICAgICAgICAgICAgICAgIG93bmVyLm5vdGlmeSg8U2Nyb2xsRXZlbnREYXRhPntcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogXCJkcmFnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogb3duZXIuaG9yaXpvbnRhbE9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBvd25lci52ZXJ0aWNhbE9mZnNldFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFZpZXdEaWRTY3JvbGwoc3Y6IFVJU2Nyb2xsVmlldyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5hbERlbGVnYXRlLnNjcm9sbFZpZXdEaWRTY3JvbGwoc3YpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZWdhdGUgdG8gc3VwcG9ydCB3cmFwcGVkIHRleHQgZm9yIERyb3BEb3duIHBsdWdpblxyXG4gICAgICovXHJcbiAgICBAT2JqQ0NsYXNzKFVJUGlja2VyVmlld0RlbGVnYXRlKVxyXG4gICAgZXhwb3J0IGNsYXNzIEFwcERyb3BEb3duTGlzdFBpY2tlckRlbGVnYXRlSW1wbCBleHRlbmRzIE5TT2JqZWN0IGltcGxlbWVudHMgVUlQaWNrZXJWaWV3RGVsZWdhdGUge1xyXG5cclxuICAgICAgICBwcml2YXRlIF9vcmlnaW5hbERlbGVnYXRlOiBVSVBpY2tlclZpZXdEZWxlZ2F0ZTtcclxuXHJcbiAgICAgICAgc3RhdGljIGluaXRXaXRoT3JpZ2luYWxEZWxlZ2F0ZShvcmlnaW5hbERlbGVnYXRlOiBVSVBpY2tlclZpZXdEZWxlZ2F0ZSk6IEFwcERyb3BEb3duTGlzdFBpY2tlckRlbGVnYXRlSW1wbCB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGVnYXRlID0gbmV3IEFwcERyb3BEb3duTGlzdFBpY2tlckRlbGVnYXRlSW1wbCgpO1xyXG4gICAgICAgICAgICBkZWxlZ2F0ZS5fb3JpZ2luYWxEZWxlZ2F0ZSA9IG9yaWdpbmFsRGVsZWdhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpY2tlclZpZXdEaWRTZWxlY3RSb3dJbkNvbXBvbmVudChwaWNrZXJWaWV3OiBVSVBpY2tlclZpZXcsIHJvdzogbnVtYmVyLCBjb21wb25lbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5hbERlbGVnYXRlLnBpY2tlclZpZXdEaWRTZWxlY3RSb3dJbkNvbXBvbmVudChwaWNrZXJWaWV3LCByb3csIGNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaWNrZXJWaWV3Um93SGVpZ2h0Rm9yQ29tcG9uZW50KHBpY2tlclZpZXc6IFVJUGlja2VyVmlldywgY29tcG9uZW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMubGF5b3V0LnRvRGV2aWNlSW5kZXBlbmRlbnRQaXhlbHMoMjQwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBpY2tlclZpZXdWaWV3Rm9yUm93Rm9yQ29tcG9uZW50UmV1c2luZ1ZpZXcocGlja2VyVmlldzogVUlQaWNrZXJWaWV3LCByb3c6IG51bWJlciwgY29tcG9uZW50OiBudW1iZXIsIHZpZXc6IFVJVmlldyk6IFVJVmlldyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gPFVJTGFiZWw+dGhpcy5fb3JpZ2luYWxEZWxlZ2F0ZVxyXG4gICAgICAgICAgICAgICAgLnBpY2tlclZpZXdWaWV3Rm9yUm93Rm9yQ29tcG9uZW50UmV1c2luZ1ZpZXcocGlja2VyVmlldywgcm93LCBjb21wb25lbnQsIHZpZXcpO1xyXG5cclxuICAgICAgICAgICAgbGFiZWwubGluZUJyZWFrTW9kZSA9IE5TTGluZUJyZWFrTW9kZS5CeVRydW5jYXRpbmdUYWlsO1xyXG4gICAgICAgICAgICBsYWJlbC5udW1iZXJPZkxpbmVzID0gMjtcclxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRm9udC5wcm90b3R5cGUud2l0aEZvbnRTaXplID0gZnVuY3Rpb24gKHNpemU6IG51bWJlcik6IEZvbnQge1xyXG4gICAgY29uc3QgZm9udEZhbWlseSA9IHRoaXMuZm9udEZhbWlseTtcclxuICAgIGlmICghaWdub3JlU2NhbGUuaGFzKGZvbnRGYW1pbHkpKSB7XHJcbiAgICAgICAgc2l6ZSA9IHNpemUgKiBjYWNoZWRGb250U2NhbGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEZvbnQoZm9udEZhbWlseSwgc2l6ZSwgdGhpcy5mb250U3R5bGUsIHRoaXMuZm9udFdlaWdodCk7XHJcbn07XHJcblxyXG4oPGFueT5TY3JvbGxWaWV3LnByb3RvdHlwZSkub3JpZ2luYWxBdHRhY2hOYXRpdmUgPSAoPGFueT5TY3JvbGxWaWV3LnByb3RvdHlwZSkuYXR0YWNoTmF0aXZlO1xyXG4oPGFueT5TY3JvbGxWaWV3LnByb3RvdHlwZSkuYXR0YWNoTmF0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5vcmlnaW5hbEF0dGFjaE5hdGl2ZSgpO1xyXG4gICAgY29uc3QgbmV3RGVsZWdhdGUgPSBpb3MuQXBwVUlTY3JvbGxWaWV3RGVsZWdhdGVJbXBsLmluaXRXaXRoT3JpZ2luYWxEZWxlZ2F0ZSh0aGlzLl9kZWxlZ2F0ZSk7XHJcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IG5ld0RlbGVnYXRlO1xyXG4gICAgdGhpcy5uYXRpdmVWaWV3UHJvdGVjdGVkLmRlbGVnYXRlID0gbmV3RGVsZWdhdGU7XHJcbn07Il19