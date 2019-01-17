import { Component, ViewChild, ElementRef } from "@angular/core";

import * as TypeUtils from "tns-core-modules/utils/types";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ChatView } from "nativescript-chatview";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    @ViewChild("container")container: ElementRef;
    stack: StackLayout;

    ngAfterViewInit(): void {
        this.stack = this.container.nativeElement;

        let chatView = this.createChatView();
        this.stack.addChild(chatView);
    }

    createChatView(): ChatView {
        var chatView = new ChatView();
        chatView.sendMessageButtonCaption = "Send";
        chatView.typeMessageHint = "Your message for Albert";
  
        chatView.notifyOnSendMessageTap((eventData) => {
            console.log(`notifyOnSendMessageTap`);

            // eventData.object === chatView
            eventData.object.appendMessages({            
                date: this.getTime(),
                isRight: true,
                image: "res://icon",
                message: eventData.message,    
            });
            
            eventData.resetMessage();
            eventData.scrollToBottom();
            eventData.focusTextField();
            
            // setTimeout for testing purposes only
            // in real life you would want to aappend the newly received message from the backend
            setTimeout(() => {
                chatView.appendMessages({            
                   date: this.getTime(),
                   isRight: false,
                   image: "~/img/alert.jpg",
                   message: this.createAnswer(eventData.message),  
                   // this.createAnswer is for testing purporses only 
                   // use the fetched answer from the backend (Kinvey, Firebase, etc.)
               }); 

            }, Math.floor(Math.random() * 2000));
        });
        
        chatView.focusMessageField();

        return chatView;
    }

    getTime() : string {
        var now = new Date();
        
        var hours = now.getHours();
        return this.numberToString(hours == 12 ? 12 : (hours % 12)) + ":" + this.numberToString(now.getMinutes()) + " " + 
               (hours < 13 ? "AM" : "PM");
    }
    
    numberToString(n: number): string {
        var str = "" + n;
        if (n < 10) {
            str = "0" + str;
        }
        
        return str;
    }
    
    createAnswer(msg) : string {
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
    }

    checkForAllTerms(str: string, ...terms: string[]) : boolean {
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
    }

    getLettersAndDigitsOnly(str: string) : string {
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
    }
    
    getSimilarity(left: string, right: string) : number {
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
                        matrix[i + 1][j + 1] = Math.min(matrix[i][j + 1] + 1,
                                                        matrix[i + 1][j] + 1);
    
                        matrix[i + 1][j + 1] = Math.min(matrix[i + 1][j + 1],
                                                        matrix[i][j] + 1);
                    }
                }
                
                distance = matrix[left.length][right.length];
            }
        }
        
        return 1.0 - distance / Math.max(left.length,
                                         right.length);    
    }
}