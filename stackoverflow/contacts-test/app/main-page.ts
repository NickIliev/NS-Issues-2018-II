import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import * as permissions from 'nativescript-permissions';
import { Contact, ContactName, getAllContacts } from "nativescript-contacts";

declare let android: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    // <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    // <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    // <uses-permission android:name="android.permission.INTERNET"/>
    // <uses-permission android:name="android.permission.GET_ACCOUNTS" />        
    // <uses-permission android:name="android.permission.READ_CONTACTS" />
    // <uses-permission android:name="android.permission.WRITE_CONTACTS" />

    permissions.requestPermission([
        android.Manifest.permission.READ_CONTACTS,
        android.Manifest.permission.GET_ACCOUNTS,
        android.Manifest.permission.WRITE_CONTACTS
    ], "I need these permissions because I'm cool")
        .then(function () {
            console.log("Woo Hoo, I have the power!");
        })
        .catch(function () {
            console.log("Uh oh, no permissions - plan B time!");
        });
}

export function getCon() {
    
    console.log("contacts follows: ");
    const contactFields = ['name','phoneNumbers'];
    getAllContacts(contactFields).then(args => {
        console.log("contacts ALL: ");
        console.log(JSON.stringify(args));
    }).catch(err => {
        console.log(err);
    })
}