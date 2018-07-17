"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.model = {
            someText: "Android ",
            someText2: "LINK LINK ",
            someText3: "stack"
        };
    };
    ItemsComponent.prototype.onLabelLoaded = function (args) {
        var lbl = args.object;
        if (platform_1.isAndroid) {
            var spannableString = new android.text.SpannableString("Android LINK LINK stack");
            var ClickableSpanClass = android.text.style.ClickableSpan.extend({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFzRDtBQVF0RDtJQUVJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakg7SUFBZ0IsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFNBQVMsRUFBRSxPQUFPO1NBQ3JCLENBQUE7SUFDTCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLElBQWU7UUFDekIsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNsRixJQUFJLGtCQUFrQixHQUFTLE9BQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BFLE9BQU8sRUFBRSxVQUFVLElBQUk7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsZUFBZSxFQUFFLFVBQVUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9CLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUVILElBQUksYUFBYSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztZQUM3QyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFN0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFFTCxDQUFDO0lBcENRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQXFDMUI7SUFBRCxxQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbW9kZWw6IGFueTtcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgICBzb21lVGV4dDogXCJBbmRyb2lkIFwiLFxuICAgICAgICAgICAgc29tZVRleHQyOiBcIkxJTksgTElOSyBcIixcbiAgICAgICAgICAgIHNvbWVUZXh0MzogXCJzdGFja1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxhYmVsTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbGJsID0gPExhYmVsPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHZhciBzcGFubmFibGVTdHJpbmcgPSBuZXcgYW5kcm9pZC50ZXh0LlNwYW5uYWJsZVN0cmluZyhcIkFuZHJvaWQgTElOSyBMSU5LIHN0YWNrXCIpO1xuICAgICAgICAgICAgdmFyIENsaWNrYWJsZVNwYW5DbGFzcyA9ICg8YW55PmFuZHJvaWQpLnRleHQuc3R5bGUuQ2xpY2thYmxlU3Bhbi5leHRlbmQoe1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib24gc3BhbiBjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZURyYXdTdGF0ZTogZnVuY3Rpb24gKHRwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXIudXBkYXRlRHJhd1N0YXRlKHRwKTtcbiAgICAgICAgICAgICAgICAgICAgdHAuc2V0VW5kZXJsaW5lVGV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBjbGlja2FibGVzcGFuID0gbmV3IENsaWNrYWJsZVNwYW5DbGFzcygpO1xuICAgICAgICAgICAgc3Bhbm5hYmxlU3RyaW5nLnNldFNwYW4oY2xpY2thYmxlc3BhbiwgOCwgMTcsIGFuZHJvaWQudGV4dC5TcGFubmVkLlNQQU5fRVhDTFVTSVZFX0VYQ0xVU0lWRSk7XG5cbiAgICAgICAgICAgIGxibC5hbmRyb2lkLnNldFRleHQoc3Bhbm5hYmxlU3RyaW5nKTtcbiAgICAgICAgICAgIGxibC5hbmRyb2lkLnNldE1vdmVtZW50TWV0aG9kKGFuZHJvaWQudGV4dC5tZXRob2QuTGlua01vdmVtZW50TWV0aG9kLmdldEluc3RhbmNlKCkpO1xuICAgICAgICB9XG5cbiAgICB9XG59Il19