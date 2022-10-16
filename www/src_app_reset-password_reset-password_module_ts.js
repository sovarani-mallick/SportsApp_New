"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reset-password_reset-password_module_ts"],{

/***/ 4746:
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 8946);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 4371:
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 4746);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 8946);







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 8946:
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page.html?ngResource */ 7324);
/* harmony import */ var _reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss?ngResource */ 8979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ResetPasswordPage = class ResetPasswordPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reset-password',
        template: _reset_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordPage);



/***/ }),

/***/ 8979:
/*!********************************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.coach-login-body h2 {\n  font-family: \"Josefin Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.9em;\n  text-transform: uppercase;\n  color: #020202;\n  margin-left: 20px;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.coach-login-body h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 36px;\n  text-align: center;\n  color: #333333;\n  margin-top: 40px !important;\n}\n\n.coach-login-body p {\n  font-family: \"Josefin Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: 9.8px;\n  text-transform: uppercase;\n  color: #0A408A;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 2px solid #0A408A;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  background: #fff;\n}\n\nspan.eye {\n  position: absolute;\n  right: 32px;\n  font-size: 25px;\n  bottom: 15px;\n  color: #0A408A;\n  font-weight: bold;\n  z-index: 999;\n}\n\n.coach-form-body a.change-password-text {\n  text-align: center;\n  width: 100%;\n  /* text-decoration: none; */\n  margin-top: 20px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\n.coach-form-body p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-right: 20px;\n}\n\n.reset-p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n  /* identical to box height, or 157% */\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\nion-button.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.coach-form-body ion-list ion-item {\n  --background: none !important;\n}\n\n.coach-login-body {\n  width: 100%;\n  float: left;\n  margin: 50px auto 30px auto;\n  text-align: center;\n}\n\n.coach-form-body {\n  width: 100%;\n  float: left;\n  background: none;\n  text-align: center;\n  margin: auto;\n}\n\n.coach-form-body ion-list {\n  background: transparent !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNJLGlCQUFBO0VBQ0osNENBQUE7QUFFQTs7QUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSUE7O0FBRkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVFBOztBQU5BO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSx1Q0FBQTtVQUFBLCtCQUFBO0VBRUEsY0FBQTtBQU9BOztBQUxBO0VBQ0ksZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSw2QkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBV0o7O0FBVEE7RUFDSSxrQ0FBQTtBQVlKOztBQVZBO0VBQ0E7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQWFBO0VBVkY7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQVlBO0VBVEY7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQVdBO0VBVEY7SUFDSSxnQkFBQTtFQVdGO0VBVEY7SUFDSSx3QkFBQTtFQVdGO0VBVEY7SUFDSSxzQkFBQTtFQVdGO0FBQ0YiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmNvYWNoLWxvZ2luLWJvZHkgaDJ7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmZvbnQtc2l6ZTogNDBweDtcbmxpbmUtaGVpZ2h0OiA0MHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xubGV0dGVyLXNwYWNpbmc6IDAuOWVtO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmNvbG9yOiAjMDIwMjAyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xudGV4dC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4uY29hY2gtbG9naW4tYm9keSBoM3tcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAyNHB4O1xubGluZS1oZWlnaHQ6IDM2cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jb2xvcjogIzMzMzMzMztcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uY29hY2gtbG9naW4tYm9keSBwe1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG5mb250LXNpemU6IDE4cHg7XG5saW5lLWhlaWdodDogMThweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmxldHRlci1zcGFjaW5nOiA5LjhweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5jb2xvcjogIzBBNDA4QTtcbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwQTQwOEE7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5zcGFuLmV5ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgei1pbmRleDo5OTk7XG59XG4uY29hY2gtZm9ybS1ib2R5IGEuY2hhbmdlLXBhc3N3b3JkLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMEE0MDhBO1xufVxuLmNvYWNoLWZvcm0tYm9keSBwe1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDIycHg7XG5jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xubWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnJlc2V0LXB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjJweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNTclICovXG5cbnRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG5cbmNvbG9yOiAjMEE0MDhBO1xufVxuaW9uLWJ1dHRvbi5jdXN0b20tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwQTQwOEEgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvYWNoLWZvcm0tYm9keSBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29hY2gtbG9naW4tYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMzBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb2FjaC1mb3JtLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5jb2FjaC1mb3JtLWJvZHkgaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcbi5mb3JtLWN0cmw6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6OTk5OTtcbn1cblxuLmZvcm0tY3RybDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6OTk5OTtcbn1cblxuLmZvcm0tY3RybDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZDojZmZmO1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGVyZW50O1xufVxuLmZvcm0tY3RybCB7XG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbn1cbn0iXX0= */";

/***/ }),

/***/ 7324:
/*!********************************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <div class=\"container\">\n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n\n\n          </ion-row>\n     </ion-grid>     \n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"coach-login-body\">\n    <h2>ArdoR</h2>\n    <p>SPORTS Academy</p>\n    <h3>Reset Password!</h3>\n  </div>\n  <div class=\"coach-form-body\">\n    <ion-list>\n   <ion-item lines=\"none\">\n    <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Email ID / Phone No\" ></ion-input>\n  </ion-item>\n  \n   <ion-item lines=\"none\">\n    <ion-button type=\"submit\" class=\"custom-button\">Reset</ion-button>\n   </ion-item>\n   \n   \n</ion-list>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_reset-password_reset-password_module_ts.js.map