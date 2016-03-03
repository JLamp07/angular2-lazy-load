import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'user-signin',
  templateUrl: 'app/components/user/signin.html',
  styleUrls: ['app/assets/css/user.css']
})
export class UserSigninComponent implements OnInit {
  public title = 'User signin';
  
  constructor(private _router: Router) {
    
  }

  ngOnInit() {
    
  }
}