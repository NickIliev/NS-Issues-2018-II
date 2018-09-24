"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.textValue = "";
    }
    ItemsComponent.prototype.ngOnInit = function () { };
    ItemsComponent.prototype.onLabelLoaded = function (args) {
        var label = args.object;
        var fontSize = label.fontSize;
        var textPadding = 4;
        var maxLines = 3;
        label.ios.numberOfLines = maxLines;
        label.ios.lineBreakingMode = NSLineBreakByTruncatingTail;
        this.textValue = "some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.";
        label.height = ((fontSize + textPadding) * maxLines);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
// let fontSize = label.fontSize;
// let textPadding = 4;
// let maxLines = 3;
// label.ios.numberOfLines = maxLines;
// this.textValue = "some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.some very very long text to shown on three lines.";
// label.height = ((fontSize + textPadding) * maxLines);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBV2xEO0lBSUk7UUFGQSxjQUFTLEdBQVcsRUFBRSxDQUFDO0lBRVAsQ0FBQztJQUVqQixpQ0FBUSxHQUFSLGNBQW1CLENBQUM7SUFFcEIsc0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVqQixLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRywyQkFBMkIsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLHNNQUFzTSxDQUFDO1FBRXhOLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBcEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdDQUFjO0FBdUIzQixpQ0FBaUM7QUFDakMsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUVwQixzQ0FBc0M7QUFDdEMsMk5BQTJOO0FBRTNOLHdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmRlY2xhcmUgbGV0IE5TTGluZUJyZWFrQnlUcnVuY2F0aW5nVGFpbDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0ZXh0VmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICAgIG9uTGFiZWxMb2FkZWQoYXJncykge1xuICAgICAgICBsZXQgbGFiZWwgPSA8TGFiZWw+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgbGV0IGZvbnRTaXplID0gbGFiZWwuZm9udFNpemU7XG4gICAgICAgIGxldCB0ZXh0UGFkZGluZyA9IDQ7XG4gICAgICAgIGxldCBtYXhMaW5lcyA9IDM7XG4gICAgICAgIFxuICAgICAgICBsYWJlbC5pb3MubnVtYmVyT2ZMaW5lcyA9IG1heExpbmVzO1xuICAgICAgICBsYWJlbC5pb3MubGluZUJyZWFraW5nTW9kZSA9IE5TTGluZUJyZWFrQnlUcnVuY2F0aW5nVGFpbDtcbiAgICAgICAgdGhpcy50ZXh0VmFsdWUgPSBcInNvbWUgdmVyeSB2ZXJ5IGxvbmcgdGV4dCB0byBzaG93biBvbiB0aHJlZSBsaW5lcy5zb21lIHZlcnkgdmVyeSBsb25nIHRleHQgdG8gc2hvd24gb24gdGhyZWUgbGluZXMuc29tZSB2ZXJ5IHZlcnkgbG9uZyB0ZXh0IHRvIHNob3duIG9uIHRocmVlIGxpbmVzLnNvbWUgdmVyeSB2ZXJ5IGxvbmcgdGV4dCB0byBzaG93biBvbiB0aHJlZSBsaW5lcy5cIjtcblxuICAgICAgICBsYWJlbC5oZWlnaHQgPSAoKGZvbnRTaXplICsgdGV4dFBhZGRpbmcpICogbWF4TGluZXMpO1xuICAgIH1cbn1cblxuLy8gbGV0IGZvbnRTaXplID0gbGFiZWwuZm9udFNpemU7XG4vLyBsZXQgdGV4dFBhZGRpbmcgPSA0O1xuLy8gbGV0IG1heExpbmVzID0gMztcblxuLy8gbGFiZWwuaW9zLm51bWJlck9mTGluZXMgPSBtYXhMaW5lcztcbi8vIHRoaXMudGV4dFZhbHVlID0gXCJzb21lIHZlcnkgdmVyeSBsb25nIHRleHQgdG8gc2hvd24gb24gdGhyZWUgbGluZXMuc29tZSB2ZXJ5IHZlcnkgbG9uZyB0ZXh0IHRvIHNob3duIG9uIHRocmVlIGxpbmVzLnNvbWUgdmVyeSB2ZXJ5IGxvbmcgdGV4dCB0byBzaG93biBvbiB0aHJlZSBsaW5lcy5zb21lIHZlcnkgdmVyeSBsb25nIHRleHQgdG8gc2hvd24gb24gdGhyZWUgbGluZXMuXCI7XG5cbi8vIGxhYmVsLmhlaWdodCA9ICgoZm9udFNpemUgKyB0ZXh0UGFkZGluZykgKiBtYXhMaW5lcyk7Il19