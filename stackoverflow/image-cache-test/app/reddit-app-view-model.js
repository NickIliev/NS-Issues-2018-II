"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_source_1 = require("tns-core-modules/image-source");
var virtual_array_1 = require("tns-core-modules/data/virtual-array");
var observable_1 = require("tns-core-modules/data/observable");
var image_cache_1 = require("tns-core-modules/ui/image-cache");
var reddit_item_view_model_1 = require("./reddit-item-view-model");
var aboutText = "Cuteness is a proof of concept app demonstrating the Telerik's NativeScript for writing native mobile applications using JavaScript.";
exports.defaultThumbnailImageSource = image_source_1.fromFile("~/res/reddit-logo.png");
exports.defaultNoThumbnailImageSource = image_source_1.fromFile("~/res/no-image.png");
var redditUrl = "https://www.reddit.com/r/aww.json?limit=";
var after;
var ISSCROLLING = "isLoading";
// initialize the image cache for the main list
exports.cache = new image_cache_1.Cache();
exports.cache.placeholder = exports.defaultThumbnailImageSource;
exports.cache.maxRequests = 5;
var AppViewModel = /** @class */ (function (_super) {
    __extends(AppViewModel, _super);
    function AppViewModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isScrolling = false;
        return _this;
    }
    Object.defineProperty(AppViewModel.prototype, "redditItems", {
        get: function () {
            var _this = this;
            if (!this._redditItems) {
                this._redditItems = new virtual_array_1.VirtualArray(1000);
                this._redditItems.loadSize = 50;
                this._redditItems.on(virtual_array_1.VirtualArray.itemsLoadingEvent, function (args) {
                    fetch(redditUrl + args.count + (after ? "&after=" + after : "")).then(function (response) { return response.json(); }).then(function (result) {
                        var itemsToLoad = result.data.children.map(function (i) {
                            return new reddit_item_view_model_1.RedditViewModel(i.data);
                        });
                        _this._redditItems.load(args.index, itemsToLoad);
                        var lastItem = itemsToLoad[itemsToLoad.length - 1];
                        if (lastItem) {
                            after = itemsToLoad[itemsToLoad.length - 1].source.name;
                        }
                    });
                });
            }
            return this._redditItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "isScrolling", {
        get: function () {
            return this._isScrolling;
        },
        set: function (value) {
            if (this._isScrolling !== value) {
                this._isScrolling = value;
                if (value) {
                    exports.cache.disableDownload();
                }
                else {
                    exports.cache.enableDownload();
                }
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: ISSCROLLING, value: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "aboutText", {
        get: function () {
            return aboutText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "defaultThumbnailImageSource", {
        get: function () {
            return exports.defaultThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "defaultNoThumbnailImageSource", {
        get: function () {
            return exports.defaultNoThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    return AppViewModel;
}(observable_1.Observable));
exports.AppViewModel = AppViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LWFwcC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVkZGl0LWFwcC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOERBQTZGO0FBQzdGLHFFQUFpSDtBQUNqSCwrREFBOEQ7QUFDOUQsK0RBQXNFO0FBR3RFLG1FQUEyRDtBQUUzRCxJQUFJLFNBQVMsR0FBRyxzSUFBc0ksQ0FBQztBQUM1SSxRQUFBLDJCQUEyQixHQUFHLHVCQUFtQixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDM0UsUUFBQSw2QkFBNkIsR0FBRyx1QkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXJGLElBQUksU0FBUyxHQUFHLDBDQUEwQyxDQUFDO0FBQzNELElBQUksS0FBYSxDQUFDO0FBQ2xCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUU5QiwrQ0FBK0M7QUFDcEMsUUFBQSxLQUFLLEdBQUcsSUFBSSxtQkFBVSxFQUFFLENBQUM7QUFDcEMsYUFBSyxDQUFDLFdBQVcsR0FBRyxtQ0FBMkIsQ0FBQztBQUNoRCxhQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUV0QjtJQUFrQyxnQ0FBVTtJQUE1QztRQUFBLHFFQTBEQztRQTlCVyxrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUE4QmpDLENBQUM7SUF2REcsc0JBQUkscUNBQVc7YUFBZjtZQUFBLGlCQXVCQztZQXRCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQWtCLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLDRCQUFZLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxJQUFrQztvQkFFcEYsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBYSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO3dCQUV0SCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDOzRCQUN4QyxPQUFPLElBQUksd0NBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO3dCQUVILEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBRWhELElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLFFBQVEsRUFBRTs0QkFDVixLQUFLLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDM0Q7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHFDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBRTFCLElBQUksS0FBSyxFQUFFO29CQUNQLGFBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDM0I7cUJBQ0k7b0JBQ0QsYUFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUMxQjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3JIO1FBQ0wsQ0FBQzs7O09BZEE7SUFnQkQsc0JBQUksbUNBQVM7YUFBYjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQTJCO2FBQS9CO1lBQ0ksT0FBTyxtQ0FBMkIsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUE2QjthQUFqQztZQUNJLE9BQU8scUNBQTZCLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFDTCxtQkFBQztBQUFELENBQUMsQUExREQsQ0FBa0MsdUJBQVUsR0EwRDNDO0FBMURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlIGFzIGltYWdlU291cmNlRnJvbUZpbGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgVmlydHVhbEFycmF5LCBJdGVtc0xvYWRpbmcgYXMgdmlydHVhbEFycmF5SXRlbXNMb2FkaW5nRGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvdmlydHVhbC1hcnJheVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENhY2hlIGFzIEltYWdlQ2FjaGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS1jYWNoZVwiO1xyXG5cclxuaW1wb3J0IHsgRGF0YSBhcyBSZWRkaXREYXRhIH0gZnJvbSBcIi4vcmVkZGl0LW1vZGVsXCI7XHJcbmltcG9ydCB7IFJlZGRpdFZpZXdNb2RlbCB9IGZyb20gXCIuL3JlZGRpdC1pdGVtLXZpZXctbW9kZWxcIjtcclxuXHJcbnZhciBhYm91dFRleHQgPSBcIkN1dGVuZXNzIGlzIGEgcHJvb2Ygb2YgY29uY2VwdCBhcHAgZGVtb25zdHJhdGluZyB0aGUgVGVsZXJpaydzIE5hdGl2ZVNjcmlwdCBmb3Igd3JpdGluZyBuYXRpdmUgbW9iaWxlIGFwcGxpY2F0aW9ucyB1c2luZyBKYXZhU2NyaXB0LlwiO1xyXG5leHBvcnQgdmFyIGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZSA9IGltYWdlU291cmNlRnJvbUZpbGUoXCJ+L3Jlcy9yZWRkaXQtbG9nby5wbmdcIik7XHJcbmV4cG9ydCB2YXIgZGVmYXVsdE5vVGh1bWJuYWlsSW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZUZyb21GaWxlKFwifi9yZXMvbm8taW1hZ2UucG5nXCIpO1xyXG5cclxudmFyIHJlZGRpdFVybCA9IFwiaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL2F3dy5qc29uP2xpbWl0PVwiO1xyXG52YXIgYWZ0ZXI6IHN0cmluZztcclxudmFyIElTU0NST0xMSU5HID0gXCJpc0xvYWRpbmdcIjtcclxuXHJcbi8vIGluaXRpYWxpemUgdGhlIGltYWdlIGNhY2hlIGZvciB0aGUgbWFpbiBsaXN0XHJcbmV4cG9ydCB2YXIgY2FjaGUgPSBuZXcgSW1hZ2VDYWNoZSgpO1xyXG5jYWNoZS5wbGFjZWhvbGRlciA9IGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZTtcclxuY2FjaGUubWF4UmVxdWVzdHMgPSA1O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgX3JlZGRpdEl0ZW1zOiBWaXJ0dWFsQXJyYXk8UmVkZGl0Vmlld01vZGVsPjtcclxuICAgIGdldCByZWRkaXRJdGVtcygpOiBWaXJ0dWFsQXJyYXk8UmVkZGl0Vmlld01vZGVsPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9yZWRkaXRJdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWRkaXRJdGVtcyA9IG5ldyBWaXJ0dWFsQXJyYXk8UmVkZGl0Vmlld01vZGVsPigxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVkZGl0SXRlbXMubG9hZFNpemUgPSA1MDtcclxuICAgICAgICAgICAgdGhpcy5fcmVkZGl0SXRlbXMub24oVmlydHVhbEFycmF5Lml0ZW1zTG9hZGluZ0V2ZW50LCAoYXJnczogdmlydHVhbEFycmF5SXRlbXNMb2FkaW5nRGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKHJlZGRpdFVybCArIGFyZ3MuY291bnQgKyAoYWZ0ZXIgPyBcIiZhZnRlcj1cIiArIGFmdGVyIDogXCJcIikpLnRoZW48UmVkZGl0RGF0YT4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtc1RvTG9hZCA9IHJlc3VsdC5kYXRhLmNoaWxkcmVuLm1hcChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWRkaXRWaWV3TW9kZWwoaS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVkZGl0SXRlbXMubG9hZChhcmdzLmluZGV4LCBpdGVtc1RvTG9hZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0SXRlbSA9IGl0ZW1zVG9Mb2FkW2l0ZW1zVG9Mb2FkLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlciA9IGl0ZW1zVG9Mb2FkW2l0ZW1zVG9Mb2FkLmxlbmd0aCAtIDFdLnNvdXJjZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRkaXRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgZ2V0IGlzU2Nyb2xsaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Njcm9sbGluZztcclxuICAgIH1cclxuICAgIHNldCBpc1Njcm9sbGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1Njcm9sbGluZyAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNTY3JvbGxpbmcgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUuZGlzYWJsZURvd25sb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS5lbmFibGVEb3dubG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh7IG9iamVjdDogdGhpcywgZXZlbnROYW1lOiBPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsIHByb3BlcnR5TmFtZTogSVNTQ1JPTExJTkcsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFib3V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBhYm91dFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZSgpOiBJbWFnZVNvdXJjZSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaHVtYm5haWxJbWFnZVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdE5vVGh1bWJuYWlsSW1hZ2VTb3VyY2UoKTogSW1hZ2VTb3VyY2Uge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0Tm9UaHVtYm5haWxJbWFnZVNvdXJjZTtcclxuICAgIH1cclxufSJdfQ==