var frameModule = require("ui/frame");
var HomeTabViewModel = require("./home-tab-view-model");
var hometabViewModel = new HomeTabViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = hometabViewModel;
}

exports.pageLoaded = pageLoaded;
