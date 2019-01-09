"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.currentPagerIndex = 5;
        this.latestReceivedIndex = 0;
        // tslint:disable-next-line:semicolon
        this.templateSelector = function (item, index, items) {
            return index % 2 === 0 ? 'even' : 'odd';
        };
        this.items = new rxjs_1.BehaviorSubject([
            {
                title: 'Slide 1',
                image: '~/images/Hulk_(comics_character).png'
            },
            {
                title: 'Slide 2',
                image: 'https://s-media-cache-ak0.pinimg.com/originals/4c/92/cc/4c92cc1dfbde6a6a40fe799f56fa9294.jpg'
            },
            {
                title: 'Slide 3',
                image: 'https://images.unsplash.com/photo-1487715433499-93acdc0bd7c3?auto=format&fit=crop&w=2228&q=80'
            },
            {
                title: 'Slide 4',
                image: 'http://img15.deviantart.net/60ea/i/2012/310/e/4/shazam_by_maiolo-d5k6fr5.jpg'
            },
            {
                title: 'Slide 5',
                image: 'https://i.annihil.us/u/prod/marvel/i/mg/d/f0/558982863130d.jpg'
            },
            {
                title: 'Slide 6',
                image: 'https://images.unsplash.com/photo-1466872732082-8966b5959296?auto=format&fit=crop&w=2100&q=80'
            },
            {
                title: 'Slide 7',
                image: 'https://images.unsplash.com/photo-1464061884326-64f6ebd57f83?auto=format&fit=crop&w=2100&q=80'
            },
            {
                title: 'Slide 8',
                image: 'https://images.unsplash.com/photo-1519625073050-2815233885ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80'
            },
            {
                title: 'Slide 9',
                image: 'http://otakukart.com/animeblog/wp-content/uploads/2016/04/Kurama-Naruto.png'
            },
            {
                title: 'Slide 10',
                image: 'https://images.unsplash.com/photo-1474861644511-0f2775ae97cc?auto=format&fit=crop&w=2391&q=80'
            }
        ]);
        this.numItems = this.items.value.length;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var newItems = _this.items.value;
            newItems.push({
                title: 'Slide 11',
                image: '~/images/Hulk_(comics_character).png'
            });
            _this.items.next(newItems);
            _this.numItems = _this.items.value.length;
        }, 1000);
    };
    ItemsComponent.prototype.loaded = function (index) {
        console.log('view loaded', index);
    };
    ItemsComponent.prototype.loadedImage = function ($event) {
        console.log("loaded image " + $event);
    };
    ItemsComponent.prototype.prevPage = function () {
        var newIndex = Math.max(0, this.currentPagerIndex - 1);
        this.currentPagerIndex = newIndex;
        this.latestReceivedIndex = newIndex;
    };
    ItemsComponent.prototype.nextPage = function () {
        var newIndex = Math.min(this.numItems - 1, this.currentPagerIndex + 1);
        this.currentPagerIndex = newIndex;
        this.latestReceivedIndex = newIndex;
    };
    ItemsComponent.prototype.onIndexChanged = function ($event) {
        debugObj($event);
        this.latestReceivedIndex = $event.value;
        this.currentPagerIndex = $event.value;
        if (($event.value + 2) % 3 === 0) {
            var newItems = this.items.value;
            var items = [{
                    title: 'Slide ' + (newItems.length + 1),
                    image: "https://robohash.org/" + (newItems.length + 1) + ".png"
                }, {
                    title: 'Slide ' + (newItems.length + 2),
                    image: "https://robohash.org/" + (newItems.length + 2) + ".png"
                }, {
                    title: 'Slide ' + (newItems.length + 3),
                    image: "https://robohash.org/" + (newItems.length + 3) + ".png"
                }];
            newItems.push.apply(newItems, items);
            this.items.next(newItems);
            this.numItems = this.items.value.length;
        }
    };
    ItemsComponent.prototype.pageChanged = function (index) {
        console.log("pageChanged " + JSON.stringify(index));
        debugObj(index);
    };
    __decorate([
        core_1.ViewChild('pager'),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "pager", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-test',
            templateUrl: './items.component.html',
            styleUrls: ['items.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
function debugObj(obj) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        console.log(key + " = " + obj[key]);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDZCQUF1QztBQVF2QztJQVdJO1FBVEEsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUd4QixxQ0FBcUM7UUFDOUIscUJBQWdCLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYSxFQUFFLEtBQVU7WUFDM0QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUMsQ0FBQyxDQUFBO1FBR0csSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHNCQUFlLENBQUM7WUFDN0I7Z0JBQ0ksS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxzQ0FBc0M7YUFDaEQ7WUFDRDtnQkFDSSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUNELDhGQUE4RjthQUNyRztZQUNEO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQ0QsK0ZBQStGO2FBQ3RHO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFDRCw4RUFBOEU7YUFDckY7WUFDRDtnQkFDSSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLGdFQUFnRTthQUMxRTtZQUNEO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQ0QsK0ZBQStGO2FBQ3RHO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFDRCwrRkFBK0Y7YUFDdEc7WUFDRDtnQkFDSSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLHdJQUF3STthQUNsSjtZQUNEO2dCQUNJLEtBQUssRUFBRSxTQUFTO2dCQUNoQixLQUFLLEVBQ0QsNkVB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QUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQztRQUNwRCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQXBIbUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7aURBQUM7SUFMN0IsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzs7T0FDVyxjQUFjLENBMEgxQjtJQUFELHFCQUFDO0NBQUEsQUExSEQsSUEwSEM7QUExSFksd0NBQWM7QUE0SDNCLFNBQVMsUUFBUSxDQUFDLEdBQVE7SUFDdEIsS0FBa0IsVUFBZ0IsRUFBaEIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixjQUFnQixFQUFoQixJQUFnQixFQUFFO1FBQS9CLElBQU0sR0FBRyxTQUFBO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBSSxHQUFHLFdBQU0sR0FBRyxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7S0FDdkM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy10ZXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydpdGVtcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG51bUl0ZW1zO1xuICAgIGN1cnJlbnRQYWdlckluZGV4ID0gNTtcbiAgICBsYXRlc3RSZWNlaXZlZEluZGV4ID0gMDtcbiAgICBpdGVtczogYW55O1xuICAgIEBWaWV3Q2hpbGQoJ3BhZ2VyJykgcGFnZXI6IEVsZW1lbnRSZWY7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnNlbWljb2xvblxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNlbGVjdG9yID0gKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXggJSAyID09PSAwID8gJ2V2ZW4nIDogJ29kZCc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlIDEnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnfi9pbWFnZXMvSHVsa18oY29taWNzX2NoYXJhY3RlcikucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlIDInLFxuICAgICAgICAgICAgICAgIGltYWdlOlxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tL29yaWdpbmFscy80Yy85Mi9jYy80YzkyY2MxZGZiZGU2YTZhNDBmZTc5OWY1NmZhOTI5NC5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgMycsXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NzcxNTQzMzQ5OS05M2FjZGMwYmQ3YzM/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMjI4JnE9ODAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgNCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdodHRwOi8vaW1nMTUuZGV2aWFudGFydC5uZXQvNjBlYS9pLzIwMTIvMzEwL2UvNC9zaGF6YW1fYnlfbWFpb2xvLWQ1azZmcjUuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NsaWRlIDUnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmFubmloaWwudXMvdS9wcm9kL21hcnZlbC9pL21nL2QvZjAvNTU4OTgyODYzMTMwZC5qcGcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgNicsXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2Njg3MjczMjA4Mi04OTY2YjU5NTkyOTY/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMTAwJnE9ODAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgNycsXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2NDA2MTg4NDMyNi02NGY2ZWJkNTdmODM/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMTAwJnE9ODAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgOCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxOTYyNTA3MzA1MC0yODE1MjMzODg1YWI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTUmcT04MCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZSA5JyxcbiAgICAgICAgICAgICAgICBpbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHA6Ly9vdGFrdWthcnQuY29tL2FuaW1lYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9LdXJhbWEtTmFydXRvLnBuZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZSAxMCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3NDg2MTY0NDUxMS0wZjI3NzVhZTk3Y2M/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMzkxJnE9ODAnXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm51bUl0ZW1zID0gdGhpcy5pdGVtcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gKDxCZWhhdmlvclN1YmplY3Q8YW55Pj50aGlzLml0ZW1zKS52YWx1ZTtcbiAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2xpZGUgMTEnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnfi9pbWFnZXMvSHVsa18oY29taWNzX2NoYXJhY3RlcikucG5nJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLm5leHQobmV3SXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5udW1JdGVtcyA9IHRoaXMuaXRlbXMudmFsdWUubGVuZ3RoO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBsb2FkZWQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndmlldyBsb2FkZWQnLCBpbmRleCk7XG4gICAgfVxuXG4gICAgbG9hZGVkSW1hZ2UoJGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBsb2FkZWQgaW1hZ2UgJHskZXZlbnR9YCk7XG4gICAgfVxuXG4gICAgcHJldlBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5jdXJyZW50UGFnZXJJbmRleCAtIDEpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlckluZGV4ID0gbmV3SW5kZXg7XG4gICAgICAgIHRoaXMubGF0ZXN0UmVjZWl2ZWRJbmRleCA9IG5ld0luZGV4O1xuICAgIH1cblxuICAgIG5leHRQYWdlKCkge1xuICAgICAgICBjb25zdCBuZXdJbmRleCA9IE1hdGgubWluKHRoaXMubnVtSXRlbXMgLSAxLCB0aGlzLmN1cnJlbnRQYWdlckluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VySW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgdGhpcy5sYXRlc3RSZWNlaXZlZEluZGV4ID0gbmV3SW5kZXg7XG4gICAgfVxuXG4gICAgb25JbmRleENoYW5nZWQoJGV2ZW50KSB7XG4gICAgICAgIGRlYnVnT2JqKCRldmVudCk7XG4gICAgICAgIHRoaXMubGF0ZXN0UmVjZWl2ZWRJbmRleCA9ICRldmVudC52YWx1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZXJJbmRleCA9ICRldmVudC52YWx1ZTtcbiAgICAgICAgaWYgKCgkZXZlbnQudmFsdWUgKyAyKSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9ICg8QmVoYXZpb3JTdWJqZWN0PGFueT4+dGhpcy5pdGVtcykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZSAnICsgKG5ld0l0ZW1zLmxlbmd0aCArIDEpLFxuICAgICAgICAgICAgICAgIGltYWdlOiBgaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJHtuZXdJdGVtcy5sZW5ndGggKyAxfS5wbmdgXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZSAnICsgKG5ld0l0ZW1zLmxlbmd0aCArIDIpLFxuICAgICAgICAgICAgICAgIGltYWdlOiBgaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJHtuZXdJdGVtcy5sZW5ndGggKyAyfS5wbmdgXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTbGlkZSAnICsgKG5ld0l0ZW1zLmxlbmd0aCArIDMpLFxuICAgICAgICAgICAgICAgIGltYWdlOiBgaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJHtuZXdJdGVtcy5sZW5ndGggKyAzfS5wbmdgXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2goLi4uaXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5uZXh0KG5ld0l0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMubnVtSXRlbXMgPSB0aGlzLml0ZW1zLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhZ2VDaGFuZ2VkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHBhZ2VDaGFuZ2VkICR7SlNPTi5zdHJpbmdpZnkoaW5kZXgpfWApO1xuICAgICAgICBkZWJ1Z09iaihpbmRleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWJ1Z09iaihvYmo6IGFueSkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSA9ICR7b2JqW2tleV19YCk7XG4gICAgfVxufSJdfQ==