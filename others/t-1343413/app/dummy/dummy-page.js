
var observableModule = require("data/observable");

function showingModally(args) {
    const page = args.object;

    // HERE new viewModel created for each modal instances with the shwoingMOdally event
    const viewModel = new observableModule.fromObject({
        textVisibility: "collapsed"
    });
    page.bindingContext = viewModel;
}
exports.showingModally = showingModally;

exports.showText = function (args) {
    const page = args.object.page;

    // axccessing the specific view model for the showjn page
    const viewModel = page.bindingContext;
    viewModel.set("textVisibility", "visible")
    console.log("showText textVisibility: ", viewModel.textVisibility)
}
exports.hideText = function (args) {
    const page = args.object.page;

    // axccessing the specific view model for the showjn page
    const viewModel = page.bindingContext;
    viewModel.set("textVisibility", "collapsed")
    console.log("hideText textVisibility: ", viewModel.textVisibility)
}
exports.onClose = function (args) {
    const currpage = args.object.page;
    currpage.closeModal();
}
