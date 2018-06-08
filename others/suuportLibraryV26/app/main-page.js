"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var utils = require("utils/utils");
var context = utils.ad.getApplicationContext();
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    try {
        var NOTIFICATION_CHANNEL_ID = "1";
        var builder = new android.support.v4.app.NotificationCompat.Builder(context, NOTIFICATION_CHANNEL_ID);
        console.log(builder);
    }
    catch (error) {
        console.log(error);
    }
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBQ3BELG1DQUFxQztBQUlyQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDakQsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUM1QyxJQUFJLENBQUM7UUFDRCxJQUFNLHVCQUF1QixHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztBQUNMLENBQUM7QUFYRCxvQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5kZWNsYXJlIGxldCBhbmRyb2lkOiBhbnk7XG5cbmNvbnN0IGNvbnRleHQgPSB1dGlscy5hZC5nZXRBcHBsaWNhdGlvbkNvbnRleHQoKTtcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuIFxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBOT1RJRklDQVRJT05fQ0hBTk5FTF9JRCA9IFwiMVwiO1xuICAgICAgICBjb25zdCBidWlsZGVyID0gbmV3IGFuZHJvaWQuc3VwcG9ydC52NC5hcHAuTm90aWZpY2F0aW9uQ29tcGF0LkJ1aWxkZXIoY29udGV4dCwgTk9USUZJQ0FUSU9OX0NIQU5ORUxfSUQpO1xuICAgICAgICBjb25zb2xlLmxvZyhidWlsZGVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufSJdfQ==