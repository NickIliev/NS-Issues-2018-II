var frameModule = require("ui/frame");
var ProfileTabViewModel = require("./profile-tab-view-model");
var profiletabViewModel = new ProfileTabViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = profiletabViewModel;
}

exports.pageLoaded = pageLoaded;
