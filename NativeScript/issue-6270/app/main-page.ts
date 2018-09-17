
import { EventData } from 'tns-core-modules/data/observable';
import { Button } from 'tns-core-modules/ui/button';
import { Page } from 'tns-core-modules/ui/page';
import { AbsoluteLayout } from 'tns-core-modules/ui/layouts/absolute-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

export function onPageLoaded(args: EventData) {

    let page = <Page>args.object;
    const stack = <StackLayout>page.getViewById("stack");

    const absoluteLayout = new AbsoluteLayout();
  
    const button1 = new Button();
    button1.text = "Left: 10, Top: 5";
    button1.backgroundColor = "#0099CC";
    const button2 = new Button();
    button2.text = "Left: 30, Top: 80";
    button2.backgroundColor = "#C3C3E5";
    const button3 = new Button();
    button3.text = "Left: 150, Top: 25";
    button3.backgroundColor = "#CCFFFF";
    const button4 = new Button();
    button4.text = "Left: 70, Top: 150";
    button4.backgroundColor = "#8C489F";
  
    absoluteLayout.addChild(button1);
    absoluteLayout.addChild(button2);
    absoluteLayout.addChild(button3);
    absoluteLayout.addChild(button4);
  
    AbsoluteLayout.setLeft(button1, 10);
    AbsoluteLayout.setTop(button1, 5);
    AbsoluteLayout.setLeft(button2, 30);
    AbsoluteLayout.setTop(button2, 80);
    AbsoluteLayout.setLeft(button3, 150);
    AbsoluteLayout.setTop(button3, 25);
    AbsoluteLayout.setLeft(button4, 70);
    AbsoluteLayout.setTop(button4, 150);
  
    stack.addChild(absoluteLayout);
}