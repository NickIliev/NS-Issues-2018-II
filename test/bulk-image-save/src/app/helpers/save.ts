import { ImageSource, fromUrl } from "tns-core-modules/image-source";
import { isAndroid } from "tns-core-modules/platform";
import { File, Folder, path, knownFolders } from "tns-core-modules/file-system";

export function onSaveFile(url: string, myPath: string) {

    fromUrl(url).then(imageSource => {
        console.log("Saving File!");
        let saved: boolean = imageSource.saveToFile(myPath, "jpg");
    });

}
