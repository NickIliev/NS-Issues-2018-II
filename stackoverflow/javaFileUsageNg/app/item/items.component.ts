import { Component, OnInit } from "@angular/core";
declare let com: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    public onTap() {
        var test = new com.tns.TestObject(); //cant use this without the declare above
        console.log(test.doSomething()); //will print "hello" in the console
    }
}