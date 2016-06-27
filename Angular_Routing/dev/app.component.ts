import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {routes} from './app.router';

@RouteConfig(routes)
@Component({
   selector:'my-app',
   template:`
   <div class="container">
        <p class="text-center page-header">Angular Routing</p>
        <div class="row">
            <div class="col-md-4"><a [routerLink]="['One']">Page1</a></div>
            <div class="col-md-4"><a [routerLink]="['Two']">Page2</a></div>
            <div class="col-md-4"><a [routerLink]="['Three']">Page3</a></div>
        </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
   </div>
   `,
   directives:[ROUTER_DIRECTIVES] 
})
export class AppComponent {

}