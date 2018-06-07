"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device = /** @class */ (function () {
    function Device() {
        this.uuid = "device.UUID 001";
        // this.readManufacturerName(); // this will work
        this.readManufacturerName();
    }
    Device.prototype.readManufacturerName = function () {
        // here this.uuid will be undefined when called with {{ device.readManufacturerName }}
        // it will have value if called from elsewhere
        console.log("readManufacturerName: ", this.uuid);
        console.log("readManufacturerName this: ", this);
        // WHEN called from Button this will print
        /*
            {
                "_observers": {
                    "propertyChange": [{}]
                },
                "_map": {
                "device": {
                    "uuid": "device.UUID 001"
                }
            },
            "device": "[Circular]"
            }
        */
    };
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXZpY2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBRTlCLGlEQUFpRDtRQUVqRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0scUNBQW9CLEdBQTNCO1FBQ0ksc0ZBQXNGO1FBQ3RGLDhDQUE4QztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELDBDQUEwQztRQUMxQzs7Ozs7Ozs7Ozs7O1VBWUU7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlICB7XG5cbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXVpZCA9IFwiZGV2aWNlLlVVSUQgMDAxXCI7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnJlYWRNYW51ZmFjdHVyZXJOYW1lKCk7IC8vIHRoaXMgd2lsbCB3b3JrXG5cbiAgICAgICAgdGhpcy5yZWFkTWFudWZhY3R1cmVyTmFtZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkTWFudWZhY3R1cmVyTmFtZSgpIHtcbiAgICAgICAgLy8gaGVyZSB0aGlzLnV1aWQgd2lsbCBiZSB1bmRlZmluZWQgd2hlbiBjYWxsZWQgd2l0aCB7eyBkZXZpY2UucmVhZE1hbnVmYWN0dXJlck5hbWUgfX1cbiAgICAgICAgLy8gaXQgd2lsbCBoYXZlIHZhbHVlIGlmIGNhbGxlZCBmcm9tIGVsc2V3aGVyZVxuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWRNYW51ZmFjdHVyZXJOYW1lOiBcIix0aGlzLnV1aWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVhZE1hbnVmYWN0dXJlck5hbWUgdGhpczogXCIsIHRoaXMpO1xuICAgICAgICAvLyBXSEVOIGNhbGxlZCBmcm9tIEJ1dHRvbiB0aGlzIHdpbGwgcHJpbnRcbiAgICAgICAgLypcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIl9vYnNlcnZlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5Q2hhbmdlXCI6IFt7fV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiX21hcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJkZXZpY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInV1aWRcIjogXCJkZXZpY2UuVVVJRCAwMDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRldmljZVwiOiBcIltDaXJjdWxhcl1cIlxuICAgICAgICAgICAgfVxuICAgICAgICAqL1xuICAgIH1cbn0iXX0=