"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_inquiry_module_ts"],{

/***/ 1461:
/*!***************************************************!*\
  !*** ./src/app/inquiry/inquiry-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPageRoutingModule": () => (/* binding */ InquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry.page */ 7623);




const routes = [
    {
        path: '',
        component: _inquiry_page__WEBPACK_IMPORTED_MODULE_0__.InquiryPage
    }
];
let InquiryPageRoutingModule = class InquiryPageRoutingModule {
};
InquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InquiryPageRoutingModule);



/***/ }),

/***/ 544:
/*!*******************************************!*\
  !*** ./src/app/inquiry/inquiry.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPageModule": () => (/* binding */ InquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-routing.module */ 1461);
/* harmony import */ var _inquiry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry.page */ 7623);







let InquiryPageModule = class InquiryPageModule {
};
InquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__.InquiryPageRoutingModule
        ],
        declarations: [_inquiry_page__WEBPACK_IMPORTED_MODULE_1__.InquiryPage]
    })
], InquiryPageModule);



/***/ }),

/***/ 7623:
/*!*****************************************!*\
  !*** ./src/app/inquiry/inquiry.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPage": () => (/* binding */ InquiryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry.page.html?ngResource */ 7695);
/* harmony import */ var _inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry.page.scss?ngResource */ 7579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/user.service */ 8779);






let InquiryPage = class InquiryPage {
    constructor(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
    }
    ngOnInit() {
        console.log('Hello');
        this.sportsInfo();
        this.cityInfo();
        this.centerInfo();
        this.sendEnquiryDetails();
    }
    Back() {
        this.navCtrl.back();
    }
    sportsInfo() {
        this.service.selectSports().subscribe(res => {
            console.log(res);
            if (res['StatusCode'] == 200) {
                this.sportsResult = res['Data'];
                console.log('result');
                console.log(this.sportsResult);
            }
        });
    }
    cityInfo() {
        this.service.selectCity().subscribe(res => {
            console.log(res);
            if (res['StatusCode'] == 200) {
                this.cityResult = res['Data'];
            }
        });
    }
    centerInfo() {
        this.service.selectCenter().subscribe(res => {
            console.log(res);
            if (res['StatusCode'] == 200) {
                this.centerResult = res['Data'];
            }
        });
    }
    sendEnquiryDetails() {
        console.log('one');
        var body = {
            spId: this.spIdd,
            usrTypeId: this.usrTypeIdd,
            cityId: this.cityIdd,
            cenId: this.cenIdd,
            name: this.namee,
            phone: this.phonee,
            email: this.emaill,
        };
        console.log('two');
        if (body.spId != "" && body.usrTypeId != "" && body.cityId != "" && body.cenId != "" && body.name != "" && body.phone != "" && body.email) {
            this.service.sendEnquiry(body).subscribe(res => {
                if (res['StatusCode'] == 200) {
                    console.log('three');
                    this.sendEnqDetails = res['message'];
                    console.log('message');
                    console.log(this.sendEnqDetails);
                }
            });
        }
    }
};
InquiryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
InquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-inquiry',
        template: _inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InquiryPage);



/***/ }),

/***/ 7579:
/*!******************************************************!*\
  !*** ./src/app/inquiry/inquiry.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n  margin-top: 30px;\n}\n\n.row-prf {\n  width: 100%;\n  float: left;\n}\n\n.row-prf img {\n  vertical-align: middle;\n}\n\n.row-prf strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n  margin-left: 10px;\n}\n\n.row-prf p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4D4D4D;\n  margin-block-start: 5px !important;\n  margin-block-end: 10px !important;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 95%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n  position: absolute;\n  bottom: 30px;\n  margin: auto !important;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxJO0VBQ0ksbUJBQUE7RUFDSixnQkFBQTtFQUVBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNJLGdCQUFBO0FBU1I7O0FBUEk7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJLO0VBQ0Qsc0JBQUE7QUFXSjs7QUFUSTtFQUNBLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVlBOztBQVZBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFhQTs7QUFYQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FBY0o7O0FBWkE7RUFDRyxnQ0FBQTtFQUNDLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFlSjs7QUFiQTtFQUNBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtDQUFBO0VBZ0JGO0VBZEY7SUFDSSwwQ0FBQTtFQWdCRjtBQUNGIiwiZmlsZSI6ImlucXVpcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1maWVsZC1zZWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG5cbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5yb3N0ZXItcm93e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgfVxuICAgIC5yb3ctcHJmIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsb2F0OmxlZnRcbiAgICB9XG4gICAgIC5yb3ctcHJmIGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAucm93LXByZiBzdHJvbmd7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE2cHg7XG5saW5lLWhlaWdodDogMjRweDtcbmNvbG9yOiAjMEE0MDhBO1xubWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuLnJvdy1wcmYgcHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAxOHB4O1xuY29sb3I6ICM0RDRENEQ7XG5tYXJnaW4tYmxvY2stc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xubWFyZ2luLWJsb2NrLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwZXJlbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2QyZDBlMiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbi5jdXN0b20tYnV0dG9uIHtcbiAgIC0tYmFja2dyb3VuZDogIzBBNDA4QSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG4ubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIH1cbn0gICAiXX0= */";

/***/ }),

/***/ 7695:
/*!******************************************************!*\
  !*** ./src/app/inquiry/inquiry.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n</ion-header>\n<ion-content>\n\n  \n<ion-list class=\"roster-row\">\n\n    <div class=\"registration-field-section\">\n    <ion-list>\n      <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Full Name\" >{{namee}}</ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Contact Number\" >{{phonee}}</ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Email ID\" >{{emaill}}</ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Sports\">\n      <ion-select-option value=\"apples\" *ngFor=\"let sportsResults of sportsResult\" value=\"{{sportsResults.spId}}\" >{{ sportsResults.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Epi-Center\" (ionChange)=\"handleChange($event)\">\n   <ion-select-option *ngFor=\"let cityResults of cityResult\" value=\"{{cityResults.cityId}}\" >{{ cityResults.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Bhubaneswar Centres\">\n      <ion-select-option value=\"apples\" *ngFor=\"let centerResults of centerResult\" value=\"{{centerResults.cenId}}\">{{ centerResults.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n</ion-list>\n<ion-button type=\"submit\" class=\"custom-button\" (click)=sendEnquiryDetails()>Submit</ion-button> \n</div> \n</ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_inquiry_module_ts.js.map