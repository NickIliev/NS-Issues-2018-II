"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.sourceUrl = "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "sourceUrl", {
        get: function () {
            return this._sourceUrl;
        },
        set: function (value) {
            if (this._sourceUrl !== value) {
                this._sourceUrl = value;
                this.notifyPropertyChange('sourceUrl', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxvREFBb0QsQ0FBQzs7SUFDMUUsQ0FBQztJQUVELHNCQUFJLHNDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBYyxLQUFhO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDakQsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBUUwsc0JBQUM7QUFBRCxDQUFDLEFBckJELENBQXFDLHVCQUFVLEdBcUI5QztBQXJCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cblxuICAgIHByaXZhdGUgX3NvdXJjZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zb3VyY2VVcmwgPSBcImh0dHBzOi8vY2xpcHMudm9yd2FlcnRzLWdtYmguZGUvYmlnX2J1Y2tfYnVubnkubXA0XCI7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlVXJsO1xuICAgIH1cbiAgICBcbiAgICBzZXQgc291cmNlVXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdXJjZVVybCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZVVybCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc291cmNlVXJsJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=