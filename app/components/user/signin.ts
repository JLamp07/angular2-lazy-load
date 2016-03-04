import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {MdPatternValidator, MdMinValueValidator, MdNumberRequiredValidator, MdMaxValueValidator, MATERIAL_DIRECTIVES} from '../../../node_modules/ng2-material/all';
import {FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup} from 'angular2/common';

@Component({
  selector: 'user-signin',
  templateUrl: 'app/components/user/signin.html',
  styleUrls: ['app/assets/css/user.css'],
  directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})
export class UserSigninComponent implements OnInit {
  projectForm: ControlGroup;
  model = {
    clientName: '',
    clientEmail: '',
    description: 'Nuclear Missile Defense System',
    rate: 500
  };
  constructor(fb: FormBuilder) {
    this.projectForm = fb.group({
      'clientName': ['', Validators.required],
      'description': ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])],
      'clientEmail': ['', Validators.compose([
        MdPatternValidator.inline('^.+@.+\..+$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ])],
      'rate': ['', Validators.compose([
        MdNumberRequiredValidator.inline(),
        MdPatternValidator.inline('^1234$'),
        MdMinValueValidator.inline(800),
        MdMaxValueValidator.inline(4999)
      ])]
    });
  }
}