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

/***/ "../../libs/web/core/src/index.ts":
/*!*******************************************!*\
  !*** /opt/app/libs/web/core/src/index.ts ***!
  \*******************************************/
/*! exports provided: WebCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-core.module */ "../../libs/web/core/src/lib/web-core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebCoreModule", function() { return _lib_web_core_module__WEBPACK_IMPORTED_MODULE_0__["WebCoreModule"]; });




/***/ }),

/***/ "../../libs/web/core/src/lib/web-core.module.ts":
/*!*********************************************************!*\
  !*** /opt/app/libs/web/core/src/lib/web-core.module.ts ***!
  \*********************************************************/
/*! exports provided: WebCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebCoreModule", function() { return WebCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/core */ "../../libs/common/core/src/index.ts");




var WebCoreModule = /** @class */ (function () {
    function WebCoreModule() {
    }
    WebCoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__["CommonCoreModule"]
            ],
            exports: [
                _frontend_common_core__WEBPACK_IMPORTED_MODULE_3__["CommonCoreModule"]
            ]
        })
    ], WebCoreModule);
    return WebCoreModule;
}());



/***/ }),

/***/ "../../libs/web/setting/src/index.ts":
/*!**********************************************!*\
  !*** /opt/app/libs/web/setting/src/index.ts ***!
  \**********************************************/
/*! exports provided: WebSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_web_setting_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-setting.module */ "../../libs/web/setting/src/lib/web-setting.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebSettingModule", function() { return _lib_web_setting_module__WEBPACK_IMPORTED_MODULE_0__["WebSettingModule"]; });




/***/ }),

/***/ "../../libs/web/setting/src/lib/setting/setting.component.scss":
/*!************************************************************************!*\
  !*** /opt/app/libs/web/setting/src/lib/setting/setting.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.radio-group .radio-button {\n  margin: 5px;\n}\n.group {\n  flex: 1 0 auto;\n  flex-direction: column;\n  position: relative;\n  border-radius: 2px;\n  padding: 28px 16px 8px;\n  margin: 16px 0;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  margin: 32px;\n  padding: 0 47px;\n  min-width: 200px;\n}\n.group h2 {\n  position: absolute;\n  top: -11px;\n  left: 8px;\n  margin: 0;\n  padding: 0 8px;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvd2ViL3NldHRpbmcvc3JjL2xpYi9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MiLCJsaWJzL3dlYi9zZXR0aW5nL3NyYy9saWIvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURHQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoibGlicy93ZWIvc2V0dGluZy9zcmMvbGliL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG5cclxuICAucmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdyb3VwIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMjhweCAxNnB4IDhweDtcclxuICBtYXJnaW46IDE2cHggMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgNDdweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG5cclxuICBoMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMXB4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAvLyBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgLy9jb2xvcjogcmdiYSgwLDAsMCwuNTQpO1xyXG4gIH1cclxufVxyXG4iLCIucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbi5yYWRpby1ncm91cCAucmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5ncm91cCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMjhweCAxNnB4IDhweDtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogMzJweDtcbiAgcGFkZGluZzogMCA0N3B4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLmdyb3VwIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "../../libs/web/setting/src/lib/setting/setting.component.ts":
/*!**********************************************************************!*\
  !*** /opt/app/libs/web/setting/src/lib/setting/setting.component.ts ***!
  \**********************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");




var SettingComponent = /** @class */ (function () {
    function SettingComponent(configService, themeService, languageService) {
        this.configService = configService;
        this.themeService = themeService;
        this.languageService = languageService;
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'web-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "../../node_modules/raw-loader/index.js!../../libs/web/setting/src/lib/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "../../libs/web/setting/src/lib/setting/setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "../../libs/web/setting/src/lib/web-setting.module.ts":
/*!***************************************************************!*\
  !*** /opt/app/libs/web/setting/src/lib/web-setting.module.ts ***!
  \***************************************************************/
/*! exports provided: WebSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSettingModule", function() { return WebSettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/setting.component */ "../../libs/web/setting/src/lib/setting/setting.component.ts");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _frontend_web_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontend/web/core */ "../../libs/web/core/src/index.ts");






var WebSettingModule = /** @class */ (function () {
    function WebSettingModule() {
    }
    WebSettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _frontend_web_core__WEBPACK_IMPORTED_MODULE_5__["WebCoreModule"],
                _frontend_common_shared__WEBPACK_IMPORTED_MODULE_4__["CommonSharedModule"]
            ],
            exports: [_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]],
            declarations: [_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]]
        })
    ], WebSettingModule);
    return WebSettingModule;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/common/shared/src/lib/components/form-error-message/form-error-message.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"formControl && formError && formControl.hasError(formError.type) && formControl.touched\">\n  <ng-container *ngIf=\"errorCount(formControl.errors, formError.type)\">\n    {{ formError.message }}\n  </ng-container>\n  <!--   <ng-container [ngSwitch]=\"formError.type\">\n    <ng-container *ngSwitchCase=\"'required'\">{{ formError.message }}</ng-container>\n    <ng-container *ngSwitchCase=\"'length'\">\n\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password'\">\n      {{ formError.message }}\n   </ng-container>\n\n\n  </ng-container> -->\n  <!--\n   11111.{{ formError.type }}\n  2222.{{ formControl?.errors | json }} -->\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/web/setting/src/lib/setting/setting.component.html":
/*!*********************************************************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!/opt/app/libs/web/setting/src/lib/setting/setting.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ng-container *ngIf=\"configService.config\">\n  <div class=\"group\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n    <h2>{{ 'theme.title' | translate }}</h2>\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"radio-group\" [(ngModel)]=\"themeService._theme\">\n      <mat-radio-button class=\"radio-button\" *ngFor=\"let theme of configService.config.theme.list\"\n        [value]=\"theme\"\n        (change)=\"themeService.setTheme($event.value)\">\n        {{'theme.'+ theme | translate }}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <div class=\"group\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n    <h2 color=\"primary\">{{ 'language.title' | translate }}</h2>\n\n    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"radio-group\" [(ngModel)]=\"languageService._language\">\n      <mat-radio-button class=\"radio-button\" *ngFor=\"let language of configService.config.language.list\"\n        [value]=\"language\"\n        (change)=\"languageService.setLanguage($event.value)\">\n        {{'language.'+ language | translate }}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*********************************************************************!*\
  !*** /opt/app/node_modules/raw-loader!./src/app/app.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"{{ themeService.theme$ | async }}\" fxLayout=\"column\" fxFlexFill>\n\n  <mat-sidenav-container fullscreen  [hasBackdrop]=\"true\" autosize>\n    <mat-sidenav #sideNav mode=\"over\" fixedInViewport=\"true\" fixedTopGap=\"0\" position=\"end\" [autoFocus]=\"false\">\n      <web-setting></web-setting>\n    </mat-sidenav>\n\n    <mat-sidenav-content fxLayout=\"column\">\n      <ng-container *ngIf=\"loading$ | async\">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </ng-container>\n\n      <router-outlet class=\"router-flex\"></router-outlet>\n\n      <div class=\"settings\">\n        <button (click)=\"sideNav.toggle()\">\n          <mat-icon aria-hidden=\"false\">settings</mat-icon>\n        </button>\n      </div>\n    </mat-sidenav-content>\n\n    </mat-sidenav-container>\n</div>\n\n\n"

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

module.exports = ".settings {\n  position: fixed;\n  right: 0;\n  top: 40%;\n}\n.settings button {\n  display: flex;\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2FwcHMvd2ViL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiYXBwcy93ZWIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJhcHBzL3dlYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNDAlO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcbn1cclxuIiwiLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiA0MCU7XG59XG4uc2V0dGluZ3MgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNHB4O1xufSJdfQ== */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(themeService, configService, languageService, router) {
        var _this = this;
        this.themeService = themeService;
        this.configService = configService;
        this.languageService = languageService;
        this.router = router;
        this.title = 'web';
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                console.log('ZZZ');
                _this.loading$.next(true);
            }
            else {
                _this.loading$.next(false);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.themeService.setTheme("theme-3");
        this.configService.loadConfig();
        this.languageService.init();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'frontend-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["ThemeService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _frontend_common_shared__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _frontend_common_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @frontend/common/shared */ "../../libs/common/shared/src/index.ts");
/* harmony import */ var _frontend_web_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @frontend/web/core */ "../../libs/web/core/src/index.ts");
/* harmony import */ var _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @frontend/common/auth/state */ "../../libs/common/auth/state/src/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _frontend_web_setting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @frontend/web/setting */ "../../libs/web/setting/src/index.ts");
/* harmony import */ var _frontend_common_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @frontend/common/material */ "../../libs/common/material/src/index.ts");

















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | frontend-web-app */ "frontend-web-app").then(__webpack_require__.bind(null, /*! @frontend/web/app */ "../../libs/web/app/src/index.ts")).then(function (m) { return m.WebAppModule; }); },
    },
    {
        path: 'login',
        loadChildren: function () { return __webpack_require__.e(/*! import() | frontend-web-login */ "frontend-web-login").then(__webpack_require__.bind(null, /*! @frontend/web/login */ "../../libs/web/login/src/index.ts")).then(function (m) { return m.WebLoginModule; }); },
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _frontend_web_core__WEBPACK_IMPORTED_MODULE_10__["WebCoreModule"],
                _frontend_common_shared__WEBPACK_IMPORTED_MODULE_9__["CommonSharedModule"],
                _frontend_common_auth_state__WEBPACK_IMPORTED_MODULE_11__["CommonAuthStateModule"],
                _frontend_common_material__WEBPACK_IMPORTED_MODULE_16__["CommonMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _frontend_web_setting__WEBPACK_IMPORTED_MODULE_15__["WebSettingModule"],
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/app/apps/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map