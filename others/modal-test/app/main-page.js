const modalViewModule = "modal-view/modal-view-page";

function openModal(args) {
    const mainView = args.object;

    // change myConetnt to longerMyContent to test the dynamic resizing of a stacklayout modal page
    let myContent = "ala bala, ala bala! ala bala, ala bala! ala bala, ala bala! ";
    let longerMyContent = myContent + myContent + myContent + myContent + myContent + myContent + myContent;

    const context = { username:"test_username", password:"test", content: myContent };
    const isFullScreen = false;
    const animated = true;
    const streched = true;

    mainView.showModal(modalViewModule, context, myCloseCallBack, isFullScreen, animated, streched);
}
exports.openModal = openModal;


function myCloseCallBack(username, password) {
    console.log(`Username: ${username} : Password: ${password}`);
}