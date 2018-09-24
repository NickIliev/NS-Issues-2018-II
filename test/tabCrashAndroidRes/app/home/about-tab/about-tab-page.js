var frameModule = require("ui/frame");
var AboutTabViewModel = require("./about-tab-view-model");
var abouttabViewModel = new AboutTabViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = abouttabViewModel;
}

exports.pageLoaded = pageLoaded;
