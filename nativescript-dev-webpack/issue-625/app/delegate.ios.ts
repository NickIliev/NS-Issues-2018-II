export class CustomAppDelegate extends UIResponder
  implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  private keyWindow: UIWindow;

  get window(): UIWindow {
    return this.keyWindow;
  }
  set window(v: UIWindow) {
    this.keyWindow = v;
  }

  // Handle pre-9.3 style app scheme deep-linking
  public applicationOpenURLSourceApplicationAnnotation(
    app: UIApplication,
    url: NSURL,
    sourceApp: string,
    annotation: any
  ): boolean {
    console.log(
      `iOS.AppDelegate - App opened from URL, by AppID: ${sourceApp}`
    );
    this.handleRouting(url);
    return true;
  }

  // Handle Universal Link deep-linking
  public applicationContinueUserActivityRestorationHandler(
    app: UIApplication,
    userActivity: NSUserActivity,
    restorationHandler: (p1: NSArray<any>) => void
  ) {
    console.log(`iOS.AppDelegate - Continue UserActivity ${userActivity}`);
    if (userActivity.activityType === NSUserActivityTypeBrowsingWeb) {
      this.handleRouting(userActivity.webpageURL);
    }
    return true;
  }

  private handleRouting(url: any) {
    console.log(`iOS.AppDelegate Handle Routing: ${url.absoluteString}`);
  }

  applicationDidFinishLaunchingWithOptions(
    application: UIApplication,
    launchOptions
  ): boolean {
    console.log("applicationWillFinishLaunchingWithOptions: ", this);
    return true;
  }

  applicationDidBecomeActive(application: UIApplication): void {
    console.log("applicationDidBecomeActive:  " + application);
    console.log("is registered", application.registeredForRemoteNotifications);
    this.keyWindow = application.keyWindow;
  }
}