
import { EventData } from "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from "tns-core-modules/ui/page";

let textField: TextField;
let page: Page;
// declare let UIMenuController: any;

export function navigatingTo(args) {
    page = <Page>args.object;
}

export function tfLoaded(args: EventData) {
    textField = <TextField>args.object;
}

export function onTap() {
    textField.focus();

    const menu = UIMenuController.sharedMenuController;
    menu.setMenuVisibleAnimated(true, true);
    
    /* EXMPLES Below on how data conversion is dade from Obj-C to javaScript */
    /* The below code is partial conversion of https://supereasyapps.com/blog/2014/4/17/show-the-uimenucontroller-and-display-custom-edit-menus-for-uiviewcontroller-uitableviewcontroller-and-uicollectionview-on-ios-7 */
    /* Still it is noly for mashalling demo purposes and not full implementation */

    // const targetRectangle = CGRectMake(100, 100, 100, 100);
    // UIMenuController.sharedMenuController.setTargetRectInView(targetRectangle, textField.ios);
    // menu.setTargetRectInView(page.ios.frame, textField.ios);
    // let menuItem = UIMenuItem.alloc().initWithTitleAction("Custom Action", "customAction");
    // let menuItems = NSArray.arrayWithArray([menuItem])
    // menu.menuItems = menuItems;
    
}
