import { EventData } from 'data/observable';
import { LoginOptions, LoginResult, login } from "tns-core-modules/ui/dialogs";

export function noHints(args: EventData) {
    const loginOptions: LoginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
    };

    login(loginOptions).then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}

export function onlyHints(args: EventData) {
    const loginOptions: LoginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userNameHint: "Enter username",
        passwordHint: "Enter pass"
    };

    login(loginOptions).then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}

export function hintsAndValues(args: EventData) {
    const loginOptions: LoginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userNameHint: "Enter username",
        passwordHint: "Enter pass",
        userName: "John Smith",
        password: "1234"
    };

    login(loginOptions).then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}

export function mixedOptions(args: EventData) {
    const loginOptions: LoginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "John Smith (default pass)",
        passwordHint: "Enter pass"
    };

    login(loginOptions).then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}

export function mixedOptionsNoMessage(args: EventData) {
    const loginOptions: LoginOptions = {
        title: "My Login Form",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "John Smith (default pass)",
        passwordHint: "Enter pass"
    };

    login(loginOptions).then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}

// export function noDefaultOptionsAtAll(args: EventData) {
//     const loginOptions: LoginOptions = {
//         message: "login form",
//         userName: "John Smith (default pass)",
//         password: "Enter pass"
//     };

//     login(loginOptions).then((r: LoginResult) => {
//         console.log(`User: ${r.userName}  Password: ${r.password}`);
//     });
// }

export function loginWithStrings(args: EventData) {
    login("login form", "Enter username!", "Enter password", "John", "1234").then((r: LoginResult) => {
        console.log(`User: ${r.userName}  Password: ${r.password}`);
    });
}
