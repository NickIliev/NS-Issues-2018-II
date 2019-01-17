"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.textField = this.tf.nativeElement;
        this.listView = this.lv.nativeElement;
        setTimeout(function () {
            _this.listView.android.smoothScrollToPosition(_this.items.length - 1);
        }, 100);
    };
    ItemsComponent.prototype.onSetupItemView = function (args) {
        args.view.context.left = this.items[args.index].from === "John";
        args.view.context.right = this.items[args.index].from === "Ann";
    };
    ItemsComponent.prototype.onSend = function (args) {
        var _this = this;
        console.log("onSend");
        var btn = args.object;
        console.log("this.textField..text " + this.textField.text);
        this.items.push({ id: 1234, from: "Ann", message: this.textField.text });
        setTimeout(function () {
            // this.listView.scrollToIndex(this.items.length - 1);
            _this.listView.android.smoothScrollToPosition(_this.items.length - 1);
            // this.listView.refresh();
        }, 100);
    };
    __decorate([
        core_1.ViewChild("tf"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "tf", void 0);
    __decorate([
        core_1.ViewChild("lv"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "lv", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            styleUrls: ["./items.component.css"],
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLCtDQUE2QztBQWM3QztJQVVJLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFdEMsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdkUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBdUI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxJQUFlO1FBQXRCLGlCQWFDO1FBWkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBZ0IsQ0FBQztRQUdsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFFdkUsVUFBVSxDQUFDO1lBQ1Asc0RBQXNEO1lBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQ25FLDJCQUEyQjtRQUMvQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBekNnQjtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBSyxpQkFBVTs4Q0FBQztJQUdmO1FBQWhCLGdCQUFTLENBQUMsSUFBSSxDQUFDO2tDQUFLLGlCQUFVOzhDQUFDO0lBUHZCLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUMsQ0FBQyx1QkFBdUIsQ0FBQztZQUNuQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBYW1DLDBCQUFXO09BWm5DLGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6W1wiLi9pdGVtcy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIFxuICAgIEBWaWV3Q2hpbGQoXCJ0ZlwiKSB0ZjogRWxlbWVudFJlZjtcbiAgICB0ZXh0RmllbGQ6IFRleHRGaWVsZDtcblxuICAgIEBWaWV3Q2hpbGQoXCJsdlwiKSBsdjogRWxlbWVudFJlZjtcbiAgICBsaXN0VmlldzogTGlzdFZpZXc7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQgPSB0aGlzLnRmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMubGlzdFZpZXcgPSB0aGlzLmx2Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RWaWV3LmFuZHJvaWQuc21vb3RoU2Nyb2xsVG9Qb3NpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgb25TZXR1cEl0ZW1WaWV3KGFyZ3M6IFNldHVwSXRlbVZpZXdBcmdzKSB7XG4gICAgICAgIGFyZ3Mudmlldy5jb250ZXh0LmxlZnQgPSB0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdLmZyb20gPT09IFwiSm9oblwiO1xuICAgICAgICBhcmdzLnZpZXcuY29udGV4dC5yaWdodCA9IHRoaXMuaXRlbXNbYXJncy5pbmRleF0uZnJvbSA9PT0gXCJBbm5cIjtcbiAgICB9XG5cbiAgICBvblNlbmQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBvblNlbmRgKTtcbiAgICAgICAgY29uc3QgYnRuID0gYXJncy5vYmplY3QgYXMgQnV0dG9uO1xuICAgICAgICBcblxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy50ZXh0RmllbGQuLnRleHQgJHt0aGlzLnRleHRGaWVsZC50ZXh0fWApO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe2lkOiAxMjM0LCBmcm9tOiBcIkFublwiLCBtZXNzYWdlOiB0aGlzLnRleHRGaWVsZC50ZXh0fSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgodGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFZpZXcuYW5kcm9pZC5zbW9vdGhTY3JvbGxUb1Bvc2l0aW9uKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdFZpZXcucmVmcmVzaCgpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cbn0iXX0=