"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var couchbaseModule = require("nativescript-couchbase");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "database", {
        get: function () {
            return this._database;
        },
        set: function (value) {
            if (this._database !== value) {
                this._database = value;
                this.notifyPropertyChange("database", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        this.database = new couchbaseModule.Couchbase("test-database");
        var documentId = this.database.createDocument({
            "firstname": "Nic",
            "lastname": "Raboy",
            "address": {
                "city": "San Francisco",
                "state": "CA",
                "country": "USA"
            },
            "twitter": "https://www.twitter.com/nraboy"
        });
        console.log(documentId);
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELHdEQUEwRDtBQUUxRDtJQUFxQyxtQ0FBVTtJQUkzQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELHNCQUFJLHFDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBVTtZQUNuQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTthQUMvQztRQUNMLENBQUM7OztPQVBBO0lBU00sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9ELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQzFDLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFNBQVMsRUFBRTtnQkFDUCxNQUFNLEVBQUUsZUFBZTtnQkFDdkIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxTQUFTLEVBQUUsZ0NBQWdDO1NBQzlDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQW5DRCxDQUFxQyx1QkFBVSxHQW1DOUM7QUFuQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBjb3VjaGJhc2VNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfZGF0YWJhc2U6IGNvdWNoYmFzZU1vZHVsZS5Db3VjaGJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YWJhc2UoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgZGF0YWJhc2UodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0YWJhc2UgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImRhdGFiYXNlXCIsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IGNvdWNoYmFzZU1vZHVsZS5Db3VjaGJhc2UoXCJ0ZXN0LWRhdGFiYXNlXCIpO1xuICAgICAgICBsZXQgZG9jdW1lbnRJZCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJOaWNcIixcbiAgICAgICAgICAgIFwibGFzdG5hbWVcIjogXCJSYWJveVwiLFxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNpdHlcIjogXCJTYW4gRnJhbmNpc2NvXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIkNBXCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiVVNBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR3aXR0ZXJcIjogXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9ucmFib3lcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudElkKTtcbiAgICB9XG5cbn1cbiJdfQ==