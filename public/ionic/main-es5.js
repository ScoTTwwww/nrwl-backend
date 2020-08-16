(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/common/auth/state/src/index.ts":
/*!****************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/index.ts ***!
  \****************************************************/
/*! exports provided: AUTH_FEATURE_KEY, initialState, authReducer, getUser, AuthFacade, CommonAuthStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/+state/auth.reducer */ "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTH_FEATURE_KEY", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["AUTH_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"]; });

/* harmony import */ var _lib_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/auth.selectors */ "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _lib_state_auth_selectors__WEBPACK_IMPORTED_MODULE_1__["getUser"]; });

/* harmony import */ var _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/auth.facade */ "../../libs/common/auth/state/src/lib/+state/auth.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_2__["AuthFacade"]; });

/* harmony import */ var _lib_common_auth_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/common-auth-state.module */ "../../libs/common/auth/state/src/lib/common-auth-state.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonAuthStateModule", function() { return _lib_common_auth_state_module__WEBPACK_IMPORTED_MODULE_3__["CommonAuthStateModule"]; });







/***/ }),

/***/ "../../libs/common/auth/state/src/lib/+state/auth.actions.ts":
/*!**********************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.actions.ts ***!
  \**********************************************************************/
/*! exports provided: AuthActionTypes, LoginAction, LoginSuccessAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccessAction", function() { return LoginSuccessAction; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
})(AuthActionTypes || (AuthActionTypes = {}));
var LoginAction = /** @class */ (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    LoginAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoginAction;
}());

var LoginSuccessAction = /** @class */ (function () {
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
    LoginSuccessAction.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoginSuccessAction;
}());



/***/ }),

/***/ "../../libs/common/auth/state/src/lib/+state/auth.effects.ts":
/*!**********************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.effects.ts ***!
  \**********************************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.actions */ "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");





var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$) {
        this.actions$ = actions$;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            console.log(action.payload);
            return [new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginSuccessAction"](action.payload)];
        }));
    }
    AuthEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "../../libs/common/auth/state/src/lib/+state/auth.facade.ts":
/*!*********************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.facade.ts ***!
  \*********************************************************************/
/*! exports provided: AuthFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return AuthFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.selectors */ "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts");





var AuthFacade = /** @class */ (function () {
    function AuthFacade(store) {
        this.store = store;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getUser"]));
    }
    AuthFacade.prototype.login = function (authenticate) {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginAction"](authenticate));
    };
    AuthFacade.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    AuthFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthFacade);
    return AuthFacade;
}());



/***/ }),

/***/ "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts":
/*!**********************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: AUTH_FEATURE_KEY, initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_FEATURE_KEY", function() { return AUTH_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "../../libs/common/auth/state/src/lib/+state/auth.actions.ts");


var AUTH_FEATURE_KEY = 'auth';
var initialState = {
    user: null
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LoginSuccess:
            console.log(action);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../libs/common/auth/state/src/lib/+state/auth.selectors.ts":
/*!************************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/+state/auth.selectors.ts ***!
  \************************************************************************/
/*! exports provided: getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");


var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["AUTH_FEATURE_KEY"]);
var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) { return state.user; });


/***/ }),

/***/ "../../libs/common/auth/state/src/lib/common-auth-state.module.ts":
/*!***************************************************************************!*\
  !*** /opt/app/libs/common/auth/state/src/lib/common-auth-state.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommonAuthStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAuthStateModule", function() { return CommonAuthStateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/auth.reducer */ "../../libs/common/auth/state/src/lib/+state/auth.reducer.ts");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/auth.effects */ "../../libs/common/auth/state/src/lib/+state/auth.effects.ts");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/auth.facade */ "../../libs/common/auth/state/src/lib/+state/auth.facade.ts");








var CommonAuthStateModule = /** @class */ (function () {
    function CommonAuthStateModule() {
    }
    CommonAuthStateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({}),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["AUTH_FEATURE_KEY"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["authReducer"], {
                    initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["initialState"]
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_6__["AuthEffects"]])
            ],
            providers: [_state_auth_facade__WEBPACK_IMPORTED_MODULE_7__["AuthFacade"]]
        })
    ], CommonAuthStateModule);
    return CommonAuthStateModule;
}());



/***/ }),

/***/ "../../libs/common/core/src/index.ts":
/*!**********************************************!*\
  !*** /opt/app/libs/common/core/src/index.ts ***!
  \**********************************************/
