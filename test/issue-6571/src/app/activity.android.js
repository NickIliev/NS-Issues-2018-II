const frame = require("tns-core-modules/ui/frame");

const superProto = android.support.v7.app.AppCompatActivity.prototype;
android.support.v7.app.AppCompatActivity.extend("org.myApp.MainActivity", {
    onCreate: function(savedInstanceState) {
        if(!this._callbacks) {
            frame.setActivityCallbacks(this);
        }
        // Modules will take care of calling super.onCreate, do not call it here
        this._callbacks.onCreate(this, savedInstanceState, superProto.onCreate);
        console.log(">>>>>>>>>>> Overwritten Activity");
        // Add custom initialization logic here
    },
    onSaveInstanceState: function(outState) {
        this._callbacks.onSaveInstanceState(this, outState, superProto.onSaveInstanceState);
    },
    onStart: function() {
        this._callbacks.onStart(this, superProto.onStart);
    },
    onStop: function() {
        this._callbacks.onStop(this, superProto.onStop);
    },
    onDestroy: function() {
        this._callbacks.onDestroy(this, superProto.onDestroy);
    },
    onBackPressed: function() {
        this._callbacks.onBackPressed(this, superProto.onBackPressed);
    },
    onRequestPermissionsResult: function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined);
    },
    onActivityResult: function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    }
});