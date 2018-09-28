import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ItemService {

    constructor(private http: HttpClient) { }

    postData(data: any) {
        return this.http.post(
            "http://placehold.it/120x120&text=image1",
            { data },
            { observe: 'response', responseType: 'blob' }
        );
    }
}
