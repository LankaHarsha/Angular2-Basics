System.register(['./one.component', './two.component', './three.component', './welcome.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var one_component_1, two_component_1, three_component_1, welcome_component_1;
    var routes;
    return {
        setters:[
            function (one_component_1_1) {
                one_component_1 = one_component_1_1;
            },
            function (two_component_1_1) {
                two_component_1 = two_component_1_1;
            },
            function (three_component_1_1) {
                three_component_1 = three_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [{
                    path: '/One',
                    component: one_component_1.ComponentOne,
                    name: 'One'
                }, {
                    path: '/Two',
                    component: two_component_1.ComponentTwo,
                    name: 'Two'
                }, {
                    path: '/Three',
                    component: three_component_1.ComponentThree,
                    name: 'Three'
                }, {
                    path: '/',
                    component: welcome_component_1.WelcomeComponent,
                    name: 'Welcome',
                    useAsDefault: true
                }]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUthLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7WUFBTixvQkFBQSxNQUFNLEdBQVUsQ0FBQztvQkFDMUIsSUFBSSxFQUFDLE1BQU07b0JBQ1gsU0FBUyxFQUFDLDRCQUFZO29CQUN0QixJQUFJLEVBQUMsS0FBSztpQkFDYixFQUFFO29CQUNDLElBQUksRUFBQyxNQUFNO29CQUNYLFNBQVMsRUFBQyw0QkFBWTtvQkFDdEIsSUFBSSxFQUFDLEtBQUs7aUJBQ2IsRUFBQztvQkFDRSxJQUFJLEVBQUMsUUFBUTtvQkFDYixTQUFTLEVBQUMsZ0NBQWM7b0JBQ3hCLElBQUksRUFBQyxPQUFPO2lCQUNmLEVBQUM7b0JBQ0UsSUFBSSxFQUFDLEdBQUc7b0JBQ1IsU0FBUyxFQUFDLG9DQUFnQjtvQkFDMUIsSUFBSSxFQUFDLFNBQVM7b0JBQ2QsWUFBWSxFQUFFLElBQUk7aUJBQ3JCLENBQUMsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudE9uZX0gZnJvbSAnLi9vbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21wb25lbnRUd299IGZyb20gJy4vdHdvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29tcG9uZW50VGhyZWV9IGZyb20gJy4vdGhyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHtXZWxjb21lQ29tcG9uZW50fSBmcm9tICcuL3dlbGNvbWUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IGFueVtdID0gW3tcclxuICAgIHBhdGg6Jy9PbmUnLFxyXG4gICAgY29tcG9uZW50OkNvbXBvbmVudE9uZSxcclxuICAgIG5hbWU6J09uZSdcclxufSwge1xyXG4gICAgcGF0aDonL1R3bycsXHJcbiAgICBjb21wb25lbnQ6Q29tcG9uZW50VHdvLFxyXG4gICAgbmFtZTonVHdvJ1xyXG59LHtcclxuICAgIHBhdGg6Jy9UaHJlZScsXHJcbiAgICBjb21wb25lbnQ6Q29tcG9uZW50VGhyZWUsXHJcbiAgICBuYW1lOidUaHJlZSdcclxufSx7XHJcbiAgICBwYXRoOicvJyxcclxuICAgIGNvbXBvbmVudDpXZWxjb21lQ29tcG9uZW50LFxyXG4gICAgbmFtZTonV2VsY29tZScsXHJcbiAgICB1c2VBc0RlZmF1bHQ6IHRydWVcclxufV0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
