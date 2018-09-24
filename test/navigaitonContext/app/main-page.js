"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
function navigate() {
    var frame = frame_1.getFrameById("myFrame");
    frame.navigate({
        moduleName: "sub-page",
        context: { title: "NativeScript is Awesome!" }
    });
}
exports.navigate = navigate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQXlEO0FBRXpEO0lBQ0ksSUFBTSxLQUFLLEdBQUcsb0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV0QyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ1gsVUFBVSxFQUFFLFVBQVU7UUFDdEIsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixFQUFDO0tBQ2hELENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCw0QkFPQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKCkge1xuICAgIGNvbnN0IGZyYW1lID0gZ2V0RnJhbWVCeUlkKFwibXlGcmFtZVwiKTtcbiAgICBcbiAgICBmcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwic3ViLXBhZ2VcIixcbiAgICAgICAgY29udGV4dDogeyB0aXRsZTogXCJOYXRpdmVTY3JpcHQgaXMgQXdlc29tZSFcIn1cbiAgICB9KTtcbn0iXX0=