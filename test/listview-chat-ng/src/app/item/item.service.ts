import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, from: "John", message: "Hey There!" },
        { id: 3, from: "Ann", message: "Yo-ho-ho" },
        { id: 4, from: "Ann", message: "Hello Mr.Smith" },
        { id: 5, from: "Ann", message: "Hello Mr.Smith" },
        { id: 6, from: "Ann", message: "Hello Mr.Smith" },
        { id: 7, from: "John", message: "Hello Mr.Smith" },
        { id: 8, from: "John", message: "Hello Mr.Smith" },
        { id: 9, from: "John", message: "Welcome" },
        { id: 10, from: "Ann", message: "Welcome" },
        { id: 11, from: "Ann", message: "Welcome" },
        { id: 12, from: "John", message: "Hello Mr.Smith" },
        { id: 13, from: "Ann", message: "Hey There!" },
        { id: 14, from: "Ann", message: "Yo-ho-ho" },
        { id: 17, from: "Ann", message: "Welcome" },
        { id: 18, from: "John", message: "Yo-ho-ho" },
        { id: 19, from: "John", message: "Yo-ho-ho" },
        { id: 20, from: "Ann", message: "Hello Mr.Smith" },
        { id: 21, from: "John", message: "Hello Mr.Smith" },
        { id: 22, from: "Ann", message: "Hello Mr.Smith" },
        { id: 23, from: "John", message: "Yo-ho-ho" },
        { id: 24, from: "Ann", message: "Yo-ho-ho" },
        { id: 25, from: "John", message: "Hey There!" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
