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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.title {\n  padding: 0 10px 0 0;\n}\n\n.menu {\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  margin-left: 20px;\n}\n\n.menu a {\n  padding: 0 15px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.userId {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL2FwcC9zcmMvbGliL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9hcHAvc3JjL2xpYi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0hBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoibGlicy93ZWIvYXBwL3NyYy9saWIvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi51c2VySWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWVudSBhIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnVzZXJJZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/auth/state */ "../../libs/common/auth/state/src/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authFacade) {
        this.authFacade = authFacade;
        this.user$ = this.authFacade.user$;
        this.get();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.get = function () {
        console.log(localStorage.getItem('user'));
    };
    AppComponent.ctorParameters = function () { return [
        { type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'web-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/web/app/src/lib/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../../libs/web/app/src/lib/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.component */ "../../libs/web/app/src/lib/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | frontend-web-home */ "frontend-web-home").then(__webpack_require__.bind(null, /*! @frontend/web/home */ "../../libs/web/home/src/index.ts")).then(function (m) { return m.WebHomeModule; }); },
                canLoad: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            }
        ]
    }
];
var WebAppModule = /** @class */ (function () {
    function WebAppModule() {
    }
    WebAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["CommonSharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], WebAppModule);
    return WebAppModule;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/web/app/src/lib/app/app.component.html":
/*!*********************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/web/app/src/lib/app/app.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span class=\"title\">ScoTT Admin 1.0</span>\n\n    <div class=\"menu\">\n      <a mat-button>使用者清單</a>\n      <a mat-button>產品清單</a>\n      <a mat-button>產品清單</a>\n      <a mat-button>產品清單</a>\n    </div>\n\n    <span class=\"example-spacer\"></span>\n      <mat-icon>account_circle</mat-icon>\n    <div class=\"userId\">{{ (user$ | async )?.userId }}</div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet> </router-outlet>\n\n"

/***/ })

}]);
//# sourceMappingURL=frontend-web-app-es5.js.map