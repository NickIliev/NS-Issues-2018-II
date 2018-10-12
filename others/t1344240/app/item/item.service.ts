import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseContentType } from '@angular/http'

@Injectable()
export class ItemService {

    constructor(private http: HttpClient) { }

    postData() {
        return this.http.post("https://httpbin.org/stream-bytes/20", {
            method: "POST",
            responseType: ResponseContentType.Blob,
            headers: new HttpHeaders({
                'Content-Type': "application/octet-stream"
            })
        })
    }
}



