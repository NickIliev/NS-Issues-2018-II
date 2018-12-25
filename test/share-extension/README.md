# Adding Share Extension to iOS project built with NativeScript

Steps:
- Create NativeScript project and build for iOS
```Shell
tns create my-app --tsc
tns platform add ios
tns build ios
```

- Open the built native project in iOS

Go to  `<project-name>/platforms/ios` and open <my-project-name.xcodeproj> (or `xcworkspace`) in XCode

- Enable (add) Share extension (via XCode)
1. With th app created and opened, go to **File -> New -> Target**
2. Then select `Share Extension` from `Application Extension`. Provide a name of your extension.
3. Then Xcode will ask you to activate scheme, so click Activate it. (Note: This doesnt happen on my sid3e with latest XCode)
4. Enable App Groups.
    1. Select project target and go to `Capabilities`.
    2. Turn on App group and then select the Development team.
    3. After that the list of app groups will be shown, select app group.
    4. **Now select extension and do the same to enable app groups**. The app is configured for sharing content.


>**Imporant** : To be able to build app with **AppGroups enabled and configured** , you will need a provision profile for that AppId that has AppGroups enabled. (e.g. like the one for `org.nativescript.examples` in `Telerik A D` team but it has to be configured with groups). Building with provisioning profile for APpId that does not have AppGroups enabled and configured won't work.

- From that point you can obtain the shared content using the method `didSelectPost` that will be created in the `ShareViewController.m` file like shown [here](https://www.technetexperts.com/mobile/share-extension-in-ios-application-overview-with-example/).

Detailed article and explanations about how to get and set image via share extensions and `NSUserDefaults` can be found [here](https://www.technetexperts.com/mobile/share-extension-in-ios-application-overview-with-example/)