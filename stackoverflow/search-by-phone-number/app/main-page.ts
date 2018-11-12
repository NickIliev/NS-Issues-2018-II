
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import * as application from "tns-core-modules/application";
import { requestPermissions } from "nativescript-permissions";


let vm = new Observable();
vm.set("name", "");

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    requestPermissions(["android.permission.READ_CONTACTS", "android.permission.WRITE_CONTACTS"])

    page.bindingContext = vm;
}

export function getNameByNumber() {
    console.log("getNameByNumber");

    let phoneNumber = "0888111111";
    let lookupUri = android.net.Uri.withAppendedPath(android.provider.ContactsContract.PhoneLookup.CONTENT_FILTER_URI, android.net.Uri.encode(phoneNumber));
    let contentResolver = application.android.context.getContentResolver();
    let contactLookup = contentResolver.query(lookupUri, [android.provider.BaseColumns._ID,
        android.provider.ContactsContract.ContactsColumns.DISPLAY_NAME ], null, null, null);

    if (contactLookup != null && contactLookup.getCount() > 0) {
        contactLookup.moveToNext();
        let name = contactLookup.getString(contactLookup.getColumnIndex(android.provider.ContactsContract.ContactsColumns.DISPLAY_NAME));
        console.log(`Found name  ${name} for number ${phoneNumber}`);
        vm.set("name", name);
    } else {
        console.log("No such number in the contacts")
    }

}
