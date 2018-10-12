"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onTap = function () {
        var test = new com.tns.TestObject(); //cant use this without the declare above
        console.log(test.doSomething()); //will print "hello" in the console
        this.message = test.doSomething();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFRMUM7SUFBQTtJQVNBLENBQUM7SUFOVSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMseUNBQXlDO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7UUFFcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQVJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztPQUVXLFlBQVksQ0FTeEI7SUFBRCxtQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmRlY2xhcmUgbGV0IGNvbTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gbmV3IGNvbS50bnMuVGVzdE9iamVjdCgpOyAvL2NhbnQgdXNlIHRoaXMgd2l0aG91dCB0aGUgZGVjbGFyZSBhYm92ZVxuICAgICAgICBjb25zb2xlLmxvZyh0ZXN0LmRvU29tZXRoaW5nKCkpOyAvL3dpbGwgcHJpbnQgXCJoZWxsb1wiIGluIHRoZSBjb25zb2xlXG5cbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGVzdC5kb1NvbWV0aGluZygpO1xuICAgIH1cbn1cbiJdfQ==