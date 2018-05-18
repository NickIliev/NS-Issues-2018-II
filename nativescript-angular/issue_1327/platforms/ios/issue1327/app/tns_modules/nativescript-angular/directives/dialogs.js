Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var app_host_view_1 = require("../app-host-view");
var detached_loader_1 = require("../common/detached-loader");
var platform_providers_1 = require("../platform-providers");
var ModalDialogParams = /** @class */ (function () {
    function ModalDialogParams(context, closeCallback) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.closeCallback = closeCallback;
    }
    return ModalDialogParams;
}());
exports.ModalDialogParams = ModalDialogParams;
var ModalDialogService = /** @class */ (function () {
    function ModalDialogService() {
    }
    ModalDialogService.prototype.showModal = function (type, _a) {
        var viewContainerRef = _a.viewContainerRef, moduleRef = _a.moduleRef, context = _a.context, fullscreen = _a.fullscreen;
        if (!viewContainerRef) {
            throw new Error("No viewContainerRef: " +
                "Make sure you pass viewContainerRef in ModalDialogOptions.");
        }
        var parentView = viewContainerRef.element.nativeElement;
        if (parentView instanceof app_host_view_1.AppHostView && parentView.ngAppRoot) {
            parentView = parentView.ngAppRoot;
        }
        var pageFactory = viewContainerRef.injector.get(platform_providers_1.PAGE_FACTORY);
        // resolve from particular module (moduleRef)
        // or from same module as parentView (viewContainerRef)
        var componentContainer = moduleRef || viewContainerRef;
        var resolver = componentContainer.injector.get(core_1.ComponentFactoryResolver);
        return new Promise(function (resolve) {
            setTimeout(function () {
                return ModalDialogService.showDialog({
                    containerRef: viewContainerRef,
                    context: context,
                    doneCallback: resolve,
                    fullscreen: fullscreen,
                    pageFactory: pageFactory,
                    parentView: parentView,
                    resolver: resolver,
                    type: type,
                });
            }, 10);
        });
    };
    ModalDialogService.showDialog = function (_a) {
        var containerRef = _a.containerRef, context = _a.context, doneCallback = _a.doneCallback, fullscreen = _a.fullscreen, pageFactory = _a.pageFactory, parentView = _a.parentView, resolver = _a.resolver, type = _a.type;
        var page = pageFactory({ isModal: true, componentType: type });
        var detachedLoaderRef;
        var closeCallback = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            doneCallback.apply(undefined, args);
            page.closeModal();
            detachedLoaderRef.instance.detectChanges();
            detachedLoaderRef.destroy();
        };
        var modalParams = new ModalDialogParams(context, closeCallback);
        var providers = core_1.ReflectiveInjector.resolve([
            { provide: page_1.Page, useValue: page },
            { provide: ModalDialogParams, useValue: modalParams },
        ]);
        var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, containerRef.parentInjector);
        var detachedFactory = resolver.resolveComponentFactory(detached_loader_1.DetachedLoader);
        detachedLoaderRef = containerRef.createComponent(detachedFactory, -1, childInjector, null);
        detachedLoaderRef.instance.loadComponent(type).then(function (compRef) {
            var componentView = compRef.location.nativeElement;
            if (componentView.parent) {
                componentView.parent.removeChild(componentView);
            }
            page.content = componentView;
            parentView.showModal(page, context, closeCallback, fullscreen);
        });
    };
    ModalDialogService.decorators = [
        { type: core_1.Injectable },
    ];
    return ModalDialogService;
}());
exports.ModalDialogService = ModalDialogService;
var ModalDialogHost = /** @class */ (function () {
    function ModalDialogHost() {
        throw new Error("ModalDialogHost is deprecated. " +
            "Call ModalDialogService.showModal() " +
            "by passing ViewContainerRef in the options instead.");
    }
    ModalDialogHost.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[modal-dialog-host]" // tslint:disable-line:directive-selector
                },] },
    ];
    /** @nocollapse */
    ModalDialogHost.ctorParameters = function () { return []; };
    return ModalDialogHost;
}());
exports.ModalDialogHost = ModalDialogHost;
//# sourceMappingURL=dialogs.js.map