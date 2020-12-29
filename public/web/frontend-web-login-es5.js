function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-web-login"], {
  /***/
  "../../libs/web/login/src/index.ts":
  /*!********************************************!*\
    !*** /opt/app/libs/web/login/src/index.ts ***!
    \********************************************/

  /*! exports provided: WebLoginModule */

  /***/
  function libsWebLoginSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_web_login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/web-login.module */
    "../../libs/web/login/src/lib/web-login.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebLoginModule", function () {
      return _lib_web_login_module__WEBPACK_IMPORTED_MODULE_0__["WebLoginModule"];
    });
    /***/

  },

  /***/
  "../../libs/web/login/src/lib/login/login.component.scss":
  /*!******************************************************************!*\
    !*** /opt/app/libs/web/login/src/lib/login/login.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function libsWebLoginSrcLibLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n}\n\n.content mat-card {\n  width: 350px;\n  padding: 40px 40px 10px 40px;\n}\n\n.content mat-card button {\n  width: 100%;\n}\n\n.admin-title {\n  margin-top: 2.5em;\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.visit {\n  margin: 10px 0 0 0;\n  background-color: #666c8e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL2xvZ2luL3NyYy9saWIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9sb2dpbi9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxXQUFBO0FDQ047O0FESUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0ZGIiwiZmlsZSI6ImxpYnMvd2ViL2xvZ2luL3NyYy9saWIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXQtY2FyZHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAxMHB4IDQwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRtaW4tdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi52aXNpdCB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAwIDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2YzhlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250ZW50IG1hdC1jYXJkIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiA0MHB4IDQwcHggMTBweCA0MHB4O1xufVxuLmNvbnRlbnQgbWF0LWNhcmQgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZG1pbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52aXNpdCB7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmM4ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/web/login/src/lib/login/login.component.ts":
  /*!****************************************************************!*\
    !*** /opt/app/libs/web/login/src/lib/login/login.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function libsWebLoginSrcLibLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @frontend/common/auth/shared */
    "../../libs/common/auth/shared/src/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var LoginComponent = /*#__PURE__*/function (_frontend_common_shar) {
      _inherits(LoginComponent, _frontend_common_shar);

      var _super = _createSuper(LoginComponent);

      function LoginComponent(authFacade, authService, router) {
        var _this;

        _classCallCheck(this, LoginComponent);

        _this = _super.call(this);
        _this.authFacade = authFacade;
        _this.authService = authService;
        _this.router = router;
        _this.user$ = _this.authFacade.user$;
        _this.visitUser = {
          userId: "scott666",
          password: "scott666"
        };
        return _this;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "send",
        value: function send(formValue) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var value;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    /*   super.login().subscribe( async result=> {
                                const user = await this.authService.login(result.data).toPromise();
                       console.log('-------',user)
                                  if(user){
                          this.authFacade.login(result.data);
                          this.router.navigate(['home']);
                          localStorage.setItem('token', user.access_token);
                          console.log(user)
                         }else {
                           alert("ERROR")
                         }
                               }); */
                    // const user = await this.authService.login(this.formGroup.value).toPromise();
                    value = formValue ? formValue : this.formGroup.value;
                    this.authFacade.login(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (result) {
                      if (result) {
                        var id = result.id,
                            userId = result.userId,
                            token = result.token;

                        _this2.router.navigate(['user']);

                        console.log("11111111111111", result);
                        sessionStorage.setItem('id', id);
                        sessionStorage.setItem('userId', userId);
                        sessionStorage.setItem('token', token);
                      } else {
                        alert("error Login");
                      }
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "register",
        value: function register() {
          var data = {
            userId: 'scott666',
            password: 'scott666'
          };
          this.authService.register(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe();
        }
      }]);

      return LoginComponent;
    }(_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["LoginBaseComponent"]);

    LoginComponent.ctorParameters = function () {
      return [{
        type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"]
      }, {
        type: _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'web-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/login/src/lib/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "../../libs/web/login/src/lib/login/login.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"], _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "../../libs/web/login/src/lib/web-login.module.ts":
  /*!***********************************************************!*\
    !*** /opt/app/libs/web/login/src/lib/web-login.module.ts ***!
    \***********************************************************/

  /*! exports provided: WebLoginModule */

  /***/
  function libsWebLoginSrcLibWebLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebLoginModule", function () {
      return WebLoginModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "../../libs/web/login/src/lib/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");
    /* harmony import */


    var _frontend_web_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @frontend/web/core */
    "../../libs/web/core/src/index.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var WebLoginModule = function WebLoginModule() {
      _classCallCheck(this, WebLoginModule);
    };

    WebLoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _frontend_web_core__WEBPACK_IMPORTED_MODULE_6__["WebCoreModule"], _frontend_common_shared__WEBPACK_IMPORTED_MODULE_5__["CommonSharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
    })], WebLoginModule);
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/web/login/src/lib/login/login.component.html":
  /*!***************************************************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/web/login/src/lib/login/login.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsWebLoginSrcLibLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\r\n  <mat-card>\r\n    <mat-card-title>{{ 'login.title' | translate }}</mat-card-title>\r\n\r\n    <form [formGroup]=\"formGroup\" *ngIf=\"formGroup\" class=\"example-form\" fxLayout=\"column\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-label>{{ 'login.userId' | translate }}</mat-label>\r\n        <input type=\"text\" matInput formControlName=\"userId\">\r\n        <mat-error>\r\n          <ng-container *ngFor=\"let formError of formErrors['userId']; let index = index\">\r\n            <common-form-error-message ngDefaultControl\r\n              [formControl]=\"formGroup.controls['userId']\"\r\n              [formError]=\"formError\"\r\n            ></common-form-error-message>\r\n          </ng-container>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-label>{{ 'login.password' | translate }}</mat-label>\r\n        <input type=\"password\" matInput formControlName=\"password\">\r\n        <mat-error>\r\n          <ng-container *ngFor=\"let formError of formErrors['password']; let index = index\">\r\n            <common-form-error-message ngDefaultControl\r\n              [formControl]=\"formGroup.controls['password']\"\r\n              [formError]=\"formError\"\r\n            ></common-form-error-message>\r\n          </ng-container>\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"!formGroup.valid\" (click)=\"send()\">{{ 'system.confirm' | translate }}</button>\r\n\r\n    <button class=\"visit\" mat-raised-button color=\"primary\" [disabled]=\"!formGroup.valid\" (click)=\"send(visitUser)\">訪客登入</button>\r\n    <button class=\"visit\" mat-raised-button color=\"primary\" (click)=\"register()\">註冊</button>\r\n\r\n    <span class=\"admin-title\">From ScoTT Admin 1.0</span>\r\n  </mat-card>\r\n\r\n\r\n</div>\r\n\r\n{{  user$ | async | json}}\r\n";
    /***/
  }
}]);
//# sourceMappingURL=frontend-web-login-es5.js.map