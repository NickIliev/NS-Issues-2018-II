import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;
    private _loginText: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();

        this.loginText = "Hold me \n";
    }

    get loginText(): string {
        return this._loginText;
    }
    
    set loginText(value: string) {
        if (this._loginText !== value) {
            this._loginText = value;
            this.notifyPropertyChange('loginText', value)
        }
    }
    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}
