"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
// require the plugin
var nativescript_bluetooth_1 = require("nativescript-bluetooth");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this._foundDevices = [];
        nativescript_bluetooth_1.enable().then(function (enabled) {
            // use Bluetooth features if enabled is true 
        });
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "foundDevices", {
        get: function () {
            return this._foundDevices;
        },
        set: function (value) {
            this._foundDevices = value;
            this.notifyPropertyChange("foundDevices", value);
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.startScan = function () {
        var _this = this;
        var devices = [];
        nativescript_bluetooth_1.startScanning({
            serviceUUIDs: [],
            seconds: 4,
            onDiscovered: function (peripheral) {
                console.log("Periperhal found with UUID: " + peripheral.UUID);
                _this.result = peripheral;
                devices.push(peripheral);
                // this.result.name
                // this.result.RSSI
                // this.result.UUID
            },
            skipPermissionCheck: false
        }).then(function () {
            console.log("scanning complete");
            _this.foundDevices = devices;
        }, function (err) {
            console.log("error while scanning: " + err);
        });
    };
    HelloWorldModel.prototype.isEnabled = function () {
        nativescript_bluetooth_1.isBluetoothEnabled().then(function (enabled) {
            alert("Enabled? " + enabled);
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHFCQUFxQjtBQUNyQixpRUFBc0g7QUFFdEg7SUFBcUMsbUNBQVU7SUFLM0M7UUFBQSxZQUNJLGlCQUFPLFNBS1Y7UUFSTyxtQkFBYSxHQUFzQixFQUFFLENBQUM7UUFLMUMsK0JBQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDbEIsNkNBQTZDO1FBQ2pELENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFRCxzQkFBSSx5Q0FBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFBO1FBQzdCLENBQUM7YUFFRCxVQUFpQixLQUF3QjtZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUxBO0lBT0QsbUNBQVMsR0FBVDtRQUFBLGlCQXdCQztRQXZCRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsc0NBQWEsQ0FBQztZQUNWLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsWUFBWSxFQUFFLFVBQUMsVUFBVTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUV6QixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUV6QixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsbUJBQW1CO1lBQ3ZCLENBQUM7WUFDRCxtQkFBbUIsRUFBRSxLQUFLO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakMsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDOUIsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLDJDQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUM5QixLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUFxQyx1QkFBVSxHQXFEOUM7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vIHJlcXVpcmUgdGhlIHBsdWdpblxuaW1wb3J0IHsgZW5hYmxlLCBpc0JsdWV0b290aEVuYWJsZWQsIHN0YXJ0U2Nhbm5pbmcsIFN0YXJ0Tm90aWZ5aW5nT3B0aW9ucywgUGVyaXBoZXJhbCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmx1ZXRvb3RoXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHJlc3VsdDogUGVyaXBoZXJhbDtcbiAgICBwcml2YXRlIF9mb3VuZERldmljZXM6IEFycmF5PFBlcmlwaGVyYWw+ID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBlbmFibGUoKS50aGVuKChlbmFibGVkKSA9PiB7XG4gICAgICAgICAgICAvLyB1c2UgQmx1ZXRvb3RoIGZlYXR1cmVzIGlmIGVuYWJsZWQgaXMgdHJ1ZSBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGZvdW5kRGV2aWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvdW5kRGV2aWNlc1xuICAgIH1cblxuICAgIHNldCBmb3VuZERldmljZXModmFsdWU6IEFycmF5PFBlcmlwaGVyYWw+KSB7XG4gICAgICAgIHRoaXMuX2ZvdW5kRGV2aWNlcyA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwiZm91bmREZXZpY2VzXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGFydFNjYW4oKSB7XG4gICAgICAgIGxldCBkZXZpY2VzID0gW107XG5cbiAgICAgICAgc3RhcnRTY2FubmluZyh7XG4gICAgICAgICAgICBzZXJ2aWNlVVVJRHM6IFtdLFxuICAgICAgICAgICAgc2Vjb25kczogNCxcbiAgICAgICAgICAgIG9uRGlzY292ZXJlZDogKHBlcmlwaGVyYWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmlwZXJoYWwgZm91bmQgd2l0aCBVVUlEOiBcIiArIHBlcmlwaGVyYWwuVVVJRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBwZXJpcGhlcmFsO1xuXG4gICAgICAgICAgICAgICAgZGV2aWNlcy5wdXNoKHBlcmlwaGVyYWwpO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZXN1bHQubmFtZVxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVzdWx0LlJTU0lcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlc3VsdC5VVUlEXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2tpcFBlcm1pc3Npb25DaGVjazogZmFsc2VcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nhbm5pbmcgY29tcGxldGVcIik7XG5cbiAgICAgICAgICAgIHRoaXMuZm91bmREZXZpY2VzID0gZGV2aWNlcztcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHdoaWxlIHNjYW5uaW5nOiBcIiArIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNFbmFibGVkKCkge1xuICAgICAgICBpc0JsdWV0b290aEVuYWJsZWQoKS50aGVuKChlbmFibGVkKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkVuYWJsZWQ/IFwiICsgZW5hYmxlZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==