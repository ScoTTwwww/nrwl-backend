(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-web-app"],{

/***/ "../../libs/web/app/src/index.ts":
/*!******************************************!*\
  !*** /opt/app/libs/web/app/src/index.ts ***!
  \******************************************/
/*! exports provided: WebAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-app.module */ "../../libs/web/app/src/lib/web-app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebAppModule", function() { return _lib_web_app_module__WEBPACK_IMPORTED_MODULE_0__["WebAppModule"]; });




/***/ }),

/***/ "../../libs/web/app/src/lib/app/app.component.scss":
/*!************************************************************!*\
  !*** /opt/app/libs/web/app/src/lib/app/app.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.title {\n  padding: 0 10px 0 0;\n}\n\n.menu {\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  margin-left: 20px;\n}\n\n.menu a {\n  padding: 0 15px;\n}\n\n/* .example-spacer {\n  flex: 1 1 auto;\n} */\n\n.userId {\n  margin-left: 8px;\n  flex: 1 1 0%;\n  min-width: 100px;\n}\n\n.userId button {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL2FwcC9zcmMvbGliL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9hcHAvc3JjL2xpYi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0hBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURHQTs7R0FBQTs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREoiLCJmaWxlIjoibGlicy93ZWIvYXBwL3NyYy9saWIvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0gKi9cclxuXHJcbi51c2VySWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZmxleDogMSAxIDAlO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWVudSBhIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4vKiAuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0gKi9cbi51c2VySWQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmbGV4OiAxIDEgMCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4udXNlcklkIGJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "../../libs/web/app/src/lib/app/app.component.ts":
/*!**********************************************************!*\
  !*** /opt/app/libs/web/app/src/lib/app/app.component.ts ***!
  \**********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/auth/state */ "../../libs/common/auth/state/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(authFacade, router) {
        this.authFacade = authFacade;
        this.router = router;
        this.user$ = this.authFacade.user$;
        this.get();
    }
    ngOnInit() {
    }
    get() {
        console.log(localStorage.getItem('user'));
    }
    logout() {
        this.authFacade.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(result => {
            if (result) {
                console.log("是否登出", result);
                sessionStorage.removeItem('id');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('token');
                this.router.navigate(['login']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'web-app',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/app/src/lib/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "../../libs/web/app/src/lib/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AppComponent);



/***/ }),

/***/ "../../libs/web/app/src/lib/web-app.module.ts":
/*!*******************************************************!*\
  !*** /opt/app/libs/web/app/src/lib/web-app.module.ts ***!
  \*******************************************************/
/*! exports provided: WebAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAppModule", function() { return WebAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.component */ "../../libs/web/app/src/lib/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _frontend_common_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @frontend/common/material */ "../../libs/common/material/src/index.ts");







const routes = [
    {
        path: '',
        component: _app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        canActivate: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | frontend-web-home */ "frontend-web-home").then(__webpack_require__.bind(null, /*! @frontend/web/home */ "../../libs/web/home/src/index.ts")).then(m => m.WebHomeModule),
                canLoad: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            }
        ]
    }
];
let WebAppModule = class WebAppModule {
};
WebAppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["CommonSharedModule"],
            _frontend_common_material__WEBPACK_IMPORTED_MODULE_6__["CommonMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], WebAppModule);



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/app/src/lib/app/app.component.html":
/*!*********************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/web/app/src/lib/app/app.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span class=\"title\">ScoTT Admin 1.0</span>\n\n    <div class=\"menu\">\n      <a mat-button>使用者清單</a>\n      <a mat-button>產品清單</a>\n      <a mat-button>產品清單</a>\n      <a mat-button>產品清單</a>\n    </div>\n\n\n\n    <div class=\"userId\" fxLayout=\"row\" fxLayoutAlign=\"end center\" >\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>account_circle</mat-icon>\n        {{ (user$ | async )?.userId }}\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon>dialpad</mat-icon>\n          <span>個人資料</span>\n        </button>\n        <button mat-menu-item disabled>\n          <mat-icon>voicemail</mat-icon>\n          <span>設定</span>\n        </button>\n        <button mat-menu-item (click)=\"logout()\">\n          <mat-icon>notifications_off</mat-icon>\n          <span>登出</span>\n        </button>\n      </mat-menu>\n    </div>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet> </router-outlet>\n\n");

/***/ })

}]);
//# sourceMappingURL=frontend-web-app-es2015.js.map