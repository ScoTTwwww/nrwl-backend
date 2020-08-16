(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-web-home"],{

/***/ "../../libs/web/home/src/index.ts":
/*!*******************************************!*\
  !*** /opt/app/libs/web/home/src/index.ts ***!
  \*******************************************/
/*! exports provided: WebHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-home.module */ "../../libs/web/home/src/lib/web-home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebHomeModule", function() { return _lib_web_home_module__WEBPACK_IMPORTED_MODULE_0__["WebHomeModule"]; });




/***/ }),

/***/ "../../libs/web/home/src/lib/home/home.component.scss":
/*!***************************************************************!*\
  !*** /opt/app/libs/web/home/src/lib/home/home.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3dlYi9ob21lL3NyYy9saWIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "../../libs/web/home/src/lib/home/home.component.ts":
/*!*************************************************************!*\
  !*** /opt/app/libs/web/home/src/lib/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'web-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/index.js!../../libs/web/home/src/lib/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "../../libs/web/home/src/lib/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "../../libs/web/home/src/lib/web-home.module.ts":
/*!*********************************************************!*\
  !*** /opt/app/libs/web/home/src/lib/web-home.module.ts ***!
  \*********************************************************/
/*! exports provided: WebHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebHomeModule", function() { return WebHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "../../libs/web/home/src/lib/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let WebHomeModule = class WebHomeModule {
};
WebHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })
], WebHomeModule);



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/web/home/src/lib/home/home.component.html":
/*!************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/web/home/src/lib/home/home.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ })

}]);
//# sourceMappingURL=frontend-web-home-es2015.js.map