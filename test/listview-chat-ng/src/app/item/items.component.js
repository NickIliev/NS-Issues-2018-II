"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var platform_1 = require("tns-core-modules/platform");
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
            if (platform_1.isAndroid) {
                _this.listView.android.smoothScrollToPosition(_this.items.length - 1);
            }
            else {
                _this.listView.scrollToIndexAnimated(_this.items.length - 1);
            }
        }, 300);
    };
    ItemsComponent.prototype.onSetupItemView = function (args) {
        args.view.context.left = this.items[args.index].from === "John";
        args.view.context.right = this.items[args.index].from === "Ann";
    };
    ItemsComponent.prototype.onSendViaReturn = function (args) {
        var _this = this;
        console.log("this.textField..text " + this.textField.text);
        this.items.push({ id: 1234, from: "Ann", message: this.textField.text });
        setTimeout(function () {
            if (platform_1.isAndroid) {
                _this.listView.android.smoothScrollToPosition(_this.items.length - 1);
            }
            else {
                _this.listView.scrollToIndexAnimated(_this.items.length - 1);
            }
        }, 300);
        this.textField.text = "";
    };
    ItemsComponent.prototype.onSend = function (args) {
        var _this = this;
        console.log("onSend");
        var btn = args.object;
        console.log("this.textField..text " + this.textField.text);
        this.items.push({ id: 1234, from: "Ann", message: this.textField.text });
        setTimeout(function () {
            if (platform_1.isAndroid) {
                _this.listView.android.smoothScrollToPosition(_this.items.length - 1);
            }
            else {
                _this.listView.scrollToIndexAnimated(_this.items.length - 1);
            }
        }, 300);
        this.textField.text = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLCtDQUE2QztBQU83QyxzREFBNkQ7QUFRN0Q7SUFVSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBRXRDLFVBQVUsQ0FBQztZQUNQLElBQUksb0JBQVMsRUFBRTtnQkFDWCxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBdUI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBZTtRQUEvQixpQkFjQztRQVpHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUV2RSxVQUFVLENBQUM7WUFDUCxJQUFJLG9CQUFTLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkU7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQzthQUM3RDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLElBQWU7UUFBdEIsaUJBZ0JDO1FBZkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBZ0IsQ0FBQztRQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFFdkUsVUFBVSxDQUFDO1lBQ1AsSUFBSSxvQkFBUyxFQUFFO2dCQUNYLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0Q7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWhFZ0I7UUFBaEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUM7a0NBQUssaUJBQVU7OENBQUM7SUFHZjtRQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQztrQ0FBSyxpQkFBVTs4Q0FBQztJQVB2QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFDLENBQUMsdUJBQXVCLENBQUM7WUFDbkMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQWFtQywwQkFBVztPQVpuQyxjQUFjLENBcUUxQjtJQUFELHFCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFNldHVwSXRlbVZpZXdBcmdzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXNcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7IFxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOltcIi4vaXRlbXMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBcbiAgICBAVmlld0NoaWxkKFwidGZcIikgdGY6IEVsZW1lbnRSZWY7XG4gICAgdGV4dEZpZWxkOiBUZXh0RmllbGQ7XG5cbiAgICBAVmlld0NoaWxkKFwibHZcIikgbHY6IEVsZW1lbnRSZWY7XG4gICAgbGlzdFZpZXc6IExpc3RWaWV3O1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkID0gdGhpcy50Zi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmxpc3RWaWV3ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFZpZXcuYW5kcm9pZC5zbW9vdGhTY3JvbGxUb1Bvc2l0aW9uKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFZpZXcuc2Nyb2xsVG9JbmRleEFuaW1hdGVkKHRoaXMuaXRlbXMubGVuZ3RoIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBvblNldHVwSXRlbVZpZXcoYXJnczogU2V0dXBJdGVtVmlld0FyZ3MpIHtcbiAgICAgICAgYXJncy52aWV3LmNvbnRleHQubGVmdCA9IHRoaXMuaXRlbXNbYXJncy5pbmRleF0uZnJvbSA9PT0gXCJKb2huXCI7XG4gICAgICAgIGFyZ3Mudmlldy5jb250ZXh0LnJpZ2h0ID0gdGhpcy5pdGVtc1thcmdzLmluZGV4XS5mcm9tID09PSBcIkFublwiO1xuICAgIH1cblxuICAgIG9uU2VuZFZpYVJldHVybihhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzLnRleHRGaWVsZC4udGV4dCAke3RoaXMudGV4dEZpZWxkLnRleHR9YCk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7aWQ6IDEyMzQsIGZyb206IFwiQW5uXCIsIG1lc3NhZ2U6IHRoaXMudGV4dEZpZWxkLnRleHR9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3LmFuZHJvaWQuc21vb3RoU2Nyb2xsVG9Qb3NpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3LnNjcm9sbFRvSW5kZXhBbmltYXRlZCh0aGlzLml0ZW1zLmxlbmd0aCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9IFwiXCI7XG4gICAgfVxuXG4gICAgb25TZW5kKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgb25TZW5kYCk7XG4gICAgICAgIGNvbnN0IGJ0biA9IGFyZ3Mub2JqZWN0IGFzIEJ1dHRvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzLnRleHRGaWVsZC4udGV4dCAke3RoaXMudGV4dEZpZWxkLnRleHR9YCk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7aWQ6IDEyMzQsIGZyb206IFwiQW5uXCIsIG1lc3NhZ2U6IHRoaXMudGV4dEZpZWxkLnRleHR9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3LmFuZHJvaWQuc21vb3RoU2Nyb2xsVG9Qb3NpdGlvbih0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3LnNjcm9sbFRvSW5kZXhBbmltYXRlZCh0aGlzLml0ZW1zLmxlbmd0aCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9IFwiXCI7XG4gICAgfVxufSJdfQ==