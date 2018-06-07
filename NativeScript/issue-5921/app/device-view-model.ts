import { Observable } from 'tns-core-modules/data/observable';

export class Device  {

    public uuid: string;

    constructor() {
        this.uuid = "device.UUID 001";
        
        // this.readManufacturerName(); // this will work

        console.log("constructor this: ", this)
        

        this.readManufacturerName();
        // WHRN called here "this" will print
        /*
            {
                "uuid": "device.UUID 001"
            }
        */
    }

    public readManufacturerName() {
        // here this.uuid will be undefined when called with {{ device.readManufacturerName }}
        // it will have value if called from elsewhere
        console.log("readManufacturerName: ", this.uuid);

        console.log("readManufacturerName this: ", this);
        // WHEN called from Button "this" will print
        /*
            {
                "_observers": {
                    "propertyChange": [{}]
                },
                "_map": {
                "device": {
                    "uuid": "device.UUID 001"
                }
            },
            "device": "[Circular]"
            }
        */
    }
}