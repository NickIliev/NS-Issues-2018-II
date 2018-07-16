import { Observable } from 'data/observable';
import * as application from "tns-core-modules/application";
declare let android: any;

export class HelloWorldModel extends Observable {

    private _message: string;

    constructor() {
        super();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        
        let telephonyManager = application.android.context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
        let cellinfogsm = telephonyManager.getAllCellInfo().get(0);
        let cellSignalStrengthGsm = cellinfogsm.getCellSignalStrength();
        cellSignalStrengthGsm.getDbm();

        this.message = cellSignalStrengthGsm;

        console.log("Signal Streinght: ", cellSignalStrengthGsm);
    }
}
