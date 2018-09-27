webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVersionPageModule", function() { return SelectVersionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_version__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_json_viewer__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectVersionPageModule = /** @class */ (function () {
    function SelectVersionPageModule() {
    }
    SelectVersionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_version__["a" /* SelectVersionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_json_viewer__["a" /* NgxJsonViewerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_version__["a" /* SelectVersionPage */]),
            ],
        })
    ], SelectVersionPageModule);
    return SelectVersionPageModule;
}());

//# sourceMappingURL=select-version.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectVersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SelectVersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectVersionPage = /** @class */ (function () {
    function SelectVersionPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.icoMoonSelection = navParams.data.ico;
    }
    SelectVersionPage.prototype.ionViewDidLoad = function () { };
    SelectVersionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-version',template:/*ion-inline-start:"/Users/tanzeel.rehman/Development/assets-font-compare-tool/src/pages/select-version/select-version.html"*/'<!--\n  Generated template for the SelectVersionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Version {{navParams.data.version}} ({{icoMoonSelection?.version}})</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Json Data\n    </ion-card-header>\n    <ion-card-content>\n      <ngx-json-viewer [json]="icoMoonSelection" [expanded]="false"></ngx-json-viewer>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-card>\n    <ion-item>\n      <ion-label stacked>Compare another version ?</ion-label>\n      <ion-input placeholder="Enter Assets Fonts Version" [(ngModel)]="version" ></ion-input>\n      <button ion-button item-end (click)="viewCtrl.dismiss(version)">\n        Load \n      </button>\n    </ion-item>\n  </ion-card>\n</ion-footer>'/*ion-inline-end:"/Users/tanzeel.rehman/Development/assets-font-compare-tool/src/pages/select-version/select-version.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SelectVersionPage);
    return SelectVersionPage;
}());

//# sourceMappingURL=select-version.js.map

/***/ })

});
//# sourceMappingURL=0.js.map