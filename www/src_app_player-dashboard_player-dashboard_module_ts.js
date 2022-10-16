"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_player-dashboard_player-dashboard_module_ts"],{

/***/ 2952:
/*!*********************************************************************!*\
  !*** ./src/app/player-dashboard/player-dashboard-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerDashboardPageRoutingModule": () => (/* binding */ PlayerDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _player_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-dashboard.page */ 9978);




const routes = [
    {
        path: '',
        component: _player_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PlayerDashboardPage
    }
];
let PlayerDashboardPageRoutingModule = class PlayerDashboardPageRoutingModule {
};
PlayerDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayerDashboardPageRoutingModule);



/***/ }),

/***/ 9104:
/*!*************************************************************!*\
  !*** ./src/app/player-dashboard/player-dashboard.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerDashboardPageModule": () => (/* binding */ PlayerDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _player_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-dashboard-routing.module */ 2952);
/* harmony import */ var _player_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-dashboard.page */ 9978);







let PlayerDashboardPageModule = class PlayerDashboardPageModule {
};
PlayerDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _player_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayerDashboardPageRoutingModule
        ],
        declarations: [_player_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PlayerDashboardPage]
    })
], PlayerDashboardPageModule);



/***/ }),

/***/ 9978:
/*!***********************************************************!*\
  !*** ./src/app/player-dashboard/player-dashboard.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerDashboardPage": () => (/* binding */ PlayerDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _player_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-dashboard.page.html?ngResource */ 2534);
/* harmony import */ var _player_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-dashboard.page.scss?ngResource */ 1682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PlayerDashboardPage = class PlayerDashboardPage {
    constructor() {
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    ;
};
PlayerDashboardPage.ctorParameters = () => [];
PlayerDashboardPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal,] }]
};
PlayerDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-player-dashboard',
        template: _player_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_player_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlayerDashboardPage);



/***/ }),

