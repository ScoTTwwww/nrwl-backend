function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/common/auth/shared/src/index.ts":
  /*!*****************************************************!*\
    !*** /opt/app/libs/common/auth/shared/src/index.ts ***!
    \*****************************************************/

  /*! exports provided: CommonAuthSharedModule, AuthService */

  /***/
  function libsCommonAuthSharedSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_common_auth_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/common-auth-shared.module */
    "../../libs/common/auth/shared/src/lib/common-auth-shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonAuthSharedModule", function () {
      return _lib_common_auth_shared_module__WEBPACK_IMPORTED_MODULE_0__["CommonAuthSharedModule"];
    });
    /* harmony import */


    var _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/auth.service */
    "../../libs/common/auth/shared/src/lib/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _lib_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
    });
    /***/

  },

  /***/
  "../../libs/common/auth/shared/src/lib/auth.service.ts":
  /*!****************************************************************!*\
    !*** /opt/app/libs/common/auth/shared/src/lib/auth.service.ts ***!
    \****************************************************************/

  /*! exports provided: AuthService */

  /***/
  function libsCommonAuthSharedSrcLibAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.xxx = false;
        this.api = 'http://localhost:3000';
        this.loginUrl = this.xxx ? "".concat(this.api, "/api/auth/login") : '/api/auth/login';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          return this.http.post(this.loginUrl, user);
        }
      }, {
        key: "register",
        value: function register(data) {
          console.log("".concat(this.api, "/api/auth/register"), data);
          return this.http.post("/api/auth/register", data);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "../../libs/common/auth/shared/src/lib/common-auth-shared.module.ts":
  /*!*****************************************************************************!*\
    !*** /opt/app/libs/common/auth/shared/src/lib/common-auth-shared.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CommonAuthSharedModule */

  /***/
  function libsCommonAuthSharedSrcLibCommonAuthSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonAuthSharedModule", function () {
      return CommonAuthSharedModule;
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

    var CommonAuthSharedModule = function CommonAuthSharedModule() {
      _classCallCheck(this, CommonAuthSharedModule);
    };

    CommonAuthSharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], CommonAuthSharedModule);
    /***/
  },

  /***/
  "../../libs/common/auth/state/src/index.ts":
  /*!****************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/index.ts ***!
    \****************************************************/

  /*! exports provided: AUTH_FEATURE_KEY, initialState, authReducer, getUser, AuthFacade, CommonAuthStateModule */

  /***/
  function libsCommonAuthStateSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/+state/auth.reducer */
    "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AUTH_FEATURE_KEY", function () {
      return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["AUTH_FEATURE_KEY"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "authReducer", function () {
      return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"];
    });
    /* harmony import */


    var _lib_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/+state/auth.selectors */
    "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return _lib_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["getUser"];
    });
    /* harmony import */


    var _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/+state/auth.facade */
    "../../libs/common/auth/state/src/lib/+state/auth.facade.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthFacade", function () {
      return _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"];
    });
    /* harmony import */


    var _lib_common_auth_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/common-auth-state.module */
    "../../libs/common/auth/state/src/lib/common-auth-state.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonAuthStateModule", function () {
      return _lib_common_auth_state_module__WEBPACK_IMPORTED_MODULE_3__["CommonAuthStateModule"];
    });
    /***/

  },

  /***/
  "../../libs/common/auth/state/src/lib/+state/auth.actions.ts":
  /*!**********************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.actions.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthActionTypes, LoginAction, LoginSuccessAction, LoginFailAction, LogoutAction */

  /***/
  function libsCommonAuthStateSrcLibStateAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function () {
      return AuthActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAction", function () {
      return LoginAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSuccessAction", function () {
      return LoginSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFailAction", function () {
      return LoginFailAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutAction", function () {
      return LogoutAction;
    });

    var AuthActionTypes;

    (function (AuthActionTypes) {
      AuthActionTypes["Login"] = "[Auth] Login";
      AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
      AuthActionTypes["LoginFail"] = "[Auth] Login Fail";
      AuthActionTypes["Logout"] = "[Auth] Logout";
    })(AuthActionTypes || (AuthActionTypes = {}));

    var LoginAction = function LoginAction(payload) {
      _classCallCheck(this, LoginAction);

      this.payload = payload;
      this.type = AuthActionTypes.Login;
    };

    var LoginSuccessAction = function LoginSuccessAction(payload) {
      _classCallCheck(this, LoginSuccessAction);

      this.payload = payload;
      this.type = AuthActionTypes.LoginSuccess;
    };

    var LoginFailAction = function LoginFailAction() {
      _classCallCheck(this, LoginFailAction);

      this.type = AuthActionTypes.LoginFail;
    };

    var LogoutAction = function LogoutAction() {
      _classCallCheck(this, LogoutAction);

      this.type = AuthActionTypes.Logout;
    };
    /***/

  },

  /***/
  "../../libs/common/auth/state/src/lib/+state/auth.effects.ts":
  /*!**********************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.effects.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthEffects */

  /***/
  function libsCommonAuthStateSrcLibStateAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
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


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @frontend/common/auth/shared */
    "../../libs/common/auth/shared/src/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.actions */
    "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var AuthEffects = function AuthEffects(actions$, authService) {
      var _this = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.authService = authService;
      this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
        console.log("Effect Action: ", action.payload);
        return _this.authService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
          var _res$userInfo = res.userInfo,
              _id = _res$userInfo._id,
              userId = _res$userInfo.userId;
          var access_token = res.access_token;
          var user = {
            id: _id,
            userId: userId,
            token: access_token
          };
          return new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccessAction"](user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFailAction"]());
        }));
      }));
    };

    AuthEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AuthEffects.prototype, "login$", void 0);
    AuthEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _frontend_common_auth_shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthEffects);
    /***/
  },

  /***/
  "../../libs/common/auth/state/src/lib/+state/auth.facade.ts":
  /*!*********************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.facade.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthFacade */

  /***/
  function libsCommonAuthStateSrcLibStateAuthFacadeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthFacade", function () {
      return AuthFacade;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.actions */
    "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");
    /* harmony import */


    var _auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.selectors */
    "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");

    var AuthFacade = /*#__PURE__*/function () {
      function AuthFacade(store, actions$) {
        _classCallCheck(this, AuthFacade);

        this.store = store;
        this.actions$ = actions$;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]));
      }

      _createClass(AuthFacade, [{
        key: "login",
        value: function login(authenticate) {
          var _this2 = this;

          this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginAction"](authenticate));
          return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
            _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LoginSuccess, _auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LoginFail)).subscribe(function (action) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var user;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).toPromise();

                      case 2:
                        user = _context.sent;
                        console.log("login after", user);
                        action.type === _auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LoginSuccess ? observer.next(user) : observer.next(false);
                        observer.complete();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "checkUser",
        value: function checkUser(user) {
          this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginSuccessAction"](user));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["LogoutAction"]());
          return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (observer) {
            _this3.user$.subscribe(function (user) {
              observer.next(!user);
              observer.complete();
            });
          });
        }
      }]);

      return AuthFacade;
    }();

    AuthFacade.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Actions"]
      }];
    };

    AuthFacade = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Actions"]])], AuthFacade);
    /***/
  },

  /***/
  "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts":
  /*!**********************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.reducer.ts ***!
    \**********************************************************************/

  /*! exports provided: AUTH_FEATURE_KEY, initialState, authReducer */

  /***/
  function libsCommonAuthStateSrcLibStateAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTH_FEATURE_KEY", function () {
      return AUTH_FEATURE_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authReducer", function () {
      return authReducer;
    });
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.actions */
    "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");

    var AUTH_FEATURE_KEY = 'auth';
    var initialState = {
      user: null
    };

    function authReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginSuccess:
          return Object.assign(Object.assign({}, state), {
            user: action.payload
          });

        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginFail:
          return Object.assign(Object.assign({}, state), {
            user: null
          });

        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Logout:
          {
            return Object.assign(Object.assign({}, state), {
              user: null
            });
          }

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts":
  /*!************************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.selectors.ts ***!
    \************************************************************************/

  /*! exports provided: getUser */

  /***/
  function libsCommonAuthStateSrcLibStateAuthSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return getUser;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.reducer */
    "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");

    var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["AUTH_FEATURE_KEY"]);
    var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) {
      return state.user;
    });
    /***/
  },

  /***/
  "../../libs/common/auth/state/src/lib/common-auth-state.module.ts":
  /*!***************************************************************************!*\
    !*** /opt/app/libs/common/auth/state/src/lib/common-auth-state.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CommonAuthStateModule */

  /***/
  function libsCommonAuthStateSrcLibCommonAuthStateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonAuthStateModule", function () {
      return CommonAuthStateModule;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./+state/auth.reducer */
    "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");
    /* harmony import */


    var _state_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./+state/auth.effects */
    "../../libs/common/auth/state/src/lib/+state/auth.effects.ts");
    /* harmony import */


    var _state_auth_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./+state/auth.facade */
    "../../libs/common/auth/state/src/lib/+state/auth.facade.ts");

    var CommonAuthStateModule = function CommonAuthStateModule() {
      _classCallCheck(this, CommonAuthStateModule);
    };

    CommonAuthStateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}), _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["AUTH_FEATURE_KEY"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"], {
        initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["initialState"]
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_6__["AuthEffects"]])],
      providers: [_state_auth_facade__WEBPACK_IMPORTED_MODULE_7__["AuthFacade"]]
    })], CommonAuthStateModule);
    /***/
  },

  /***/
  "../../libs/common/core/src/index.ts":
  /*!**********************************************!*\
    !*** /opt/app/libs/common/core/src/index.ts ***!
    \**********************************************/

  /*! exports provided: BASE_PROVIDERS, CommonCoreModule */

  /***/
  function libsCommonCoreSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_common_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/common-core.module */
    "../../libs/common/core/src/lib/common-core.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PROVIDERS", function () {
      return _lib_common_core_module__WEBPACK_IMPORTED_MODULE_0__["BASE_PROVIDERS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonCoreModule", function () {
      return _lib_common_core_module__WEBPACK_IMPORTED_MODULE_0__["CommonCoreModule"];
    });
    /***/

  },

  /***/
  "../../libs/common/core/src/lib/common-core.module.ts":
  /*!***************************************************************!*\
    !*** /opt/app/libs/common/core/src/lib/common-core.module.ts ***!
    \***************************************************************/

  /*! exports provided: BASE_PROVIDERS, CommonCoreModule */

  /***/
  function libsCommonCoreSrcLibCommonCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PROVIDERS", function () {
      return BASE_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonCoreModule", function () {
      return CommonCoreModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _interceptors_api_api_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interceptors/api/api.interceptor */
    "../../libs/common/core/src/lib/interceptors/api/api.interceptor.ts");

    var CommonCoreModule_1;
    var BASE_PROVIDERS = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
      useClass: _interceptors_api_api_interceptor__WEBPACK_IMPORTED_MODULE_6__["ApiInterceptor"],
      multi: true
    }];

    var CommonCoreModule = CommonCoreModule_1 = /*#__PURE__*/function () {
      function CommonCoreModule() {
        _classCallCheck(this, CommonCoreModule);
      }

      _createClass(CommonCoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CommonCoreModule_1,
            providers: [].concat(BASE_PROVIDERS)
          };
        }
      }]);

      return CommonCoreModule;
    }();

    CommonCoreModule = CommonCoreModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
      exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
    })], CommonCoreModule);
    /***/
  },

  /***/
  "../../libs/common/core/src/lib/interceptors/api/api.interceptor.ts":
  /*!*****************************************************************************!*\
    !*** /opt/app/libs/common/core/src/lib/interceptors/api/api.interceptor.ts ***!
    \*****************************************************************************/

  /*! exports provided: ApiInterceptor */

  /***/
  function libsCommonCoreSrcLibInterceptorsApiApiInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return ApiInterceptor;
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


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");

    var ApiInterceptor = /*#__PURE__*/function () {
      function ApiInterceptor(configService) {
        _classCallCheck(this, ApiInterceptor);

        this.configService = configService;
      }

      _createClass(ApiInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.url.indexOf('api/') !== -1) {
            // console.log(location.origin)
            var url = this.configService.config.api || location.origin;
            console.log("".concat(url).concat(req.url));
            req = req.clone({
              url: "".concat(url).concat(req.url)
            });
          }

          return next.handle(req);
        }
      }]);

      return ApiInterceptor;
    }();

    ApiInterceptor.ctorParameters = function () {
      return [{
        type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    ApiInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])], ApiInterceptor);
    /***/
  },

  /***/
  "../../libs/common/material/src/index.ts":
  /*!**************************************************!*\
    !*** /opt/app/libs/common/material/src/index.ts ***!
    \**************************************************/

  /*! exports provided: CommonMaterialModule */

  /***/
  function libsCommonMaterialSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_common_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/common-material.module */
    "../../libs/common/material/src/lib/common-material.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonMaterialModule", function () {
      return _lib_common_material_module__WEBPACK_IMPORTED_MODULE_0__["CommonMaterialModule"];
    });
    /***/

  },

  /***/
  "../../libs/common/material/src/lib/common-material.module.ts":
  /*!***********************************************************************!*\
    !*** /opt/app/libs/common/material/src/lib/common-material.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CommonMaterialModule */

  /***/
  function libsCommonMaterialSrcLibCommonMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonMaterialModule", function () {
      return CommonMaterialModule;
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


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var CommonMaterialModule = function CommonMaterialModule() {
      _classCallCheck(this, CommonMaterialModule);
    };

    CommonMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]],
      providers: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"]]
    })], CommonMaterialModule);
    /***/
  },

  /***/
  "../../libs/common/shared/src/index.ts":
  /*!************************************************!*\
    !*** /opt/app/libs/common/shared/src/index.ts ***!
    \************************************************/

  /*! exports provided: CommonSharedModule, ConfigService, LanguageService, ThemeService, LoginBaseComponent, AuthGuard */

  /***/
  function libsCommonSharedSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_common_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/common-shared.module */
    "../../libs/common/shared/src/lib/common-shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CommonSharedModule", function () {
      return _lib_common_shared_module__WEBPACK_IMPORTED_MODULE_0__["CommonSharedModule"];
    });
    /* harmony import */


    var _lib_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/services/config/config.service */
    "../../libs/common/shared/src/lib/services/config/config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return _lib_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"];
    });
    /* harmony import */


    var _lib_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/services/language/language.service */
    "../../libs/common/shared/src/lib/services/language/language.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return _lib_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"];
    });
    /* harmony import */


    var _lib_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/services/theme/theme.service */
    "../../libs/common/shared/src/lib/services/theme/theme.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return _lib_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"];
    });
    /* harmony import */


    var _lib_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/base */
    "../../libs/common/shared/src/lib/base/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function () {
      return _lib_base__WEBPACK_IMPORTED_MODULE_4__["LoginBaseComponent"];
    });
    /* harmony import */


    var _lib_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/guards */
    "../../libs/common/shared/src/lib/guards/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _lib_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"];
    });
    /***/

  },

  /***/
  "../../libs/common/shared/src/lib/base/formBase.component.ts":
  /*!**********************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/base/formBase.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FormBaseComponent */

  /***/
  function libsCommonSharedSrcLibBaseFormBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function () {
      return FormBaseComponent;
    });

    var FormBaseComponent = function FormBaseComponent() {
      _classCallCheck(this, FormBaseComponent);
    };
    /***/

  },

  /***/
  "../../libs/common/shared/src/lib/base/index.ts":
  /*!*********************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/base/index.ts ***!
    \*********************************************************/

  /*! exports provided: LoginBaseComponent */

  /***/
  function libsCommonSharedSrcLibBaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.base.component */
    "../../libs/common/shared/src/lib/base/login.base.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function () {
      return _login_base_component__WEBPACK_IMPORTED_MODULE_0__["LoginBaseComponent"];
    });
    /***/

  },

  /***/
  "../../libs/common/shared/src/lib/base/login.base.component.ts":
  /*!************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/base/login.base.component.ts ***!
    \************************************************************************/

  /*! exports provided: LoginBaseComponent */

  /***/
  function libsCommonSharedSrcLibBaseLoginBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function () {
      return LoginBaseComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _formBase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./formBase.component */
    "../../libs/common/shared/src/lib/base/formBase.component.ts");
    /* harmony import */


    var _validators_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../validators/password.validator */
    "../../libs/common/shared/src/lib/validators/password.validator.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var LoginBaseComponent = /*#__PURE__*/function (_formBase_component__) {
      _inherits(LoginBaseComponent, _formBase_component__);

      var _super = _createSuper(LoginBaseComponent);

      function LoginBaseComponent() {
        var _this4;

        _classCallCheck(this, LoginBaseComponent);

        _this4 = _super.call(this);
        _this4.formErrors = {
          userId: [{
            type: 'required',
            message: '必填。'
          }],
          password: [{
            type: 'required',
            message: '必填。'
          }, {
            type: 'length',
            message: 'auth_register_error_password_length'
          }, {
            type: 'password',
            message: '密碼必須六位數且包含英數字。'
          }]
        };

        _this4.createFormGroup();

        return _this4;
      }

      _createClass(LoginBaseComponent, [{
        key: "createFormGroup",
        value: function createFormGroup() {
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Test', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('Test123', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            /*      PasswordValidator.isValid(4, 4), */
            _validators_password_validator__WEBPACK_IMPORTED_MODULE_2__["Custom"].password])
          });
        }
      }, {
        key: "login",
        value: function login() {
          if (this.formGroup.valid) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
              status: 200,
              data: this.formGroup.value
            });
          }
        }
      }]);

      return LoginBaseComponent;
    }(_formBase_component__WEBPACK_IMPORTED_MODULE_1__["FormBaseComponent"]);
    /***/

  },

  /***/
  "../../libs/common/shared/src/lib/common-shared.module.ts":
  /*!*******************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/common-shared.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CommonSharedModule */

  /***/
  function libsCommonSharedSrcLibCommonSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonSharedModule", function () {
      return CommonSharedModule;
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


    var _frontend_common_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @frontend/common/material */
    "../../libs/common/material/src/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "../../libs/common/shared/src/lib/components/index.ts");

    var CommonSharedModule = function CommonSharedModule() {
      _classCallCheck(this, CommonSharedModule);
    };

    CommonSharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _frontend_common_material__WEBPACK_IMPORTED_MODULE_3__["CommonMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [_frontend_common_material__WEBPACK_IMPORTED_MODULE_3__["CommonMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]].concat(_toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["COMPONENTS"])),
      declarations: _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["COMPONENTS"])
    })], CommonSharedModule);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss":
  /*!***********************************************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function libsCommonSharedSrcLibComponentsFormErrorMessageFormErrorMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2NvbW1vbi9zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2Zvcm0tZXJyb3ItbWVzc2FnZS9mb3JtLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts":
  /*!*********************************************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: FormErrorMessageComponent */

  /***/
  function libsCommonSharedSrcLibComponentsFormErrorMessageFormErrorMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormErrorMessageComponent", function () {
      return FormErrorMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormErrorMessageComponent = /*#__PURE__*/function () {
      function FormErrorMessageComponent() {
        _classCallCheck(this, FormErrorMessageComponent);
      }

      _createClass(FormErrorMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "errorCount",
        value: function errorCount(errors, type) {
          console.log(errors, type, Object.keys(errors), Object.keys(errors).findIndex(function (zzz) {
            return zzz === type;
          })); //    console.log(errors[type] && Object.keys(errors).findIndex(type) === 0)

          return errors[type] && Object.keys(errors).findIndex(function (key) {
            return key === type;
          }) === 0;
        }
      }]);

      return FormErrorMessageComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])], FormErrorMessageComponent.prototype, "formControl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FormErrorMessageComponent.prototype, "formError", void 0);
    FormErrorMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'common-form-error-message',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./form-error-message.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./form-error-message.component.scss */
      "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormErrorMessageComponent);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/components/index.ts":
  /*!***************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/components/index.ts ***!
    \***************************************************************/

  /*! exports provided: COMPONENTS */

  /***/
  function libsCommonSharedSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPONENTS", function () {
      return COMPONENTS;
    });
    /* harmony import */


    var _form_error_message_form_error_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./form-error-message/form-error-message.component */
    "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts");

    var COMPONENTS = [_form_error_message_form_error_message_component__WEBPACK_IMPORTED_MODULE_0__["FormErrorMessageComponent"]];
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/guards/auth/auth.guard.ts":
  /*!*********************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/guards/auth/auth.guard.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function libsCommonSharedSrcLibGuardsAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @frontend/common/auth/state */
    "../../libs/common/auth/state/src/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authFacade) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authFacade = authFacade;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return this.checked();
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          return this.checked();
        }
      }, {
        key: "checked",
        value: function checked() {
          var token = sessionStorage.getItem('token');
          console.log('token', token);

          if (token) {
            var user = {
              id: sessionStorage.getItem('id'),
              userId: sessionStorage.getItem('userId'),
              token: token
            };
            this.authFacade.checkUser(user);
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]])], AuthGuard);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/guards/index.ts":
  /*!***********************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/guards/index.ts ***!
    \***********************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function libsCommonSharedSrcLibGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "../../libs/common/shared/src/lib/guards/auth/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
    });
    /***/

  },

  /***/
  "../../libs/common/shared/src/lib/services/config/config.service.ts":
  /*!*****************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/services/config/config.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigService */

  /***/
  function libsCommonSharedSrcLibServicesConfigConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../theme/theme.service */
    "../../libs/common/shared/src/lib/services/theme/theme.service.ts");

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(httpClient, themeService) {
        _classCallCheck(this, ConfigService);

        this.httpClient = httpClient;
        this.themeService = themeService;
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.config$ = this.configSubject.asObservable();
      }

      _createClass(ConfigService, [{
        key: "loadConfig",
        value: function loadConfig() {
          var _this5 = this;

          this.httpClient.get('assets/config.json').subscribe(function (config) {
            console.log("--- Loading Finish config ---", config);
            _this5._config = config; // this.themeService.initTheme( this._config.theme.default)

            _this5.configSubject.next(config);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "config",
        get: function get() {
          return this._config;
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
      }];
    };

    ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]])], ConfigService);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/services/language/language.service.ts":
  /*!*********************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/services/language/language.service.ts ***!
    \*********************************************************************************/

  /*! exports provided: LanguageService */

  /***/
  function libsCommonSharedSrcLibServicesLanguageLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config/config.service */
    "../../libs/common/shared/src/lib/services/config/config.service.ts");

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService(translateService, configService) {
        _classCallCheck(this, LanguageService);

        this.translateService = translateService;
        this.configService = configService;
        this.languageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.language$ = this.languageSubject.asObservable();
      }

      _createClass(LanguageService, [{
        key: "init",
        value: function init() {
          var _this6 = this;

          this.configService.config$.subscribe(function (result) {
            if (result) {
              var language = result.language;

              _this6.languageSubject.next(language["default"]);

              _this6.translateService.setDefaultLang(language["default"]);

              _this6.translateService.use(language["default"]);
            }
          });
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(language) {
          this.translateService.use(language);
        }
      }, {
        key: "_language",
        get: function get() {
          return this.languageSubject.value;
        },
        set: function set(value) {
          this.setLanguage(value);
        }
      }]);

      return LanguageService;
    }();

    LanguageService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }];
    };

    LanguageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])], LanguageService);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/services/theme/theme.service.ts":
  /*!***************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/services/theme/theme.service.ts ***!
    \***************************************************************************/

  /*! exports provided: ThemeService */

  /***/
  function libsCommonSharedSrcLibServicesThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.theme$ = this.themeSubject.asObservable();
      }

      _createClass(ThemeService, [{
        key: "initTheme",
        value: function initTheme(theme) {
          this.setTheme(theme);
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          document.body.className = theme;
          this.themeSubject.next(theme);
        }
      }, {
        key: "_theme",
        get: function get() {
          return this.themeSubject.value;
        },
        set: function set(value) {
          this.setTheme(value);
        }
      }]);

      return ThemeService;
    }();

    ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ThemeService);
    /***/
  },

  /***/
  "../../libs/common/shared/src/lib/validators/password.validator.ts":
  /*!****************************************************************************!*\
    !*** /opt/app/libs/common/shared/src/lib/validators/password.validator.ts ***!
    \****************************************************************************/

  /*! exports provided: PasswordValidator, Custom */

  /***/
  function libsCommonSharedSrcLibValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Custom", function () {
      return Custom;
    });

    var PasswordValidator = /*#__PURE__*/function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "isValid",
        value: function isValid(minLength, maxLength) {
          return function (control) {
            var v = control.value;
            if (!v || v && v.trim() === '') return {
              required: true
            };
            if (v.length < minLength || v.length > maxLength) return {
              length: {
                requireMinLength: minLength,
                requireMaxLength: maxLength,
                actualLength: v.length
              }
            };
            return null;
          };
        }
      }]);

      return PasswordValidator;
    }();

    var Custom = /*#__PURE__*/function () {
      function Custom() {
        _classCallCheck(this, Custom);
      }

      _createClass(Custom, null, [{
        key: "password",
        value: function password(control) {
          var pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
          return pattern.test(control.value) ? null : {
            'password': true
          };
        }
      }]);

      return Custom;
    }();
    /***/

  },

  /***/
  "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!************************************************************************************************************************************************!*\
    !*** /opt/app/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["../../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsCommonSharedSrcLibComponentsFormErrorMessageFormErrorMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"formControl && formError && formControl.hasError(formError.type) && formControl.touched\">\n  <ng-container *ngIf=\"errorCount(formControl.errors, formError.type)\">\n    {{ formError.message }}\n  </ng-container>\n  <!--   <ng-container [ngSwitch]=\"formError.type\">\n    <ng-container *ngSwitchCase=\"'required'\">{{ formError.message }}</ng-container>\n    <ng-container *ngSwitchCase=\"'length'\">\n\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password'\">\n      {{ formError.message }}\n   </ng-container>\n\n\n  </ng-container> -->\n  <!--\n   11111.{{ formError.type }}\n  2222.{{ formControl?.errors | json }} -->\n</ng-container>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!*********************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lvbmljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(themeService, configService, languageService) {
        _classCallCheck(this, AppComponent);

        this.themeService = themeService;
        this.configService = configService;
        this.languageService = languageService;
        this.title = 'ionic';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.configService.loadConfig();
          this.languageService.init();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
      }, {
        type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'frontend-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/service-worker */
    "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @frontend/common/shared */
    "../../libs/common/shared/src/index.ts");
    /* harmony import */


    var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @frontend/common/auth/state */
    "../../libs/common/auth/state/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _frontend_common_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @frontend/common/core */
    "../../libs/common/core/src/index.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "../../node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'tabs/home'
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | frontend-ionic-app */
        "frontend-ionic-app").then(__webpack_require__.bind(null,
        /*! @frontend/ionic/app */
        "../../libs/ionic/app/src/index.ts")).then(function (m) {
          return m.IonicAppModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | frontend-ionic-login */
        "frontend-ionic-login").then(__webpack_require__.bind(null,
        /*! @frontend/ionic/login */
        "../../libs/ionic/login/src/index.ts")).then(function (m) {
          return m.IonicLoginModule;
        });
      }
    }];

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _frontend_common_core__WEBPACK_IMPORTED_MODULE_11__["CommonCoreModule"], _frontend_common_shared__WEBPACK_IMPORTED_MODULE_8__["CommonSharedModule"], _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_9__["CommonAuthStateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
        }
      }), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'ios',
        swipeBackEnabled: false,
        scrollPadding: false,
        scrollAssist: false
      }), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
        useHash: true
      }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /opt/app/apps/ionic/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map