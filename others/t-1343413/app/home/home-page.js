const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}
exports.showPopup = function (args) {
    var myPage = args.object.page;
    var modulePage = "dummy/dummy-page";

    for (var i = 0; i <= 1; i++) {
        setTimeout(() => {
            myPage.showModal(modulePage, "context", () => { });
        }, 1000);
    }
}
exports.onNavigatingTo = onNavigatingTo;
