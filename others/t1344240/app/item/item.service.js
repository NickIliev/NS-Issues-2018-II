"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.postData = function () {
        return this.http.post("https://httpbin.org/stream-bytes/20", {
            method: "POST",
            responseType: http_2.ResponseContentType.Blob,
            headers: new http_1.HttpHeaders({
                'Content-Type': "application/octet-stream"
            })
        });
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxzQ0FBbUQ7QUFHbkQ7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRTtZQUN6RCxNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSwwQkFBbUIsQ0FBQyxJQUFJO1lBQ3RDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7Z0JBQ3JCLGNBQWMsRUFBRSwwQkFBMEI7YUFDN0MsQ0FBQztTQUNMLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFaUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgUmVzcG9uc2VDb250ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcG9zdERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHBzOi8vaHR0cGJpbi5vcmcvc3RyZWFtLWJ5dGVzLzIwXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IFJlc3BvbnNlQ29udGVudFR5cGUuQmxvYixcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cblxuIl19