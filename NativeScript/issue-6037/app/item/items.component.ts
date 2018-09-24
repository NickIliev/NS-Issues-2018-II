import { Component, OnInit } from "@angular/core";
import { Label } from "tns-core-modules/ui/label";
import { screen } from "tns-core-modules/platform";

declare let NSLineBreakByTruncatingTail: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    textValue: string = "";

    constructor() { }

    ngOnInit(): void { }

    onLabelLoaded(args) {
        let label = <Label>args.object;

        let fontSize = label.fontSize;
        let textPadding = 4;
        let maxLines = 3;
        
        label.ios.numberOfLines = maxLines;
        label.ios.lineBreakingMode = NSLineBreakByTruncatingTail;
        this.textValue = "some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.";

        label.height = ((fontSize + textPadding) * maxLines);
    }
}

