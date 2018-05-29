"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var http = require("http");
var vm = new main_view_model_1.HelloWorldModel();
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
        console.dir(res.content.raw);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBQ3BELDJCQUE2QjtBQUU3QixJQUFNLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNqQyxJQUFJLEtBQVUsQ0FBQztBQUVmLHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFHekIsSUFBSSxPQUFPLEdBQUc7UUFDVixHQUFHLEVBQUUsdUVBQXVFO1FBQzVFLE1BQU0sRUFBRSxLQUFLO0tBQ2hCLENBQUE7SUFFRCxJQUFJLG1CQUFtQixHQUFHO1FBQ3RCLEdBQUcsRUFBRSxzRUFBc0U7UUFDM0UsTUFBTSxFQUFFLEtBQUs7S0FDaEIsQ0FBQTtJQUVELHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxLQUFLO0lBRVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNaLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0FBRUYsQ0FBQztBQTNDRCxvQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XG5cbmNvbnN0IHZtID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xubGV0IGltYWdlOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgdm0uc2V0KFwibXlMb2dvXCIsIFwiXCIpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xuXG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly8yMy45Ny4xNzkuMTA6ODA4MS9hcGkvTW9iaWxlQ29tbW9uL0dldFVzZXJJbWFnZT91c2VyTmFtZT1BZG1pblwiLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9XG5cbiAgICBsZXQgbmF0aXZlc2NyaXB0T3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzI3Mi8xKllWeVZhXzVDQUNfQ2tocm1nTlMyRWcucG5nXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH1cblxuICAgIC8vIGh0dHAucmVxdWVzdChvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdFwiKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcbiAgICAvLyAgICAgLy8gY29uc3QgcmVzdWx0ID0gcmVzLmNvbnRlbnQudG9KU09OKCk7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG4gICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJlcnI6IFwiLCBlcnIpO1xuICAgIC8vIH0pXG5cbmh0dHAucmVxdWVzdChvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0XCIpO1xuICAgIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgY29uc29sZS5kaXIocmVzLmNvbnRlbnQucmF3KTtcblxuICAgIHJlcy5jb250ZW50LnRvSW1hZ2UoKS50aGVuKGltZyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGltZyk7XG4gICAgICAgIGltYWdlID0gaW1nO1xuICAgICAgICB2bS5zZXQoXCJteUxvZ29cIiwgaW1hZ2UpO1xuICAgIH0pXG5cbn0pLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlcnI6IFwiLCBlcnIpO1xufSlcblxufSJdfQ==