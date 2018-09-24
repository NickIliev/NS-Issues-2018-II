"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var fs = require("tns-core-modules/file-system");
var enums = require("ui/enums");
var image_source_1 = require("image-source");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.getPermissions = function () {
        nativescript_camera_1.requestPermissions();
    };
    ItemsComponent.prototype.onTakePhoto = function () {
        nativescript_camera_1.takePicture().then(function (imageAsset) {
            console.log(imageAsset.ios);
            image_source_1.fromAsset(imageAsset).then(function (source) {
                var folder = fs.knownFolders.documents();
                var baseName = new Date().getTime();
                var pictureName = baseName + '.' + enums.ImageFormat.jpeg;
                var path = fs.path.join(folder.path, pictureName);
                source.saveToFile(path, "jpeg");
                var currentImage = UIImage.imageWithContentsOfFile(path);
                console.log("currentImage: ", currentImage);
                console.log('orientation: ', currentImage.imageOrientation); // -> allways return 0
            });
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDJEQUFzRTtBQUV0RSxpREFBbUQ7QUFDbkQsZ0NBQWtDO0FBQ2xDLDZDQUF5QztBQVV6QztJQUFBO0lBeUJBLENBQUM7SUF2QkcsdUNBQWMsR0FBZDtRQUNJLHdDQUFrQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxpQ0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBc0I7WUFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUIsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUU5QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN6QyxJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QyxJQUFNLFdBQVcsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUM1RCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUVwRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEMsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUN2RixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO09BQ1csY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyByZXF1ZXN0UGVybWlzc2lvbnMsIHRha2VQaWN0dXJlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcblxuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgZnJvbUFzc2V0IH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJpbWFnZS1hc3NldFwiO1xuXG5kZWNsYXJlIGxldCBVSUltYWdlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcblxuICAgIGdldFBlcm1pc3Npb25zKCkge1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICB9XG5cbiAgICBvblRha2VQaG90bygpIHtcbiAgICAgICAgdGFrZVBpY3R1cmUoKS50aGVuKChpbWFnZUFzc2V0OiBJbWFnZUFzc2V0KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlQXNzZXQuaW9zKTtcblxuICAgICAgICAgICAgZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4oKHNvdXJjZSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZU5hbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaWN0dXJlTmFtZSA9IGJhc2VOYW1lICsgJy4nICsgZW51bXMuSW1hZ2VGb3JtYXQuanBlZztcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gZnMucGF0aC5qb2luKGZvbGRlci5wYXRoLCBwaWN0dXJlTmFtZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgc291cmNlLnNhdmVUb0ZpbGUocGF0aCwgXCJqcGVnXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IFVJSW1hZ2UuaW1hZ2VXaXRoQ29udGVudHNPZkZpbGUocGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50SW1hZ2U6IFwiLCBjdXJyZW50SW1hZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcmllbnRhdGlvbjogJywgY3VycmVudEltYWdlLmltYWdlT3JpZW50YXRpb24pOyAvLyAtPiBhbGx3YXlzIHJldHVybiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==