/***/ 1682:
/*!************************************************************************!*\
  !*** ./src/app/player-dashboard/player-dashboard.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.middle-ttl h2 span {\n  color: #FF3528;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n  width: 100%;\n  float: left;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n  float: left;\n}\n\n.title-rw h2 span {\n  color: #FF0000;\n}\n\n.title-rw a {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: right;\n  color: #FF0000;\n  text-decoration: none;\n  float: right;\n  padding-right: 10px;\n  margin-top: 18px;\n}\n\n.dashboard-header {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.dashboard-header-top {\n  margin: 0 20px 15px;\n  border-bottom: 2px solid #ebf2f7;\n  padding: 0;\n}\n\n.dashboard-header-top-left h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0A408A;\n  margin-bottom: 0px !important;\n}\n\n.dashboard-header-top-right {\n  text-align: right;\n}\n\n.dashboard-header-top-right img {\n  vertical-align: middle;\n}\n\n.dashboard-header-btm-col {\n  text-align: center;\n}\n\n.dashboard-header-btm-col img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.dashboard-header-btm-col h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  color: #4D4D4D;\n  margin-top: 0;\n}\n\n.events-img-section {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.img-row {\n  width: 100%;\n  padding: 15px;\n}\n\n.img-row img {\n  width: 100%;\n  position: relative;\n}\n\n.img-caption {\n  position: absolute;\n  bottom: 25px;\n  left: 25px;\n  background: url(/assets/images/ribbon.png) no-repeat !important;\n  height: 35px;\n  width: 95%;\n}\n\n.img-caption h5 {\n  color: #fff;\n  font-size: 15px;\n  color: #fff;\n  font-size: 15px;\n  margin: 8px;\n  font-family: \"Poppins\";\n}\n\n.bttns-row {\n  width: 100%;\n  float: left;\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.bttns-row-middle {\n  text-align: center;\n  color: #FF3528;\n}\n\n.bttns-row-middle h3 {\n  margin: 5px auto 0 auto;\n  vertical-align: middle;\n  line-height: 48px;\n  height: 37px;\n  width: 2px;\n  background: #FF3528;\n}\n\n.custom-button span {\n  text-transform: capitalize;\n  margin-left: 8px;\n  border-left: 1px solid #fff;\n  padding-left: 10px;\n}\n\nion-col.bttns-row-left {\n  padding: 0;\n}\n\nion-col.bttns-row-right {\n  padding: 0;\n}\n\n.right-to-play-bdy {\n  width: 100%;\n  float: left;\n  margin-top: -10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 22px;\n}\n\n.right-to-play-left {\n  text-align: left;\n}\n\n.right-to-play-left img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.right-to-play-mdl {\n  text-align: left;\n}\n\n.right-to-play-mdl h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n}\n\n.right-to-play-mdl h3 span {\n  color: #FF3528;\n}\n\n.right-to-play-right {\n  text-align: right;\n  padding-top: 22px;\n}\n\n.right-to-play-right ion-icon {\n  color: #0A408A;\n}\n\n.single-event-apply-modal {\n  margin-top: 85%;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.single-event-apply-modal .custom-button {\n  margin-bottom: 20px;\n}\n\n.close-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 9999999;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxjQUFBO0FBRUE7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNFLHNCQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5DO0VBQ0EsY0FBQTtBQVNEOztBQVBBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJDO0VBQ0csV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQVlKOztBQVZBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQkFBQTtBQWNKOztBQVpBO0VBQ0ksc0JBQUE7QUFlSjs7QUFaQTtFQUNJLGtCQUFBO0FBZUo7O0FBYkE7RUFDSSxtQkFBQTtFQUNKLDJDQUFBO0VBQ0EsYUFBQTtFQUNJLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWlCQTs7QUFmQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQW1CSjs7QUFoQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtEQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBd0JKOztBQXRCQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksVUFBQTtBQTJCSjs7QUF6QkE7RUFDSSxVQUFBO0FBNEJKOztBQTFCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTZCSjs7QUExQkE7RUFDSSxnQkFBQTtBQTZCSjs7QUEzQkE7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBOEJKOztBQTVCQTtFQUNJLGdCQUFBO0FBK0JKOztBQTdCQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFnQ0E7O0FBOUJBO0VBQ0ksY0FBQTtBQWlDSjs7QUEvQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBa0NKOztBQWhDQTtFQUNJLGNBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxtQkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFzQ0o7O0FBcENBO0VBQ0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQXVDQTtFQXBDRjtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBc0NBO0VBbkNGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFxQ0E7RUFuQ0Y7SUFDSSxnQkFBQTtFQXFDRjtFQW5DRjtJQUNJLHdCQUFBO0VBcUNGO0VBbkNGO0lBQ0ksc0JBQUE7RUFxQ0Y7QUFDRiIsImZpbGUiOiJwbGF5ZXItZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubWlkZGxlLXR0bCBoMiBzcGFue1xuY29sb3I6ICNGRjM1Mjg7XG4gICAgfVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAudGl0bGUtcncgaDIgc3BhbntcbiBjb2xvcjojRkYwMDAwO1xuIH0gICBcbi50aXRsZS1ydyBhe1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuIC5kYXNoYm9hcmQtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZGFzaGJvYXJkLWhlYWRlci10b3Age1xuICAgIG1hcmdpbjogMCAyMHB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmYyZjc7XG4gICAgcGFkZGluZzogMDtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLXRvcC1sZWZ0IGgze1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59ICBcbi5kYXNoYm9hcmQtaGVhZGVyLXRvcC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLmRhc2hib2FyZC1oZWFkZXItdG9wLXJpZ2h0IGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSBcbi5kYXNoYm9hcmQtaGVhZGVyLWJ0bXt9XG4uZGFzaGJvYXJkLWhlYWRlci1idG0tY29se1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmRhc2hib2FyZC1oZWFkZXItYnRtLWNvbCBpbWd7XG4gICAgYmFja2dyb3VuZDogI0VCRjJGNztcbmJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5wYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLWJ0bS1jb2wgaDN7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDEycHg7XG5saW5lLWhlaWdodDogMjBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiAjNEQ0RDREO1xubWFyZ2luLXRvcDogMDtcbn1cbi5ldmVudHMtaW1nLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaW1nLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBcbn1cbi5pbWctcm93IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uaW1nLWNhcHRpb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9yaWJib24ucG5nKSBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cbi5pbWctY2FwdGlvbiBoNXtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG4uYnR0bnMtcm93e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OmxlZnQ7XG59XG4uY3VzdG9tLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMEE0MDhBICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idHRucy1yb3ctbWlkZGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRjM1Mjg7XG59XG4uYnR0bnMtcm93LW1pZGRsZSBoMyB7XG4gICAgbWFyZ2luOiA1cHggYXV0byAwIGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkYzNTI4O1xufVxuLmN1c3RvbS1idXR0b24gc3BhbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuaW9uLWNvbC5idHRucy1yb3ctbGVmdCB7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1jb2wuYnR0bnMtcm93LXJpZ2h0IHtcbiAgICBwYWRkaW5nOiAwO1xufVxuLnJpZ2h0LXRvLXBsYXktYmR5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4ucmlnaHQtdG8tcGxheS1sZWZ0e1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cbi5yaWdodC10by1wbGF5LWxlZnQgaW1ne1xuICAgIGJhY2tncm91bmQ6ICNFQkYyRjc7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5yaWdodC10by1wbGF5LW1kbHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG59XG4ucmlnaHQtdG8tcGxheS1tZGwgaDN7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjBweDtcbmNvbG9yOiAjMDAwMDAwO1xufVxuLnJpZ2h0LXRvLXBsYXktbWRsIGgzIHNwYW57XG4gICAgY29sb3I6I0ZGMzUyODtcbn1cbi5yaWdodC10by1wbGF5LXJpZ2h0e1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDIycHg7XG59XG4ucmlnaHQtdG8tcGxheS1yaWdodCBpb24taWNvbntcbiAgICBjb2xvcjogIzBBNDA4QTtcbn1cbi5zaW5nbGUtZXZlbnQtYXBwbHktbW9kYWx7XG4gICAgbWFyZ2luLXRvcDogODUlO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigwIDAgMCAvIDI1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zaW5nbGUtZXZlbnQtYXBwbHktbW9kYWwgLmN1c3RvbS1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbn1cbi5jbG9zZS1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xuLmZvcm0tY3RybDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwZXJlbnQ7XG59XG4uZm9ybS1jdHJsIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxufSJdfQ== */";

