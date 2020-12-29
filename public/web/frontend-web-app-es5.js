function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-web-app"], {
  /***/
  "../../libs/web/app/src/index.ts":
  /*!******************************************!*\
    !*** /opt/app/libs/web/app/src/index.ts ***!
    \******************************************/

  /*! exports provided: WebAppModule */

  /***/
  function libsWebAppSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_web_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/web-app.module */
    "../../libs/web/app/src/lib/web-app.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebAppModule", function () {
      return _lib_web_app_module__WEBPACK_IMPORTED_MODULE_0__["WebAppModule"];
    });
    /***/

  },

  /***/
  "../../libs/web/app/src/lib/app/app.component.scss":
  /*!************************************************************!*\
    !*** /opt/app/libs/web/app/src/lib/app/app.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function libsWebAppSrcLibAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.title {\n  padding: 0 10px 0 0;\n}\n\n.menu {\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  margin-left: 20px;\n}\n\n.menu a {\n  padding: 0 15px;\n}\n\n/* .example-spacer {\n  flex: 1 1 auto;\n} */\n\n.userId {\n  margin-left: 8px;\n  flex: 1 1 0%;\n  min-width: 100px;\n}\n\n.userId button {\n  width: auto;\n}\n\n.content {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL2FwcC9zcmMvbGliL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9hcHAvc3JjL2xpYi9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0hBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURHQTs7R0FBQTs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FETUE7RUFDRSxnQkFBQTtBQ0hGIiwiZmlsZSI6ImxpYnMvd2ViL2FwcC9zcmMvbGliL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59ICovXHJcblxyXG4udXNlcklkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGZsZXg6IDEgMSAwJTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iLCJtYXQtdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tZW51IGEge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi8qIC5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSAqL1xuLnVzZXJJZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZsZXg6IDEgMSAwJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi51c2VySWQgYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/web/app/src/lib/app/app.component.ts":
  /*!**********************************************************!*\
    !*** /opt/app/libs/web/app/src/lib/app/app.component.ts ***!
    \**********************************************************/

  /*! exports provided: AppComponent */

  /***/
  function libsWebAppSrcLibAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @frontend/common/auth/state */
    "../../libs/common/auth/state/src/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authFacade, router) {
        _classCallCheck(this, AppComponent);

        this.authFacade = authFacade;
        this.router = router;
        this.user$ = this.authFacade.user$;
        this.get();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "get",
        value: function get() {
          console.log(localStorage.getItem('user'));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.authFacade.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (result) {
            if (result) {
              console.log("是否登出", result);
              sessionStorage.removeItem('id');
              sessionStorage.removeItem('userId');
              sessionStorage.removeItem('token');

              _this.router.navigate(['login']);
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'web-app',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/app/src/lib/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "../../libs/web/app/src/lib/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "../../libs/web/app/src/lib/web-app.module.ts":
  /*!*******************************************************!*\
    !*** /opt/app/libs/web/app/src/lib/web-app.module.ts ***!
    \*******************************************************/

  /*! exports provided: WebAppModule */

  /***/
  function libsWebAppSrcLibWebAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebAppModule", function () {
      return WebAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");
    /* harmony import */


    var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.component */
    "../../libs/web/app/src/lib/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _frontend_common_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @frontend/common/material */
    "../../libs/common/material/src/index.ts");

    var routes = [{
      path: '',
      component: _app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
      canActivate: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'user'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | frontend-web-home */
          "frontend-web-home").then(__webpack_require__.bind(null,
          /*! @frontend/web/home */
          "../../libs/web/home/src/index.ts")).then(function (m) {
            return m.WebHomeModule;
          });
        },
        canLoad: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | frontend-web-user */
          "frontend-web-user").then(__webpack_require__.bind(null,
          /*! @frontend/web/user */
          "../../libs/web/user/src/index.ts")).then(function (m) {
            return m.WebUserModule;
          });
        },
        canLoad: [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }]
    }];

    var WebAppModule = function WebAppModule() {
      _classCallCheck(this, WebAppModule);
    };

    WebAppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["CommonSharedModule"], _frontend_common_material__WEBPACK_IMPORTED_MODULE_6__["CommonMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
      declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], WebAppModule);
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/app/src/lib/app/app.component.html":
  /*!*********************************************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/web/app/src/lib/app/app.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsWebAppSrcLibAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row no-padding class=\"container no-padding\">\r\n    <span class=\"title\">ScoTT Admin 1.0</span>\r\n\r\n    <div class=\"menu\">\r\n      <a mat-button>使用者清單</a>\r\n      <a mat-button>產品清單</a>\r\n      <a mat-button>產品清單</a>\r\n      <a mat-button>產品清單</a>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"userId\" fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n        <mat-icon>account_circle</mat-icon>\r\n        {{ (user$ | async )?.userId }}\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item>\r\n          <mat-icon>dialpad</mat-icon>\r\n          <span>個人資料</span>\r\n        </button>\r\n        <button mat-menu-item disabled>\r\n          <mat-icon>voicemail</mat-icon>\r\n          <span>設定</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"logout()\">\r\n          <mat-icon>notifications_off</mat-icon>\r\n          <span>登出</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<div class=\"content\">\r\n  <router-outlet> </router-outlet>\r\n</div>\r\n\r\n";
    /***/
  }
}]);
//# sourceMappingURL=frontend-web-app-es5.js.map