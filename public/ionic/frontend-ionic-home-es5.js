(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-ionic-home"],{

/***/ "../../libs/ionic/home/src/index.ts":
/*!*********************************************!*\
  !*** /opt/app/libs/ionic/home/src/index.ts ***!
  \*********************************************/
/*! exports provided: IonicHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ionic_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ionic-home.module */ "../../libs/ionic/home/src/lib/ionic-home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicHomeModule", function() { return _lib_ionic_home_module__WEBPACK_IMPORTED_MODULE_0__["IonicHomeModule"]; });




/***/ }),

/***/ "../../libs/ionic/home/src/lib/home/home.component.scss":
/*!*****************************************************************!*\
  !*** /opt/app/libs/ionic/home/src/lib/home/home.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2lvbmljL2hvbWUvc3JjL2xpYi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../libs/ionic/home/src/lib/home/home.component.ts":
/*!***************************************************************!*\
  !*** /opt/app/libs/ionic/home/src/lib/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ionic-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ionic/home/src/lib/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "../../libs/ionic/home/src/lib/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../libs/ionic/home/src/lib/ionic-home.module.ts":
/*!*************************************************************!*\
  !*** /opt/app/libs/ionic/home/src/lib/ionic-home.module.ts ***!
  \*************************************************************/
/*! exports provided: IonicHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicHomeModule", function() { return IonicHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "../../libs/ionic/home/src/lib/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/fesm5/ionic-angular.js");






var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var IonicHomeModule = /** @class */ (function () {
    function IonicHomeModule() {
    }
    IonicHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], IonicHomeModule);
    return IonicHomeModule;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ionic/home/src/lib/home/home.component.html":
/*!**************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/ionic/home/src/lib/home/home.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"start\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Scott Admin 1.0\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ })

}]);
//# sourceMappingURL=frontend-ionic-home-es5.js.map