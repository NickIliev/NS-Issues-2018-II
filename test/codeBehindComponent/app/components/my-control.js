"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout/stack-layout");
var label_1 = require("tns-core-modules/ui/label/label");
var button_1 = require("tns-core-modules/ui/button/button");
var MyControl = /** @class */ (function (_super) {
    __extends(MyControl, _super);
    function MyControl() {
        var _this = _super.call(this) || this;
        var counter = 0;
        var lbl = new label_1.Label();
        var btn = new button_1.Button();
        btn.text = "Tap me!";
        btn.on("tap", function (args) {
            lbl.text = "Tap " + counter++;
        });
        _this.addChild(lbl);
        _this.addChild(btn);
        return _this;
    }
    return MyControl;
}(stack_layout_1.StackLayout));
exports.MyControl = MyControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzRkFBb0Y7QUFDcEYseURBQXdEO0FBQ3hELDREQUEyRDtBQUUzRDtJQUErQiw2QkFBVztJQUN0QztRQUFBLFlBQ0ksaUJBQU8sU0FZVjtRQVZHLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztRQUN4QixJQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3hCLElBQU0sR0FBRyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFJO1lBQ2YsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBQ3ZCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFmRCxDQUErQiwwQkFBVyxHQWV6QztBQWZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwvbGFiZWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbi9idXR0b25cIjtcblxuZXhwb3J0IGNsYXNzIE15Q29udHJvbCBleHRlbmRzIFN0YWNrTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgY291bnRlcjogbnVtYmVyID0gMDtcbiAgICAgICAgY29uc3QgbGJsID0gbmV3IExhYmVsKCk7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ldyBCdXR0b24oKTtcbiAgICAgICAgYnRuLnRleHQgPSBcIlRhcCBtZSFcIjtcbiAgICAgICAgYnRuLm9uKFwidGFwXCIsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICBsYmwudGV4dCA9IFwiVGFwIFwiICsgY291bnRlcisrO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGxibCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYnRuKTtcbiAgICB9XG59Il19