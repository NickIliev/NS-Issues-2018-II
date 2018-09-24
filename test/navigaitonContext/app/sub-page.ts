import { Page } from "tns-core-modules/ui/page";

export function onNavigatedTo(args) {
    let page = <Page>args.object;
    page.bindingContext = page.navigationContext;
}