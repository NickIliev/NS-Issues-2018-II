"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
function navigatingTo(args) {
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
function navigate() {
    var frame = frame_1.getFrameById("rootFrame");
    var navEntry = {
        moduleName: "sub-page",
        animated: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "fade",
            duration: 380
        }
    };
    frame.navigate(navEntry);
}
exports.navigate = navigate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsbURBQW1GO0FBRW5GLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDSSxJQUFJLEtBQUssR0FBRyxvQkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXRDLElBQUksUUFBUSxHQUFHO1FBQ1gsVUFBVSxFQUFFLFVBQVU7UUFDdEIsUUFBUSxFQUFFLElBQUk7UUFDZCxtREFBbUQ7UUFDbkQsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsR0FBRztTQUNoQjtLQUNKLENBQUM7SUFFRixLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFkRCw0QkFjQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IGdldEZyYW1lQnlJZCwgdG9wbW9zdCwgTmF2aWdhdGlvbkVudHJ5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgbGV0IGZyYW1lID0gZ2V0RnJhbWVCeUlkKFwicm9vdEZyYW1lXCIpO1xuXG4gICAgbGV0IG5hdkVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInN1Yi1wYWdlXCIsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnJhbWUubmF2aWdhdGUobmF2RW50cnkpO1xufSJdfQ==