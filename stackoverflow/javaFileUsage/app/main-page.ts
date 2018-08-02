
import { EventData } from 'data/observable';
declare let com: any;

export function navigatingTo(args: EventData) {
    let test = new com.tns.TestObject(); 
    console.log(test.doSomething());
}