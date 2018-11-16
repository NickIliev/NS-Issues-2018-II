const modalViewModule = "modal-view/modal-view-page";

function openModal(args) {
    const mainView = args.object;
    const context = { username:"test_username", password:"test" };
    const isFullScreen = false;
    const animated = true;
    const streched = true;

    mainView.showModal(modalViewModule, context, myCloseCallBack, isFullScreen, animated, streched);
}
exports.openModal = openModal;


function myCloseCallBack(username, password) {
    console.log(`Username: ${username} : Password: ${password}`);
}