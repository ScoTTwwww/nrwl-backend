(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-ionic-login"],{

/***/ "../../libs/ionic/core/src/index.ts":
/*!*********************************************!*\
  !*** /opt/app/libs/ionic/core/src/index.ts ***!
  \*********************************************/
/*! exports provided: IonicCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ionic_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ionic-core.module */ "../../libs/ionic/core/src/lib/ionic-core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicCoreModule", function() { return _lib_ionic_core_module__WEBPACK_IMPORTED_MODULE_0__["IonicCoreModule"]; });




/***/ }),

/***/ "../../libs/ionic/core/src/lib/ionic-core.module.ts":
/*!*************************************************************!*\
  !*** /opt/app/libs/ionic/core/src/lib/ionic-core.module.ts ***!
  \*************************************************************/
/*! exports provided: IonicCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicCoreModule", function() { return IonicCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/core */ "../../libs/common/core/src/index.ts");




let IonicCoreModule = class IonicCoreModule {
};
IonicCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__["CommonCoreModule"]
        ],
        exports: [
            _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__["CommonCoreModule"]
        ]
    })
], IonicCoreModule);



/***/ }),

/***/ "../../libs/ionic/login/src/index.ts":
/*!**********************************************!*\
  !*** /opt/app/libs/ionic/login/src/index.ts ***!
  \**********************************************/
/*! exports provided: IonicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ionic_login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ionic-login.module */ "../../libs/ionic/login/src/lib/ionic-login.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicLoginModule", function() { return _lib_ionic_login_module__WEBPACK_IMPORTED_MODULE_0__["IonicLoginModule"]; });




/***/ }),

/***/ "../../libs/ionic/login/src/lib/ionic-login.module.ts":
/*!***************************************************************!*\
  !*** /opt/app/libs/ionic/login/src/lib/ionic-login.module.ts ***!
  \***************************************************************/
/*! exports provided: IonicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicLoginModule", function() { return IonicLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "../../libs/ionic/login/src/lib/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _frontend_ionic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @frontend/ionic/core */ "../../libs/ionic/core/src/index.ts");








const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    }
];
let IonicLoginModule = class IonicLoginModule {
};
IonicLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_1__["CommonSharedModule"],
            _frontend_ionic_core__WEBPACK_IMPORTED_MODULE_7__["IonicCoreModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
    })
], IonicLoginModule);



/***/ }),

/***/ "../../libs/ionic/login/src/lib/login/login.component.scss":
/*!********************************************************************!*\
  !*** /opt/app/libs/ionic/login/src/lib/login/login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  margin: 50% 50px;\n}\nform ion-item {\n  --inner-border-width: 0;\n  border: 1px solid black;\n  margin-bottom: 15px;\n}\nform .errorMessage {\n  position: relative;\n  top: -8px;\n  color: #de0000;\n}\nform ion-button {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvaW9uaWMvbG9naW4vc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsImxpYnMvaW9uaWMvbG9naW4vc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDREo7QURJRTtFQUNFLGdCQUFBO0FDRkoiLCJmaWxlIjoibGlicy9pb25pYy9sb2dpbi9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogNTAlIDUwcHg7XHJcblxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmVycm9yTWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBjb2xvcjogI2RlMDAwMDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbiIsImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDUwJSA1MHB4O1xufVxuZm9ybSBpb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZvcm0gLmVycm9yTWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtOHB4O1xuICBjb2xvcjogI2RlMDAwMDtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "../../libs/ionic/login/src/lib/login/login.component.ts":
/*!******************************************************************!*\
  !*** /opt/app/libs/ionic/login/src/lib/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent extends _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LoginBaseComponent"] {
    constructor(router) {
        super();
        this.router = router;
    }
    ngOnInit() {
    }
    xxx() {
        super.login().subscribe(result => {
            console.log(result);
            this.router.navigate(['/tabs/home']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'ionic-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ionic/login/src/lib/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "../../libs/ionic/login/src/lib/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ionic/login/src/lib/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/ionic/login/src/lib/login/login.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"logo\">\n    <div class=\"img\">\n      <!--  <svg version=\"1.1\" id=\"图层_1\" x=\"0px\" y=\"0px\" width=\"166.652px\" height=\"200px\" viewBox=\"0 0 166.652 200\"\n        enable-background=\"new 0 0 166.652 200\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:xml=\"http://www.w3.org/XML/1998/namespace\"\n        style=\"transform: rotate(0deg) scale(1, 1); opacity: 1; position: absolute; backface-visibility: hidden; left: 161px; top: 90px; width: 168.67px; height: 120px; overflow: visible;\">\n        <defs class=\"defs\">\n          <linearGradient id=\"linearGradient_2_c1\" class=\"linearGradient1\"\n            gradientTransform=\"translate(0.5,0.5) rotate(317) translate(-0.5,-0.5)\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\">\n            <stop id=\"stop1\" offset=\"0%\" class=\"linearGradientColor1\" stop-color=\"#001e3f\"></stop>\n            <stop id=\"stop2\" offset=\"70.47619047619048%\" class=\"linearGradientColor2\" stop-color=\"#0072a1\"></stop>\n          </linearGradient>\n          <linearGradient id=\"linearGradient_2_c2\" class=\"linearGradient2\"\n            gradientTransform=\"translate(0.5,0.5) rotate(309) translate(-0.5,-0.5)\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\">\n            <stop id=\"stop1\" offset=\"0%\" class=\"linearGradientColor1\" stop-color=\"#00EFC8\"></stop>\n            <stop id=\"stop2\" offset=\"100%\" class=\"linearGradientColor2\" stop-color=\"#2C94EA\"></stop>\n          </linearGradient>\n        </defs>\n        <polygon fill=\"url(#linearGradient_2_c1)\" points=\"166.652,150.629 75.82,99.936 0,145.359 84.711,200 \"\n          class=\"color c1\"></polygon>\n        <polygon fill=\"url(#linearGradient_2_c2)\" points=\"163.44,47.503 84.858,0 0.197,55.023 0.197,145.359 \"\n          class=\"color c2\"></polygon>\n      </svg> -->\n    </div>\n  </div>\n\n  <form [formGroup]=\"formGroup\" *ngIf=\"formGroup\">\n    <ion-item>\n      <ion-label position=\"fixed\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"userId\"></ion-input>\n\n    </ion-item>\n    <ng-container *ngFor=\"let formError of formErrors['userId']; let index = index\">\n      <div class=\"errorMessage\">\n        <common-form-error-message ngDefaultControl\n          [formControl]=\"formGroup.controls['userId']\"\n          [formError]=\"formError\"\n        ></common-form-error-message>\n      </div>\n    </ng-container>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"fixed\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n\n    <ng-container *ngFor=\"let formError of formErrors['password']; let index = index\">\n      <div class=\"errorMessage\">\n        <common-form-error-message ngDefaultControl\n          [formControl]=\"formGroup.controls['password']\"\n          [formError]=\"formError\"\n        ></common-form-error-message>\n      </div>\n    </ng-container>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"xxx()\" color=\"danger\" expand=\"block\" [disabled]=\"!formGroup.valid\">Send</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <small>\n      Please provide the username or email address that you used when you signed\n      up for your Evernote account.\n    </small>\n  </form>\n</ion-content>\n"

/***/ })

}]);
//# sourceMappingURL=frontend-ionic-login-es2015.js.map