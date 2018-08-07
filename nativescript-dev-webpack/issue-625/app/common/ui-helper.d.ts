import { View } from "ui/core/view";

export declare function init(): void;
export declare function dismissSoftInput(): void;
export declare function showLoader(message?: string): void;
export declare function hideLoader(): void;

export declare module ios {
    export function setStatusBarColor(color: string): void;
    export function getSystemFontScale(): number;
    export function setFontScale(value: number): void;
    export function getFontScale(): number;
    export class KeyPathObserver extends NSObject {
        static initWithCallback(callback: (path: string, obj: Object, change: NSDictionary<any, any>, context: any) => void): KeyPathObserver;
    }
    export class AppUIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
        static initWithOriginalDelegate(originalDelegate: UIScrollViewDelegate): AppUIScrollViewDelegateImpl;
    }
    export class AppDropDownListPickerDelegateImpl extends NSObject implements UIPickerViewDelegate {
        static initWithOriginalDelegate(originalDelegate: UIPickerViewDelegate): AppDropDownListPickerDelegateImpl;
    }
}

export declare module ad {
    export class AutoFocusView extends View { }
}