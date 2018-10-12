import * as application from "application";
import * as utils from "utils/utils";
import * as frame from "ui/frame";
import { View } from "ui/core/view";

export module ios {

}

let loaderView: android.app.ProgressDialog;
function onBackButtonTap(args: application.AndroidActivityBackPressedEventData) {
    const page = frame.topmost().currentPage;
    if (page.hasListeners(application.AndroidApplication.activityBackPressedEvent)) {
        args.cancel = true;
        page.notify({
            eventName: application.AndroidApplication.activityBackPressedEvent,
            object: page
        });
    }
}

export function init() {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, onBackButtonTap, this);
    frame.Frame.defaultTransition = { name: "slideLeft" };
}

export function dismissSoftInput() {
    utils.ad.dismissSoftInput();
}

export function showLoader(message: string = "Loading...") {
    if (loaderView) {
        return;
    }

    loaderView = android.app.ProgressDialog.show(application.android.foregroundActivity, "", message);
}

export function hideLoader() {
    if (!loaderView) {
        return;
    }

    loaderView.dismiss();
    loaderView = null;
}

export module ad {
    /**
     * Helps to remove focus from `TextField` in Android
     */
    export class AutoFocusView extends View {
        createNativeView() {
            const linearLayout = new android.widget.LinearLayout(this._context);
            linearLayout.setFocusableInTouchMode(true);
            linearLayout.setFocusable(true);
            return linearLayout;
        }
    }
}