"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source");
var nativescript_imagepicker_1 = require("nativescript-imagepicker");
var imageSource = require("tns-core-modules/image-source");
var fs = require("tns-core-modules/file-system");
var BitmapFactory = require("nativescript-bitmap-factory");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.demoImageUrl = 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/20292767_10154648602877623_5404697562855970638_n.jpg?_nc_cat=0&oh=4b571c581d742440a5414dc104095d7b&oe=5BA0DADC';
        this.output = '';
    }
    ItemsComponent.prototype.ngOnInit = function () { };
    ItemsComponent.prototype.getImageFromPhone = function () {
        var _this = this;
        var pickerOptions = {
            mode: 'single',
            mediaType: 1 /* Image */
        };
        var picker = nativescript_imagepicker_1.create(pickerOptions);
        picker.authorize().then(function () { return picker.present(); }).then(function (selection) {
            selection.forEach(function (selectedPhoto) {
                var imageAssetOptions = {
                    keepAspectRatio: true,
                    height: 500,
                    width: 500
                };
                selectedPhoto.options = imageAssetOptions;
                var sourceImage = new image_source_1.ImageSource();
                sourceImage.fromAsset(selectedPhoto).then(function (imageSource) {
                    _this.output += "original height: " + imageSource.height + " - width: " + imageSource.width + "\n";
                    _this.saveImageSource(imageSource).then(function (metadata) {
                        _this.output += "processed height: " + metadata.height + " - width: " + metadata.width + "\n\n";
                    }, function (error) {
                        _this.output += "Error -> " + error + "\n\n";
                    });
                }, function (error) { console.log('Error -> ' + error); }); // end of fromAsset
            }); // end of forEach loop
        }).catch(function (error) {
            _this.output += "Error -> " + error + "\n\n";
        });
    };
    ItemsComponent.prototype.getImageFromUrl = function () {
        var _this = this;
        imageSource.fromUrl(this.demoImageUrl).then(function (imageSrc) {
            _this.output += "original height: " + imageSrc.height + " - width: " + imageSrc.width + "\n";
            _this.resizeImageSource(imageSrc, 500).then(function (resizedImageSrc) {
                _this.saveImageSource(resizedImageSrc).then(function (metadata) {
                    _this.output += "processed height: " + metadata.height + " - width: " + metadata.width + "\n\n";
                }, function (error) { console.log('Error -> ' + error); });
            });
        }).catch(function (error) {
            _this.output += "Error -> " + error + "\n\n";
        });
    };
    ItemsComponent.prototype.saveImageSource = function (imageSrc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var targetFilename = "temp_image.jpg";
            var tempPath = fs.knownFolders.temp().path;
            var localFullPath = fs.path.join(tempPath, targetFilename);
            var fullImageSaved = imageSrc.saveToFile(localFullPath, 'jpeg');
            if (fullImageSaved) {
                _this.output += "in-processing height: " + imageSrc.height + " - width: " + imageSrc.width + "\n";
                var sourceImage_1 = new image_source_1.ImageSource();
                sourceImage_1.fromFile(localFullPath).then(function () {
                    resolve({
                        width: sourceImage_1.width,
                        height: sourceImage_1.height,
                        localFullPath: localFullPath
                    });
                });
            }
            else {
                reject("Error saving photo to local temp folder: " + localFullPath);
            }
        });
    };
    ItemsComponent.prototype.resizeImageSource = function (imageSrc, maxSize) {
        return new Promise(function (resolve, reject) {
            var bitmap = BitmapFactory.create(imageSrc.width, imageSrc.height);
            bitmap.dispose(function (imageBitmap) {
                imageBitmap.insert(BitmapFactory.makeMutable(imageSrc));
                var resizedBitmap = imageBitmap.resizeMax(maxSize);
                resolve(resizedBitmap.toImageSource());
            }, function (error) { reject(error); });
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            template: "\n    <StackLayout>\n      <Button text=\"Image from Url\" (tap)=\"getImageFromUrl()\"></Button>\n      <Button text=\"Image from Picker\" (tap)=\"getImageFromPhone()\"></Button>\n      <Label text=\"Output\"></Label>\n      <Label textWrap=\"true\" [text]=\"output\" class=\"output\"></Label>\n    </StackLayout>\n  ",
            styles: ["\n    .output { margin-top:20; font-size: 10; }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDhEQUE0RDtBQUU1RCxxRUFBNEg7QUFDNUgsMkRBQTZEO0FBQzdELGlEQUFtRDtBQUNuRCwyREFBNkQ7QUFlN0Q7SUFJSTtRQUhRLGlCQUFZLEdBQVcsZ0tBQWdLLENBQUM7UUFDekwsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQUcxQixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFrQixDQUFDO0lBRVosMENBQWlCLEdBQXhCO1FBQUEsaUJBa0NEO1FBakNDLElBQU0sYUFBYSxHQUFzQjtZQUN2QyxJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsZUFBNEI7U0FDdEMsQ0FBQTtRQUVELElBQUksTUFBTSxHQUFHLGlDQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUN6RSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBd0I7Z0JBRXpDLElBQU0saUJBQWlCLEdBQXFCO29CQUMxQyxlQUFlLEVBQUUsSUFBSTtvQkFDckIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFDLEdBQUc7aUJBQ1YsQ0FBQTtnQkFFRCxhQUFhLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO2dCQUUxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztnQkFFcEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxXQUF3QjtvQkFDakUsS0FBSSxDQUFDLE1BQU0sSUFBRSxzQkFBb0IsV0FBVyxDQUFDLE1BQU0sa0JBQWEs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cUJBQzdCLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsOENBQTRDLGFBQWUsQ0FBQyxDQUFDO1lBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywwQ0FBaUIsR0FBekIsVUFBMEIsUUFBb0IsRUFBRSxPQUFPO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQVc7Z0JBQ3pCLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFFLFVBQUMsS0FBSyxJQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNGVSxjQUFjO1FBYjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK1RBT1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyxxREFFUixDQUFDO1NBQ0gsQ0FBQzs7T0FDVyxjQUFjLENBNEYxQjtJQUFELHFCQUFDO0NBQUEsQUE1RkQsSUE0RkM7QUE1Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCwgSW1hZ2VBc3NldE9wdGlvbnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldFwiOyAvLyBpbWFnZXBpY2tlciByZXR1cm5zIEltYWdlQXNzZXQgdHlwZVxuaW1wb3J0IHsgSW1hZ2VQaWNrZXJNZWRpYVR5cGUsIE9wdGlvbnMgYXMgSW1hZ2VQaWNrZXJPcHRpb25zLCBjcmVhdGUgYXMgSW1hZ2VQaWNrZXJDcmVhdGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgKiBhcyBCaXRtYXBGYWN0b3J5IGZyb20gXCJuYXRpdmVzY3JpcHQtYml0bWFwLWZhY3RvcnlcIjtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiSW1hZ2UgZnJvbSBVcmxcIiAodGFwKT1cImdldEltYWdlRnJvbVVybCgpXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJJbWFnZSBmcm9tIFBpY2tlclwiICh0YXApPVwiZ2V0SW1hZ2VGcm9tUGhvbmUoKVwiPjwvQnV0dG9uPlxuICAgICAgPExhYmVsIHRleHQ9XCJPdXRwdXRcIj48L0xhYmVsPlxuICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIFt0ZXh0XT1cIm91dHB1dFwiIGNsYXNzPVwib3V0cHV0XCI+PC9MYWJlbD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLm91dHB1dCB7IG1hcmdpbi10b3A6MjA7IGZvbnQtc2l6ZTogMTA7IH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGVtb0ltYWdlVXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9zY29udGVudC5mc2R2Mi0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMjAyOTI3NjdfMTAxNTQ2NDg2MDI4Nzc2MjNfNTQwNDY5NzU2Mjg1NTk3MDYzOF9uLmpwZz9fbmNfY2F0PTAmb2g9NGI1NzFjNTgxZDc0MjQ0MGE1NDE0ZGMxMDQwOTVkN2Imb2U9NUJBMERBREMnO1xuICAgIHB1YmxpYyBvdXRwdXQ6c3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgICBwdWJsaWMgZ2V0SW1hZ2VGcm9tUGhvbmUoKSB7XG4gICAgY29uc3QgcGlja2VyT3B0aW9uczpJbWFnZVBpY2tlck9wdGlvbnMgPSB7XG4gICAgICBtb2RlOiAnc2luZ2xlJywgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXG4gICAgICBtZWRpYVR5cGU6IEltYWdlUGlja2VyTWVkaWFUeXBlLkltYWdlXG4gICAgfVxuXG4gICAgbGV0IHBpY2tlciA9IEltYWdlUGlja2VyQ3JlYXRlKHBpY2tlck9wdGlvbnMpO1xuXG4gICAgcGlja2VyLmF1dGhvcml6ZSgpLnRoZW4oKCkgPT4geyByZXR1cm4gcGlja2VyLnByZXNlbnQoKTsgfSkudGhlbigoc2VsZWN0aW9uKSA9PiB7XG4gICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRQaG90bzpJbWFnZUFzc2V0KSA9PiB7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VBc3NldE9wdGlvbnM6SW1hZ2VBc3NldE9wdGlvbnMgPSB7XG4gICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0cnVlLFxuICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgIHdpZHRoOjUwMCAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkUGhvdG8ub3B0aW9ucyA9IGltYWdlQXNzZXRPcHRpb25zO1xuXG4gICAgICAgIGxldCBzb3VyY2VJbWFnZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xuXG4gICAgICAgIHNvdXJjZUltYWdlLmZyb21Bc3NldChzZWxlY3RlZFBob3RvKS50aGVuKChpbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2UpID0+IHtcbiAgICAgICAgICB0aGlzLm91dHB1dCs9YG9yaWdpbmFsIGhlaWdodDogJHtpbWFnZVNvdXJjZS5oZWlnaHR9IC0gd2lkdGg6ICR7aW1hZ2VTb3VyY2Uud2lkdGh9XFxuYDtcblxuICAgICAgICAgIHRoaXMuc2F2ZUltYWdlU291cmNlKGltYWdlU291cmNlKS50aGVuKChtZXRhZGF0YTphbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Kz1gcHJvY2Vzc2VkIGhlaWdodDogJHttZXRhZGF0YS5oZWlnaHR9IC0gd2lkdGg6ICR7bWV0YWRhdGEud2lkdGh9XFxuXFxuYDtcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Kz1gRXJyb3IgLT4gJHtlcnJvcn1cXG5cXG5gO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHsgY29uc29sZS5sb2coJ0Vycm9yIC0+ICcgKyBlcnJvcik7IH0pOyAvLyBlbmQgb2YgZnJvbUFzc2V0XG4gICAgICB9KTsgLy8gZW5kIG9mIGZvckVhY2ggbG9vcFxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5vdXRwdXQrPWBFcnJvciAtPiAke2Vycm9yfVxcblxcbmA7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW1hZ2VGcm9tVXJsKCkge1xuICAgIGltYWdlU291cmNlLmZyb21VcmwodGhpcy5kZW1vSW1hZ2VVcmwpLnRoZW4oKGltYWdlU3JjOiBJbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgdGhpcy5vdXRwdXQrPWBvcmlnaW5hbCBoZWlnaHQ6ICR7aW1hZ2VTcmMuaGVpZ2h0fSAtIHdpZHRoOiAke2ltYWdlU3JjLndpZHRofVxcbmA7XG5cbiAgICAgIHRoaXMucmVzaXplSW1hZ2VTb3VyY2UoaW1hZ2VTcmMsIDUwMCkudGhlbigocmVzaXplZEltYWdlU3JjOiBJbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgICB0aGlzLnNhdmVJbWFnZVNvdXJjZShyZXNpemVkSW1hZ2VTcmMpLnRoZW4oKG1ldGFkYXRhOmFueSkgPT4ge1xuICAgICAgICAgIHRoaXMub3V0cHV0Kz1gcHJvY2Vzc2VkIGhlaWdodDogJHttZXRhZGF0YS5oZWlnaHR9IC0gd2lkdGg6ICR7bWV0YWRhdGEud2lkdGh9XFxuXFxuYDtcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciAtPiAnICsgZXJyb3IpOyB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgdGhpcy5vdXRwdXQrPWBFcnJvciAtPiAke2Vycm9yfVxcblxcbmA7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUltYWdlU291cmNlKGltYWdlU3JjOkltYWdlU291cmNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEZpbGVuYW1lID0gYHRlbXBfaW1hZ2UuanBnYDtcbiAgICAgIGNvbnN0IHRlbXBQYXRoID0gZnMua25vd25Gb2xkZXJzLnRlbXAoKS5wYXRoO1xuICAgICAgY29uc3QgbG9jYWxGdWxsUGF0aCA9IGZzLnBhdGguam9pbih0ZW1wUGF0aCwgdGFyZ2V0RmlsZW5hbWUpO1xuXG4gICAgICBjb25zdCBmdWxsSW1hZ2VTYXZlZCA9IGltYWdlU3JjLnNhdmVUb0ZpbGUobG9jYWxGdWxsUGF0aCwgJ2pwZWcnKTtcblxuICAgICAgaWYgKGZ1bGxJbWFnZVNhdmVkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0Kz1gaW4tcHJvY2Vzc2luZyBoZWlnaHQ6ICR7aW1hZ2VTcmMuaGVpZ2h0fSAtIHdpZHRoOiAke2ltYWdlU3JjLndpZHRofVxcbmA7XG5cbiAgICAgICAgbGV0IHNvdXJjZUltYWdlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgIHNvdXJjZUltYWdlLmZyb21GaWxlKGxvY2FsRnVsbFBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgd2lkdGg6IHNvdXJjZUltYWdlLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzb3VyY2VJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICBsb2NhbEZ1bGxQYXRoOiBsb2NhbEZ1bGxQYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyByZWplY3QoYEVycm9yIHNhdmluZyBwaG90byB0byBsb2NhbCB0ZW1wIGZvbGRlcjogJHtsb2NhbEZ1bGxQYXRofWApOyB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZUltYWdlU291cmNlKGltYWdlU3JjOkltYWdlU291cmNlLCBtYXhTaXplKSA6IFByb21pc2U8SW1hZ2VTb3VyY2U+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgYml0bWFwID0gQml0bWFwRmFjdG9yeS5jcmVhdGUoaW1hZ2VTcmMud2lkdGgsIGltYWdlU3JjLmhlaWdodCk7XG4gICAgICBiaXRtYXAuZGlzcG9zZSgoaW1hZ2VCaXRtYXApID0+IHtcbiAgICAgICAgaW1hZ2VCaXRtYXAuaW5zZXJ0KEJpdG1hcEZhY3RvcnkubWFrZU11dGFibGUoaW1hZ2VTcmMpKTtcbiAgICAgICAgY29uc3QgcmVzaXplZEJpdG1hcCA9IGltYWdlQml0bWFwLnJlc2l6ZU1heChtYXhTaXplKTtcbiAgICAgICAgcmVzb2x2ZShyZXNpemVkQml0bWFwLnRvSW1hZ2VTb3VyY2UoKSk7XG4gICAgICB9LCAoZXJyb3IpID0+IHsgcmVqZWN0KGVycm9yKTsgfSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=