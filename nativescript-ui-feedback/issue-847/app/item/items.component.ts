import { Component } from "@angular/core";


@Component({
    selector: "gr-list",
    template: `<StackLayout>
        <Button (tap)="setType(1)" text="ScrollView with (scroll)"></Button>
        <Button (tap)="setType(2)" text="ScrollView without (scroll)"></Button>
        <Button (tap)="setType(3)" text="RadListView"></Button>

        <ScrollView *ngIf="type == 1" (scroll)="onScroll()">
            <StackLayout height="3000" class="m-4 p-10" backgroundColor="orangered" color="white">
                <Label *ngFor="let num of testData" [text]="'ScrollView with (scroll) ' + num"></Label>
            </StackLayout>
        </ScrollView>

        <ScrollView *ngIf="type == 2">
            <StackLayout height="3000" class="m-4 p-10" backgroundColor="orangered" color="white">
                <Label *ngFor="let num of testData" [text]="'ScrollView without (scroll) ' + num"></Label>
            </StackLayout>
        </ScrollView>

        <RadListView height="100%" *ngIf="type == 3" [items]="testData">
            <ng-template let-num="item">
                <StackLayout class="m-4 p-10" backgroundColor="orangered" color="white">
                    <Label [text]="'RadListView ' + num"></Label>
                </StackLayout>
            </ng-template>
        </RadListView>
    </StackLayout>`
})
export class ItemsComponent {
    testData: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    type: number = 1;

    onScroll() {}

    setType(type: number) {
        this.type = type;
    }
}