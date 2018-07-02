"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(_itemService, _page) {
        this._itemService = _itemService;
        this._page = _page;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this._itemService.getItems();
    };
    ItemsComponent.prototype.onItemTap = function (args) {
        var lb = this._page.getViewById(args.view.id);
        if (lb.className === "list-group-item item-selected") {
            lb.className = "list-group-item";
        }
        else {
            lb.className = "list-group-item item-selected";
        }
        // let listview = args.object as ListView;
        // listview.refresh();
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBSWxELGdDQUErQjtBQUcvQiwrQ0FBNkM7QUFPN0M7SUFHSSx3QkFBb0IsWUFBeUIsRUFBVSxLQUFXO1FBQTlDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFFdkUsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQW1CO1FBRXpCLElBQUksRUFBRSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDO1FBQ25ELENBQUM7UUFFRCwwQ0FBMEM7UUFDMUMsc0JBQXNCO0lBQzFCLENBQUM7SUFwQlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FJb0MsMEJBQVcsRUFBaUIsV0FBSTtPQUh6RCxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExpc3RWaWV3LCBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLl9pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKSB7XG5cbiAgICAgICAgbGV0IGxiID0gPExhYmVsPnRoaXMuX3BhZ2UuZ2V0Vmlld0J5SWQoYXJncy52aWV3LmlkKTtcbiAgICAgICAgaWYgKGxiLmNsYXNzTmFtZSA9PT0gXCJsaXN0LWdyb3VwLWl0ZW0gaXRlbS1zZWxlY3RlZFwiKSB7XG4gICAgICAgICAgICBsYi5jbGFzc05hbWUgPSBcImxpc3QtZ3JvdXAtaXRlbVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGIuY2xhc3NOYW1lID0gXCJsaXN0LWdyb3VwLWl0ZW0gaXRlbS1zZWxlY3RlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgTGlzdFZpZXc7XG4gICAgICAgIC8vIGxpc3R2aWV3LnJlZnJlc2goKTtcbiAgICB9XG59Il19