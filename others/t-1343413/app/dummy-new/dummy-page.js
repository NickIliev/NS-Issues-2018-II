
var observableModule = require("data/observable");

var viewModel;
function showingModally(args) {
    const page = args.object;
    let color = args.context.color;
    viewModel = new observableModule.fromObject({
        textVisibility:"collapsed",
        myColor: color
      });
      page.bindingContext = viewModel;
}
exports.showingModally = showingModally;

exports.showText = function(args){
    viewModel.set("textVisibility", "visible")
    console.log("showText textVisibility: ", viewModel.textVisibility)
}
exports.hideText = function(args){
    viewModel.set("textVisibility", "collapsed")
    console.log("hideText textVisibility: ", viewModel.textVisibility)
}
exports.onClose =function(args){
    var currpage = args.object.page;
    currpage.closeModal();
}
