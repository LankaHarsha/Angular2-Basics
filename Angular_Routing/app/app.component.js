System.register(['angular2/core', 'angular2/router', './app.router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_router_1_1) {
                app_router_1 = app_router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig(app_router_1.routes),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <div class=\"container\">\n        <p class=\"text-center page-header\">Angular Routing</p>\n        <div class=\"row\">\n            <div class=\"col-md-4\"><a [routerLink]=\"['One']\">Page1</a></div>\n            <div class=\"col-md-4\"><a [routerLink]=\"['Two']\">Page2</a></div>\n            <div class=\"col-md-4\"><a [routerLink]=\"['Three']\">Page3</a></div>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n   </div>\n   ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFwQkQ7b0JBQUMsb0JBQVcsQ0FBQyxtQkFBTSxDQUFDO29CQUNuQixnQkFBUyxDQUFDO3dCQUNSLFFBQVEsRUFBQyxRQUFRO3dCQUNqQixRQUFRLEVBQUMsb2ZBWVI7d0JBQ0QsVUFBVSxFQUFDLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge3JvdXRlc30gZnJvbSAnLi9hcHAucm91dGVyJztcclxuXHJcbkBSb3V0ZUNvbmZpZyhyb3V0ZXMpXHJcbkBDb21wb25lbnQoe1xyXG4gICBzZWxlY3RvcjonbXktYXBwJyxcclxuICAgdGVtcGxhdGU6YFxyXG4gICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwYWdlLWhlYWRlclwiPkFuZ3VsYXIgUm91dGluZzwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnT25lJ11cIj5QYWdlMTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+PGEgW3JvdXRlckxpbmtdPVwiWydUd28nXVwiPlBhZ2UyPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj48YSBbcm91dGVyTGlua109XCJbJ1RocmVlJ11cIj5QYWdlMzwvYT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgPC9kaXY+XHJcbiAgIGAsXHJcbiAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTXSBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
