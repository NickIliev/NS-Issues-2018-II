"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var image_source_1 = require("tns-core-modules/image-source");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var firstThumbnailImageSource = image_source_1.fromFile("~/res/first-image.png");
var defaultImageSource = image_source_1.fromFile("~/res/reddit-logo-transparent.png");
var ISLOADING = "isLoading";
var THUMBNAIL_IMAGE = "thumbnailImage";
var IMAGE_SOURCE = "imageSource";
var RedditViewModel = /** @class */ (function (_super) {
    __extends(RedditViewModel, _super);
    function RedditViewModel(source) {
        var _this = _super.call(this) || this;
        _this._isLoading = false;
        _this._source = source;
        if (_this._source) {
            var property;
            for (property in _this._source) {
                _this.set(property, _this._source[property]);
            }
        }
        return _this;
    }
    Object.defineProperty(RedditViewModel.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading !== value) {
                this._isLoading = value;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: ISLOADING, value: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "thumbnailImage", {
        get: function () {
            var _this = this;
            if (!this._source) {
                return reddit_app_view_model_1.defaultThumbnailImageSource;
            }
            if (this._source.title === "reddit 101") {
                return firstThumbnailImageSource;
            }
            var url = this._source.thumbnail;
            if (!_isValidImageUrl(url)) {
                return reddit_app_view_model_1.defaultNoThumbnailImageSource;
            }
            var image = reddit_app_view_model_1.cache.get(url);
            console.log("cache.get(url) " + reddit_app_view_model_1.cache.get(url)); // HERE
            if (image) {
                return image;
            }
            this.isLoading = true;
            reddit_app_view_model_1.cache.push({
                key: url,
                url: url,
                completed: function (image, key) {
                    if (url === key) {
                        _this.isLoading = false;
                        _this.notify({ object: _this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: THUMBNAIL_IMAGE, value: image });
                    }
                }
            });
            return reddit_app_view_model_1.defaultThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "imageSource", {
        get: function () {
            var _this = this;
            if (this._source) {
                var url;
                try {
                    url = this._source.preview.images[0].source.url;
                }
                catch (e) {
                    url = this._source.url;
                }
                if (_isValidImageUrl(url)) {
                    this.isLoading = true;
                    image_source_1.fromUrl(url).then(function (result) {
                        _this.isLoading = false;
                        _this.notify({ object: _this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: IMAGE_SOURCE, value: result });
                    });
                }
            }
            return defaultImageSource;
        },
        enumerable: true,
        configurable: true
    });
    return RedditViewModel;
}(observable_1.Observable));
exports.RedditViewModel = RedditViewModel;
function _isValidImageUrl(url) {
    return url && (url.indexOf(".png") !== -1 || url.indexOf(".jpg") !== -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LWl0ZW0tdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZGRpdC1pdGVtLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFDOUQsOERBQTRIO0FBRzVILGlFQUE0RztBQUU1RyxJQUFJLHlCQUF5QixHQUFHLHVCQUFtQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDN0UsSUFBSSxrQkFBa0IsR0FBRyx1QkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRWxGLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUM1QixJQUFJLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUN2QyxJQUFJLFlBQVksR0FBRyxhQUFhLENBQUM7QUFFakM7SUFBcUMsbUNBQVU7SUFHM0MseUJBQVksTUFBZ0I7UUFBNUIsWUFDSSxpQkFBTyxTQVVWO1FBTU8sZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFkdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdEIsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxRQUFnQixDQUFDO1lBQ3JCLEtBQUssUUFBUSxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUM5QztTQUNKOztJQUNMLENBQUM7SUFFRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksc0NBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBYyxLQUFjO1lBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ25IO1FBQ0wsQ0FBQzs7O09BTkE7SUFRRCxzQkFBSSwyQ0FBYzthQUFsQjtZQUFBLGlCQW1DQztZQWxDRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixPQUFPLG1EQUEyQixDQUFDO2FBQ3RDO1lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7Z0JBQ3JDLE9BQU8seUJBQXlCLENBQUM7YUFDcEM7WUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUVqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8scURBQTZCLENBQUE7YUFDdkM7WUFFRCxJQUFJLEtBQUssR0FBRyw2QkFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQiw2QkFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUV4RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLDZCQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLFNBQVMsRUFBRSxVQUFDLEtBQVUsRUFBRSxHQUFXO29CQUMvQixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQ2IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSSxFQUFFLFNBQVMsRUFBRSx1QkFBVSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7cUJBQ3pIO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUM7WUFFSCxPQUFPLG1EQUEyQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7YUFBZjtZQUFBLGlCQXNCQztZQXJCRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLENBQUM7Z0JBQ1IsSUFBSTtvQkFDQSxHQUFHLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQzFEO2dCQUNELE9BQU8sQ0FBQyxFQUFFO29CQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDMUI7Z0JBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBRXRCLHNCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07d0JBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUksRUFBRSxTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUN4SCxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1lBRUQsT0FBTyxrQkFBa0IsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTNGRCxDQUFxQyx1QkFBVSxHQTJGOUM7QUEzRlksMENBQWU7QUE2RjVCLFNBQVMsZ0JBQWdCLENBQUMsR0FBVztJQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUZpbGUgYXMgaW1hZ2VTb3VyY2VGcm9tRmlsZSwgZnJvbVVybCBhcyBpbWFnZVNvdXJjZUZyb21VcmwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcblxuaW1wb3J0IHsgSXRlbURhdGEgfSBmcm9tIFwiLi9yZWRkaXQtbW9kZWxcIjtcbmltcG9ydCB7IGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZSwgZGVmYXVsdE5vVGh1bWJuYWlsSW1hZ2VTb3VyY2UsIGNhY2hlIH0gZnJvbSBcIi4vcmVkZGl0LWFwcC12aWV3LW1vZGVsXCI7XG5cbnZhciBmaXJzdFRodW1ibmFpbEltYWdlU291cmNlID0gaW1hZ2VTb3VyY2VGcm9tRmlsZShcIn4vcmVzL2ZpcnN0LWltYWdlLnBuZ1wiKTtcbnZhciBkZWZhdWx0SW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZUZyb21GaWxlKFwifi9yZXMvcmVkZGl0LWxvZ28tdHJhbnNwYXJlbnQucG5nXCIpO1xuXG52YXIgSVNMT0FESU5HID0gXCJpc0xvYWRpbmdcIjtcbnZhciBUSFVNQk5BSUxfSU1BR0UgPSBcInRodW1ibmFpbEltYWdlXCI7XG52YXIgSU1BR0VfU09VUkNFID0gXCJpbWFnZVNvdXJjZVwiO1xuXG5leHBvcnQgY2xhc3MgUmVkZGl0Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9zb3VyY2U6IEl0ZW1EYXRhO1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogSXRlbURhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKHByb3BlcnR5IGluIHRoaXMuX3NvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHByb3BlcnR5LCB0aGlzLl9zb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzb3VyY2UoKTogSXRlbURhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gICAgfVxuICAgIHNldCBpc0xvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoeyBvYmplY3Q6IHRoaXMsIGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBwcm9wZXJ0eU5hbWU6IElTTE9BRElORywgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRodW1ibmFpbEltYWdlKCk6IEltYWdlU291cmNlIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VGh1bWJuYWlsSW1hZ2VTb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc291cmNlLnRpdGxlID09PSBcInJlZGRpdCAxMDFcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0VGh1bWJuYWlsSW1hZ2VTb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fc291cmNlLnRodW1ibmFpbDtcblxuICAgICAgICBpZiAoIV9pc1ZhbGlkSW1hZ2VVcmwodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHROb1RodW1ibmFpbEltYWdlU291cmNlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW1hZ2UgPSBjYWNoZS5nZXQodXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYGNhY2hlLmdldCh1cmwpICR7Y2FjaGUuZ2V0KHVybCl9YCk7IC8vIEhFUkVcblxuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY2FjaGUucHVzaCh7XG4gICAgICAgICAgICBrZXk6IHVybCxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgY29tcGxldGVkOiAoaW1hZ2U6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoeyBvYmplY3Q6IHRoaXMsIGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBwcm9wZXJ0eU5hbWU6IFRIVU1CTkFJTF9JTUFHRSwgdmFsdWU6IGltYWdlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXQgaW1hZ2VTb3VyY2UoKTogSW1hZ2VTb3VyY2Uge1xuICAgICAgICBpZiAodGhpcy5fc291cmNlKSB7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB1cmwgPSAoPGFueT50aGlzLl9zb3VyY2UpLnByZXZpZXcuaW1hZ2VzWzBdLnNvdXJjZS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuX3NvdXJjZS51cmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfaXNWYWxpZEltYWdlVXJsKHVybCkpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGltYWdlU291cmNlRnJvbVVybCh1cmwpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkoeyBvYmplY3Q6IHRoaXMsIGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBwcm9wZXJ0eU5hbWU6IElNQUdFX1NPVVJDRSwgdmFsdWU6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWZhdWx0SW1hZ2VTb3VyY2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfaXNWYWxpZEltYWdlVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVybCAmJiAodXJsLmluZGV4T2YoXCIucG5nXCIpICE9PSAtMSB8fCB1cmwuaW5kZXhPZihcIi5qcGdcIikgIT09IC0xKTtcbn0iXX0=