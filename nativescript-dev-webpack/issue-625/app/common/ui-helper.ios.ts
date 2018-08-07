import * as application from "application";
import * as utils from "utils/utils";
import { Color } from "color";
import * as frame from "ui/frame";
import { Font } from "ui/styling/font";
import { ScrollView, ScrollEventData } from "ui/scroll-view";

const sizeMap = new Map<string, number>([
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

const ignoreScale = new Set([
    "Ionicons, ionicons",
    "FontAwesome, fontawesome-webfont"
]);

let cachedFontScale = 1,
    isKeyboardVisible: boolean,
    loaderView: UIView;

export function init() {
    const pageControl = UIPageControl.appearance();
    pageControl.pageIndicatorTintColor = new Color("#C4C4C4").ios;
    pageControl.currentPageIndicatorTintColor = new Color("#990000").ios;

    application.ios.addNotificationObserver(UIKeyboardDidShowNotification, () => {
        isKeyboardVisible = true;
    });
    application.ios.addNotificationObserver(UIKeyboardDidHideNotification, () => {
        isKeyboardVisible = false;
    });
}

export function dismissSoftInput() {
    if (isKeyboardVisible) {
        utils.ios
            .getter(UIApplication, UIApplication.sharedApplication)
            .keyWindow
            .endEditing(true);
    }
}

export function showLoader(message: string = "Loading...") {
    if (loaderView) {
        return;
    }

    utils.ios.getter(UIApplication, UIApplication.sharedApplication).beginIgnoringInteractionEvents();

    const currentView = frame.topmost().ios.controller.view;
    loaderView = UIView.alloc().initWithFrame(CGRectMake(0, 0, 90, 90));
    loaderView.center = currentView.center;
    loaderView.layer.cornerRadius = 4;
    loaderView.backgroundColor = new Color("#CC000000").ios;

    const indicator = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(UIActivityIndicatorViewStyle.WhiteLarge);
    indicator.center = CGPointMake(45, 45);

    loaderView.addSubview(indicator);
    currentView.addSubview(loaderView);

    indicator.startAnimating();
}

export function hideLoader() {
    if (!loaderView) {
        return;
    }

    loaderView.removeFromSuperview();
    utils.ios.getter(UIApplication, UIApplication.sharedApplication).endIgnoringInteractionEvents();

    loaderView = null;
}

export module ios {

    /**
    * Controls the status bar background color.
    */
    export function setStatusBarColor(color: string) {
        (<UIView>utils.ios.getter(UIApplication, UIApplication.sharedApplication)
            .valueForKey("statusBar")).backgroundColor = new Color(color).ios;
    }

    /**
     * Returns the calculated font scale based on the prefered content size category.
     */
    export function getSystemFontScale(): number {
        return sizeMap.get(
            utils.ios
                .getter(UIApplication, UIApplication.sharedApplication)
                .preferredContentSizeCategory
        );
    }

    /**
     * Sets the cached font scale.
     */
    export function setFontScale(value: number) {
        cachedFontScale = value;
    }

    /**
     * Returns the cached font scale.
     */
    export function getFontScale(): number {
        return cachedFontScale;
    }

    /**
    * Custom deletegate to detect key path changes in object.
    */
    export class KeyPathObserver extends NSObject {

        private _callback: (path: string, obj: Object, change: NSDictionary<any, any>, context: any) => void;

        static initWithCallback(
            callback: (path: string, obj: Object, change: NSDictionary<any, any>, context: any) => void
        ): KeyPathObserver {
            const observer = new KeyPathObserver();
            observer._callback = callback;
            return observer;
        }

        observeValueForKeyPathOfObjectChangeContext(path: string,
            obj: Object, change: NSDictionary<any, any>, context: any) {
            this._callback(path, obj, change, context);
        }
    }

    /**
     * Custom deletegate to detect user initiated drag event in ScrollView.
     */
    @ObjCClass(UIScrollViewDelegate)
    export class AppUIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {

        private _originalDelegate: UIScrollViewDelegate;

        static initWithOriginalDelegate(originalDelegate: UIScrollViewDelegate): AppUIScrollViewDelegateImpl {
            const delegate = new AppUIScrollViewDelegateImpl();
            delegate._originalDelegate = originalDelegate;
            return delegate;
        }

        scrollViewWillBeginDragging(sv: UIScrollView) {
            const owner = (<WeakRef<ScrollView>>(<any>this._originalDelegate)._owner).get();
            if (owner) {
                owner.notify(<ScrollEventData>{
                    object: owner,
                    eventName: "drag",
                    scrollX: owner.horizontalOffset,
                    scrollY: owner.verticalOffset
                });
            }
        }

        scrollViewDidScroll(sv: UIScrollView): void {
            this._originalDelegate.scrollViewDidScroll(sv);
        }
    }

    /**
     * Deletegate to support wrapped text for DropDown plugin
     */
    @ObjCClass(UIPickerViewDelegate)
    export class AppDropDownListPickerDelegateImpl extends NSObject implements UIPickerViewDelegate {

        private _originalDelegate: UIPickerViewDelegate;

        static initWithOriginalDelegate(originalDelegate: UIPickerViewDelegate): AppDropDownListPickerDelegateImpl {
            const delegate = new AppDropDownListPickerDelegateImpl();
            delegate._originalDelegate = originalDelegate;
            return delegate;
        }

        pickerViewDidSelectRowInComponent(pickerView: UIPickerView, row: number, component: number): void {
            this._originalDelegate.pickerViewDidSelectRowInComponent(pickerView, row, component);
        }

        pickerViewRowHeightForComponent(pickerView: UIPickerView, component: number): number {
            return utils.layout.toDeviceIndependentPixels(240);
        }

        pickerViewViewForRowForComponentReusingView(pickerView: UIPickerView, row: number, component: number, view: UIView): UIView {
            const label = <UILabel>this._originalDelegate
                .pickerViewViewForRowForComponentReusingView(pickerView, row, component, view);

            label.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
            label.numberOfLines = 2;
            return label;
        }
    }
}

Font.prototype.withFontSize = function (size: number): Font {
    const fontFamily = this.fontFamily;
    if (!ignoreScale.has(fontFamily)) {
        size = size * cachedFontScale;
    }
    return new Font(fontFamily, size, this.fontStyle, this.fontWeight);
};

(<any>ScrollView.prototype).originalAttachNative = (<any>ScrollView.prototype).attachNative;
(<any>ScrollView.prototype).attachNative = function () {
    this.originalAttachNative();
    const newDelegate = ios.AppUIScrollViewDelegateImpl.initWithOriginalDelegate(this._delegate);
    this._delegate = newDelegate;
    this.nativeViewProtected.delegate = newDelegate;
};