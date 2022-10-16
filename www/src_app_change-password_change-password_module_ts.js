"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_change-password_change-password_module_ts"],{

/***/ 2070:
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 7517);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 8232:
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 2070);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 7517);







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 7517:
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page.html?ngResource */ 3397);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss?ngResource */ 6064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ChangePasswordPage = class ChangePasswordPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-change-password',
        template: _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordPage);



/***/ }),

/***/ 6064:
/*!**********************************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.coach-login-body h2 {\n  font-family: \"Josefin Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.9em;\n  text-transform: uppercase;\n  color: #020202;\n  margin-left: 20px;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.coach-login-body h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 36px;\n  text-align: center;\n  color: #333333;\n  margin-top: 40px !important;\n}\n\n.coach-login-body p {\n  font-family: \"Josefin Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: 9.8px;\n  text-transform: uppercase;\n  color: #0A408A;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 2px solid #0A408A;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  background: #fff;\n}\n\nspan.eye {\n  position: absolute;\n  right: 32px;\n  font-size: 25px;\n  bottom: 15px;\n  color: #0A408A;\n  font-weight: bold;\n  z-index: 999;\n}\n\n.coach-form-body a.change-password-text {\n  text-align: center;\n  width: 100%;\n  /* text-decoration: none; */\n  margin-top: 20px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\n.coach-form-body p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.5);\n  margin-right: 20px;\n}\n\n.reset-p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22px;\n  /* identical to box height, or 157% */\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\nion-button.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.coach-form-body ion-list ion-item {\n  --background: none !important;\n}\n\n.coach-login-body {\n  width: 100%;\n  float: left;\n  margin: 50px auto 30px auto;\n  text-align: center;\n}\n\n.coach-form-body {\n  width: 100%;\n  float: left;\n  background: none;\n  text-align: center;\n  margin: auto;\n}\n\n.coach-form-body ion-list {\n  background: transparent !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLDJCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDSSxpQkFBQTtFQUNKLDRDQUFBO0FBRUE7O0FBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDSSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUlBOztBQUZBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFRQTs7QUFOQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEsdUNBQUE7VUFBQSwrQkFBQTtFQUVBLGNBQUE7QUFPQTs7QUFMQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksNkJBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRBO0VBQ0ksa0NBQUE7QUFZSjs7QUFWQTtFQUNBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFhQTtFQVZGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFZQTtFQVRGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFXQTtFQVRGO0lBQ0ksZ0JBQUE7RUFXRjtFQVRGO0lBQ0ksd0JBQUE7RUFXRjtFQVRGO0lBQ0ksc0JBQUE7RUFXRjtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1iYWNrIGlvbi1pY29uIHsgXG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG4uY29hY2gtbG9naW4tYm9keSBoMntcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1zaXplOiA0MHB4O1xubGluZS1oZWlnaHQ6IDQwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5sZXR0ZXItc3BhY2luZzogMC45ZW07XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuY29sb3I6ICMwMjAyMDI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG50ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5jb2FjaC1sb2dpbi1ib2R5IGgze1xuZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDI0cHg7XG5saW5lLWhlaWdodDogMzZweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiAjMzMzMzMzO1xuICAgIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cbi5jb2FjaC1sb2dpbi1ib2R5IHB7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmZvbnQtc2l6ZTogMThweDtcbmxpbmUtaGVpZ2h0OiAxOHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xubGV0dGVyLXNwYWNpbmc6IDkuOHB4O1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmNvbG9yOiAjMEE0MDhBO1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzBBNDA4QTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbnNwYW4uZXllIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4Ojk5OTtcbn1cbi5jb2FjaC1mb3JtLWJvZHkgYS5jaGFuZ2UtcGFzc3dvcmQtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMwQTQwOEE7XG59XG4uY29hY2gtZm9ybS1ib2R5IHB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjJweDtcbmNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG5tYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ucmVzZXQtcHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMnB4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1NyUgKi9cblxudGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcblxuY29sb3I6ICMwQTQwOEE7XG59XG5pb24tYnV0dG9uLmN1c3RvbS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzBBNDA4QSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29hY2gtZm9ybS1ib2R5IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jb2FjaC1sb2dpbi1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDUwcHggYXV0byAzMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvYWNoLWZvcm0tYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNvYWNoLWZvcm0tYm9keSBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xuLmZvcm0tY3RybDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwZXJlbnQ7XG59XG4uZm9ybS1jdHJsIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxufSJdfQ== */";

/***/ }),

/***/ 3397:
/*!**********************************************************************!*\
  !*** ./src/app/change-password/change-password.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <div class=\"container\">\n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\"  name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n\n\n          </ion-row>\n     </ion-grid>     \n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"coach-login-body\">\n    <h2>ArdoR</h2>\n    <p>SPORTS Academy</p>\n    <h3>Change Password !</h3>\n  </div>\n  <div class=\"coach-form-body\">\n    <ion-list>\n   <ion-item lines=\"none\">\n    <ion-input type=\"Current Password\" class=\"form-ctrl\" placeholder=\"Password\" ></ion-input><span class=\"eye\"><ion-icon name=\"eye\"></ion-icon></span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input type=\"New Password\" class=\"form-ctrl\" placeholder=\"Password\" ></ion-input><span class=\"eye\"><ion-icon name=\"eye\"></ion-icon></span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input type=\"Confirm Password\" class=\"form-ctrl\" placeholder=\"Password\" ></ion-input><span class=\"eye\"><ion-icon name=\"eye\"></ion-icon></span>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-button type=\"submit\" class=\"custom-button\">Change</ion-button>\n   </ion-item>\n   \n   \n</ion-list>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_change-password_change-password_module_ts.js.map