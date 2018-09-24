
import { EventData } from 'tns-core-modules/data/observable';
import { setBoolean, setNumber, setString, getString } from "tns-core-modules/application-settings";
import { getNativeApplication } from "application";
import { isAndroid, isIOS } from "platform";
import * as utils from "utils/utils";

export function navigatingTo(args: EventData) {
    setBoolean("isReal", true);
    setNumber("myNumber", 42);
    setString("myString", "John Doe");
}

export function getAll() {
    if (isAndroid) {
        let sharedPreferences = (<android.app.Application>getNativeApplication()).getApplicationContext().getSharedPreferences("prefs.db", 0);
        let mappedPreferences = sharedPreferences.getAll();
        let iterator = mappedPreferences.keySet().iterator();

        while (iterator.hasNext()) {
            let key = iterator.next();
            // console.log(key); // myString, myNumbver, isReal
            let value = mappedPreferences.get(key);
            // console.log(value); // "John Doe", 42, true
        }

    } else if (isIOS) {
        var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        let dictionaryUserDefaults = userDefaults.dictionaryRepresentation();

        let allKeys = dictionaryUserDefaults.allKeys;
        let allValues = dictionaryUserDefaults.allValues;
        // console.log(dictionaryUserDefaults.allKeys);
        // console.log(dictionaryUserDefaults.allValues);
    }
}