"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device = /** @class */ (function () {
    function Device() {
        this.uuid = "my device.UUID 001";
        // this.readManufacturerName(); // this will work
        console.log("constructor this: ", this);
        this.readManufacturerName();
        // WHRN called here "this" will print
        /*
            {
                "uuid": "device.UUID 001"
            }
        */
    }
    Device.prototype.readManufacturerName = function () {
        // here this.uuid will be undefined when called with {{ device.readManufacturerName }}
        // it will have value if called from elsewhere
        console.log("readManufacturerName: ", this.uuid);
        console.log("readManufacturerName this: ", this);
        // WHEN called from Button "this" will print
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
        return this.uuid; // when used via binding this will print the context of the current method instead of the value of uuid property
    };
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXZpY2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO1FBRWpDLGlEQUFpRDtRQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBR3ZDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLHFDQUFxQztRQUNyQzs7OztVQUlFO0lBQ04sQ0FBQztJQUVNLHFDQUFvQixHQUEzQjtRQUNJLHNGQUFzRjtRQUN0Riw4Q0FBOEM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCw0Q0FBNEM7UUFDNUM7Ozs7Ozs7Ozs7OztVQVlFO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxnSEFBZ0g7SUFDdEksQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIERldmljZSAge1xuXG4gICAgcHVibGljIHV1aWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnV1aWQgPSBcIm15IGRldmljZS5VVUlEIDAwMVwiO1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5yZWFkTWFudWZhY3R1cmVyTmFtZSgpOyAvLyB0aGlzIHdpbGwgd29ya1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3IgdGhpczogXCIsIHRoaXMpXG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMucmVhZE1hbnVmYWN0dXJlck5hbWUoKTtcbiAgICAgICAgLy8gV0hSTiBjYWxsZWQgaGVyZSBcInRoaXNcIiB3aWxsIHByaW50XG4gICAgICAgIC8qXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ1dWlkXCI6IFwiZGV2aWNlLlVVSUQgMDAxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZE1hbnVmYWN0dXJlck5hbWUoKSB7XG4gICAgICAgIC8vIGhlcmUgdGhpcy51dWlkIHdpbGwgYmUgdW5kZWZpbmVkIHdoZW4gY2FsbGVkIHdpdGgge3sgZGV2aWNlLnJlYWRNYW51ZmFjdHVyZXJOYW1lIH19XG4gICAgICAgIC8vIGl0IHdpbGwgaGF2ZSB2YWx1ZSBpZiBjYWxsZWQgZnJvbSBlbHNld2hlcmVcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkTWFudWZhY3R1cmVyTmFtZTogXCIsIHRoaXMudXVpZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkTWFudWZhY3R1cmVyTmFtZSB0aGlzOiBcIiwgdGhpcyk7XG4gICAgICAgIC8vIFdIRU4gY2FsbGVkIGZyb20gQnV0dG9uIFwidGhpc1wiIHdpbGwgcHJpbnRcbiAgICAgICAgLypcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIl9vYnNlcnZlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5Q2hhbmdlXCI6IFt7fV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiX21hcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJkZXZpY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInV1aWRcIjogXCJkZXZpY2UuVVVJRCAwMDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRldmljZVwiOiBcIltDaXJjdWxhcl1cIlxuICAgICAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7IC8vIHdoZW4gdXNlZCB2aWEgYmluZGluZyB0aGlzIHdpbGwgcHJpbnQgdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgbWV0aG9kIGluc3RlYWQgb2YgdGhlIHZhbHVlIG9mIHV1aWQgcHJvcGVydHlcbiAgICB9XG59Il19