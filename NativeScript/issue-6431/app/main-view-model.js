"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        _this.loginText = "Login BTN \n";
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "loginText", {
        get: function () {
            return this._loginText;
        },
        set: function (value) {
            if (this._loginText !== value) {
                this._loginText = value;
                this.notifyPropertyChange('loginText', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        this._counter--;
        this.updateMessage();
    };
    HelloWorldModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBTTNDO1FBQUEsWUFDSSxpQkFBTyxTQU9WO1FBTEcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQzs7SUFDcEMsQ0FBQztJQUVELHNCQUFJLHNDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBYyxLQUFhO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDakQsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBUUQsc0JBQUksb0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLEtBQWE7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUMvQyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTTSwrQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sdUNBQWEsR0FBckI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRywrREFBK0QsQ0FBQztRQUNuRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFNLElBQUksQ0FBQyxRQUFRLGVBQVksQ0FBQztRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWpERCxDQUFxQyx1QkFBVSxHQWlEOUM7QUFqRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuICAgIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIF9sb2dpblRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcbiAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG5cbiAgICAgICAgdGhpcy5sb2dpblRleHQgPSBcIkxvZ2luIEJUTiBcXG5cIjtcbiAgICB9XG5cbiAgICBnZXQgbG9naW5UZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2dpblRleHQ7XG4gICAgfVxuICAgIFxuICAgIHNldCBsb2dpblRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbG9naW5UZXh0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbG9naW5UZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdsb2dpblRleHQnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGAke3RoaXMuX2NvdW50ZXJ9IHRhcHMgbGVmdGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=