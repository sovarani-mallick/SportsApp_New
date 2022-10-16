"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_events_module_ts"],{

/***/ 9187:
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageRoutingModule": () => (/* binding */ EventsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page */ 2215);




const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventsPageRoutingModule);



/***/ }),

/***/ 2734:
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageModule": () => (/* binding */ EventsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-routing.module */ 9187);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page */ 2215);







let EventsPageModule = class EventsPageModule {
};
EventsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _events_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPageRoutingModule
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_1__.EventsPage]
    })
], EventsPageModule);



/***/ }),

/***/ 2215:
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPage": () => (/* binding */ EventsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page.html?ngResource */ 8845);
/* harmony import */ var _events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page.scss?ngResource */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let EventsPage = class EventsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
EventsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
EventsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-events',
        template: _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventsPage);



/***/ }),

/***/ 3218:
/*!****************************************************!*\
  !*** ./src/app/events/events.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.events-img-section {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.img-row {\n  width: 100%;\n  padding: 15px;\n}\n\n.img-row img {\n  width: 100%;\n  position: relative;\n}\n\n.img-caption {\n  position: absolute;\n  bottom: 120px;\n  left: 25px;\n  background: url(/assets/images/ribbon.png) no-repeat !important;\n  height: 35px;\n  width: 95%;\n}\n\n.img-caption h5 {\n  color: #fff;\n  font-size: 15px;\n  color: #fff;\n  font-size: 15px;\n  margin: 8px;\n  font-family: \"Poppins\";\n}\n\n.events-img-section h4 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #0A408A;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.row-event1 {\n  width: 100%;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n\n.row-event1 img {\n  vertical-align: middle;\n  width: auto;\n}\n\n.row-event1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  color: #0A408A;\n  display: inline-block;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBUUo7O0FBTEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSwrREFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBVUo7O0FBUkE7RUFDSyxzQkFBQTtFQUNELGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQWFKOztBQVhBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFjQSIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gIFxuLmV2ZW50cy1pbWctc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5pbWctcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIFxufVxuLmltZy1yb3cgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5pbWctY2FwdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMjBweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9yaWJib24ucG5nKSBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDk1JTtcbn1cbi5pbWctY2FwdGlvbiBoNXtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG59XG4uZXZlbnRzLWltZy1zZWN0aW9uIGg0e1xuICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5yb3ctZXZlbnQxe1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucm93LWV2ZW50MSBpbWd7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIHdpZHRoOmF1dG87XG59XG4ucm93LWV2ZW50MSBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxMnB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5jb2xvcjogIzBBNDA4QTtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xubWFyZ2luLWxlZnQ6MTBweDtcbn0iXX0= */";

/***/ }),

/***/ 8845:
/*!****************************************************!*\
  !*** ./src/app/events/events.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n    <div class=\"title-rw\">\n      <h2>Events</h2>\n    </div>\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n      <h4>Event Title Goes Here</h4>\n      <div class=\"row-event1\">\n          <img src=\"/assets/images/calendar.png\">\n          <span>10th September, 2022 | 10:00 AM</span>\n      </div>\n    \n    <div class=\"row-event1\">\n          <img src=\"/assets/images/map-location.png\">\n          <span>Patia, Bhaubaneswar</span>\n      </div>\n    </div>\n    </div>\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n      <h4>Event Title Goes Here</h4>\n      <div class=\"row-event1\">\n          <img src=\"/assets/images/calendar.png\">\n          <span>10th September, 2022 | 10:00 AM</span>\n      </div>\n    \n    <div class=\"row-event1\">\n          <img src=\"/assets/images/map-location.png\">\n          <span>Patia, Bhaubaneswar</span>\n      </div>\n    </div>\n    </div>\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_events_events_module_ts.js.map