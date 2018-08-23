"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Https = require("nativescript-https");
function navigatingTo(args) {
}
exports.navigatingTo = navigatingTo;
function makeRequest() {
    Https.request({
        url: 'https://httpbin.org/get',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(function (response) {
        console.log('Https.request response', response);
    }).catch(function (error) {
        console.error('Https.request error', error);
    });
}
exports.makeRequest = makeRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsMENBQTRDO0FBRzVDLHNCQUE2QixJQUFlO0FBRTVDLENBQUM7QUFGRCxvQ0FFQztBQUVEO0lBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNWLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDO0tBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNuRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxLQUFLO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBWkQsa0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcblxuaW1wb3J0ICogYXMgSHR0cHMgZnJvbSAnbmF0aXZlc2NyaXB0LWh0dHBzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVxdWVzdCgpIHtcbiAgICBIdHRwcy5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9odHRwYmluLm9yZy9nZXQnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSHR0cHMucmVxdWVzdCByZXNwb25zZScsIHJlc3BvbnNlKVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0h0dHBzLnJlcXVlc3QgZXJyb3InLCBlcnJvcilcbiAgICB9KVxufSJdfQ==