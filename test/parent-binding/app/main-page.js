"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var viewModel = observable_1.fromObject({
        items: [1, 2, 3, 4, 5, 6],
        test: "Parent binding! (the value came from the `test` property )",
        onTap: function (args) {
            console.log('Tapped ', args.object);
        }
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBR3hELHdCQUErQixJQUFlO0lBQzFDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBTSxTQUFTLEdBQUcsdUJBQVUsQ0FBQztRQUN6QixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFJLEVBQUUsNERBQTREO1FBQ2xFLEtBQUssRUFBRSxVQUFDLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3BDLENBQUM7QUFYRCx3Q0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gZnJvbU9iamVjdCh7XG4gICAgICAgIGl0ZW1zOiBbMSwgMiwgMywgNCwgNSwgNl0sXG4gICAgICAgIHRlc3Q6IFwiUGFyZW50IGJpbmRpbmchICh0aGUgdmFsdWUgY2FtZSBmcm9tIHRoZSBgdGVzdGAgcHJvcGVydHkgKVwiLFxuICAgICAgICBvblRhcDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXBwZWQgJywgYXJncy5vYmplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdmlld01vZGVsO1xufSJdfQ==