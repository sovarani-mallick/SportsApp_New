"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_roster_roster_module_ts"],{

/***/ 6762:
/*!*************************************************!*\
  !*** ./src/app/roster/roster-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageRoutingModule": () => (/* binding */ RosterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _roster_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster.page */ 5394);




const routes = [
    {
        path: '',
        component: _roster_page__WEBPACK_IMPORTED_MODULE_0__.RosterPage
    }
];
let RosterPageRoutingModule = class RosterPageRoutingModule {
};
RosterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RosterPageRoutingModule);



/***/ }),

/***/ 2250:
/*!*****************************************!*\
  !*** ./src/app/roster/roster.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageModule": () => (/* binding */ RosterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _roster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster-routing.module */ 6762);
/* harmony import */ var _roster_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster.page */ 5394);







let RosterPageModule = class RosterPageModule {
};
RosterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_0__.RosterPageRoutingModule
        ],
        declarations: [_roster_page__WEBPACK_IMPORTED_MODULE_1__.RosterPage]
    })
], RosterPageModule);



/***/ }),

/***/ 5394:
/*!***************************************!*\
  !*** ./src/app/roster/roster.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPage": () => (/* binding */ RosterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _roster_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster.page.html?ngResource */ 2470);
/* harmony import */ var _roster_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster.page.scss?ngResource */ 4161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let RosterPage = class RosterPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
RosterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
RosterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-roster',
        template: _roster_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_roster_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RosterPage);



/***/ }),

/***/ 4161:
/*!****************************************************!*\
  !*** ./src/app/roster/roster.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.row-prf {\n  width: 100%;\n  float: left;\n}\n\n.row-prf img {\n  vertical-align: middle;\n}\n\n.row-prf strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n  margin-left: 10px;\n}\n\n.row-prf p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4D4D4D;\n  margin-block-start: 5px !important;\n  margin-block-end: 10px !important;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEk7RUFDSSxtQkFBQTtFQUNKLGdCQUFBO0VBRUEsY0FBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQSTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVUo7O0FBUks7RUFDRCxzQkFBQTtBQVdKOztBQVRJO0VBQ0Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBWUE7O0FBVkE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtBQWFBOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUFjSjs7QUFaQTtFQUNBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtDQUFBO0VBZUY7RUFiRjtJQUNJLDBDQUFBO0VBZUY7QUFDRiIsImZpbGUiOiJyb3N0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1maWVsZC1zZWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG5cbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xufVxuLnJvc3Rlci1yb3d7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICB9XG4gICAgLnJvdy1wcmYge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZmxvYXQ6bGVmdFxuICAgIH1cbiAgICAgLnJvdy1wcmYgaW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICAgIC5yb3ctcHJmIHN0cm9uZ3tcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTZweDtcbmxpbmUtaGVpZ2h0OiAyNHB4O1xuY29sb3I6ICMwQTQwOEE7XG5tYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4ucm93LXByZiBwe1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDE4cHg7XG5jb2xvcjogIzRENEQ0RDtcbm1hcmdpbi1ibG9jay1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG5tYXJnaW4tYmxvY2stZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG4ubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIH1cbn0gICAiXX0= */";

/***/ }),

/***/ 2470:
/*!****************************************************!*\
  !*** ./src/app/roster/roster.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n<ion-content>\n  <div class=\"title-rw\">\n      <h2>Roster</h2>\n    </div>\n  <div class=\"registration-field-section\">\n    <ion-list>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Sports\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"date\" ></ion-input>\n  </ion-item>\n</ion-list>\n</div>\n<ion-list class=\"roster-row\">\n          \n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n  \n        </ion-list>  \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_roster_roster_module_ts.js.map