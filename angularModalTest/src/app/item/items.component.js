"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("./modal.component");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(_modalService, _vcRef) {
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this.results = "";
    }
    ItemsComponent.prototype.showModal = function () {
        var options = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false,
            stretched: true
        };
        this._modalService.showModal(modal_component_1.ModalComponent, options)
            .then(function (result) {
            console.log(">>>>>>>>>>>>>> closeCallback RESULT: ", result);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGtFQUEyRjtBQUMzRixxREFBbUQ7QUFPbkQ7SUFHSSx3QkFBb0IsYUFBaUMsRUFBVSxNQUF3QjtRQUFuRSxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUZ2RixZQUFPLEdBQVUsRUFBRSxDQUFDO0lBRXVFLENBQUM7SUFHNUYsa0NBQVMsR0FBVDtRQUNJLElBQU0sT0FBTyxHQUF1QjtZQUNoQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM3QixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxnQ0FBYyxFQUFFLE9BQU8sQ0FBQzthQUNoRCxJQUFJLENBQUMsVUFBQyxNQUFjO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBbEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBSXFDLGlDQUFrQixFQUFrQix1QkFBZ0I7T0FIOUUsY0FBYyxDQW1CMUI7SUFBRCxxQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nT3B0aW9ucywgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tb2RhbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuICAgIHJlc3VsdHM6IHN0cmluZyA9XCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cblxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5fdmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7fSxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgc3RyZXRjaGVkOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+Pj4gY2xvc2VDYWxsYmFjayBSRVNVTFQ6IFwiLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==