/*! exports provided: CommonCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-core.module */ "../../libs/common/core/src/lib/common-core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonCoreModule", function() { return _lib_common_core_module__WEBPACK_IMPORTED_MODULE_0__["CommonCoreModule"]; });




/***/ }),

/***/ "../../libs/common/core/src/lib/common-core.module.ts":
/*!***************************************************************!*\
  !*** /opt/app/libs/common/core/src/lib/common-core.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCoreModule", function() { return CommonCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var CommonCoreModule = /** @class */ (function () {
    function CommonCoreModule() {
    }
    CommonCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ]
        })
    ], CommonCoreModule);
    return CommonCoreModule;
}());



/***/ }),

/***/ "../../libs/common/material/src/index.ts":
/*!**************************************************!*\
  !*** /opt/app/libs/common/material/src/index.ts ***!
  \**************************************************/
/*! exports provided: CommonMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-material.module */ "../../libs/common/material/src/lib/common-material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonMaterialModule", function() { return _lib_common_material_module__WEBPACK_IMPORTED_MODULE_0__["CommonMaterialModule"]; });




/***/ }),

/***/ "../../libs/common/material/src/lib/common-material.module.ts":
/*!***********************************************************************!*\
  !*** /opt/app/libs/common/material/src/lib/common-material.module.ts ***!
  \***********************************************************************/
/*! exports provided: CommonMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMaterialModule", function() { return CommonMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");




var CommonMaterialModule = /** @class */ (function () {
    function CommonMaterialModule() {
    }
    CommonMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            ]
        })
    ], CommonMaterialModule);
    return CommonMaterialModule;
}());



/***/ }),

/***/ "../../libs/common/shared/src/index.ts":
/*!************************************************!*\
  !*** /opt/app/libs/common/shared/src/index.ts ***!
  \************************************************/
/*! exports provided: CommonSharedModule, ConfigService, LanguageService, ThemeService, LoginBaseComponent, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-shared.module */ "../../libs/common/shared/src/lib/common-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonSharedModule", function() { return _lib_common_shared_module__WEBPACK_IMPORTED_MODULE_0__["CommonSharedModule"]; });

/* harmony import */ var _lib_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/config/config.service */ "../../libs/common/shared/src/lib/services/config/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _lib_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]; });

/* harmony import */ var _lib_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/language/language.service */ "../../libs/common/shared/src/lib/services/language/language.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return _lib_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]; });

/* harmony import */ var _lib_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/theme/theme.service */ "../../libs/common/shared/src/lib/services/theme/theme.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return _lib_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]; });

/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/base */ "../../libs/common/shared/src/lib/base/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function() { return _lib_base__WEBPACK_IMPORTED_MODULE_4__["LoginBaseComponent"]; });

/* harmony import */ var _lib_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/guards */ "../../libs/common/shared/src/lib/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]; });









/***/ }),

/***/ "../../libs/common/shared/src/lib/base/formBase.component.ts":
/*!**********************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/base/formBase.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return FormBaseComponent; });
var FormBaseComponent = /** @class */ (function () {
    function FormBaseComponent() {
    }
    return FormBaseComponent;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/base/index.ts":
/*!*********************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/base/index.ts ***!
  \*********************************************************/
/*! exports provided: LoginBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.base.component */ "../../libs/common/shared/src/lib/base/login.base.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function() { return _login_base_component__WEBPACK_IMPORTED_MODULE_0__["LoginBaseComponent"]; });




/***/ }),

/***/ "../../libs/common/shared/src/lib/base/login.base.component.ts":
/*!************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/base/login.base.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBaseComponent", function() { return LoginBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _formBase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formBase.component */ "../../libs/common/shared/src/lib/base/formBase.component.ts");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/password.validator */ "../../libs/common/shared/src/lib/validators/password.validator.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





var LoginBaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginBaseComponent, _super);
    function LoginBaseComponent() {
        var _this = _super.call(this) || this;
        _this.formErrors = {
            userId: [
                { type: 'required', message: '必填。' }
            ],
            password: [
                { type: 'required', message: '必填。' },
                { type: 'length', message: 'auth_register_error_password_length' },
                { type: 'password', message: '密碼必須六位數且包含英數字。' }
            ]
        };
        _this.createFormGroup();
        return _this;
    }
    LoginBaseComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Test', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Test123', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                /*      PasswordValidator.isValid(4, 4), */
                _validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["Custom"].password
            ])
        });
    };
    LoginBaseComponent.prototype.login = function () {
        if (this.formGroup.valid) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ status: 200, data: this.formGroup.value });
        }
    };
    return LoginBaseComponent;
}(_formBase_component__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "../../libs/common/shared/src/lib/common-shared.module.ts":
/*!*******************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/common-shared.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommonSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSharedModule", function() { return CommonSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frontend_common_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/material */ "../../libs/common/material/src/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "../../libs/common/shared/src/lib/components/index.ts");






var CommonSharedModule = /** @class */ (function () {
    function CommonSharedModule() {
    }
    CommonSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _frontend_common_material__WEBPACK_IMPORTED_MODULE_3__["CommonMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [
                _frontend_common_material__WEBPACK_IMPORTED_MODULE_3__["CommonMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_5__["COMPONENTS"]),
            declarations: _components__WEBPACK_IMPORTED_MODULE_5__["COMPONENTS"].slice()
        })
    ], CommonSharedModule);
    return CommonSharedModule;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss":
/*!***********************************************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2NvbW1vbi9zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2Zvcm0tZXJyb3ItbWVzc2FnZS9mb3JtLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts":
/*!*********************************************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FormErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorMessageComponent", function() { return FormErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var FormErrorMessageComponent = /** @class */ (function () {
    function FormErrorMessageComponent() {
    }
    FormErrorMessageComponent.prototype.ngOnInit = function () {
    };
    FormErrorMessageComponent.prototype.errorCount = function (errors, type) {
        console.log(errors, type, Object.keys(errors), Object.keys(errors).findIndex(function (zzz) { return zzz === type; }));
        //    console.log(errors[type] && Object.keys(errors).findIndex(type) === 0)
        return errors[type] && Object.keys(errors).findIndex(function (key) { return key === type; }) === 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], FormErrorMessageComponent.prototype, "formControl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormErrorMessageComponent.prototype, "formError", void 0);
    FormErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'common-form-error-message',
            template: __webpack_require__(/*! raw-loader!./form-error-message.component.html */ "../../node_modules/raw-loader/index.js!../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html"),
            styles: [__webpack_require__(/*! ./form-error-message.component.scss */ "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormErrorMessageComponent);
    return FormErrorMessageComponent;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/components/index.ts":
/*!***************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/components/index.ts ***!
  \***************************************************************/
/*! exports provided: COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony import */ var _form_error_message_form_error_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-error-message/form-error-message.component */ "../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.ts");

var COMPONENTS = [
    _form_error_message_form_error_message_component__WEBPACK_IMPORTED_MODULE_0__["FormErrorMessageComponent"]
];


/***/ }),

/***/ "../../libs/common/shared/src/lib/guards/auth/auth.guard.ts":
/*!*********************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/guards/auth/auth.guard.ts ***!
  \*********************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route, segments) {
        console.log(localStorage.getItem('user'));
        var token = localStorage.getItem('user');
        if (false)
            {}
        return token === 'OK';
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/guards/index.ts":
/*!***********************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/guards/index.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "../../libs/common/shared/src/lib/guards/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "../../libs/common/shared/src/lib/services/config/config.service.ts":
/*!*****************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/services/config/config.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/theme.service */ "../../libs/common/shared/src/lib/services/theme/theme.service.ts");





var ConfigService = /** @class */ (function () {
    function ConfigService(httpClient, themeService) {
        this.httpClient = httpClient;
        this.themeService = themeService;
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.config$ = this.configSubject.asObservable();
    }
    Object.defineProperty(ConfigService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.loadConfig = function () {
        var _this = this;
        this.httpClient.get('assets/config.json').subscribe(function (config) {
            console.log("--- Loading Finish config ---", config);
            _this._config = config;
            _this.themeService.initTheme(_this._config.theme.default);
            _this.configSubject.next(config);
        });
    };
    ConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _theme_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/services/language/language.service.ts":
/*!*********************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/services/language/language.service.ts ***!
  \*********************************************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.service */ "../../libs/common/shared/src/lib/services/config/config.service.ts");





var LanguageService = /** @class */ (function () {
    function LanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.languageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.language$ = this.languageSubject.asObservable();
    }
    Object.defineProperty(LanguageService.prototype, "_language", {
        get: function () {
            return this.languageSubject.value;
        },
        set: function (value) {
            this.setLanguage(value);
        },
        enumerable: true,
        configurable: true
    });
    LanguageService.prototype.init = function () {
        var _this = this;
        this.configService.config$.subscribe(function (result) {
            if (result) {
                var language = result.language;
                _this.languageSubject.next(language.default);
                _this.translateService.setDefaultLang(language.default);
                _this.translateService.use(language.default);
            }
        });
    };
    LanguageService.prototype.setLanguage = function (language) {
        this.translateService.use(language);
    };
    LanguageService.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/services/theme/theme.service.ts":
/*!***************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/services/theme/theme.service.ts ***!
  \***************************************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.themeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.theme$ = this.themeSubject.asObservable();
    }
    Object.defineProperty(ThemeService.prototype, "_theme", {
        get: function () {
            return this.themeSubject.value;
        },
        set: function (value) {
            this.setTheme(value);
        },
        enumerable: true,
        configurable: true
    });
    ThemeService.prototype.initTheme = function (theme) {
        this.setTheme(theme);
    };
    ThemeService.prototype.setTheme = function (theme) {
        document.body.className = theme;
        this.themeSubject.next(theme);
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "../../libs/common/shared/src/lib/validators/password.validator.ts":
/*!****************************************************************************!*\
  !*** /opt/app/libs/common/shared/src/lib/validators/password.validator.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordValidator, Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return Custom; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.isValid = function (minLength, maxLength) {
        return function (control) {
            var v = control.value;
            if ((!v) || (v && v.trim() === ''))
                return { required: true };
            if (v.length < minLength || v.length > maxLength)
                return {
                    length: {
                        requireMinLength: minLength,
                        requireMaxLength: maxLength,
                        actualLength: v.length
                    }
                };
            return null;
        };
    };
    return PasswordValidator;
}());

var Custom = /** @class */ (function () {
    function Custom() {
    }
    Custom.password = function (control) {
        var pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
        return pattern.test(control.value) ? null : { 'password': true };
    };
    return Custom;
}());



/***/ }),

/***/ "../../node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!****************************************************************************************************************************************************!*\
  !*** /opt/app/node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js",
		"common",
		1
	],
	"./ion-alert-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js",
		"common",
		2
	],
	"./ion-alert-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js",
		"common",
		3
	],
	"./ion-app_8-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js",
		"common",
		4
	],
	"./ion-app_8-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js",
		"common",
		5
	],
	"./ion-avatar_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-md.entry.js",
		"common",
		7
	],
	"./ion-back-button-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js",
		"common",
		8
	],
	"./ion-back-button-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js",
		"common",
		9
	],
	"./ion-backdrop-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js",
		10
	],
	"./ion-backdrop-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js",
		11
	],
	"./ion-button_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js",
		"common",
		12
	],
	"./ion-button_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js",
		"common",
		13
	],
	"./ion-card_5-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js",
		"common",
		14
	],
	"./ion-card_5-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-card_5-md.entry.js",
		"common",
		15
	],
	"./ion-checkbox-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-checkbox-ios.entry.js",
		"common",
		16
	],
	"./ion-checkbox-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js",
		"common",
		17
	],
	"./ion-chip-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-chip-ios.entry.js",
		"common",
		18
	],
	"./ion-chip-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-chip-md.entry.js",
		"common",
		19
	],
	"./ion-col_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		20
	],
	"./ion-datetime_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js",
		"common",
		21
	],
	"./ion-datetime_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js",
		"common",
		22
	],
	"./ion-fab_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js",
		"common",
		23
	],
	"./ion-fab_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js",
		"common",
		24
	],
	"./ion-img.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		25
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js",
		26
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js",
		27
	],
	"./ion-input-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js",
		"common",
		28
	],
	"./ion-input-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js",
		"common",
		29
	],
	"./ion-item-option_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-ios.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js",
		"common",
		31
	],
	"./ion-item_8-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-item_8-ios.entry.js",
		"common",
		32
	],
	"./ion-item_8-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-item_8-md.entry.js",
		"common",
		33
	],
	"./ion-loading-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-loading-ios.entry.js",
		"common",
		34
	],
	"./ion-loading-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-loading-md.entry.js",
		"common",
		35
	],
	"./ion-menu_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-menu_3-ios.entry.js",
		"common",
		36
	],
	"./ion-menu_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-menu_3-md.entry.js",
		"common",
		37
	],
	"./ion-modal-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js",
		"common",
		38
	],
	"./ion-modal-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js",
		"common",
		39
	],
	"./ion-nav_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-nav_2.entry.js",
		"common",
		40
	],
	"./ion-popover-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js",
		"common",
		41
	],
	"./ion-popover-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js",
		"common",
		42
	],
	"./ion-progress-bar-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-ios.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-md.entry.js",
		"common",
		44
	],
	"./ion-radio_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js",
		"common",
		45
	],
	"./ion-radio_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-radio_2-md.entry.js",
		"common",
		46
	],
	"./ion-range-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js",
		"common",
		47
	],
	"./ion-range-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js",
		"common",
		48
	],
	"./ion-refresher_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js",
		"common",
		50
	],
	"./ion-reorder_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js",
		"common",
		52
	],
	"./ion-ripple-effect.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		53
	],
	"./ion-route_4.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		54
	],
	"./ion-searchbar-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js",
		"common",
		55
	],
	"./ion-searchbar-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js",
		"common",
		56
	],
	"./ion-segment_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js",
		"common",
		57
	],
	"./ion-segment_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js",
		"common",
		58
	],
	"./ion-select_3-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js",
		"common",
		59
	],
	"./ion-select_3-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js",
		"common",
		60
	],
	"./ion-slide_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js",
		61
	],
	"./ion-slide_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js",
		62
	],
	"./ion-spinner.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		63
	],
	"./ion-split-pane-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-split-pane-ios.entry.js",
		64
	],
	"./ion-split-pane-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js",
		65
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js",
		"common",
		66
	],
	"./ion-tab-bar_2-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js",
		"common",
		67
	],
	"./ion-tab_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		"common",
		68
	],
	"./ion-text.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		69
	],
	"./ion-textarea-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js",
		"common",
		70
	],
	"./ion-textarea-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js",
		"common",
		71
	],
	"./ion-toast-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-toast-ios.entry.js",
		"common",
		72
	],
	"./ion-toast-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js",
		"common",
		73
	],
	"./ion-toggle-ios.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js",
		"common",
		74
	],
	"./ion-toggle-md.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-toggle-md.entry.js",
		"common",
		75
	],
	"./ion-virtual-scroll.entry.js": [
		"../../node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
		76
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"formControl && formError && formControl.hasError(formError.type) && formControl.touched\">\n  <ng-container *ngIf=\"errorCount(formControl.errors, formError.type)\">\n    {{ formError.message }}\n  </ng-container>\n  <!--   <ng-container [ngSwitch]=\"formError.type\">\n    <ng-container *ngSwitchCase=\"'required'\">{{ formError.message }}</ng-container>\n    <ng-container *ngSwitchCase=\"'length'\">\n\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password'\">\n      {{ formError.message }}\n   </ng-container>\n\n\n  </ng-container> -->\n  <!--\n   11111.{{ formError.type }}\n  2222.{{ formControl?.errors | json }} -->\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*********************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!./src/app/app.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lvbmljL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(themeService, configService, languageService) {
        this.themeService = themeService;
        this.configService = configService;
        this.languageService = languageService;
        this.title = 'ionic';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.configService.loadConfig();
        this.languageService.init();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'frontend-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @frontend/common/auth/state */ "../../libs/common/auth/state/src/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _frontend_common_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @frontend/common/core */ "../../libs/common/core/src/index.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");














var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'tabs',
        loadChildren: function () { return __webpack_require__.e(/*! import() | frontend-ionic-app */ "frontend-ionic-app").then(__webpack_require__.bind(null, /*! @frontend/ionic/app */ "../../libs/ionic/app/src/index.ts")).then(function (m) { return m.IonicAppModule; }); },
    },
    {
        path: 'login',
        loadChildren: function () { return __webpack_require__.e(/*! import() | frontend-ionic-login */ "frontend-ionic-login").then(__webpack_require__.bind(null, /*! @frontend/ionic/login */ "../../libs/ionic/login/src/index.ts")).then(function (m) { return m.IonicLoginModule; }); },
    }
];
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _frontend_common_core__WEBPACK_IMPORTED_MODULE_11__["CommonCoreModule"],
                _frontend_common_shared__WEBPACK_IMPORTED_MODULE_8__["CommonSharedModule"],
                _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_9__["CommonAuthStateModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                    }
                }),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
                    mode: 'ios',
                    swipeBackEnabled: false,
                    scrollPadding: false,
                    scrollAssist: false
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                    useHash: true
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/app/apps/ionic/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map