import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { isAndroid } from "tns-core-modules/platform";
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    model: any;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() { }

    ngOnInit(): void {
        this.model = {
            someText: "Android ",
            someText2: "LINK LINK ",
            someText3: "stack"
        }
    }

    onLabelLoaded(args: EventData) {
        let lbl = <Label>args.object;

        if (isAndroid) {
            var spannableString = new android.text.SpannableString("Android LINK LINK stack");
            var ClickableSpanClass = (<any>android).text.style.ClickableSpan.extend({
                onClick: function (view) {
                    console.log("on span click");
                },
                updateDrawState: function (tp) {
                    this.super.updateDrawState(tp);
                    tp.setUnderlineText(false);
                }
            });

            var clickablespan = new ClickableSpanClass();
            spannableString.setSpan(clickablespan, 8, 17, android.text.Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);

            lbl.android.setText(spannableString);
            lbl.android.setMovementMethod(android.text.method.LinkMovementMethod.getInstance());
        }

    }
}