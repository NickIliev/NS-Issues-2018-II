import { Observable } from "tns-core-modules/data/observable";
import * as couchbaseModule from "nativescript-couchbase";

export class HelloWorldModel extends Observable {

    private _database: couchbaseModule.Couchbase;

    constructor() {
        super();
    }

    get database(): any {
        return this._database;
    }
    
    set database(value: any) {
        if (this._database !== value) {
            this._database = value;
            this.notifyPropertyChange("database", value)
        }
    }

    public onTap() {
        this.database = new couchbaseModule.Couchbase("test-database");
        let documentId = this.database.createDocument({
            "firstname": "Nic",
            "lastname": "Raboy",
            "address": {
                "city": "San Francisco",
                "state": "CA",
                "country": "USA"
            },
            "twitter": "https://www.twitter.com/nraboy"
        });

        console.log(documentId);
    }

}
