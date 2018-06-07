"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
    };
    Activity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    Activity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    Activity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    Activity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    Activity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    Activity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    Activity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    Activity.prototype.dispatchKeyEvent = function (event) {
        // Which direction did the key move (up/down)
        var action = event.getAction();
        // What keywas pressed
        var keyCode = event.getKeyCode();
        switch (keyCode) {
            case android.view.KeyEvent.KEYCODE_VOLUME_UP:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_UP");
                return true;
            case android.view.KeyEvent.KEYCODE_VOLUME_DOWN:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_DOWN");
                return true;
            default:
                // Let the system do what it wanted to do
                return _super.prototype.dispatchKeyEvent.call(this, event);
        }
    };
    Activity = __decorate([
        JavaProxy("org.myApp.MainActivity")
    ], Activity);
    return Activity;
}(android.app.Activity));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFjdGl2aXR5LmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluQWN0aXZpdHkuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUF3RTtBQUd4RTtJQUF1Qiw0QkFBb0I7SUFBM0M7O0lBNERBLENBQUM7SUF6RGEsMkJBQVEsR0FBbEIsVUFBbUIsa0JBQXFDO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsNEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxpQkFBTSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVMsc0NBQW1CLEdBQTdCLFVBQThCLFFBQTJCO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxpQkFBTSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFUywwQkFBTyxHQUFqQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxpQkFBTSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRVMseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsaUJBQU0sTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVTLDRCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGlCQUFNLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxnQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxpQkFBTSxhQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sNkNBQTBCLEdBQWpDLFVBQWtDLFdBQW1CLEVBQUUsV0FBMEIsRUFBRSxZQUEyQjtRQUMxRyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBRVMsbUNBQWdCLEdBQTFCLFVBQTJCLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxJQUE0QjtRQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxpQkFBTSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTSxtQ0FBZ0IsR0FBdkIsVUFBd0IsS0FBSztRQUN6Qiw2Q0FBNkM7UUFDN0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRS9CLHNCQUFzQjtRQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFakMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCO2dCQUN4Qyx1RUFBdUU7Z0JBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQjtnQkFDdEMsdUVBQXVFO2dCQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEI7Z0JBQ0kseUNBQXlDO2dCQUN6QyxNQUFNLENBQUMsaUJBQU0sZ0JBQWdCLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUEzREMsUUFBUTtRQURiLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztPQUM5QixRQUFRLENBNERiO0lBQUQsZUFBQztDQUFBLEFBNURELENBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQTREMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldEFjdGl2aXR5Q2FsbGJhY2tzLCBBbmRyb2lkQWN0aXZpdHlDYWxsYmFja3N9IGZyb20gXCJ1aS9mcmFtZVwiO1xyXG5cclxuQEphdmFQcm94eShcIm9yZy5teUFwcC5NYWluQWN0aXZpdHlcIilcclxuY2xhc3MgQWN0aXZpdHkgZXh0ZW5kcyBhbmRyb2lkLmFwcC5BY3Rpdml0eSB7XHJcbiAgICBwcml2YXRlIF9jYWxsYmFja3M6IEFuZHJvaWRBY3Rpdml0eUNhbGxiYWNrcztcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoc2F2ZWRJbnN0YW5jZVN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2aXR5Q2FsbGJhY2tzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQ3JlYXRlKHRoaXMsIHNhdmVkSW5zdGFuY2VTdGF0ZSwgc3VwZXIub25DcmVhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblNhdmVJbnN0YW5jZVN0YXRlKG91dFN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblNhdmVJbnN0YW5jZVN0YXRlKHRoaXMsIG91dFN0YXRlLCBzdXBlci5vblNhdmVJbnN0YW5jZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TdGFydCh0aGlzLCBzdXBlci5vblN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblN0b3AodGhpcywgc3VwZXIub25TdG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkRlc3Ryb3kodGhpcywgc3VwZXIub25EZXN0cm95KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25CYWNrUHJlc3NlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25CYWNrUHJlc3NlZCh0aGlzLCBzdXBlci5vbkJhY2tQcmVzc2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXF1ZXN0UGVybWlzc2lvbnNSZXN1bHQocmVxdWVzdENvZGU6IG51bWJlciwgcGVybWlzc2lvbnM6IEFycmF5PFN0cmluZz4sIGdyYW50UmVzdWx0czogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblJlcXVlc3RQZXJtaXNzaW9uc1Jlc3VsdCh0aGlzLCByZXF1ZXN0Q29kZSwgcGVybWlzc2lvbnMsIGdyYW50UmVzdWx0cywgdW5kZWZpbmVkIC8qVE9ETzogRW5hYmxlIGlmIG5lZWRlZCovKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25BY3Rpdml0eVJlc3VsdChyZXF1ZXN0Q29kZTogbnVtYmVyLCByZXN1bHRDb2RlOiBudW1iZXIsIGRhdGE6IGFuZHJvaWQuY29udGVudC5JbnRlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25BY3Rpdml0eVJlc3VsdCh0aGlzLCByZXF1ZXN0Q29kZSwgcmVzdWx0Q29kZSwgZGF0YSwgc3VwZXIub25BY3Rpdml0eVJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoS2V5RXZlbnQoZXZlbnQpIHtcclxuICAgICAgICAvLyBXaGljaCBkaXJlY3Rpb24gZGlkIHRoZSBrZXkgbW92ZSAodXAvZG93bilcclxuICAgICAgICBsZXQgYWN0aW9uID0gZXZlbnQuZ2V0QWN0aW9uKCk7XHJcbiAgICBcclxuICAgICAgICAvLyBXaGF0IGtleXdhcyBwcmVzc2VkXHJcbiAgICAgICAgbGV0IGtleUNvZGUgPSBldmVudC5nZXRLZXlDb2RlKCk7XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBhbmRyb2lkLnZpZXcuS2V5RXZlbnQuS0VZQ09ERV9WT0xVTUVfVVA6XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB5b3VyIGV2ZW50IGNvZGUgKEtleUV2ZW50LkFDVElPTl9ET1dOLCBLZXlFdmVudC5BQ1RJT05fVVAgZXRjKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLRVlDT0RFX1ZPTFVNRV9VUFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIGFuZHJvaWQudmlldy5LZXlFdmVudC5LRVlDT0RFX1ZPTFVNRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHlvdXIgZXZlbnQgY29kZSAoS2V5RXZlbnQuQUNUSU9OX0RPV04sIEtleUV2ZW50LkFDVElPTl9VUCBldGMpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktFWUNPREVfVk9MVU1FX0RPV05cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIExldCB0aGUgc3lzdGVtIGRvIHdoYXQgaXQgd2FudGVkIHRvIGRvXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIuZGlzcGF0Y2hLZXlFdmVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19