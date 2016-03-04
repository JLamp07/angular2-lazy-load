import {View, Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from '../home/home';

import {MATERIAL_DIRECTIVES} from '../../../node_modules/ng2-material/all';

import {componentProxyFactory} from '../../core/dynamic-component-loader';

@Component({ selector: 'iBooknail' })
@View({
  templateUrl: 'app/components/app/app.html',
  // styleUrls: ['examples/components/button/basic_usage.css'],
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {
    path: '/user/signin',
    component: componentProxyFactory({
      path: './app/components/user/signin.ts',
      provide: m => m.UserSigninComponent
    }),
    as: 'UserSignin'
  }
])
export class AppComponent {
  public title = '';
}