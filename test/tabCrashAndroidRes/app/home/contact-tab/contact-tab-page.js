var frameModule = require("ui/frame");
var ContactTabViewModel = require("./contact-tab-view-model");
var contacttabViewModel = new ContactTabViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = contacttabViewModel;
}

exports.pageLoaded = pageLoaded;
