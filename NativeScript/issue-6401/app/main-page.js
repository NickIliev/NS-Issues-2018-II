"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function noHints(args) {
    var loginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.noHints = noHints;
function onlyHints(args) {
    var loginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userNameHint: "Enter username",
        passwordHint: "Enter pass"
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.onlyHints = onlyHints;
function hintsAndValues(args) {
    var loginOptions = {
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
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.hintsAndValues = hintsAndValues;
function mixedOptions(args) {
    var loginOptions = {
        title: "My Login Form",
        message: "Enter your credentials",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "John Smith (default pass)",
        passwordHint: "Enter pass"
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.mixedOptions = mixedOptions;
function mixedOptionsNoMessage(args) {
    var loginOptions = {
        title: "My Login Form",
        okButtonText: "Login",
        cancelButtonText: "Cancel",
        neutralButtonText: "Neutral",
        userName: "John Smith (default pass)",
        passwordHint: "Enter pass"
    };
    dialogs_1.login(loginOptions).then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.mixedOptionsNoMessage = mixedOptionsNoMessage;
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
function loginWithStrings(args) {
    dialogs_1.login("login form", "Enter username!", "Enter password", "John", "1234").then(function (r) {
        console.log("User: " + r.userName + "  Password: " + r.password);
    });
}
exports.loginWithStrings = loginWithStrings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQStFO0FBRS9FLGlCQUF3QixJQUFlO0lBQ25DLElBQU0sWUFBWSxHQUFpQjtRQUMvQixLQUFLLEVBQUUsZUFBZTtRQUN0QixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsU0FBUztLQUMvQixDQUFDO0lBRUYsZUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQWM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLENBQUMsQ0FBQyxRQUFRLG9CQUFlLENBQUMsQ0FBQyxRQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCwwQkFZQztBQUVELG1CQUEwQixJQUFlO0lBQ3JDLElBQU0sWUFBWSxHQUFpQjtRQUMvQixLQUFLLEVBQUUsZUFBZTtRQUN0QixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixZQUFZLEVBQUUsZ0JBQWdCO1FBQzlCLFlBQVksRUFBRSxZQUFZO0tBQzdCLENBQUM7SUFFRixlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBYztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsQ0FBQyxDQUFDLFFBQVEsb0JBQWUsQ0FBQyxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWRELDhCQWNDO0FBRUQsd0JBQStCLElBQWU7SUFDMUMsSUFBTSxZQUFZLEdBQWlCO1FBQy9CLEtBQUssRUFBRSxlQUFlO1FBQ3RCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsWUFBWSxFQUFFLE9BQU87UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsWUFBWSxFQUFFLFlBQVk7UUFDMUIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUVGLGVBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFjO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxDQUFDLENBQUMsUUFBUSxvQkFBZSxDQUFDLENBQUMsUUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBaEJELHdDQWdCQztBQUVELHNCQUE2QixJQUFlO0lBQ3hDLElBQU0sWUFBWSxHQUFpQjtRQUMvQixLQUFLLEVBQUUsZUFBZTtRQUN0QixPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFlBQVksRUFBRSxZQUFZO0tBQzdCLENBQUM7SUFFRixlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBYztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsQ0FBQyxDQUFDLFFBQVEsb0JBQWUsQ0FBQyxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWRELG9DQWNDO0FBRUQsK0JBQXNDLElBQWU7SUFDakQsSUFBTSxZQUFZLEdBQWlCO1FBQy9CLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLFlBQVksRUFBRSxZQUFZO0tBQzdCLENBQUM7SUFFRixlQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBYztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsQ0FBQyxDQUFDLFFBQVEsb0JBQWUsQ0FBQyxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWJELHNEQWFDO0FBRUQsMkRBQTJEO0FBQzNELDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMsaURBQWlEO0FBQ2pELGlDQUFpQztBQUNqQyxTQUFTO0FBRVQscURBQXFEO0FBQ3JELHVFQUF1RTtBQUN2RSxVQUFVO0FBQ1YsSUFBSTtBQUVKLDBCQUFpQyxJQUFlO0lBQzVDLGVBQUssQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQWM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLENBQUMsQ0FBQyxRQUFRLG9CQUFlLENBQUMsQ0FBQyxRQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCw0Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMb2dpbk9wdGlvbnMsIExvZ2luUmVzdWx0LCBsb2dpbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vSGludHMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgbG9naW5PcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIk15IExvZ2luIEZvcm1cIixcbiAgICAgICAgbWVzc2FnZTogXCJFbnRlciB5b3VyIGNyZWRlbnRpYWxzXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXG4gICAgfTtcblxuICAgIGxvZ2luKGxvZ2luT3B0aW9ucykudGhlbigocjogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXI6ICR7ci51c2VyTmFtZX0gIFBhc3N3b3JkOiAke3IucGFzc3dvcmR9YCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmx5SGludHMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgbG9naW5PcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIk15IExvZ2luIEZvcm1cIixcbiAgICAgICAgbWVzc2FnZTogXCJFbnRlciB5b3VyIGNyZWRlbnRpYWxzXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXG4gICAgICAgIHVzZXJOYW1lSGludDogXCJFbnRlciB1c2VybmFtZVwiLFxuICAgICAgICBwYXNzd29yZEhpbnQ6IFwiRW50ZXIgcGFzc1wiXG4gICAgfTtcblxuICAgIGxvZ2luKGxvZ2luT3B0aW9ucykudGhlbigocjogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXI6ICR7ci51c2VyTmFtZX0gIFBhc3N3b3JkOiAke3IucGFzc3dvcmR9YCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaW50c0FuZFZhbHVlcyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBsb2dpbk9wdGlvbnM6IExvZ2luT3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTXkgTG9naW4gRm9ybVwiLFxuICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHlvdXIgY3JlZGVudGlhbHNcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxvZ2luXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWxcIixcbiAgICAgICAgdXNlck5hbWVIaW50OiBcIkVudGVyIHVzZXJuYW1lXCIsXG4gICAgICAgIHBhc3N3b3JkSGludDogXCJFbnRlciBwYXNzXCIsXG4gICAgICAgIHVzZXJOYW1lOiBcIkpvaG4gU21pdGhcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNFwiXG4gICAgfTtcblxuICAgIGxvZ2luKGxvZ2luT3B0aW9ucykudGhlbigocjogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFVzZXI6ICR7ci51c2VyTmFtZX0gIFBhc3N3b3JkOiAke3IucGFzc3dvcmR9YCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhlZE9wdGlvbnMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgbG9naW5PcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7XG4gICAgICAgIHRpdGxlOiBcIk15IExvZ2luIEZvcm1cIixcbiAgICAgICAgbWVzc2FnZTogXCJFbnRlciB5b3VyIGNyZWRlbnRpYWxzXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXG4gICAgICAgIHVzZXJOYW1lOiBcIkpvaG4gU21pdGggKGRlZmF1bHQgcGFzcylcIixcbiAgICAgICAgcGFzc3dvcmRIaW50OiBcIkVudGVyIHBhc3NcIlxuICAgIH07XG5cbiAgICBsb2dpbihsb2dpbk9wdGlvbnMpLnRoZW4oKHI6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VyOiAke3IudXNlck5hbWV9ICBQYXNzd29yZDogJHtyLnBhc3N3b3JkfWApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4ZWRPcHRpb25zTm9NZXNzYWdlKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGxvZ2luT3B0aW9uczogTG9naW5PcHRpb25zID0ge1xuICAgICAgICB0aXRsZTogXCJNeSBMb2dpbiBGb3JtXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsXCIsXG4gICAgICAgIHVzZXJOYW1lOiBcIkpvaG4gU21pdGggKGRlZmF1bHQgcGFzcylcIixcbiAgICAgICAgcGFzc3dvcmRIaW50OiBcIkVudGVyIHBhc3NcIlxuICAgIH07XG5cbiAgICBsb2dpbihsb2dpbk9wdGlvbnMpLnRoZW4oKHI6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVc2VyOiAke3IudXNlck5hbWV9ICBQYXNzd29yZDogJHtyLnBhc3N3b3JkfWApO1xuICAgIH0pO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9EZWZhdWx0T3B0aW9uc0F0QWxsKGFyZ3M6IEV2ZW50RGF0YSkge1xuLy8gICAgIGNvbnN0IGxvZ2luT3B0aW9uczogTG9naW5PcHRpb25zID0ge1xuLy8gICAgICAgICBtZXNzYWdlOiBcImxvZ2luIGZvcm1cIixcbi8vICAgICAgICAgdXNlck5hbWU6IFwiSm9obiBTbWl0aCAoZGVmYXVsdCBwYXNzKVwiLFxuLy8gICAgICAgICBwYXNzd29yZDogXCJFbnRlciBwYXNzXCJcbi8vICAgICB9O1xuXG4vLyAgICAgbG9naW4obG9naW5PcHRpb25zKS50aGVuKChyOiBMb2dpblJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgVXNlcjogJHtyLnVzZXJOYW1lfSAgUGFzc3dvcmQ6ICR7ci5wYXNzd29yZH1gKTtcbi8vICAgICB9KTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luV2l0aFN0cmluZ3MoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbG9naW4oXCJsb2dpbiBmb3JtXCIsIFwiRW50ZXIgdXNlcm5hbWUhXCIsIFwiRW50ZXIgcGFzc3dvcmRcIiwgXCJKb2huXCIsIFwiMTIzNFwiKS50aGVuKChyOiBMb2dpblJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVXNlcjogJHtyLnVzZXJOYW1lfSAgUGFzc3dvcmQ6ICR7ci5wYXNzd29yZH1gKTtcbiAgICB9KTtcbn1cbiJdfQ==