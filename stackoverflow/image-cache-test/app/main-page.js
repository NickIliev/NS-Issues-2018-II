"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var appViewModel = new reddit_app_view_model_1.AppViewModel();
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = appViewModel;
}
exports.pageLoaded = pageLoaded;
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frame_1.topmost().navigate({
        moduleName: "details-page",
        bindingContext: appViewModel.redditItems.getItem(args.index)
    });
}
exports.listViewItemTap = listViewItemTap;
function listViewLoadMoreItems(args) {
    // Increase model items length with model items loadSize property value
    //appViewModel.redditItems.length += appViewModel.redditItems.loadSize;
}
exports.listViewLoadMoreItems = listViewLoadMoreItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsbURBQW9FO0FBQ3BFLGlFQUF1RDtBQUV2RCxJQUFJLFlBQVksR0FBRyxJQUFJLG9DQUFZLEVBQUUsQ0FBQztBQUV0QyxrRUFBa0U7QUFDbEUsU0FBZ0IsVUFBVSxDQUFDLElBQXlCO0lBQ2hELHVCQUF1QjtJQUN2QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0FBQ3ZDLENBQUM7QUFMRCxnQ0FLQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxJQUEyQjtJQUN2RCxxRkFBcUY7SUFDckYsZUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ3BCLFVBQVUsRUFBRSxjQUFjO1FBQzFCLGNBQWMsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQy9ELENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCwwQ0FNQztBQUVELFNBQWdCLHFCQUFxQixDQUFDLElBQXlCO0lBQzNELHVFQUF1RTtJQUN2RSx1RUFBdUU7QUFDM0UsQ0FBQztBQUhELHNEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIGFzIE9ic2VydmFibGVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIGFzIExpc3RWaWV3SXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgdG9wbW9zdCBhcyB0b3Btb3N0RnJhbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgQXBwVmlld01vZGVsIH0gZnJvbSBcIi4vcmVkZGl0LWFwcC12aWV3LW1vZGVsXCI7XG5cbnZhciBhcHBWaWV3TW9kZWwgPSBuZXcgQXBwVmlld01vZGVsKCk7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJsb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBPYnNlcnZhYmxlRXZlbnREYXRhKSB7XG4gICAgLy8gR2V0IHRoZSBldmVudCBzZW5kZXJcbiAgICB2YXIgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGFwcFZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RWaWV3SXRlbVRhcChhcmdzOiBMaXN0Vmlld0l0ZW1FdmVudERhdGEpIHtcbiAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgZGV0YWlscyBwYWdlIHdpdGggY29udGV4dCBzZXQgdG8gdGhlIGRhdGEgaXRlbSBmb3Igc3BlY2lmaWVkIGluZGV4XG4gICAgdG9wbW9zdEZyYW1lKCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcImRldGFpbHMtcGFnZVwiLFxuICAgICAgICBiaW5kaW5nQ29udGV4dDogYXBwVmlld01vZGVsLnJlZGRpdEl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleClcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RWaWV3TG9hZE1vcmVJdGVtcyhhcmdzOiBPYnNlcnZhYmxlRXZlbnREYXRhKSB7XG4gICAgLy8gSW5jcmVhc2UgbW9kZWwgaXRlbXMgbGVuZ3RoIHdpdGggbW9kZWwgaXRlbXMgbG9hZFNpemUgcHJvcGVydHkgdmFsdWVcbiAgICAvL2FwcFZpZXdNb2RlbC5yZWRkaXRJdGVtcy5sZW5ndGggKz0gYXBwVmlld01vZGVsLnJlZGRpdEl0ZW1zLmxvYWRTaXplO1xufSJdfQ==