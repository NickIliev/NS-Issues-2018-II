"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(_itemService) {
        this._itemService = _itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemService.load()
            .subscribe(function (result) {
            var res = result;
            _this.userId = res.userId;
            _this.title = res.title;
            _this.body = res.body;
        }, function (error) {
            console.log(error);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELCtDQUE2QztBQU83QztJQU1JLHdCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFJLENBQUM7SUFFbEQsaUNBQVEsR0FBUjtRQUFBLGlCQWVDO1FBYkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7YUFDbkIsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUVkLElBQUksR0FBRyxHQUFRLE1BQU0sQ0FBQztZQUV0QixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUV6QixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7SUF2QlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPb0MsMEJBQVc7T0FOcEMsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdXNlcklkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBib2R5OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2l0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLl9pdGVtU2VydmljZS5sb2FkKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHJlczogYW55ID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSByZXMudXNlcklkO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSByZXMudGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gcmVzLmJvZHk7XG5cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59Il19