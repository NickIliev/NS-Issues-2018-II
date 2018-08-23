/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from 'application';
import * as Https from 'nativescript-https';
import { knownFolders } from 'tns-core-modules/file-system';

let dir = knownFolders.currentApp().getFolder('certs');
let certificate = dir.getFile('httpbin.org.cer').path;
Https.enableSSLPinning({ host: 'httpbin.org', certificate });

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
