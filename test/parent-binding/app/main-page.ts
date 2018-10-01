import { EventData, fromObject } from 'data/observable';
import { Page } from 'ui/page';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = fromObject({
        items: [1, 2, 3, 4, 5, 6],
        test: "Parent binding! (the value came from the `test` property )",
        onTap: (args) => {
            console.log('Tapped ', args.object);
        }
    });

    page.bindingContext = viewModel;
}