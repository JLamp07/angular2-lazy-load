System.register(['angular2/core', '../../../node_modules/ng2-material/all', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, all_1, common_1;
    var UserSigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserSigninComponent = (function () {
                function UserSigninComponent(fb) {
                    this.model = {
                        clientName: '',
                        clientEmail: '',
                        description: 'Nuclear Missile Defense System',
                        rate: 500
                    };
                    this.projectForm = fb.group({
                        'clientName': ['', common_1.Validators.required],
                        'description': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.maxLength(30)
                            ])],
                        'clientEmail': ['', common_1.Validators.compose([
                                all_1.MdPatternValidator.inline('^.+@.+\..+$'),
                                common_1.Validators.required,
                                common_1.Validators.minLength(10),
                                common_1.Validators.maxLength(100)
                            ])],
                        'rate': ['', common_1.Validators.compose([
                                all_1.MdNumberRequiredValidator.inline(),
                                all_1.MdPatternValidator.inline('^1234$'),
                                all_1.MdMinValueValidator.inline(800),
                                all_1.MdMaxValueValidator.inline(4999)
                            ])]
                    });
                }
                UserSigninComponent = __decorate([
                    core_1.Component({
                        selector: 'user-signin',
                        templateUrl: 'app/components/user/signin.html',
                        styleUrls: ['app/assets/css/user.css'],
                        directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UserSigninComponent);
                return UserSigninComponent;
            }());
            exports_1("UserSigninComponent", UserSigninComponent);
        }
    }
});
