import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from '../home/home';

import {componentProxyFactory} from '../../core/dynamic-component-loader';

@Component({
  selector: 'iBooknail',
  templateUrl: 'app/components/app/app.html',
  // styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  // providers: [HeroService]
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