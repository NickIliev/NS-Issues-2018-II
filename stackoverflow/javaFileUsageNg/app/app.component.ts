import { Component } from "@angular/core";
declare let com: any;

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    message: string;

    public onTap() {
        var test = new com.tns.TestObject(); //cant use this without the declare above
        console.log(test.doSomething()); //will print "hello" in the console

        this.message = test.doSomething();
    }
}
