import { EventData } from 'data/observable';
import { Page } from 'ui/page';

let myImage1: any;
let myImage2: any;
let myImage3: any;
let myImage4: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function animate() {
    myImage1.animate({
        iterations: 10000,
        duration: 2000,
        translate: {
            x: 0,
            y: 200
        },
        scale: {
            x: 4,
            y: 4
        }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });

    myImage2.animate({
        iterations: 10000,
        duration: 2000,
        translate: {
            x: 100,
            y: 200
        },
        scale: {
            x: 4,
            y: 4
        }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });

    myImage3.animate({
        iterations: 10000,
        duration: 1000,
        translate: {
            x: 100,
            y: 300
        },
        scale: {
            x: 4,
            y: 4
        }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });

    myImage4.animate({
        iterations: 10000,
        duration: 2000,
        scale: {
            x: 4,
            y: 4
        }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });
}
export function onImage1Loaded(args) {
    myImage1 = args.object;
}
export function onImage2Loaded(args) {
    myImage2 = args.object;
}
export function onImagе3Loaded(args) {
    myImage3 = args.object;
}
export function onImage4Loaded(args) {
    myImage4 = args.object;
}