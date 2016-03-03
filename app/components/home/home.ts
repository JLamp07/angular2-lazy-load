import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'home-page',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/assets/css/home.css']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) {
  }

  ngOnInit() {
    
  }
}