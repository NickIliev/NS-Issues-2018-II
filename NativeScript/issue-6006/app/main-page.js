"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var fs = require("file-system");
function navigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    // Gets the root folder for the current application. 
    // This Folder is private for the application and not accessible from Users/External apps. 
    // iOS - this folder is read-only and contains the app and all its resources.
    var currentApp = fs.knownFolders.currentApp();
    console.log(currentApp.path);
    var cssFile = currentApp.getFile('files/test.css');
    console.log(cssFile);
    setTimeout(function () {
        cssFile.readText().then(function (res) {
            console.log("TEXT: ", res);
            vm.set("fileContent", res);
        }).catch(function (err) {
            console.log("ERR: ", err);
        });
    }, 300);
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOENBQXdEO0FBQ3hELGdDQUFrQztBQUdsQyxzQkFBNkIsSUFBZTtJQUN4QyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRTVCLHFEQUFxRDtJQUNyRCwyRkFBMkY7SUFDM0YsNkVBQTZFO0lBRTdFLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0IsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFckIsVUFBVSxDQUFDO1FBQ1AsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRVIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQXpCRCxvQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICAvLyBHZXRzIHRoZSByb290IGZvbGRlciBmb3IgdGhlIGN1cnJlbnQgYXBwbGljYXRpb24uIFxuICAgIC8vIFRoaXMgRm9sZGVyIGlzIHByaXZhdGUgZm9yIHRoZSBhcHBsaWNhdGlvbiBhbmQgbm90IGFjY2Vzc2libGUgZnJvbSBVc2Vycy9FeHRlcm5hbCBhcHBzLiBcbiAgICAvLyBpT1MgLSB0aGlzIGZvbGRlciBpcyByZWFkLW9ubHkgYW5kIGNvbnRhaW5zIHRoZSBhcHAgYW5kIGFsbCBpdHMgcmVzb3VyY2VzLlxuXG4gICAgbGV0IGN1cnJlbnRBcHAgPSBmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBcHAucGF0aCk7XG5cbiAgICBsZXQgY3NzRmlsZSA9IGN1cnJlbnRBcHAuZ2V0RmlsZSgnZmlsZXMvdGVzdC5jc3MnKTtcbiAgICBjb25zb2xlLmxvZyhjc3NGaWxlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjc3NGaWxlLnJlYWRUZXh0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJURVhUOiBcIiwgcmVzKTtcblxuICAgICAgICAgICAgdm0uc2V0KFwiZmlsZUNvbnRlbnRcIiwgcmVzKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSOiBcIiwgZXJyKTtcbiAgICAgICAgfSlcbiAgICB9LCAzMDApO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufSJdfQ==