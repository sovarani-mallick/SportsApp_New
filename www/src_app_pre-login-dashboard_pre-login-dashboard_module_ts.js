"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pre-login-dashboard_pre-login-dashboard_module_ts"],{

/***/ 7285:
/*!***************************************************************************!*\
  !*** ./src/app/pre-login-dashboard/pre-login-dashboard-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginDashboardPageRoutingModule": () => (/* binding */ PreLoginDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pre_login_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-login-dashboard.page */ 4972);




const routes = [
    {
        path: '',
        component: _pre_login_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PreLoginDashboardPage
    }
];
let PreLoginDashboardPageRoutingModule = class PreLoginDashboardPageRoutingModule {
};
PreLoginDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreLoginDashboardPageRoutingModule);



/***/ }),

/***/ 5541:
/*!*******************************************************************!*\
  !*** ./src/app/pre-login-dashboard/pre-login-dashboard.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginDashboardPageModule": () => (/* binding */ PreLoginDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pre_login_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-login-dashboard-routing.module */ 7285);
/* harmony import */ var _pre_login_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-login-dashboard.page */ 4972);







let PreLoginDashboardPageModule = class PreLoginDashboardPageModule {
};
PreLoginDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pre_login_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreLoginDashboardPageRoutingModule
        ],
        declarations: [_pre_login_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PreLoginDashboardPage]
    })
], PreLoginDashboardPageModule);



/***/ }),

/***/ 4972:
/*!*****************************************************************!*\
  !*** ./src/app/pre-login-dashboard/pre-login-dashboard.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreLoginDashboardPage": () => (/* binding */ PreLoginDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pre_login_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-login-dashboard.page.html?ngResource */ 1160);
/* harmony import */ var _pre_login_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-login-dashboard.page.scss?ngResource */ 9678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/user.service */ 8779);





let PreLoginDashboardPage = class PreLoginDashboardPage {
    constructor(service) {
        this.service = service;
        this.option = {
            slidesPerView: 1.5,
            // centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            autoplay: true,
        };
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
        this.eventInfo();
    }
    eventInfo() {
        this.service.event().subscribe(res => {
            console.log(res);
            if (res['StatusCode'] == 200) {
                this.eventResult = res['Data'];
                console.log(this.eventResult);
            }
        });
    }
};
PreLoginDashboardPage.ctorParameters = () => [
    { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
PreLoginDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pre-login-dashboard',
        template: _pre_login_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pre_login_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreLoginDashboardPage);

function index(index) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 9678:
/*!******************************************************************************!*\
  !*** ./src/app/pre-login-dashboard/pre-login-dashboard.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.middle-ttl h2 span {\n  color: #FF3528;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  width: 100%;\n  float: left;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n  float: left;\n}\n\n.title-rw h2 span {\n  color: #FF0000;\n}\n\n.title-rw a {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: right;\n  color: #FF0000;\n  text-decoration: none;\n  float: right;\n  padding-right: 10px;\n  margin-top: 18px;\n}\n\n.dashboard-header {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.dashboard-header-top {\n  margin: 0 20px 15px;\n  border-bottom: 2px solid #ebf2f7;\n  padding: 0;\n}\n\n.dashboard-header-top-left h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0A408A;\n  margin-bottom: 0px !important;\n}\n\n.dashboard-header-top-right {\n  text-align: right;\n}\n\n.dashboard-header-top-right img {\n  vertical-align: middle;\n}\n\n.dashboard-header-btm-col {\n  text-align: center;\n}\n\n.dashboard-header-btm-col img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.dashboard-header-btm-col h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: center;\n  color: #4D4D4D;\n  margin-top: 0;\n}\n\n.events-img-section {\n  width: 100%;\n  float: left;\n  background: #fff;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.img-row {\n  width: 100%;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n}\n\n.img-row img {\n  width: 100%;\n  position: relative;\n  padding: 6px;\n  background: aliceblue;\n}\n\n.img-caption {\n  position: absolute;\n  bottom: 12px;\n  background: url(/assets/images/ribbon.png) no-repeat !important;\n  height: 35px;\n  width: 95%;\n  background-size: 300px;\n  left: 5px;\n}\n\n.img-caption h5 {\n  color: #fff;\n  font-size: 15px;\n  color: #fff;\n  font-size: 15px;\n  margin: 8px;\n  font-family: \"Poppins\";\n}\n\n.bttns-row {\n  width: 100%;\n  float: left;\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.bttns-row-middle {\n  text-align: center;\n  color: #FF3528;\n}\n\n.bttns-row-middle h3 {\n  margin: 5px auto 0 auto;\n  vertical-align: middle;\n  line-height: 48px;\n  height: 37px;\n  width: 2px;\n  background: #FF3528;\n}\n\n.custom-button span {\n  text-transform: capitalize;\n  margin-left: 8px;\n  border-left: 1px solid #fff;\n  padding-left: 10px;\n}\n\nion-col.bttns-row-left {\n  padding: 0;\n}\n\nion-col.bttns-row-right {\n  padding: 0;\n}\n\n.right-to-play-bdy {\n  width: 100%;\n  float: left;\n  margin-top: -10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.right-to-play-left {\n  text-align: left;\n}\n\n.right-to-play-left img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.right-to-play-mdl {\n  text-align: left;\n}\n\n.right-to-play-mdl h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n}\n\n.right-to-play-mdl h3 span {\n  color: #FF3528;\n}\n\n.right-to-play-right {\n  text-align: right;\n  padding-top: 22px;\n}\n\n.right-to-play-right ion-icon {\n  color: #0A408A;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n  ion-title {\n    font-weight: 600;\n  }\n  ion-card {\n    width: 100%;\n    height: 160px;\n    box-shadow: none;\n    border-radius: 12px;\n  }\n  ion-card img {\n    object-fit: cover;\n    width: 100%;\n    transform: scale(1.1, 1.1) rotate(1deg);\n    transition: 600ms all ease-in-out;\n  }\n  .swiper-slide-active {\n    transform: scale(1.05, 1.05);\n  }\n  .swiper-slide-active ion-card img {\n    transform: scale(1, 1);\n  }\n  .swiper-slide {\n    transition: 400ms all ease-in-out;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZS1sb2dpbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxjQUFBO0FBRUE7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFNSjs7QUFKQTtFQUVJLFdBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQztFQUNBLGNBQUE7QUFRRDs7QUFOQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFXSjs7QUFUQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7QUFhSjs7QUFYQTtFQUNJLHNCQUFBO0FBY0o7O0FBWEE7RUFDSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7RUFDSiwyQ0FBQTtFQUNBLGFBQUE7RUFDSSxrQkFBQTtBQWVKOztBQWJBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWdCQTs7QUFkQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FBZUo7O0FBYkE7RUFDSSxXQUFBO0VBRUEscURBQUE7QUFlSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQWVKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBRUEsK0RBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWVKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFlSjs7QUFiQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWlCSjs7QUFmQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxVQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGdCQUFBO0FBeUJKOztBQXZCQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUEwQkE7O0FBeEJBO0VBQ0ksY0FBQTtBQTJCSjs7QUF6QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGNBQUE7QUE2Qko7O0FBM0JBO0VBQ0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQThCQTtFQTNCRjtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBNkJBO0VBMUJGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUE0QkE7RUExQkY7SUFDSSxnQkFBQTtFQTRCRjtFQTFCRjtJQUNJLHdCQUFBO0VBNEJGO0VBMUJGO0lBQ0ksc0JBQUE7RUE0QkY7RUExQkY7SUFDSSxnQkFBQTtFQTRCRjtFQXpCRjtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQTJCRjtFQXpCRTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHVDQUFBO0lBQ0EsaUNBQUE7RUEyQk47RUF0QkY7SUFDSSw0QkFBQTtFQXdCRjtFQXJCTTtJQUNJLHNCQUFBO0VBdUJWO0VBbEJGO0lBQ0ksaUNBQUE7RUFvQkY7QUFDRiIsImZpbGUiOiJwcmUtbG9naW4tZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubWlkZGxlLXR0bCBoMiBzcGFue1xuY29sb3I6ICNGRjM1Mjg7XG4gICAgfVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAudGl0bGUtcncgaDIgc3BhbntcbiBjb2xvcjojRkYwMDAwO1xuIH0gICBcbi50aXRsZS1ydyBhe1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuIC5kYXNoYm9hcmQtaGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZGFzaGJvYXJkLWhlYWRlci10b3Age1xuICAgIG1hcmdpbjogMCAyMHB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlYmYyZjc7XG4gICAgcGFkZGluZzogMDtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLXRvcC1sZWZ0IGgze1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59ICBcbi5kYXNoYm9hcmQtaGVhZGVyLXRvcC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLmRhc2hib2FyZC1oZWFkZXItdG9wLXJpZ2h0IGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSBcbi8vIC5kYXNoYm9hcmQtaGVhZGVyLWJ0bXt9XG4uZGFzaGJvYXJkLWhlYWRlci1idG0tY29se1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmRhc2hib2FyZC1oZWFkZXItYnRtLWNvbCBpbWd7XG4gICAgYmFja2dyb3VuZDogI0VCRjJGNztcbmJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5wYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLWJ0bS1jb2wgaDN7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMjBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiAjNEQ0RDREO1xubWFyZ2luLXRvcDogMDtcbn1cbi5ldmVudHMtaW1nLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaW1nLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMTVweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgXG59XG4uaW1nLXJvdyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG59XG4uaW1nLWNhcHRpb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTJweDtcbiAgICAvLyBsZWZ0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9yaWJib24ucG5nKSBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xuICAgIGxlZnQ6IDVweDtcblxuICAgXG59XG4uaW1nLWNhcHRpb24gaDV7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmJ0dG5zLXJvd3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLmN1c3RvbS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzBBNDA4QSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnR0bnMtcm93LW1pZGRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkYzNTI4O1xufVxuLmJ0dG5zLXJvdy1taWRkbGUgaDMge1xuICAgIG1hcmdpbjogNXB4IGF1dG8gMCBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZDogI0ZGMzUyODtcbn1cbi5jdXN0b20tYnV0dG9uIHNwYW4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1jb2wuYnR0bnMtcm93LWxlZnQge1xuICAgIHBhZGRpbmc6IDA7XG59XG5pb24tY29sLmJ0dG5zLXJvdy1yaWdodCB7XG4gICAgcGFkZGluZzogMDtcbn1cbi5yaWdodC10by1wbGF5LWJkeXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5yaWdodC10by1wbGF5LWxlZnR7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuLnJpZ2h0LXRvLXBsYXktbGVmdCBpbWd7XG4gICAgYmFja2dyb3VuZDogI0VCRjJGNztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJpZ2h0LXRvLXBsYXktbWRse1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cbi5yaWdodC10by1wbGF5LW1kbCBoM3tcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xuY29sb3I6ICMwMDAwMDA7XG59XG4ucmlnaHQtdG8tcGxheS1tZGwgaDMgc3BhbntcbiAgICBjb2xvcjojRkYzNTI4O1xufVxuLnJpZ2h0LXRvLXBsYXktcmlnaHR7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcbn1cbi5yaWdodC10by1wbGF5LXJpZ2h0IGlvbi1pY29ue1xuICAgIGNvbG9yOiAjMEE0MDhBO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG4uZm9ybS1jdHJsOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6OTk5OTtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BlcmVudDtcbn1cbi5mb3JtLWN0cmwge1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBcbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgxZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xuXG4gICAgfVxufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcbn1cblxufSJdfQ== */";

/***/ }),