/***/ }),

/***/ 2534:
/*!************************************************************************!*\
  !*** ./src/app/player-dashboard/player-dashboard.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n     <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"menu\"></ion-icon>   \n              </ion-col>\n              <ion-col size=\"6\" class=\"middle-ttl\">\n                <h2>Hello <span>Player Name! </span></h2>\n              </ion-col>\n              <ion-col size=\"4\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\" routerLink=\"/profile\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n</ion-header>\n<ion-content>\n    \n    <div class=\"dashboard-header\">\n        <ion-grid class=\"dashboard-header-top\">\n          <ion-row>\n              <ion-col size=\"9\" class=\"dashboard-header-top-left\">\n                    <h3>Welcome to your Dashboard!</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-top-right\">\n                <img src=\"/assets/images/sports-1.png\">\n              </ion-col>\n          </ion-row>\n     </ion-grid> \n      <ion-grid class=\"dashboard-header-btm\">\n          <ion-row>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/jersey-view\" src=\"/assets/images/soccer-jersey1.png\">\n                    <h3 routerLink=\"/jersey-view\">Jersey / Kit</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/roster\" src=\"/assets/images/checklist-1.png\">\n                    <h3 routerLink=\"/roster\">Roster</h3>   \n              </ion-col>\n              <ion-col id=\"open-modal\" expand=\"block\" size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/attendance\" src=\"/assets/images/checked1.png\">\n                    <h3 routerLink=\"/attendance\">Attendance</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/payment\" src=\"/assets/images/debit-card.png\">\n                    <h3 routerLink=\"/payment\">Payments</h3>   \n              </ion-col>\n          </ion-row>\n     </ion-grid>  \n    </div>\n    <div class=\"title-rw\">\n      <h2>Events</h2>\n      <a routerLink=\"/events\">View All</a>\n    </div>\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n     \n    </div>\n    </div>\n\n\n    <div class=\"right-to-play-bdy\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"3\" class=\"right-to-play-left\">\n                      <img src=\"/assets/images/bnyn.png\"> \n              </ion-col>\n              <ion-col size=\"6\" class=\"right-to-play-mdl\">\n                      <h3>Star <span> Players</span></h3>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-to-play-right\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <div class=\"right-to-play-bdy\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"3\" class=\"right-to-play-left\">\n                      <img src=\"/assets/images/events.png\"> \n              </ion-col>\n              <ion-col size=\"6\" class=\"right-to-play-mdl\">\n                      <h3>Star <span> Players</span></h3>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-to-play-right\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-modal class=\"single-event-apply-modal\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n          <img class=\"close-img\" (click)=\"cancel()\" src=\"/assets/images/cancel.png\">\n         \n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <div class=\"event-pop-form\">\n          <div class=\"registration-field-section\">\n    <ion-list>\n  <ion-datetime locale=\"es-ES\">\n  <span slot=\"time-label\">Tiempo</span>\n</ion-datetime>\n \n</ion-list>\n\n</div>\n  \n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\" routerLink=\"/pre-login-dashboard\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_player-dashboard_player-dashboard_module_ts.js.map