"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.ticketListPicker = [5.4, 6.3, 7.2, 8.1, 9.0];
        _this.price = 0;
        _this.selectedIndex = 3;
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (v) {
            this._price = v;
            this.notifyPropertyChange("price", v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (v) {
            this._selectedIndex = v;
            this.notifyPropertyChange("selectedIndex", v);
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBR3hEO0lBQXFDLG1DQUFVO0lBTTNDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ3BELEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQzNCLENBQUM7SUFFRCxzQkFBSSxrQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVUsQ0FBVTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBQ0QsVUFBa0IsQ0FBVTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUpBO0lBTUwsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQXFDLHVCQUFVLEdBOEI5QztBQTlCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHVibGljIHRpY2tldExpc3RQaWNrZXI6IEFycmF5PG51bWJlcj47XG4gICAgcHJpdmF0ZSBfcHJpY2U6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRpY2tldExpc3RQaWNrZXIgPSBbIDUuNCwgNi4zLCA3LjIsIDguMSwgOS4wIF07XG4gICAgICAgIHRoaXMucHJpY2UgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAzO1xuICAgIH1cblxuICAgIGdldCBwcmljZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xuICAgIH1cbiAgICBzZXQgcHJpY2UodiA6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wcmljZSA9IHY7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJwcmljZVwiLCB2KTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJbmRleCgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZEluZGV4KHYgOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHY7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJzZWxlY3RlZEluZGV4XCIsIHYpO1xuICAgIH1cblxufVxuIl19