/***/ 1160:
/*!******************************************************************************!*\
  !*** ./src/app/pre-login-dashboard/pre-login-dashboard.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n     <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"menu\"></ion-icon>   \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Hello <span>there!</span></h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\" >\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\" routerLink=\"/profile\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n</ion-header>\n<ion-content>\n    \n    <div class=\"dashboard-header\">\n      <ion-button class=\"custom-button\" routerLink=\"/inquiry\">\n         <span> Enquiry Now</span>\n      </ion-button>   \n    </div>\n    <div class=\"title-rw\">\n      <h2>Events</h2>\n      <a href=\"#\">View All</a>\n    </div>\n    <!-- <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n     \n    </div>\n    </div> -->\n\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n   <!-- <img src=\"/assets/images/match-img.jpg\">  -->\n\n\n\n\n      <ion-slides [options]=\"option\" class=\"ion-margin-top\">\n    \n    \n        <ion-slide *ngFor=\"let eventResults of eventResult\" >\n          <div *ngFor=\"let eventResultsData of eventResults.banner let i=index\">\n            <div *ngIf=\"i < 1\">\n            <img src={{eventResultsData.fileName}}>\n            <!-- <h5>{{eventResults.name}}</h5> -->\n            <div class=\"img-caption\">\n              <h5>{{eventResults.name}}</h5>\n            </div>\n            \n          </div>\n        </div>\n        </ion-slide>\n        \n       </ion-slides> \n\n    </div>\n    </div>\n\n  \n\n  \n    <div class=\"title-rw\">\n      <h2>REGISTER <span>NOW</span>!</h2>\n    </div>\n    <div class=\"bttns-row\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"5\" class=\"bttns-row-left\">\n                    <ion-button class=\"custom-button\" routerLink=\"/registration\">\n                      <img src=\"/assets/images/soccer-player1.png\" > <span>Player</span>\n                    </ion-button>  \n              </ion-col>\n              <ion-col size=\"2\" class=\"bttns-row-middle\">\n                    <h3></h3>   \n              </ion-col>\n              <ion-col size=\"5\" class=\"bttns-row-right\">\n                     <ion-button class=\"custom-button\" routerLink=\"/registration\">\n                      <img src=\"/assets/images/soccer-player1.png\"  > <span >Coach</span>\n                    </ion-button>    \n              </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <!-- <div class=\"title-rw\">\n      <h2>RIGHT TO <span>PLAY</span>!</h2>\n    </div> -->\n    <!-- <div class=\"right-to-play-bdy\">\n        <ion-grid>\n         \n          <ion-row>\n              <ion-col size=\"3\" class=\"right-to-play-left\">\n                      <img src=\"/assets/images/bnyn.png\"> \n              </ion-col>\n              <ion-col size=\"6\" class=\"right-to-play-mdl\">\n                      <h3>Star <span> Players</span></h3>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-to-play-right\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div> -->\n\n    <div class=\"title-rw\">\n      <h2>Login Now</h2>\n    </div>\n    <div class=\"bttns-row\">\n      <ion-grid>\n        <ion-row>\n            <ion-button class=\"custom-button\" routerLink=\"/coach-login\">\n              <span> Login</span>\n           </ion-button> \n        </ion-row>\n      </ion-grid>\n  </div>\n\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pre-login-dashboard_pre-login-dashboard_module_ts.js.map