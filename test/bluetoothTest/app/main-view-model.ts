import { Observable } from 'data/observable';
// require the plugin
import { enable, isBluetoothEnabled, startScanning, StartNotifyingOptions, Peripheral } from "nativescript-bluetooth";

export class HelloWorldModel extends Observable {

    result: Peripheral;
    private _foundDevices: Array<Peripheral> = [];

    constructor() {
        super();

        enable().then((enabled) => {
            // use Bluetooth features if enabled is true 
        });
    }

    get foundDevices() {
        return this._foundDevices
    }

    set foundDevices(value: Array<Peripheral>) {
        this._foundDevices = value;
        this.notifyPropertyChange("foundDevices", value);
    }

    startScan() {
        let devices = [];

        startScanning({
            serviceUUIDs: [],
            seconds: 4,
            onDiscovered: (peripheral) => {
                console.log("Periperhal found with UUID: " + peripheral.UUID);
                this.result = peripheral;

                devices.push(peripheral);

                // this.result.name
                // this.result.RSSI
                // this.result.UUID
            },
            skipPermissionCheck: false
          }).then(() => {
            console.log("scanning complete");

            this.foundDevices = devices;
          }, (err) => {
            console.log("error while scanning: " + err);
          });
    }

    isEnabled() {
        isBluetoothEnabled().then((enabled) => {
            alert("Enabled? " + enabled);
        });
    }
}
