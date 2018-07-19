
import { Page } from 'tns-core-modules/ui/page';
import { Button } from 'tns-core-modules/ui/button';
import { EventData } from "tns-core-modules/data/observable";

const modalPageModule = "./modals/login-page";
const context = "some custom context";
const fullscreen = true;

export function onPageLoaded(args: EventData) {
    const mainPage = <Page>args.object;
    mainPage.showModal(modalPageModule, context, (username: string, password: string) => {
        // Receive data from the modal page. e.g. username & password
    }, fullscreen);
}

export function openModal(args: EventData) {
    const button = <Button>args.object;

    button.page.showModal(modalPageModule, context, (username: string, password: string) => {
        // Receive data from the modal page. e.g. username & password
    }, fullscreen);
}