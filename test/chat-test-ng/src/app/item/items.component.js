"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TypeUtils = require("tns-core-modules/utils/types");
var nativescript_chatview_1 = require("nativescript-chatview");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.stack = this.container.nativeElement;
        var chatView = this.createChatView();
        this.stack.addChild(chatView);
    };
    ItemsComponent.prototype.createChatView = function () {
        var _this = this;
        var chatView = new nativescript_chatview_1.ChatView();
        chatView.sendMessageButtonCaption = "Send";
        chatView.typeMessageHint = "Your message for Albert";
        chatView.notifyOnSendMessageTap(function (eventData) {
            console.log("notifyOnSendMessageTap");
            // eventData.object === chatView
            eventData.object.appendMessages({
                date: _this.getTime(),
                isRight: true,
                image: "res://icon",
                message: eventData.message,
            });
            eventData.resetMessage();
            eventData.scrollToBottom();
            eventData.focusTextField();
            // setTimeout for testing purposes only
            // in real life you would want to aappend the newly received message from the backend
            setTimeout(function () {
                chatView.appendMessages({
                    date: _this.getTime(),
                    isRight: false,
                    image: "~/img/alert.jpg",
                    message: _this.createAnswer(eventData.message),
                });
            }, Math.floor(Math.random() * 2000));
        });
        chatView.focusMessageField();
        return chatView;
    };
    ItemsComponent.prototype.getTime = function () {
        var now = new Date();
        var hours = now.getHours();
        return this.numberToString(hours == 12 ? 12 : (hours % 12)) + ":" + this.numberToString(now.getMinutes()) + " " +
            (hours < 13 ? "AM" : "PM");
    };
    ItemsComponent.prototype.numberToString = function (n) {
        var str = "" + n;
        if (n < 10) {
            str = "0" + str;
        }
        return str;
    };
    ItemsComponent.prototype.createAnswer = function (msg) {
        if (/(\s*)([0-9]+)(\.?)([0-9]*)(\s*)([\+|\-|\*|\/])(\s*)([0-9]+)(\.?)([0-9]*)/i.test(msg)) {
            var result;
            eval("result = " + msg + ";");
            return result;
        }
        else if (this.checkForAllTerms(this.getLettersAndDigitsOnly(msg), "how", "are", "you")) {
            return "Fine!";
        }
        else if (this.checkForAllTerms(this.getLettersAndDigitsOnly(msg), "what", "time", "is", "it")) {
            return this.getTime();
        }
        else if (this.checkForAllTerms(this.getLettersAndDigitsOnly(msg), "hi")) {
            return "Hi! How are you?";
        }
        else if (this.checkForAllTerms(this.getLettersAndDigitsOnly(msg), "fine")) {
            return "Cool!";
        }
        else {
            return 'You said: "' + msg + '"';
        }
    };
    ItemsComponent.prototype.checkForAllTerms = function (str) {
        var terms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            terms[_i - 1] = arguments[_i];
        }
        var parts = str.split(" ");
        for (var i = 0; i < parts.length; i++) {
            var p = parts[i];
            if (p.trim() === "") {
                continue;
            }
            var found = false;
            for (var ii = 0; ii < terms.length; ii++) {
                var t = terms[ii];
                if (this.getSimilarity(p, t) >= 0.5) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    };
    ItemsComponent.prototype.getLettersAndDigitsOnly = function (str) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            if (/[a-zA-Z0-9]/i.test(str[i])) {
                result += str[i];
            }
            else if (/[\s]/i.test(str[i])) {
                result += " ";
            }
        }
        return result;
    };
    ItemsComponent.prototype.getSimilarity = function (left, right) {
        if (left === right) {
            return 1;
        }
        if (TypeUtils.isNullOrUndefined(left) ||
            TypeUtils.isNullOrUndefined(right)) {
            return 0;
        }
        left = left.toLowerCase().trim();
        right = right.toLowerCase().trim();
        var distance = 0;
        if (left !== right) {
            var matrix = new Array(left.length + 1);
            for (var i = 0; i < matrix.length; i++) {
                matrix[i] = new Array(right.length + 1);
                for (var ii = 0; ii < matrix[i].length; ii++) {
                    matrix[i][ii] = 0;
                }
            }
            for (var i = 0; i <= left.length; i++) {
                matrix[i][0] = i;
            }
            for (var j = 0; j <= right.length; j++) {
                matrix[0][j] = j;
            }
            for (var i = 0; i < left.length; i++) {
                for (var j = 0; j < right.length; j++) {
                    if (left[i] === right[j]) {
                        matrix[i + 1][j + 1] = matrix[i][j];
                    }
                    else {
                        matrix[i + 1][j + 1] = Math.min(matrix[i][j + 1] + 1, matrix[i + 1][j] + 1);
                        matrix[i + 1][j + 1] = Math.min(matrix[i + 1][j + 1], matrix[i][j] + 1);
                    }
                }
                distance = matrix[left.length][right.length];
            }
        }
        return 1.0 - distance / Math.max(left.length, right.length);
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "container", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBRWpFLHdEQUEwRDtBQUUxRCwrREFBaUQ7QUFRakQ7SUFBQTtJQTZMQSxDQUFDO0lBeExHLHdDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRTFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUFBLGlCQXNDQztRQXJDRyxJQUFJLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztRQUM5QixRQUFRLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQUM7UUFFckQsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFVBQUMsU0FBUztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFdEMsZ0NBQWdDO1lBQ2hDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUM1QixJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTzthQUM3QixDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUUzQix1Q0FBdUM7WUFDdkMscUZBQXFGO1lBQ3JGLFVBQVUsQ0FBQztnQkFDUCxR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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDckQ7aUJBQ0o7Z0JBRUQsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7UUFFRCxPQUFPLEdBQUcsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBMUxzQjtRQUF0QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBVyxpQkFBVTtxREFBQztJQUZwQyxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO09BQ1csY0FBYyxDQTZMMUI7SUFBRCxxQkFBQztDQUFBLEFBN0xELElBNkxDO0FBN0xZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBUeXBlVXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IENoYXRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jaGF0dmlld1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiljb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgc3RhY2s6IFN0YWNrTGF5b3V0O1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YWNrID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBsZXQgY2hhdFZpZXcgPSB0aGlzLmNyZWF0ZUNoYXRWaWV3KCk7XG4gICAgICAgIHRoaXMuc3RhY2suYWRkQ2hpbGQoY2hhdFZpZXcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNoYXRWaWV3KCk6IENoYXRWaWV3IHtcbiAgICAgICAgdmFyIGNoYXRWaWV3ID0gbmV3IENoYXRWaWV3KCk7XG4gICAgICAgIGNoYXRWaWV3LnNlbmRNZXNzYWdlQnV0dG9uQ2FwdGlvbiA9IFwiU2VuZFwiO1xuICAgICAgICBjaGF0Vmlldy50eXBlTWVzc2FnZUhpbnQgPSBcIllvdXIgbWVzc2FnZSBmb3IgQWxiZXJ0XCI7XG4gIFxuICAgICAgICBjaGF0Vmlldy5ub3RpZnlPblNlbmRNZXNzYWdlVGFwKChldmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBub3RpZnlPblNlbmRNZXNzYWdlVGFwYCk7XG5cbiAgICAgICAgICAgIC8vIGV2ZW50RGF0YS5vYmplY3QgPT09IGNoYXRWaWV3XG4gICAgICAgICAgICBldmVudERhdGEub2JqZWN0LmFwcGVuZE1lc3NhZ2VzKHsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBpc1JpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGltYWdlOiBcInJlczovL2ljb25cIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBldmVudERhdGEubWVzc2FnZSwgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXZlbnREYXRhLnJlc2V0TWVzc2FnZSgpO1xuICAgICAgICAgICAgZXZlbnREYXRhLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICBldmVudERhdGEuZm9jdXNUZXh0RmllbGQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gICAgICAgICAgICAvLyBpbiByZWFsIGxpZmUgeW91IHdvdWxkIHdhbnQgdG8gYWFwcGVuZCB0aGUgbmV3bHkgcmVjZWl2ZWQgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGF0Vmlldy5hcHBlbmRNZXNzYWdlcyh7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgaXNSaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwifi9pbWcvYWxlcnQuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5jcmVhdGVBbnN3ZXIoZXZlbnREYXRhLm1lc3NhZ2UpLCAgXG4gICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVBbnN3ZXIgaXMgZm9yIHRlc3RpbmcgcHVycG9yc2VzIG9ubHkgXG4gICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBmZXRjaGVkIGFuc3dlciBmcm9tIHRoZSBiYWNrZW5kIChLaW52ZXksIEZpcmViYXNlLCBldGMuKVxuICAgICAgICAgICAgICAgfSk7IFxuXG4gICAgICAgICAgICB9LCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDAwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY2hhdFZpZXcuZm9jdXNNZXNzYWdlRmllbGQoKTtcblxuICAgICAgICByZXR1cm4gY2hhdFZpZXc7XG4gICAgfVxuXG4gICAgZ2V0VGltZSgpIDogc3RyaW5nIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgaG91cnMgPSBub3cuZ2V0SG91cnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyVG9TdHJpbmcoaG91cnMgPT0gMTIgPyAxMiA6IChob3VycyAlIDEyKSkgKyBcIjpcIiArIHRoaXMubnVtYmVyVG9TdHJpbmcobm93LmdldE1pbnV0ZXMoKSkgKyBcIiBcIiArIFxuICAgICAgICAgICAgICAgKGhvdXJzIDwgMTMgPyBcIkFNXCIgOiBcIlBNXCIpO1xuICAgIH1cbiAgICBcbiAgICBudW1iZXJUb1N0cmluZyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICB2YXIgc3RyID0gXCJcIiArIG47XG4gICAgICAgIGlmIChuIDwgMTApIHtcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVBbnN3ZXIobXNnKSA6IHN0cmluZyB7XG4gICAgICAgIGlmICgvKFxccyopKFswLTldKykoXFwuPykoWzAtOV0qKShcXHMqKShbXFwrfFxcLXxcXCp8XFwvXSkoXFxzKikoWzAtOV0rKShcXC4/KShbMC05XSopL2kudGVzdChtc2cpKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgZXZhbChcInJlc3VsdCA9IFwiICsgbXNnICsgXCI7XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tGb3JBbGxUZXJtcyh0aGlzLmdldExldHRlcnNBbmREaWdpdHNPbmx5KG1zZyksIFwiaG93XCIsIFwiYXJlXCIsIFwieW91XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJGaW5lIVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tGb3JBbGxUZXJtcyh0aGlzLmdldExldHRlcnNBbmREaWdpdHNPbmx5KG1zZyksIFwid2hhdFwiLCBcInRpbWVcIiwgXCJpc1wiLCBcIml0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jaGVja0ZvckFsbFRlcm1zKHRoaXMuZ2V0TGV0dGVyc0FuZERpZ2l0c09ubHkobXNnKSwgXCJoaVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSGkhIEhvdyBhcmUgeW91P1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tGb3JBbGxUZXJtcyh0aGlzLmdldExldHRlcnNBbmREaWdpdHNPbmx5KG1zZyksIFwiZmluZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29vbCFcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnWW91IHNhaWQ6IFwiJyArIG1zZyArICdcIic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ZvckFsbFRlcm1zKHN0cjogc3RyaW5nLCAuLi50ZXJtczogc3RyaW5nW10pIDogYm9vbGVhbiB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChcIiBcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwID0gcGFydHNbaV07XG4gICAgICAgICAgICBpZiAocC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB0ZXJtcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRlcm1zW2lpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRTaW1pbGFyaXR5KHAsIHQpID49IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0TGV0dGVyc0FuZERpZ2l0c09ubHkoc3RyOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKC9bYS16QS1aMC05XS9pLnRlc3Qoc3RyW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdHJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgvW1xcc10vaS50ZXN0KHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIGdldFNpbWlsYXJpdHkobGVmdDogc3RyaW5nLCByaWdodDogc3RyaW5nKSA6IG51bWJlciB7XG4gICAgICAgIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKFR5cGVVdGlscy5pc051bGxPclVuZGVmaW5lZChsZWZ0KSB8fFxuICAgICAgICAgICAgVHlwZVV0aWxzLmlzTnVsbE9yVW5kZWZpbmVkKHJpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKGxlZnQgIT09IHJpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gbmV3IEFycmF5KGxlZnQubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheShyaWdodC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbWF0cml4W2ldLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1baWldID0gMDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsZWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4W2ldWzBdID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gcmlnaHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBtYXRyaXhbMF1bal0gPSBqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlZnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJpZ2h0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0W2ldID09PSByaWdodFtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2kgKyAxXVtqICsgMV0gPSBtYXRyaXhbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaSArIDFdW2ogKyAxXSA9IE1hdGgubWluKG1hdHJpeFtpXVtqICsgMV0gKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaSArIDFdW2pdICsgMSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaSArIDFdW2ogKyAxXSA9IE1hdGgubWluKG1hdHJpeFtpICsgMV1baiArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bal0gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IG1hdHJpeFtsZWZ0Lmxlbmd0aF1bcmlnaHQubGVuZ3RoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIDEuMCAtIGRpc3RhbmNlIC8gTWF0aC5tYXgobGVmdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0Lmxlbmd0aCk7ICAgIFxuICAgIH1cbn0iXX0=