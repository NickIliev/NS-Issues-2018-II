"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.onTap = function () {
        var test = new com.tns.TestObject(); //cant use this without the declare above
        console.log(test.doSomething()); //will print "hello" in the console
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxEO0lBQUE7SUFNQSxDQUFDO0lBSlUsOEJBQUssR0FBWjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsbUNBQW1DO0lBQ3hFLENBQUM7SUFMUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO09BQ1csY0FBYyxDQU0xQjtJQUFELHFCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5kZWNsYXJlIGxldCBjb206IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB2YXIgdGVzdCA9IG5ldyBjb20udG5zLlRlc3RPYmplY3QoKTsgLy9jYW50IHVzZSB0aGlzIHdpdGhvdXQgdGhlIGRlY2xhcmUgYWJvdmVcbiAgICAgICAgY29uc29sZS5sb2codGVzdC5kb1NvbWV0aGluZygpKTsgLy93aWxsIHByaW50IFwiaGVsbG9cIiBpbiB0aGUgY29uc29sZVxuICAgIH1cbn0iXX0=