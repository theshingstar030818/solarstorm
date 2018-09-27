webpackJsonp([2],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fonts_fonts__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, fontsProvider, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fontsProvider = fontsProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.latestVersionPath = 'latest';
        this.versions = [];
        this.allIconsSet = [];
        this.searchList = [];
        this.init();
    }
    HomePage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.presentLoadingSpinner();
                        return [4 /*yield*/, this.loadAssets(this.latestVersionPath)];
                    case 1:
                        _b.sent();
                        if (!(this.navParams.data.version && this.navParams.data.version != ':version')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadAssets(this.navParams.data.version)];
                    case 2:
                        _a = (_b.sent());
                        return [3 /*break*/, 4];
                    case 3:
                        _a = '';
                        _b.label = 4;
                    case 4:
                        _a;
                        this.dismissLoadingSpinner();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadAssets = function (version, index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fontsProvider.fetchAssetFonts(version).then(function (assets) {
                        var asset = { version: version, ico: assets };
                        (index > 0) ? _this.versions[index] = asset : _this.versions.push(asset);
                        _this.syncAllIconsSet();
                    }).catch(function (error) {
                        _this.presentAlert('Error loading version "' + version + '"', error);
                    })];
            });
        });
    };
    HomePage.prototype.presentIconDetailModal = function (icon) {
        var modal = this.modalCtrl.create('IconDetailPage', icon);
        modal.present();
    };
    HomePage.prototype.presentSelectVersionModal = function (data, index) {
        var _this = this;
        this.presentLoadingSpinner();
        var modal = this.modalCtrl.create('SelectVersionPage', data);
        modal.present().then(function () { _this.dismissLoadingSpinner(); });
        modal.onDidDismiss(function (version) {
            if (version) {
                _this.presentLoadingSpinner();
                _this.loadAssets(version, index).then(function () { return _this.dismissLoadingSpinner(); });
            }
        });
    };
    HomePage.prototype.getItems = function (ev) {
        this.initializeSearchItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.allIconsSet = this.allIconsSet.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.syncAllIconsSet = function () {
        var allIconsSet = new Set();
        var allIcons = [];
        this.versions.forEach(function (version) {
            allIcons = allIcons.concat(Object.keys(version.ico.ligatureMap));
        });
        allIcons.forEach(function (icon) {
            allIconsSet.add(icon);
        });
        this.allIconsSet = Array.from(allIconsSet);
        this.searchList = this.allIconsSet;
    };
    HomePage.prototype.initializeSearchItems = function () {
        this.allIconsSet = this.searchList;
    };
    HomePage.prototype.presentLoadingSpinner = function () {
        this.loadingSpinner = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loadingSpinner.present();
    };
    HomePage.prototype.dismissLoadingSpinner = function () {
        try {
            this.loadingSpinner.dismiss();
        }
        catch (e) { }
    };
    HomePage.prototype.presentAlert = function (title, error) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: "Error : " + error.name + " <br> Message: " + error.message,
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tanzeel.rehman/Development/assets-font-compare-tool/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-item>\n      <ion-title> Compare Tool </ion-title>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let assets of versions; let i = index">\n          <ion-item>\n              Version: {{assets.version}} ({{assets.ico.version}}) - {{assets.ico.icons.length}} Icons\n              \n              <button ion-button icon-only item-end clear round (click)="presentSelectVersionModal(assets, i)">\n                <ion-icon  name="settings"></ion-icon>\n              </button>\n          </ion-item>\n          <ion-row *ngFor="let icon of allIconsSet">\n            <ion-col>\n              <ion-item [color]="(assets.ico.ligatureMap[icon]?.properties.name) ? \'\' : \'danger\'">\n                <ion-icon class="xuico-{{assets.version}}" item-start>{{assets.ico.preferences.fontPref.prefix}}{{assets.ico.ligatureMap[icon]?.properties.name}}</ion-icon>\n                <h3>{{assets.ico.preferences?.fontPref.prefix}}{{assets.ico.ligatureMap[icon]?.properties.name}}</h3>\n                <p>ligature: {{assets.ico.ligatureMap[icon]?.properties.ligatures}}</p>\n                <button *ngIf="assets.ico.ligatureMap[icon]" ion-button icon-only item-end round (click)="presentIconDetailModal({icon: assets.ico.ligatureMap[icon], version: assets.version})">\n                  <ion-icon name="information-circle"></ion-icon>\n                </button>\n              </ion-item>\n            </ion-col>  \n          </ion-row>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/tanzeel.rehman/Development/assets-font-compare-tool/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fonts_fonts__["a" /* FontsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map