import { Observable } from "data/observable";

export class HelloWorldModel extends Observable {
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    // this.message = new Date("2018-06-14T12:01:06").toString();
    // this.message = new Date("2011-10-05T14:48:00.000Z").toString();

    this.message = new Date(2018, 6, 14, 12, 1, 6).toString();
    console.log(this.message);
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange("message", value);
    }
  }
}
