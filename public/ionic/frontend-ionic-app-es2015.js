(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-ionic-app"],{

/***/ "../../libs/ionic/app/src/index.ts":
/*!********************************************!*\
  !*** /opt/app/libs/ionic/app/src/index.ts ***!
  \********************************************/
/*! exports provided: IonicAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ionic_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ionic-app.module */ "../../libs/ionic/app/src/lib/ionic-app.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicAppModule", function() { return _lib_ionic_app_module__WEBPACK_IMPORTED_MODULE_0__["IonicAppModule"]; });




/***/ }),

/***/ "../../libs/ionic/app/src/lib/app/app.component.scss":
/*!**************************************************************!*\
  !*** /opt/app/libs/ionic/app/src/lib/app/app.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2lvbmljL2FwcC9zcmMvbGliL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../libs/ionic/app/src/lib/app/app.component.ts":
/*!************************************************************!*\
  !*** /opt/app/libs/ionic/app/src/lib/app/app.component.ts ***!
  \************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ionic-app',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ionic/app/src/lib/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "../../libs/ionic/app/src/lib/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "../../libs/ionic/app/src/lib/app/menu/menu.component.scss":
/*!********************************************************************!*\
  !*** /opt/app/libs/ionic/app/src/lib/app/menu/menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n}\n\nion-select {\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvaW9uaWMvYXBwL3NyYy9saWIvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsImxpYnMvaW9uaWMvYXBwL3NyYy9saWIvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImxpYnMvaW9uaWMvYXBwL3NyYy9saWIvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "../../libs/ionic/app/src/lib/app/menu/menu.component.ts":
/*!******************************************************************!*\
  !*** /opt/app/libs/ionic/app/src/lib/app/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");




let MenuComponent = class MenuComponent {
    constructor(configService, themeService, languageService) {
        this.configService = configService;
        this.themeService = themeService;
        this.languageService = languageService;
    }
    ngOnInit() {
    }
    switchLanguage($event) {
        this.languageService.setLanguage($event.target.value);
        console.log($event.target.value);
    }
};
MenuComponent.ctorParameters = () => [
    { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] },
    { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ionic-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "../../node_modules/raw-loader/index.js!../../libs/ionic/app/src/lib/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "../../libs/ionic/app/src/lib/app/menu/menu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
        _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
        _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
], MenuComponent);



/***/ }),

/***/ "../../libs/ionic/app/src/lib/ionic-app.module.ts":
/*!***********************************************************!*\
  !*** /opt/app/libs/ionic/app/src/lib/ionic-app.module.ts ***!
  \***********************************************************/
/*! exports provided: IonicAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicAppModule", function() { return IonicAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ "../../libs/ionic/app/src/lib/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _app_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/menu/menu.component */ "../../libs/ionic/app/src/lib/app/menu/menu.component.ts");









const routes = [
    {
        path: '',
        component: _app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | frontend-ionic-home */ "frontend-ionic-home").then(__webpack_require__.bind(null, /*! @frontend/ionic/home */ "../../libs/ionic/home/src/index.ts")).then(m => m.IonicHomeModule)
            }
        ]
    }
];
let IonicAppModule = class IonicAppModule {
};
IonicAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_6__["CommonSharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]]
    })
], IonicAppModule);



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ionic/app/src/lib/app/app.component.html":
/*!***********************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/ionic/app/src/lib/app/app.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu content-id=\"app-menu\" side=\"start\" type=\"overlay\" swipeGesture=\"false\">\n  <ionic-menu></ionic-menu>\n</ion-menu>\n\n<ion-tabs id=\"app-menu\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [routerLink]=\"['/tabs/home']\">\n      <ion-icon name=\"home\"></ion-icon>\n      zzzz\n    </ion-tab-button>\n\n    <ion-tab-button [routerLink]=\"['/tabs/promotion']\">\n      <ion-icon name=\"gift\"></ion-icon>\n      zzz\n    </ion-tab-button>\n\n    <ion-tab-button [routerLink]=\"['/tabs/service']\">\n      <ion-icon name=\"text\"></ion-icon>\n      zzzz\n    </ion-tab-button>\n\n\n  </ion-tab-bar>\n</ion-tabs>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/ionic/app/src/lib/app/menu/menu.component.html":
/*!*****************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/ionic/app/src/lib/app/menu/menu.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item button no-lines>\n        <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n        <ion-label>ssss</ion-label>\n      </ion-item>\n    </ion-menu-toggle>\n\n    <ion-menu-toggle auto-hide=\"false\">\n      <ion-item button>\n        <ion-icon slot=\"start\" name=\"share\"></ion-icon>\n        <ion-label>zzz</ion-label>\n      </ion-item>\n    </ion-menu-toggle>\n\n\n    <ion-menu-toggle>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n        <ion-label>{{ 'theme.title' | translate }}</ion-label>\n        <ion-select text-translate\n          [(ngModel)]=\"themeService._theme\"\n          [selectedText]=\"'theme.'+ themeService._theme | translate\">\n          <ng-container *ngFor=\"let theme of configService.config.theme.list\">\n            <ion-select-option text-wrap [value]=\"theme\"> {{'theme.'+ theme | translate }}</ion-select-option>\n          </ng-container>\n\n        </ion-select>\n      </ion-item>\n    </ion-menu-toggle>\n\n    <ion-menu-toggle>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n        <ion-label>{{ 'language.title' | translate }}</ion-label>\n        <ion-select text-translate [(ngModel)]=\"languageService._language\" (ionChange)=\"switchLanguage($event)\">\n          <ng-container *ngFor=\"let language of configService.config.language.list\">\n            <ion-select-option [value]=\"language\">{{'language.'+ language | translate }}</ion-select-option>\n          </ng-container>\n\n        </ion-select>\n      </ion-item>\n    </ion-menu-toggle>\n\n  </ion-list>\n</ion-content>\n"

/***/ })

}]);
//# sourceMappingURL=frontend-ionic-app-es2015.js.map