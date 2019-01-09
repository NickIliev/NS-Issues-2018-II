import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { RoverPhoto } from "../models/rover-model";
import { getApiKey } from "../helpers/api";

import { File, Folder, path, knownFolders } from "tns-core-modules/file-system";
import { onSaveFile as onSaveFileHelper } from "../helpers/save";
import { EventData } from "tns-core-modules/ui/page/page";

@Injectable()
export class ItemService {
    rover: string;
    year: number;
    month: number;
    day: number;
    requestedURL: string;

    NASA_API_KEY: string;
    API_URL_START: string;
    API_URL_DATE: string;

    constructor(private _http: HttpClient) {
        this.API_URL_START = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
        this.API_URL_DATE = "/photos?earth_date=";
        this.NASA_API_KEY = getApiKey();
    }


    getPhotosWithDateAndPageIndex(rover: string, year: number, month: number, day: number, pageIndex: number) {
        let documentsFolder = knownFolders.currentApp();
        let cosmosFolderPath = path.join(documentsFolder.path.toString(), "newCosmosImages");

        return this._http.get(this.getUpdatedUrl(rover, year, month, day) + "&page=" + pageIndex)
            .pipe(map(data => {
                let itemsList = [];
                data["photos"].forEach((item) => {
                    let myPath: string = path.join(cosmosFolderPath, "image-"+ item.id);
                    let fileExists: boolean = File.exists(myPath);
                    if(!fileExists) {
                        onSaveFileHelper(item.img_src, myPath);
                    }

                    console.log(`Which File are we using!? ${fileExists ? (myPath + "image-"+ item.id  ) : item.img_src}`);

                    itemsList.push(new RoverPhoto(
                        item.id,
                        item.sol,
                        item.camera.id,
                        item.camera.name,
                        item.camera.rover_id,
                        item.camera.full_name,
                        fileExists ? ("~/newCosmosImages/" + "image-" + item.id  ) : item.img_src,
                        item.earth_date));
                });
                return itemsList;
            }));
    }

    getUpdatedUrl(rover: string, year: number, month: number, day: number) {
        this.rover = rover;
        this.year = year;
        this.month = month;
        this.day = day;

        return this.requestedURL = this.API_URL_START
                                    + this.rover
                                    + this.API_URL_DATE
                                    + this.year + "-" + this.month + "-" + this.day
                                    + "&api_key=" + this.NASA_API_KEY;
    }
}
