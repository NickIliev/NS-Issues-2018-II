"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var elasticsearch = require("elasticsearch");
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
    }, function (error) {
        if (error) {
            console.log('elasticsearch cluster is down!');
        }
        else {
            console.log('All is well');
        }
    });
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBRXBELDZDQUErQztBQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDcEMsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixHQUFHLEVBQUUsT0FBTztDQUNmLENBQUMsQ0FBQztBQUVILHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1Isb0NBQW9DO1FBQ3BDLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCLEVBQUUsVUFBQyxLQUFLO1FBQ0wsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFkRCxvQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuaW1wb3J0ICogYXMgZWxhc3RpY3NlYXJjaCBmcm9tICdlbGFzdGljc2VhcmNoJztcbmNvbnN0IGNsaWVudCA9IG5ldyBlbGFzdGljc2VhcmNoLkNsaWVudCh7XG4gICAgaG9zdDogJ2xvY2FsaG9zdDo5MjAwJyxcbiAgICBsb2c6ICd0cmFjZSdcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcblxuICAgIGNsaWVudC5waW5nKHtcbiAgICAgICAgLy8gcGluZyB1c3VhbGx5IGhhcyBhIDMwMDBtcyB0aW1lb3V0XG4gICAgICAgIHJlcXVlc3RUaW1lb3V0OiAxMDAwXG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsYXN0aWNzZWFyY2ggY2x1c3RlciBpcyBkb3duIScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsbCBpcyB3ZWxsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iXX0=