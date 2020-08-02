(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexFill>\r\n  <div class=\"app\">\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <span>Tap Defenders</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <button\r\n          mat-icon-button\r\n          class=\"example-icon\"\r\n          aria-label=\"Example icon-button with menu icon\"\r\n        >\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <mat-sidenav-container [hasBackdrop]=\"true\">\r\n      <mat-sidenav-content fxFlexFill>\r\n\r\n        <section class=\"mat-typography title-group\" style=\"padding: 0 15%;\">\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-card> {{ (basicInfo$ | async)?.Token }}</mat-card>\r\n            <button mat-flat-button color=\"accent\" (click)=\"getBasicInfo()\">\r\n              Token\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"playGame\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-card> {{ zz | json }}</mat-card>\r\n            <button mat-flat-button color=\"accent\" (click)=\"playGame()\">\r\n              Play Game\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"heroInfo\" fxLayout=\"row wrap\">\r\n         <!--    <ng-container *ngFor=\"let hero of keyByArray(update.Heroes)\">\r\n              <mat-card flex=\"20\">\r\n                <mat-card-title>{{ hero }}</mat-card-title>\r\n                <mat-card-content>\r\n                  {{ update.Heroes[hero] | json }}\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </ng-container> -->\r\n\r\n            <mat-card>\r\n              <mat-card-title>玩家</mat-card-title>\r\n              <mat-card-content>\r\n            <!--     {{ userInfo$ | async | json }} -->\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div class=\"updateSetting\" style=\"margin: 0 auto;\">\r\n            <ng-container *ngIf=\"timeoutByGameUpdateMessage === 'Updating ...'\">\r\n              <mat-progress-bar style=\"position: absolute;top: 0px; right: 0;border-radius: 45px; z-index: 666\" mode=\"indeterminate\"></mat-progress-bar>\r\n            </ng-container>\r\n            <mat-card >\r\n\r\n              <mat-card-title>更新 <span style=\"font-size: 15px;\r\n                padding: 0 7px;\r\n                /* margin-top: -20px; */\r\n                position: relative;\r\n                top: 2px;\">{{ timeoutByGameUpdateMessage }}</span></mat-card-title>\r\n\r\n              <mat-card-content>\r\n                <div class=\"baseInfo\">\r\n                <form class=\"example-form\">\r\n                  <mat-form-field class=\"example-full-width\" >\r\n                    <input #zzzz type=\"number\" matInput [ngModel]=\"updateOption.updateTime\" [value]=\"updateOption.updateTime\" name=\"updateTime\"  [disabled]=\"updateOption.disable\" >\r\n                  </mat-form-field>\r\n\r\n                  <ng-container *ngIf=\"updateOption.disable\">\r\n                    <button mat-raised-button color=\"primary\" style=\"margin-left: 10px;\" (click)=\"updateOption.disable = !updateOption.disable;\" >時間設定</button>\r\n                  </ng-container>\r\n\r\n                  <ng-container *ngIf=\"!updateOption.disable\">\r\n                    <button mat-raised-button color=\"warn\" style=\"margin-left: 10px;\" (click)=\"updateOption.disable = !updateOption.disable;  updateTime(zzzz.value)\">返回</button>\r\n                  </ng-container>\r\n\r\n                  <ng-container *ngIf=\"!updateOption.status; else elseTmpl\">\r\n                    <button style=\"margin-left: 10px;\" mat-raised-button color=\"accent\" (click)=\"updateOption.status = !updateOption.status; update(updateOption.updateTime)\">開始</button>\r\n                  </ng-container>\r\n\r\n                  <ng-template #elseTmpl>\r\n                    <button style=\"margin-left: 10px;\" mat-raised-button color=\"warn\" (click)=\"updateOption.status = !updateOption.status; stop()\">暫停</button>\r\n                  </ng-template>\r\n\r\n\r\n                  <button style=\"margin-left: 10px; background: #FF5722; color: white;\" mat-raised-button  (click)=\"updateFunc()\">強制更新</button>\r\n\r\n                  <button style=\"margin-left: 10px; background: #FF5722; color: white;\" mat-raised-button  (click)=\"prestige()\">Play</button>\r\n\r\n\r\n                </form>\r\n\r\n                <div></div>\r\n               </div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"gameList\" >\r\n            <ng-container *ngIf=\"(userInfo$| async) as userInfo\">\r\n              <ng-container *ngIf=\"(gameInfo$| async) as gameInfo\">\r\n                <div style=\"min-height: 650px;\">\r\n                  <mat-card>\r\n                    <mat-card-title>玩家資訊</mat-card-title>\r\n                    <mat-card-content>\r\n                  <!--     {{ userInfo$ | async | json }} -->\r\n\r\n                  <form class=\"example-form\" fxLayout=\"column\">\r\n                    {{ gameInfo.ClearStageDisable }}\r\n                    <mat-form-field class=\"example-full-width\" >\r\n                      <mat-label>目前關卡</mat-label>\r\n                      <input #zzzz type=\"number\" matInput [ngModel]=\"gameInfo.ClearStage\" [value]=\"gameInfo.ClearStage\" name=\"ClearStage\"  [disabled]=\"gameInfo.ClearStageDisable\" >\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-full-width\" >\r\n                      <mat-label>轉生次數</mat-label>\r\n                      <input #zzzz type=\"number\" matInput [ngModel]=\"gameService.prestigeCount\" [value]=\"gameService.prestigeCount\" name=\"prestigeCount\"  [disabled]=\"true\" >\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-full-width\" >\r\n                      <mat-label>靈魂石</mat-label>\r\n                      <input #zzzz type=\"number\" matInput   [value]=\"mathFloor(gameInfo.Medal)\" name=\"Medal\"  [disabled]=\"true\" >\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"example-full-width\" >\r\n                      <mat-label>最高轉生關卡</mat-label>\r\n                      <input #zzzz type=\"number\" matInput [(ngModel)]=\"ClearStage\" [value]=\"ClearStage\" name=\"restrictClearStage\" >\r\n                    </mat-form-field>\r\n\r\n\r\n                    </form>\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n\r\n                  <mat-card>\r\n                    <mat-card-title>遊戲資訊</mat-card-title>\r\n                    <mat-card-content>\r\n                  <!--     {{ userInfo$ | async | json }} -->\r\n\r\n                  <form class=\"example-form\">\r\n\r\n                    <mat-list>\r\n                      <mat-list-item>目前關卡</mat-list-item>\r\n                      <mat-divider></mat-divider>\r\n                      <mat-list-item>{{ currentDate | date:'yyyy-MM-dd HH:mm:ss' }}</mat-list-item>\r\n                      <mat-divider></mat-divider>\r\n                      <mat-list-item>{{ toOADate(currentDate)   }}</mat-list-item>\r\n                      <mat-divider></mat-divider>\r\n                      <mat-list-item>{{ fromOADate(44043.5650176968) |date:'yyyy-MM-dd HH:mm:ss' }}</mat-list-item>\r\n                    </mat-list>\r\n\r\n                    </form>\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n                 </div>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n\r\n\r\n\r\n          <div style=\"min-height: 650px;\">\r\n            <table mat-table [dataSource]=\"filterPage(heroList$ | async, paginator)\" class=\"mat-elevation-z8\"  style=\"width: 100%;margin-top:10px;\">\r\n\r\n              <!--- Note that these columns can be defined in any order.\r\n                    The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n              <!-- Position Column -->\r\n              <ng-container matColumnDef=\"Index\" >\r\n                <th mat-header-cell *matHeaderCellDef  style=\"width: 20%\"> No. </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.Index}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Name Column -->\r\n              <ng-container matColumnDef=\"Name\">\r\n                <th mat-header-cell *matHeaderCellDef  style=\"width: 20%\"> 英雄 </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"Level\">\r\n                <th mat-header-cell *matHeaderCellDef  style=\"width: 20%\"> Lv </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <ng-container *ngIf=\"element.Status\">\r\n                    <input type=\"number\" [(ngModel)]=\"element.Level\" style=\"background: transparent; padding: 5px 0px 5px 5px;; width: 75%; color: white\">\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"!element.Status\">\r\n                    <span>{{ element.Level }}</span>\r\n                  </ng-container>\r\n\r\n\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Symbol Column -->\r\n              <ng-container matColumnDef=\"MaxLevel\">\r\n                <th mat-header-cell *matHeaderCellDef  style=\"width: 20%\"> Max-Lv </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.MaxLevel}} </td>\r\n              </ng-container>\r\n\r\n               <!-- Symbol Column -->\r\n              <ng-container matColumnDef=\"Feature\">\r\n                <th mat-header-cell *matHeaderCellDef style=\"width: 15%;\"> 功能 </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <ng-container *ngIf=\"!element.Status\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"element.Status = !element.Status\">變更</button>\r\n                  </ng-container>\r\n\r\n                   <ng-container *ngIf=\"element.Status\">\r\n                    <button mat-raised-button color=\"warn\" (click)=\"element.Status = !element.Status\">返回</button>\r\n                   </ng-container>\r\n\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator #paginator\r\n               [length]=\"(heroList$ | async)?.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 15]\" >\r\n            </mat-paginator>\r\n          </div>\r\n\r\n          </div>\r\n\r\n<!--\r\n          {{ basicInfo$ | async | json }} -->\r\n        </section>\r\n\r\n        <!-- Angular material cards -->\r\n        <div class=\"productCards\">\r\n          <!--   <mat-grid-list cols=\"4\" rowHeight=\"200px\">\r\n            <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\">1\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">2\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">3\r\n            </mat-grid-tile>\r\n            <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">4\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n          <button (click)=\"zzz()\">xxx</button> -->\r\n        </div>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
            ],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.app .mat-sidenav-container {\n  display: flex;\n  flex: 1 1 auto;\n}\n\n.app + * {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n\n.mat-typography mat-card {\n  /*    min-width: 400px;\n     max-width: 1200px; */\n  margin: 10px 0;\n}\n\n.gameList {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n}\n\n.updateSetting {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRE9FO0VBQ0Q7eUJBQUE7RUFFRyxjQUFBO0FDSko7O0FEVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbn1cclxuXHJcbi5hcHAgIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcbiAgLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG59XHJcbiAuYXBwICsgKiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxuLm1hdC10eXBvZ3JhcGh5IHtcclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gLyogICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIG1heC13aWR0aDogMTIwMHB4OyAqL1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5nYW1lTGlzdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi51cGRhdGVTZXR0aW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIiwiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwIC5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmFwcCArICoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC10eXBvZ3JhcGh5IG1hdC1jYXJkIHtcbiAgLyogICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgbWF4LXdpZHRoOiAxMjAwcHg7ICovXG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZ2FtZUxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuXG4udXBkYXRlU2V0dGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
        this.title = 'tap-defenders';
        this.displayedColumns = ['Index', 'Name', 'Level', 'MaxLevel', 'Feature'];
        // tslint:disable-next-line: max-line-length
        this.zz = { DataVersion: 9, Language: 'Zh-Hant', Version: '1.5.8', Country: 'TW', GameStart: 'True', DUID: 'a720d66d-3fb2-4449-85d1-b67bbe1146c4', LastAccessTime: 44043.5329359259 };
        this.updateOption = {
            updateTime: 25,
            disable: true,
            status: false
        };
        this.currentDate = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
        this.ClearStage = 7950;
        this.basicInfo$ = this.gameService.basicInfo$;
        this.gameInfo$ = this.gameService.gameInfo$;
        this.userInfo$ = this.gameService.userInfo$;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGameInfo();
        this.gameService.getUserInfo();
        this.gameService.start$.subscribe(function (result) {
            if (result) {
                _this.update();
                _this.gameService.start$.next(false);
            }
        });
        // this.getBasicInfo();
        this.gameInfo$.subscribe(function (result) {
            if (result) {
                console.log(result.Heroes);
                _this.heroList$ = _this.defaultData(result.Heroes);
            }
        });
        setInterval(function () {
            _this.currentDate = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
        }, 1000);
    };
    AppComponent.prototype.getBasicInfo = function () {
        this.gameService.getBasicInfo();
    };
    AppComponent.prototype.playGame = function () {
        var _this = this;
        this.gameService.playGame();
        setTimeout(function () {
            _this.update();
            console.log('開始');
        }, 5000);
    };
    /*  playGame() {
       const newGameInfo = _.assign(this.gameInfo$.value, { Heroes: this.userInfo$.value.Heroes });
       this.gameInfo$.next(newGameInfo);
     } */
    AppComponent.prototype.updateGame = function (data) {
        var newGameInfo = lodash__WEBPACK_IMPORTED_MODULE_4__["assign"](this.gameInfo$.value, data);
        this.gameInfo$.next(newGameInfo);
    };
    AppComponent.prototype.keyByArray = function (data) {
        return Object.keys(data);
    };
    AppComponent.prototype.defaultData = function (data) {
        var dataList = Object.keys(data).map(function (v, index) {
            return lodash__WEBPACK_IMPORTED_MODULE_4__["assign"](data[v], {
                Index: index + 1,
                Name: v,
                Status: false
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(dataList);
    };
    AppComponent.prototype.update = function () {
        var _this = this;
        var second = 0;
        window.clearInterval(this.timeout);
        this.timeout = setInterval(function () {
            second += 1;
            _this.timeoutByGameUpdateMessage = _this.updateOption.updateTime - second + " s";
            if (_this.updateOption.updateTime === second) {
                _this.updateFunc();
                second = 0;
            }
            console.log(_this.updateOption.updateTime - second);
        }, 1000);
    };
    AppComponent.prototype.updateTime = function (time) {
        // tslint:disable-next-line: radix
        this.updateOption.updateTime = parseInt(time);
        if (this.updateOption.status) {
            this.update();
        }
        else {
            window.clearInterval(this.timeout);
        }
        console.log(time);
    };
    AppComponent.prototype.stop = function () {
        window.clearInterval(this.timeout);
    };
    AppComponent.prototype.updateFunc = function () {
        this.timeoutByGameUpdateMessage = 'Updating ...';
        console.log('------------FK------------');
        var updateGame = {
            DeviceTime: this.toOADate(this.currentDate),
            ClearStage: this.gameInfo$.value.ClearStage + this.updateOption.updateTime * 4
        };
        var req = {
            token: this.basicInfo$.getValue().Token,
            data: this.gameInfo$.value
        };
        console.log(updateGame);
        if (this.gameInfo$.value.ClearStage + this.updateOption.updateTime * 4 > this.ClearStage) {
            this.stop();
            this.prestige();
        }
        else {
            this.updateGame(updateGame);
            this.gameService.update(req);
        }
    };
    AppComponent.prototype.prestige = function () {
        this.gameService.prestige();
    };
    AppComponent.prototype.filterPage = function (list, paginator) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["chunk"](list, paginator.pageSize)[paginator.pageIndex];
    };
    AppComponent.prototype.toOADate = function (date) {
        var timezoneOffset = date.getTimezoneOffset() / (60 * 24);
        var msDateObj = (date.getTime() / 86400000) + (25569 - timezoneOffset);
        return msDateObj;
    };
    AppComponent.prototype.fromOADate = function (oaDate) {
        var date = new Date(((oaDate - 25569) * 86400000));
        var tz = date.getTimezoneOffset();
        return new Date(((oaDate - 25569 + (tz / (60 * 24))) * 86400000));
    };
    AppComponent.prototype.newDate = function () {
        return new Date();
    };
    AppComponent.prototype.mathFloor = function (value) {
        return Math.floor(value / 1000000000000);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: Result, GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.basicInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.gameInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.apiUrl = '/tap-game';
        this.updateUrl = 'assets/update.json';
        this.userUrl = 'assets/user.json';
        this.prestigeUrl = 'assets/prestige.json';
        this.prestigeCount = 0;
        // tslint:disable-next-line: max-line-length
        this.playGameData = 'H4sIAAAAAAAAEz3NsQ6CMBSF4Xe5MyUUbkthM5KoiZuoidstrchASdoyGOO7WxbH8+Uk/wc6inSzPkyLg7bJ4ExuXGm00MLjxY7kImTwPwDPRa6S7JfVRf9O0t/TPNBsL5F83MCvNlF3PXVpUV0WRkrDqqcuGSI2TAnDmZa11pZzlAPClg1xNww2hH6aUxyxqFQuOBeyQCX59wd2H9+sqgAAAA==';
    }
    GameService.prototype.getBasicInfo = function () {
        var _this = this;
        this.http.get(this.apiUrl + "/basicInfo").subscribe(function (result) {
            _this.basicInfo$.next(result.Contents);
        });
    };
    GameService.prototype.getGameInfo = function () {
        var _this = this;
        this.http.get(this.updateUrl).subscribe(function (result) {
            _this.gameInfo$.next(result);
        });
    };
    GameService.prototype.getUserInfo = function () {
        var _this = this;
        this.http.get(this.userUrl).subscribe(function (result) {
            _this.userInfo$.next(result.Contents);
        });
    };
    GameService.prototype.playGame = function () {
        var _this = this;
        var data = {
            config: this.playGameData,
            token: this.basicInfo$.getValue().Token
        };
        this.http.post(this.apiUrl + "/playGame", data).subscribe(function (result) {
            console.log(result.Contents.DeviceSync.ClearStage);
            var updateData = {
                Heroes: result.Contents.Heroes,
                ClearStage: result.Contents.DeviceSync.ClearStage,
                Medal: result.Contents.Medal
            };
            _this.updateGame(updateData);
            _this.start$.next(true);
        });
    };
    GameService.prototype.updateGame = function (data) {
        var newGameInfo = lodash__WEBPACK_IMPORTED_MODULE_4__["assign"](this.gameInfo$.value, data);
        this.gameInfo$.next(newGameInfo);
    };
    GameService.prototype.update = function (data) {
        var _this = this;
        this.http.post(this.apiUrl + "/update", data).subscribe(function (result) {
            console.log(result);
        }, function (err) {
            _this.getBasicInfo();
            setTimeout(function () {
                _this.playGame();
            }, 3000);
        });
    };
    GameService.prototype.prestige = function () {
        var _this = this;
        this.http.get(this.prestigeUrl).subscribe(function (result) {
            var req = {
                token: _this.basicInfo$.getValue().Token,
                data: lodash__WEBPACK_IMPORTED_MODULE_4__["assign"](result, { ClearStage: _this.gameInfo$.value.ClearStage })
            };
            _this.http.post(_this.apiUrl + "/Prestige", req).subscribe(function (prestigeResult) {
                if (prestigeResult) {
                    _this.prestigeCount += 1;
                    _this.playGame();
                }
            });
        });
    };
    GameService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map