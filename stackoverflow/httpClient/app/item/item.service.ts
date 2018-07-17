import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";


@Injectable()
export class ItemService {
    constructor(private _httpClient: HttpClient) { }

    load() {
        let url = "https://jsonplaceholder.typicode.com/posts/1";
    
        let headers = this.createRequestHeader();
    
        return this._httpClient.get(url, { headers: headers });
    }
    
    createRequestHeader() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
        });
    
        return headers;
    }
}
