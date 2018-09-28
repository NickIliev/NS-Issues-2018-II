const mediaPickerModule = require("nativescript-mediafilepicker");

function onNavigatingTo(args) {

    let options = {
        android: {
            isNeedCamera: true,
            maxNumberFiles: 10,
            isNeedFolderList: true
        }, ios: {
            isCaptureMood: false,
            maxNumberFiles: 10
        }
    };
     
    let mediafilepicker = new mediaPickerModule.Mediafilepicker();
    mediafilepicker.openImagePicker(options);
     
    mediafilepicker.on("getFiles", function (res) {
        let results = res.object.get('results');
        console.dir(results);
    })
     
    mediafilepicker.on("error", function (res) {
        let msg = res.object.get('msg');
        console.log(msg);
    });
     
    mediafilepicker.on("cancel", function (res) {
        let msg = res.object.get('msg');
        console.log(msg);
    });
}
exports.onNavigatingTo = onNavigatingTo;