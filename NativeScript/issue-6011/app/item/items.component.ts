import { Component, OnInit } from "@angular/core";
import { ImageSource } from "tns-core-modules/image-source";
import { ImageAsset, ImageAssetOptions } from "tns-core-modules/image-asset"; // imagepicker returns ImageAsset type
import { ImagePickerMediaType, Options as ImagePickerOptions, create as ImagePickerCreate } from "nativescript-imagepicker";
import * as imageSource from "tns-core-modules/image-source";
import * as fs from "tns-core-modules/file-system";
import * as BitmapFactory from "nativescript-bitmap-factory";

@Component({
  template: `
    <StackLayout>
      <Button text="Image from Url" (tap)="getImageFromUrl()"></Button>
      <Button text="Image from Picker" (tap)="getImageFromPhone()"></Button>
      <Label text="Output"></Label>
      <Label textWrap="true" [text]="output" class="output"></Label>
    </StackLayout>
  `,
  styles: [`
    .output { margin-top:20; font-size: 10; }
  `]
})
export class ItemsComponent implements OnInit {
    private demoImageUrl: string = 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/20292767_10154648602877623_5404697562855970638_n.jpg?_nc_cat=0&oh=4b571c581d742440a5414dc104095d7b&oe=5BA0DADC';
    public output:string = '';

    constructor() {
    }

    ngOnInit(): void {}

    public getImageFromPhone() {
    const pickerOptions:ImagePickerOptions = {
      mode: 'single', // use "multiple" for multiple selection
      mediaType: ImagePickerMediaType.Image
    }

    let picker = ImagePickerCreate(pickerOptions);

    picker.authorize().then(() => { return picker.present(); }).then((selection) => {
      selection.forEach((selectedPhoto:ImageAsset) => {

        const imageAssetOptions:ImageAssetOptions = {
          keepAspectRatio: true,
          height: 500,
          width:500          
        }

        selectedPhoto.options = imageAssetOptions;

        let sourceImage = new ImageSource();

        sourceImage.fromAsset(selectedPhoto).then((imageSource: ImageSource) => {
          this.output+=`original height: ${imageSource.height} - width: ${imageSource.width}\n`;

          this.saveImageSource(imageSource).then((metadata:any) => {
            this.output+=`processed height: ${metadata.height} - width: ${metadata.width}\n\n`;
          }, (error) => {
            this.output+=`Error -> ${error}\n\n`;
          });
        }, (error) => { console.log('Error -> ' + error); }); // end of fromAsset
      }); // end of forEach loop
    }).catch((error) => {
      this.output+=`Error -> ${error}\n\n`;
    });
  }

  public getImageFromUrl() {
    imageSource.fromUrl(this.demoImageUrl).then((imageSrc: ImageSource) => {
      this.output+=`original height: ${imageSrc.height} - width: ${imageSrc.width}\n`;

      this.resizeImageSource(imageSrc, 500).then((resizedImageSrc: ImageSource) => {
        this.saveImageSource(resizedImageSrc).then((metadata:any) => {
          this.output+=`processed height: ${metadata.height} - width: ${metadata.width}\n\n`;
        }, (error) => { console.log('Error -> ' + error); });
      });
    }).catch((error) => {
      this.output+=`Error -> ${error}\n\n`;
    });
  }

  public saveImageSource(imageSrc:ImageSource) {
    return new Promise((resolve, reject) => {
      const targetFilename = `temp_image.jpg`;
      const tempPath = fs.knownFolders.temp().path;
      const localFullPath = fs.path.join(tempPath, targetFilename);

      const fullImageSaved = imageSrc.saveToFile(localFullPath, 'jpeg');

      if (fullImageSaved) {
        this.output+=`in-processing height: ${imageSrc.height} - width: ${imageSrc.width}\n`;

        let sourceImage = new ImageSource();
        sourceImage.fromFile(localFullPath).then(() => {
          resolve({
            width: sourceImage.width,
            height: sourceImage.height,
            localFullPath: localFullPath
          })
        });
      } else { reject(`Error saving photo to local temp folder: ${localFullPath}`); }
    });
  }

  private resizeImageSource(imageSrc:ImageSource, maxSize) : Promise<ImageSource> {
    return new Promise((resolve, reject) => {
      const bitmap = BitmapFactory.create(imageSrc.width, imageSrc.height);
      bitmap.dispose((imageBitmap) => {
        imageBitmap.insert(BitmapFactory.makeMutable(imageSrc));
        const resizedBitmap = imageBitmap.resizeMax(maxSize);
        resolve(resizedBitmap.toImageSource());
      }, (error) => { reject(error); });
    });
  }
}