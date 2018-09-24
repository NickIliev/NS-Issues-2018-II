var frameModule = require("ui/frame");
var SettingsTabViewModel = require("./settings-tab-view-model");
var settingstabViewModel = new SettingsTabViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = settingstabViewModel;
}

exports.pageLoaded = pageLoaded;
