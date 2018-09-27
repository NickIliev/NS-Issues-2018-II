"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var http = require("tns-core-modules/http");
var vm = new observable_1.Observable();
var image;
function navigatingTo(args) {
    var page = args.object;
    vm.set("myLogo", "");
    page.bindingContext = vm;
    var options = {
        url: "http://23.97.179.10:8081/api/MobileCommon/GetUserImage?userName=Admin",
        method: "GET"
    };
    var nativescriptOptions = {
        url: "https://cdn-images-1.medium.com/max/272/1*YVyVa_5CAC_CkhrmgNS2Eg.png",
        method: "GET"
    };
    // http.request(options).then(res => {
    //     console.log("request");
    //     console.log("res", res);
    //     // const result = res.content.toJSON();
    //     // console.log("result", result);
    // }).catch(err => {
    //     console.log("err: ", err);
    // })
    http.request(options).then(function (res) {
        console.log("request");
        console.dir(res);
        res.content.toImage().then(function (img) {
            console.log(img);
            image = img;
            vm.set("myLogo", image);
        });
    }).catch(function (err) {
        console.log("err: ", err);
    });
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0RBQXlFO0FBRXpFLDRDQUE4QztBQUU5QyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEtBQVUsQ0FBQztBQUVmLHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFHekIsSUFBSSxPQUFPLEdBQUc7UUFDVixHQUFHLEVBQUUsdUVBQXVFO1FBQzVFLE1BQU0sRUFBRSxLQUFLO0tBQ2hCLENBQUE7SUFFRCxJQUFJLG1CQUFtQixHQUFHO1FBQ3RCLEdBQUcsRUFBRSxzRUFBc0U7UUFDM0UsTUFBTSxFQUFFLEtBQUs7S0FDaEIsQ0FBQTtJQUVELHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxLQUFLO0lBRUwsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ1osRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDO0FBMUNELG9DQTBDQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xubGV0IGltYWdlOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgdm0uc2V0KFwibXlMb2dvXCIsIFwiXCIpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly8yMy45Ny4xNzkuMTA6ODA4MS9hcGkvTW9iaWxlQ29tbW9uL0dldFVzZXJJbWFnZT91c2VyTmFtZT1BZG1pblwiLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9XG5cbiAgICBsZXQgbmF0aXZlc2NyaXB0T3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzI3Mi8xKllWeVZhXzVDQUNfQ2tocm1nTlMyRWcucG5nXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH1cblxuICAgIC8vIGh0dHAucmVxdWVzdChvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdFwiKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcbiAgICAvLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gcmVzLmNvbnRlbnQudG9KU09OKCk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJlcnI6IFwiLCBlcnIpO1xuICAgIC8vIH0pXG5cbiAgICBodHRwLnJlcXVlc3Qob3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RcIik7XG4gICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG5cbiAgICAgICAgcmVzLmNvbnRlbnQudG9JbWFnZSgpLnRoZW4oaW1nID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XG4gICAgICAgICAgICBpbWFnZSA9IGltZztcbiAgICAgICAgICAgIHZtLnNldChcIm15TG9nb1wiLCBpbWFnZSk7XG4gICAgICAgIH0pXG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycjogXCIsIGVycik7XG4gICAgfSlcblxufSJdfQ==