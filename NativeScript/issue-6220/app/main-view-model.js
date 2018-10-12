"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        _this.items = [{ mainCourse: "some111" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" },
            { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }, { mainCourse: "some222" }, { mainCourse: "larger-large-larger-some333" }];
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        this._counter--;
        this.updateMessage();
    };
    HelloWorldModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBUTNDO1FBQUEsWUFDSSxpQkFBTyxTQWVWO1FBYkcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUdyQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUM7WUFDekcsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQztZQUN6SSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFDO1lBQ3pJLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUM7WUFDekksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQztZQUN6SSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFDO1lBQ3pJLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUM7WUFDekksRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBQyxDQUFDLENBQUM7O0lBQ2hKLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQy9DLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNNLCtCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx1Q0FBYSxHQUFyQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLCtEQUErRCxDQUFDO1FBQ25GLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQU0sSUFBSSxDQUFDLFFBQVEsZUFBWSxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBakRELENBQXFDLHVCQUFVLEdBaUQ5QztBQWpEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgaXRlbXM6IEFycmF5PGFueT47XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcbiAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG5cblxuICAgICAgICB0aGlzLml0ZW1zID0gW3ttYWluQ291cnNlOiBcInNvbWUxMTFcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XG4gICAgICAgICx7bWFpbkNvdXJzZTogXCJzb21lMjIyXCJ9LCB7bWFpbkNvdXJzZTogXCJsYXJnZXItbGFyZ2UtbGFyZ2VyLXNvbWUzMzNcIn0se21haW5Db3Vyc2U6IFwic29tZTIyMlwifSwge21haW5Db3Vyc2U6IFwibGFyZ2VyLWxhcmdlLWxhcmdlci1zb21lMzMzXCJ9XTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGAke3RoaXMuX2NvdW50ZXJ9IHRhcHMgbGVmdGA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=