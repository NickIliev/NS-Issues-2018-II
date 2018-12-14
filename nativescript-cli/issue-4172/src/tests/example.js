"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A sample Mocha test
var chai_1 = require("chai");
// import * as chai from "chai";
// export let assert: typeof chai.assert = (<any>global).chai.assert;
// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal(-1, [1,2,3].indexOf(5));
// 			assert.equal(-1, [1,2,3].indexOf(0));
// 		});
// 	});
// });
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai_1.assert.equal(-1, [1, 2, 3].indexOf(5));
            chai_1.assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQkFBc0I7QUFDdEIsNkJBQThCO0FBRTlCLGdDQUFnQztBQUNoQyxxRUFBcUU7QUFFckUsa0NBQWtDO0FBQ2xDLHdDQUF3QztBQUN4Qyx1RUFBdUU7QUFDdkUsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1IsT0FBTztBQUNQLE1BQU07QUFHTixRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ2pCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDdEIsRUFBRSxDQUFDLGdEQUFnRCxFQUFFO1lBQ3BELGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEEgc2FtcGxlIE1vY2hhIHRlc3RcclxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2hhaSc7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBjaGFpIGZyb20gXCJjaGFpXCI7XHJcbi8vIGV4cG9ydCBsZXQgYXNzZXJ0OiB0eXBlb2YgY2hhaS5hc3NlcnQgPSAoPGFueT5nbG9iYWwpLmNoYWkuYXNzZXJ0O1xyXG5cclxuLy8gZGVzY3JpYmUoJ0FycmF5JywgZnVuY3Rpb24gKCkge1xyXG4vLyBcdGRlc2NyaWJlKCcjaW5kZXhPZigpJywgZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0aXQoJ3Nob3VsZCByZXR1cm4gLTEgd2hlbiB0aGUgdmFsdWUgaXMgbm90IHByZXNlbnQnLCBmdW5jdGlvbiAoKSB7XHJcbi8vIFx0XHRcdGFzc2VydC5lcXVhbCgtMSwgWzEsMiwzXS5pbmRleE9mKDUpKTtcclxuLy8gXHRcdFx0YXNzZXJ0LmVxdWFsKC0xLCBbMSwyLDNdLmluZGV4T2YoMCkpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0fSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbmRlc2NyaWJlKCdBcnJheScsIGZ1bmN0aW9uICgpIHtcclxuXHRkZXNjcmliZSgnI2luZGV4T2YoKScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGl0KCdzaG91bGQgcmV0dXJuIC0xIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBwcmVzZW50JywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoLTEsIFsxLDIsM10uaW5kZXhPZig1KSk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCgtMSwgWzEsMiwzXS5pbmRleE9mKDApKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuIl19