function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-ionic-home"], {
  /***/
  "../../libs/ionic/home/src/index.ts":
  /*!*********************************************!*\
    !*** /opt/app/libs/ionic/home/src/index.ts ***!
    \*********************************************/

  /*! exports provided: IonicHomeModule */

  /***/
  function libsIonicHomeSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_ionic_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/ionic-home.module */
    "../../libs/ionic/home/src/lib/ionic-home.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IonicHomeModule", function () {
      return _lib_ionic_home_module__WEBPACK_IMPORTED_MODULE_0__["IonicHomeModule"];
    });
    /***/

  },

  /***/
  "../../libs/ionic/home/src/lib/home/home.component.scss":
  /*!*****************************************************************!*\
    !*** /opt/app/libs/ionic/home/src/lib/home/home.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function libsIonicHomeSrcLibHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fk {\n  height: 800px;\n  width: 100%;\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvaW9uaWMvaG9tZS9zcmMvbGliL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsImxpYnMvaW9uaWMvaG9tZS9zcmMvbGliL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJsaWJzL2lvbmljL2hvbWUvc3JjL2xpYi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmsge1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiIsIi5mayB7XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "../../libs/ionic/home/src/lib/home/home.component.ts":
  /*!***************************************************************!*\
    !*** /opt/app/libs/ionic/home/src/lib/home/home.component.ts ***!
    \***************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function libsIonicHomeSrcLibHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../popover/popover.component */
    "../../libs/ionic/home/src/lib/popover/popover.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(popoverController) {
        _classCallCheck(this, HomeComponent);

        this.popoverController = popoverController;
        this.list$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]); // this.presentPopover();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this. createData();
        }
      }, {
        key: "createData",
        value: function createData() {
          var data = new Array(100000).fill({}).map(function (o, index) {
            return o = {
              index: index + 1,
              name: 'scott'
            };
          });
          console.log(data);
          this.list$.next(data);
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this = this;

          // Using settimeout to simulate api call
          setTimeout(function () {
            // load more data
            _this.createData(); //Hide Infinite List Loader on Complete


            event.target.complete(); // App logic to determine if all data is loaded
            // and disable the infinite scroll

            if (_this.list$.getValue.length == 1000) {
              event.target.disabled = true;
            }
          }, 500);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                      cssClass: 'my-custom-class',
                      translucent: true
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'ionic-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ionic/home/src/lib/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "../../libs/ionic/home/src/lib/home/home.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], HomeComponent);
    /***/
  },

  /***/
  "../../libs/ionic/home/src/lib/ionic-home.module.ts":
  /*!*************************************************************!*\
    !*** /opt/app/libs/ionic/home/src/lib/ionic-home.module.ts ***!
    \*************************************************************/

  /*! exports provided: IonicHomeModule */

  /***/
  function libsIonicHomeSrcLibIonicHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicHomeModule", function () {
      return IonicHomeModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "../../libs/ionic/home/src/lib/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var IonicHomeModule = function IonicHomeModule() {
      _classCallCheck(this, IonicHomeModule);
    };

    IonicHomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })], IonicHomeModule);
    /***/
  },

  /***/
  "../../libs/ionic/home/src/lib/popover/popover.component.scss":
  /*!***********************************************************************!*\
    !*** /opt/app/libs/ionic/home/src/lib/popover/popover.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function libsIonicHomeSrcLibPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .popover_setting .popover-content {\n  --min-width: 600px !important;\n  --min-height: 150px !important;\n  --ion-background-color: red;\n  --ion-text-color: #ffffff;\n  background-color: red;\n}\n */\n:host {\n  background: transparent;\n}\nion-content {\n  --background: transparent;\n}\n.xxxx {\n  position: relative;\n  height: 50px;\n}\n.xxxx .circle {\n  position: absolute;\n  /* left: 3px;\n  top: 1px; */\n  width: 50px;\n  height: 50px;\n  box-sizing: initial;\n  overflow: hidden;\n}\n.xxxx .circle::before {\n  content: \"\";\n  display: block;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  border-radius: 50%;\n  border: 40px solid #40b0ca;\n  top: -40px;\n  left: -40px;\n  margin: 2px 0 0 5px;\n}\n.xxxx .circle::after {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  border-radius: 50%;\n  border: 5px solid #a2a2a282;\n  margin: 2px 0 0 5px;\n}\n.xxxx .content {\n  position: relative;\n  top: 50px;\n}\n.xxxx .content .action {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  top: 150px;\n}\n.xxxx .content .action button {\n  background: red;\n  width: 100px;\n  height: 100px;\n  margin: 0 5px;\n}\n.xxxx::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 49px;\n  top: 0px;\n  width: calc(100% - 50px);\n  height: 50px;\n  background: #40b0ca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL2xpYnMvaW9uaWMvaG9tZS9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsImxpYnMvaW9uaWMvaG9tZS9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQUFBO0FBU0M7RUFDRSx1QkFBQTtBQ0FIO0FER0M7RUFDQyx5QkFBQTtBQ0FGO0FES0E7RUFDQyxrQkFBQTtFQUVBLFlBQUE7QUNIRDtBREtDO0VBQ0Msa0JBQUE7RUFDQTthQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURPRTtFQUNHLFdBQUE7RUFFQSxjQUFBO0VBQ0EsV0F0Qkc7RUF1QkgsWUF2Qkc7RUF3Qkgsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ05MO0FEU0c7RUFDQyxXQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlDO0VBQ0Usa0JBQUE7RUFFQSxTQUFBO0FDWEg7QURhRztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDWEo7QURhSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNYTjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDZkoiLCJmaWxlIjoibGlicy9pb25pYy9ob21lL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnBvcG92ZXJfc2V0dGluZyAucG9wb3Zlci1jb250ZW50IHtcclxuICAtLW1pbi13aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAtLW1pbi1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiAqL1xyXG5cclxuIDpob3N0IHtcclxuICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuJHdpZHRoOiA0MHB4O1xyXG5cclxuLnh4eHgge1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIGxlZnQ6IDNweDtcclxuICB0b3A6IDFweDsgKi9cclxuXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJveC1zaXppbmc6IGluaXRpYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgIGhlaWdodDogJHdpZHRoO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgYm9yZGVyOiAkd2lkdGggc29saWQgIzQwYjBjYTtcclxuICAgICB0b3A6IC0kd2lkdGg7XHJcbiAgICAgbGVmdDogLSR3aWR0aDtcclxuICAgICBtYXJnaW46IDJweCAwIDAgNXB4O1xyXG4gICB9XHJcblxyXG4gICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYTJhMmEyODI7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgNXB4O1xyXG4gIH1cclxuIH1cclxuXHJcbiAuY29udGVudCB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgIHRvcDogNTBweDtcclxuXHJcbiAgIC5hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTUwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcbiB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ5cHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MGIwY2E7XHJcbiAgfVxyXG59XHJcbiIsIi8qIC5wb3BvdmVyX3NldHRpbmcgLnBvcG92ZXItY29udGVudCB7XG4gIC0tbWluLXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuICovXG46aG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi54eHh4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ueHh4eCAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBsZWZ0OiAzcHg7XG4gIHRvcDogMXB4OyAqL1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2l6aW5nOiBpbml0aWFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnh4eHggLmNpcmNsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDQwcHggc29saWQgIzQwYjBjYTtcbiAgdG9wOiAtNDBweDtcbiAgbGVmdDogLTQwcHg7XG4gIG1hcmdpbjogMnB4IDAgMCA1cHg7XG59XG4ueHh4eCAuY2lyY2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA1cHggc29saWQgI2EyYTJhMjgyO1xuICBtYXJnaW46IDJweCAwIDAgNXB4O1xufVxuLnh4eHggLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTBweDtcbn1cbi54eHh4IC5jb250ZW50IC5hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1MHB4O1xufVxuLnh4eHggLmNvbnRlbnQgLmFjdGlvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi54eHh4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ5cHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzQwYjBjYTtcbn0iXX0= */";
    /***/
  },

  /***/
  "../../libs/ionic/home/src/lib/popover/popover.component.ts":
  /*!*********************************************************************!*\
    !*** /opt/app/libs/ionic/home/src/lib/popover/popover.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function libsIonicHomeSrcLibPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(popoverController) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "xxx",
        value: function xxx() {
          this.popoverController.dismiss();
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line: component-selector
      selector: 'my-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!../popover/popover.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../libs/ionic/home/src/lib/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ../popover/popover.component.scss */
      "../../libs/ionic/home/src/lib/popover/popover.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverComponent);
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ionic/home/src/lib/home/home.component.html":
  /*!**************************************************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/ionic/home/src/lib/home/home.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsIonicHomeSrcLibHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"start\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      Scott Admin 1.0\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n<!--  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ng-container *ngFor=\"let data of (list$ | async)\">\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n      <ion-button margin-top  >Login</ion-button>\n    </ion-card-content>\n  </ion-card>\n </ng-container>\n -->\n\n<!--  <div class=\"fk\"></div> -->\n\n\n<ng-container *ngIf=\"(list$ | async)\">\n  <ion-virtual-scroll [items]=\"(list$ | async)\">\n    <ion-card class=\"welcome-card\" *virtualItem=\"let item\">\n      <ion-card-header>\n        <ion-card-subtitle>Get Started</ion-card-subtitle>\n        <ion-card-title>Welcome to {{ item.index }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n        <ion-button margin-top  >Login</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-virtual-scroll>\n</ng-container>\n\n\n\n <ion-infinite-scroll  threshold=\"400px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../libs/ionic/home/src/lib/popover/popover.component.html":
  /*!********************************************************************************************************************!*\
    !*** /opt/app/node_modules/raw-loader/dist/cjs.js!/opt/app/libs/ionic/home/src/lib/popover/popover.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsLibsIonicHomeSrcLibPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-card class=\"person-modal\">\r\n  <ion-card-content >\r\n\r\n    <div class=\"user-info\">\r\n      111111111111111111111\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n -->\r\n\r\n\r\n<div class=\"xxxx\">\r\n  <div class=\"circle\"></div>\r\n\r\n  <div class=\"content\">\r\n    <div class=\"action\">\r\n      <button (click)=\"xxx()\">xxxxxxxxxxx</button>\r\n      <button (click)=\"xxx()\">xxxxxxxxxxx</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  }
}]);
//# sourceMappingURL=frontend-ionic-home-es5.js.map