"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        nativescript_camera_1.requestPermissions().then(function () {
            console.log("permissions granted!");
        });
    }
    ItemsComponent.prototype.takePicture = function () {
        var _this = this;
        nativescript_camera_1.takePicture().
            then(function (imageAsset) {
            console.log("Result is an image asset instance");
            _this.src = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJEQUFxRTtBQVFyRTtJQUdJO1FBQ0ksd0NBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFBQSxpQkFTQztRQVBHLGlDQUFXLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBbEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQW1CMUI7SUFBRCxxQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHJlcXVlc3RQZXJtaXNzaW9ucywgdGFrZVBpY3R1cmV9IGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQvaW1hZ2UtYXNzZXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuICAgIHNyYzogSW1hZ2VBc3NldFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwZXJtaXNzaW9ucyBncmFudGVkIVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFrZVBpY3R1cmUoKSB7XG4gICAgICAgIFxuICAgICAgICB0YWtlUGljdHVyZSgpLlxuICAgICAgICAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==