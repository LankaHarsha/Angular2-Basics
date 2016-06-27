import {ComponentOne} from './one.component';
import {ComponentTwo} from './two.component';
import {ComponentThree} from './three.component';
import {WelcomeComponent} from './welcome.component';

export const routes: any[] = [{
    path:'/One',
    component:ComponentOne,
    name:'One'
}, {
    path:'/Two',
    component:ComponentTwo,
    name:'Two'
},{
    path:'/Three',
    component:ComponentThree,
    name:'Three'
},{
    path:'/',
    component:WelcomeComponent,
    name:'Welcome',
    useAsDefault: true
}]