"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(_params) {
        this._params = _params;
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
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQU90RTtJQUVJLHdCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUU5QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUExQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FHK0IsZ0NBQWlCO09BRnJDLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1tb2RhbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL21vZGFsLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uRGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhcIltuZ09uRGVzdHJveV0gSGFwcHkgTmV3IFllYXIhISFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFjayBMb2FkZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25VbmxvYWRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWNrIFVubG9hZGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKFwiW29uVW5sb2FkZWRdIEhhcHB5IE5ldyBZZWFyISEhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJbY2xvc2VNb2RhbF0gSGFwcHkgTmV3IFllYXIhISFcIik7XHJcbiAgICB9XHJcbn0iXX0=