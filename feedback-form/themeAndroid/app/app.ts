/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from 'application';
import * as platform from "platform";
declare var android: any;

if (platform.isAndroid && platform.device.sdkVersion >= "21") {
  application.android.on(application.AndroidApplication.activityStartedEvent, function() {
    let window = application.android.startActivity.getWindow();
    let decorView = window.getDecorView();
    decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
  })
};


application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
