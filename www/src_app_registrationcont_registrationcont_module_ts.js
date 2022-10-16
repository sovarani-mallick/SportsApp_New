"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registrationcont_registrationcont_module_ts"],{

/***/ 355:
/*!*********************************************************************!*\
  !*** ./src/app/registrationcont/registrationcont-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationcontPageRoutingModule": () => (/* binding */ RegistrationcontPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registrationcont_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationcont.page */ 1320);




const routes = [
    {
        path: '',
        component: _registrationcont_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationcontPage
    }
];
let RegistrationcontPageRoutingModule = class RegistrationcontPageRoutingModule {
};
RegistrationcontPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationcontPageRoutingModule);



/***/ }),

/***/ 4180:
/*!*************************************************************!*\
  !*** ./src/app/registrationcont/registrationcont.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationcontPageModule": () => (/* binding */ RegistrationcontPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registrationcont_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationcont-routing.module */ 355);
/* harmony import */ var _registrationcont_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrationcont.page */ 1320);







let RegistrationcontPageModule = class RegistrationcontPageModule {
};
RegistrationcontPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registrationcont_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationcontPageRoutingModule
        ],
        declarations: [_registrationcont_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationcontPage]
    })
], RegistrationcontPageModule);



/***/ }),

/***/ 1320:
/*!***********************************************************!*\
  !*** ./src/app/registrationcont/registrationcont.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationcontPage": () => (/* binding */ RegistrationcontPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registrationcont_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationcont.page.html?ngResource */ 704);
/* harmony import */ var _registrationcont_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registrationcont.page.scss?ngResource */ 9037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RegistrationcontPage = class RegistrationcontPage {
    constructor() { }
    ngOnInit() {
    }
};
RegistrationcontPage.ctorParameters = () => [];
RegistrationcontPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-registrationcont',
        template: _registrationcont_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registrationcont_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrationcontPage);



/***/ }),

/***/ 9037:
/*!************************************************************************!*\
  !*** ./src/app/registrationcont/registrationcont.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  padding-top: 50px;\n  background: #fff;\n}\n\n.middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.form-ctrl p {\n  padding: 10px;\n  /* color: #b2b2b2; */\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.2px;\n  color: #959AB1;\n}\n\n.form-ctrl ul {\n  margin: 0;\n  padding: 10px;\n}\n\n.form-ctrl ul li {\n  list-style: none;\n  margin-bottom: 10px;\n}\n\n.form-ctrl ul li ion-checkbox {\n  margin: 0 0 0 0;\n  display: inline-block;\n}\n\n.form-ctrl ul li ion-label {\n  display: inline-block;\n  margin-left: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  color: #0A408A;\n}\n\n.form-ctrl small {\n  font-family: \"Poppins\";\n  font-style: italic;\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 15px;\n  display: flex;\n  align-items: flex-end;\n  letter-spacing: 0.2px;\n  color: #959AB1;\n  padding: 10px;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  margin-top: 17px;\n  padding: 30px 0;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  margin-bottom: 15px;\n}\n\nion-input#upload {\n  width: 100%;\n  opacity: 0;\n}\n\nion-icon.upload-icon {\n  position: absolute;\n  right: 10px;\n  background: #AFDEFF;\n  padding: 5px;\n  color: #fff;\n  border-radius: 50%;\n}\n\n.pic-upload {\n  border: 2px dashed #AFDEFF;\n  margin: 5px 16px 16px;\n}\n\nspan.star1 {\n  position: absolute;\n  left: 39%;\n  top: 10px;\n  color: red;\n}\n\nspan.star2 {\n  position: absolute;\n  left: 55%;\n  top: 10px;\n  color: red;\n}\n\nion-textarea.form-ctrl {\n  height: 110px;\n}\n\n.footer-con {\n  text-align: center;\n}\n\n.footer-con ion-icon {\n  color: #0A408A;\n  font-size: 25px;\n}\n\n.footer-con h5 {\n  margin-top: 0px;\n  color: #959AB1;\n}\n\n.footer-con h5.act {\n  margin-top: 0px;\n  color: #0A408A;\n}\n\n.white-round-p {\n  position: absolute;\n  margin: auto;\n  left: -24px;\n  right: 0;\n  top: -50px;\n  width: 102px;\n  height: 102px;\n}\n\nion-footer {\n  height: 85px;\n  background: #fff;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbmNvbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDSSxnQkFBQTtBQUNSOztBQUNBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQU9KOztBQUxBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFRQTs7QUFOQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFTQTs7QUFQQTtFQUNJLGFBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVRBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVlKOztBQVZBO0VBQ1EsbUJBQUE7RUFDSiw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNNLFdBQUE7RUFDQSxVQUFBO0FBZU47O0FBYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBZEE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFtQko7O0FBakJBO0VBQ0ksYUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXVCSjs7QUFyQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQXdCSjs7QUF0QkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQXlCSjs7QUF2QkE7RUFDUSxZQUFBO0VBQ0EsZ0JBQUE7QUEwQlI7O0FBeEJBO0VBQ0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQTJCQTtFQXhCRjtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBMEJBO0VBdkJGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUF5QkE7RUF2QkY7SUFDSSxnQkFBQTtFQXlCRjtFQXZCRjtJQUNJLHdCQUFBO0VBeUJGO0VBdkJGO0lBQ0ksc0JBQUE7RUF5QkY7QUFDRiIsImZpbGUiOiJyZWdpc3RyYXRpb25jb250LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5mb3JtLWN0cmwgcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvKiBjb2xvcjogI2IyYjJiMjsgKi9cbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgY29sb3I6ICM5NTlBQjE7XG59XG4uZm9ybS1jdHJsIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5mb3JtLWN0cmwgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3JtLWN0cmwgdWwgbGkgaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZvcm0tY3RybCB1bCBsaSBpb24tbGFiZWx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxMXB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuY29sb3I6ICMwQTQwOEE7XG59XG4uZm9ybS1jdHJsIHNtYWxse1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5mb250LXdlaWdodDogMzAwO1xuZm9udC1zaXplOiAxMHB4O1xubGluZS1oZWlnaHQ6IDE1cHg7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xubGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuY29sb3I6ICM5NTlBQjE7XG5wYWRkaW5nOiAxMHB4O1xufVxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5yZWdpc3RyYXRpb24tZmllbGQtc2VjdGlvbntcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24taW5wdXQjdXBsb2FkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbn1cbmlvbi1pY29uLnVwbG9hZC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0FGREVGRjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnBpYy11cGxvYWQge1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjQUZERUZGO1xuICAgIG1hcmdpbjogNXB4IDE2cHggMTZweDtcbn1cbnNwYW4uc3RhcjEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzOSU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG5zcGFuLnN0YXIyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTUlO1xuICAgIHRvcDogMTBweDtcbiAgICBjb2xvcjogcmVkO1xufVxuaW9uLXRleHRhcmVhLmZvcm0tY3RybCB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbn1cbi5mb290ZXItY29uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbiBpb24taWNvbntcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uZm9vdGVyLWNvbiBoNSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiAjOTU5QUIxO1xufVxuLmZvb3Rlci1jb24gaDUuYWN0IHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG59XG4ud2hpdGUtcm91bmQtcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAtMjRweDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IC01MHB4O1xuICAgIHdpZHRoOiAxMDJweDtcbiAgICBoZWlnaHQ6IDEwMnB4O1xufVxuaW9uLWZvb3RlcntcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG4uZm9ybS1jdHJsOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6OTk5OTtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BlcmVudDtcbn1cbi5mb3JtLWN0cmwge1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG59Il19 */";

/***/ }),

/***/ 704:
/*!************************************************************************!*\
  !*** ./src/app/registrationcont/registrationcont.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <div class=\"container\">\n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"7\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-profile\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"registration-field-section\">\n    <ion-list>\n      <ion-item lines=\"none\">\n    <ion-textarea class=\"form-ctrl\" placeholder=\"Address\"></ion-textarea>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-input  class=\"form-ctrl\" placeholder=\"Parent's Full Name\" ></ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-input  class=\"form-ctrl\" placeholder=\"Parent’s Contact Number\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"Date of Joining\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Epi-Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select><span class=\"star1\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Bhubaneswar Centres\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select><span class=\"star1\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <div class=\"form-ctrl\">\n      <p>Documents Submitted</p>\n      <ul>\n        <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Photo (2 nos)</ion-label></li>\n  <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Aadhar Card</ion-label></li>\n  <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Age Proof (School Id/Birth Certificate)</ion-label></li>\n\n      </ul>\n      <small><em>Check all that apply</em></small>\n    </div>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"pic-upload\">\n    <ion-label id=\"profile_image\" color=\"primary\" stacked>Files Submited</ion-label>\n      <ion-input type=\"file\" accept=\"image/*\" id=\"upload\" [(ngModel)]=\"imageFilePath\" (ionChange)=\"imageFilePath_change($event)\"></ion-input>\n      <ion-icon class=\"upload-icon\" name=\"add-outline\"></ion-icon>\n  </ion-item>\n</ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col  size=\"6\">\n              <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  size=\"6\">\n              <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_registrationcont_registrationcont_module_ts.js.map