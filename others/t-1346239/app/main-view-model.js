"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        // this.message = new Date("2018-06-14T12:01:06").toString();
        // this.message = new Date("2011-10-05T14:48:00.000Z").toString();
        _this.message = new Date(2018, 6, 14, 12, 1, 6).toString();
        console.log(_this.message);
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange("message", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBRzdDO1FBQUEsWUFDRSxpQkFBTyxTQVFSO1FBTkMsNkJBQTZCO1FBQzdCLDZEQUE2RDtRQUM3RCxrRUFBa0U7UUFFbEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUM1QixDQUFDO0lBRUQsc0JBQUksb0NBQU87YUFBWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFZLEtBQWE7WUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQzs7O09BUEE7SUFRSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsdUJBQVUsR0F3QjlDO0FBeEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgLy8gdGhpcy5tZXNzYWdlID0gbmV3IERhdGUoXCIyMDE4LTA2LTE0VDEyOjAxOjA2XCIpLnRvU3RyaW5nKCk7XG4gICAgLy8gdGhpcy5tZXNzYWdlID0gbmV3IERhdGUoXCIyMDExLTEwLTA1VDE0OjQ4OjAwLjAwMFpcIikudG9TdHJpbmcoKTtcblxuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBEYXRlKDIwMTgsIDYsIDE0LCAxMiwgMSwgNikudG9TdHJpbmcoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJtZXNzYWdlXCIsIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==