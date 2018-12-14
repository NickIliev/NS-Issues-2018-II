"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("tns-core-modules/ui/page");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(_params, _page) {
        var _this = this;
        this._params = _params;
        this._page = _page;
        this._page.on("unloaded", function () {
            console.log(">>>>>>>>>>>>>>>> PAGE unloaded >>>>>>>>>>>>>");
            _this._params.closeCallback("[ngOnDestroy] Happy New Year!!!");
        });
    }
    ModalComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this._params.closeCallback("[ngOnDestroy] Happy New Year!!!");
    };
    ModalComponent.prototype.onLoaded = function () {
        console.log("Stack Loaded");
    };
    ModalComponent.prototype.onUnloaded = function () {
        console.log("Stack Unloaded");
        this._params.closeCallback("[onUnloaded] Happy New Year!!!");
    };
    ModalComponent.prototype.closeModal = function () {
        this._params.closeCallback("[closeModal] Happy New Year!!!");
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: "ns-modals",
            moduleId: module.id,
            templateUrl: "./modal.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQUN0RSxpREFBZ0Q7QUFPaEQ7SUFFSSx3QkFBb0IsT0FBMEIsRUFBVSxLQUFXO1FBQW5FLGlCQUtDO1FBTG1CLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUE3QlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FHK0IsZ0NBQWlCLEVBQWlCLFdBQUk7T0FGMUQsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1vZGFsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZS5vbihcInVubG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+Pj4+Pj4+Pj4+Pj4+Pj4+IFBBR0UgdW5sb2FkZWQgPj4+Pj4+Pj4+Pj4+PlwiKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJbbmdPbkRlc3Ryb3ldIEhhcHB5IE5ldyBZZWFyISEhXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25EZXN0cm95XCIpO1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKFwiW25nT25EZXN0cm95XSBIYXBweSBOZXcgWWVhciEhIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWNrIExvYWRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVubG9hZGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhY2sgVW5sb2FkZWRcIik7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJbb25VbmxvYWRlZF0gSGFwcHkgTmV3IFllYXIhISFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhcIltjbG9zZU1vZGFsXSBIYXBweSBOZXcgWWVhciEhIVwiKTtcclxuICAgIH1cclxufSJdfQ==