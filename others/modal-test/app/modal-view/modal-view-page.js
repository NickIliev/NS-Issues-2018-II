const observableModule = require("tns-core-modules/data/observable");
let closeCallback;

function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const view = args.object;
    view.bindingContext = observableModule.fromObject(context);
    
    // view.width = 300; // dynamically changing the default size of the root ccontainer of our modal view
    // view.height = 400; // dynamically changing the default size of the root ccontainer of our modal view 
}
exports.onShownModally = onShownModally;

function onLoginButtonTap(args) {
    const view = args.object.parent;
    const bindingContext = view.bindingContext;
    const username = bindingContext.get("username");
    const password = bindingContext.get("password");
    closeCallback(username, password);
}
exports.onLoginButtonTap = onLoginButtonTap;