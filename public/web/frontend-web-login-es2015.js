(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-web-login"],{

/***/ "../../libs/web/login/src/index.ts":
/*!********************************************!*\
  !*** /opt/app/libs/web/login/src/index.ts ***!
  \********************************************/
/*! exports provided: WebLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-login.module */ "../../libs/web/login/src/lib/web-login.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebLoginModule", function() { return _lib_web_login_module__WEBPACK_IMPORTED_MODULE_0__["WebLoginModule"]; });




/***/ }),

/***/ "../../libs/web/login/src/lib/login/login.component.scss":
/*!******************************************************************!*\
  !*** /opt/app/libs/web/login/src/lib/login/login.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n}\n\n.content mat-card {\n  width: 350px;\n  padding: 40px 40px 10px 40px;\n}\n\n.content mat-card button {\n  width: 100%;\n}\n\n.admin-title {\n  margin-top: 2.5em;\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL2xvZ2luL3NyYy9saWIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9sb2dpbi9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxXQUFBO0FDQ047O0FESUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6ImxpYnMvd2ViL2xvZ2luL3NyYy9saWIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXQtY2FyZHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAxMHB4IDQwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRtaW4tdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudCBtYXQtY2FyZCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogNDBweCA0MHB4IDEwcHggNDBweDtcbn1cbi5jb250ZW50IG1hdC1jYXJkIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRtaW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "../../libs/web/login/src/lib/login/login.component.ts":
/*!****************************************************************!*\
  !*** /opt/app/libs/web/login/src/lib/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/auth/state */ "../../libs/common/auth/state/src/index.ts");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent extends _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["LoginBaseComponent"] {
    constructor(authFacade, router) {
        super();
        this.authFacade = authFacade;
        this.router = router;
        this.user$ = this.authFacade.user$;
    }
    ngOnInit() {
    }
    send() {
        super.login().subscribe(result => {
            console.log(result);
            this.authFacade.login(result.data);
            this.router.navigate(['home']);
            localStorage.setItem('user', "OK");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'web-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!../../libs/web/login/src/lib/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "../../libs/web/login/src/lib/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "../../libs/web/login/src/lib/web-login.module.ts":
/*!***********************************************************!*\
  !*** /opt/app/libs/web/login/src/lib/web-login.module.ts ***!
  \***********************************************************/
/*! exports provided: WebLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebLoginModule", function() { return WebLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "../../libs/web/login/src/lib/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _frontend_web_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @frontend/web/core */ "../../libs/web/core/src/index.ts");







const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    }
];
let WebLoginModule = class WebLoginModule {
};
WebLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _frontend_web_core__WEBPACK_IMPORTED_MODULE_6__["WebCoreModule"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_5__["CommonSharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
    })
], WebLoginModule);



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/web/login/src/lib/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/web/login/src/lib/login/login.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\n  <mat-card>\n    <mat-card-title>{{ 'login.title' | translate }}</mat-card-title>\n\n    <form [formGroup]=\"formGroup\" *ngIf=\"formGroup\" class=\"example-form\" fxLayout=\"column\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>{{ 'login.userId' | translate }}</mat-label>\n        <input type=\"text\" matInput formControlName=\"userId\">\n        <mat-error>\n          <ng-container *ngFor=\"let formError of formErrors['userId']; let index = index\">\n            <common-form-error-message ngDefaultControl\n              [formControl]=\"formGroup.controls['userId']\"\n              [formError]=\"formError\"\n            ></common-form-error-message>\n          </ng-container>\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>{{ 'login.password' | translate }}</mat-label>\n        <input type=\"password\" matInput formControlName=\"password\">\n        <mat-error>\n          <ng-container *ngFor=\"let formError of formErrors['password']; let index = index\">\n            <common-form-error-message ngDefaultControl\n              [formControl]=\"formGroup.controls['password']\"\n              [formError]=\"formError\"\n            ></common-form-error-message>\n          </ng-container>\n        </mat-error>\n      </mat-form-field>\n    </form>\n\n    <button mat-raised-button color=\"primary\" [disabled]=\"!formGroup.valid\" (click)=\"send()\">{{ 'system.confirm' | translate }}</button>\n\n    <span class=\"admin-title\">From ScoTT Admin 1.0</span>\n  </mat-card>\n\n\n</div>\n\n{{  user$ | async | json}}\n"

/***/ })

}]);
//# sourceMappingURL=frontend-web-login-es2015.js.map