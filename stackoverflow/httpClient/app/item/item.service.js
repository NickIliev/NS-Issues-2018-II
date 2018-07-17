"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ItemService = /** @class */ (function () {
    function ItemService(_httpClient) {
        this._httpClient = _httpClient;
    }
    ItemService.prototype.load = function () {
        var url = "https://jsonplaceholder.typicode.com/posts/1";
        var headers = this.createRequestHeader();
        return this._httpClient.get(url, { headers: headers });
    };
    ItemService.prototype.createRequestHeader = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUE2RTtBQUk3RTtJQUNJLHFCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUFJLENBQUM7SUFFaEQsMEJBQUksR0FBSjtRQUNJLElBQUksR0FBRyxHQUFHLDhDQUE4QyxDQUFDO1FBRXpELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseUNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBakJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFd0IsaUJBQVU7T0FEbEMsV0FBVyxDQWtCdkI7SUFBRCxrQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCI7XG4gICAgXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XG4gICAgXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwQ2xpZW50LmdldCh1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG59XG4iXX0=