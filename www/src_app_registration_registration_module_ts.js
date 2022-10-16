"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registration_registration_module_ts"],{

/***/ 4261:
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": () => (/* binding */ RegistrationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page */ 9454);




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ 5375:
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": () => (/* binding */ RegistrationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 4261);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page */ 9454);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
    })
], RegistrationPageModule);



/***/ }),

/***/ 9454:
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page.html?ngResource */ 7485);
/* harmony import */ var _registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss?ngResource */ 7905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let RegistrationPage = class RegistrationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-registration',
        template: _registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrationPage);



/***/ }),

/***/ 7905:
/*!****************************************************************!*\
  !*** ./src/app/registration/registration.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  margin-top: 17px;\n  padding: 30px 0;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  margin-bottom: 15px;\n}\n\nion-input#upload {\n  width: 100%;\n  opacity: 0;\n}\n\nion-icon.upload-icon {\n  position: absolute;\n  right: 10px;\n  background: #AFDEFF;\n  padding: 5px;\n  color: #fff;\n  border-radius: 50%;\n}\n\n.pic-upload {\n  border: 2px dashed #AFDEFF;\n  margin: 5px 16px 16px;\n}\n\nspan.star1 {\n  position: absolute;\n  left: 39%;\n  top: 10px;\n  color: red;\n}\n\nspan.star2 {\n  position: absolute;\n  left: 55%;\n  top: 10px;\n  color: red;\n}\n\n.form-ctrl ul {\n  margin: 0;\n  padding: 10px;\n}\n\n.form-ctrl ul li {\n  list-style: none;\n  margin-bottom: 10px;\n}\n\n.form-ctrl ul li ion-checkbox {\n  margin: 0 0 0 0;\n  display: inline-block;\n  --background: #fff !important;\n  border: 1px solid #ccc;\n}\n\n.form-ctrl ul li ion-label {\n  display: inline-block;\n  margin-left: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  color: #0A408A;\n}\n\n.form-ctrl small {\n  font-family: \"Poppins\";\n  font-style: italic;\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 15px;\n  display: flex;\n  align-items: flex-end;\n  letter-spacing: 0.2px;\n  color: #959AB1;\n  padding: 10px;\n}\n\nion-textarea.form-ctrl {\n  height: 110px;\n}\n\n.footer-con {\n  text-align: center;\n}\n\n.footer-con ion-icon {\n  color: #0A408A;\n  font-size: 25px;\n}\n\n.footer-con h5 {\n  margin-top: 0px;\n  color: #959AB1;\n}\n\n.footer-con h5.act {\n  margin-top: 0px;\n  color: #0A408A;\n}\n\n.white-round-p {\n  position: absolute;\n  margin: auto;\n  left: -24px;\n  right: 0;\n  top: -50px;\n  width: 102px;\n  height: 102px;\n}\n\nion-footer {\n  height: 85px;\n  background: #fff;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDUSxtQkFBQTtFQUNKLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ00sV0FBQTtFQUNBLFVBQUE7QUFPTjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQWNKOztBQVpBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFlQTs7QUFiQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFnQkE7O0FBZEE7RUFDSSxhQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFtQko7O0FBakJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFxQko7O0FBbkJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFzQko7O0FBcEJBO0VBQ1EsWUFBQTtFQUNBLGdCQUFBO0FBdUJSOztBQXJCQTtFQUNBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUF3QkE7RUFyQkY7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQXVCQTtFQXBCRjtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBc0JBO0VBcEJGO0lBQ0ksZ0JBQUE7RUFzQkY7RUFwQkY7SUFDSSx3QkFBQTtFQXNCRjtFQXBCRjtJQUNJLHNCQUFBO0VBc0JGO0FBQ0YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubGVmdC1iYWNrIGlvbi1pY29uIHsgXG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVye1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cbi5yaWdodC1wcm9maWxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucmlnaHQtcHJvZmlsZSBpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZDogIzBBNDA4QTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ucmVnaXN0cmF0aW9uLWZpZWxkLXNlY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYigwIDAgMCAvIDI1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWlucHV0I3VwbG9hZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG59XG5pb24taWNvbi51cGxvYWQtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNBRkRFRkY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5waWMtdXBsb2FkIHtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI0FGREVGRjtcbiAgICBtYXJnaW46IDVweCAxNnB4IDE2cHg7XG59XG5zcGFuLnN0YXIxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzklO1xuICAgIHRvcDogMTBweDtcbiAgICBjb2xvcjogcmVkO1xufVxuc3Bhbi5zdGFyMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDU1JTtcbiAgICB0b3A6IDEwcHg7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5mb3JtLWN0cmwgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvcm0tY3RybCB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcm0tY3RybCB1bCBsaSBpb24tY2hlY2tib3gge1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5mb3JtLWN0cmwgdWwgbGkgaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTFweDtcbmxldHRlci1zcGFjaW5nOiAwLjJweDtcbmNvbG9yOiAjMEE0MDhBO1xufVxuLmZvcm0tY3RybCBzbWFsbHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogaXRhbGljO1xuZm9udC13ZWlnaHQ6IDMwMDtcbmZvbnQtc2l6ZTogMTBweDtcbmxpbmUtaGVpZ2h0OiAxNXB4O1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbmxldHRlci1zcGFjaW5nOiAwLjJweDtcbmNvbG9yOiAjOTU5QUIxO1xucGFkZGluZzogMTBweDtcbn1cbmlvbi10ZXh0YXJlYS5mb3JtLWN0cmwge1xuICAgIGhlaWdodDogMTEwcHg7XG59XG4uZm9vdGVyLWNvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlci1jb24gaW9uLWljb257XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmZvb3Rlci1jb24gaDUge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBjb2xvcjogIzk1OUFCMTtcbn1cbi5mb290ZXItY29uIGg1LmFjdCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xufVxuLndoaXRlLXJvdW5kLXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogLTI0cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAtNTBweDtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgaGVpZ2h0OiAxMDJweDtcbn1cbmlvbi1mb290ZXJ7XG4gICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xuLmZvcm0tY3RybDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uZm9ybS1jdHJsOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwZXJlbnQ7XG59XG4uZm9ybS1jdHJsIHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxufSJdfQ== */";

/***/ }),

/***/ 7485:
/*!****************************************************************!*\
  !*** ./src/app/registration/registration.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <div class=\"container\">\n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\" (click)=\"Back()\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"7\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-profile\">\n                    <ion-icon name=\"person\" routerLink=\"/coach-login\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"registration-field-section\">\n    <ion-list>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Select Sports\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select><span class=\"star1\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input class=\"form-ctrl\" placeholder=\"Player’s Full Name\" ></ion-input><span class=\"star2\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"pic-upload\">\n    <ion-label id=\"profile_image\" color=\"primary\" stacked>Player’s Photo</ion-label>\n      <ion-input type=\"file\" accept=\"image/*\" id=\"upload\" [(ngModel)]=\"imageFilePath\" (ionChange)=\"imageFilePath_change($event)\"></ion-input>\n      <ion-icon class=\"upload-icon\" name=\"add-outline\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"Date of Birth\" ></ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-input  class=\"form-ctrl\" placeholder=\"Aadhar Number\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Age Group\" >\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Blood Group\" >\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item lines=\"none\">\n    <ion-input class=\"form-ctrl\" placeholder=\"Phone Number\" ></ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-input class=\"form-ctrl\" placeholder=\"Email ID\" ></ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-textarea class=\"form-ctrl\" placeholder=\"Address\"></ion-textarea>\n  </ion-item>\n  \n <ion-item lines=\"none\">\n    <ion-input  class=\"form-ctrl\" placeholder=\"Parent's Full Name\" ></ion-input>\n  </ion-item>\n   <ion-item lines=\"none\">\n    <ion-input  class=\"form-ctrl\" placeholder=\"Parent’s Contact Number\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"Date of Joining\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Epi-Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select><span class=\"star1\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Bhubaneswar Centres\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select><span class=\"star1\">*</span>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <div class=\"form-ctrl\">\n      <p>Documents Submitted</p>\n      <ul>\n        <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Photo (2 nos)</ion-label></li>\n  <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Aadhar Card</ion-label></li>\n  <li><ion-checkbox slot=\"start\"></ion-checkbox>\n  <ion-label>Age Proof (School Id/Birth Certificate)</ion-label></li>\n\n      </ul>\n      <small><em>Check all that apply</em></small>\n    </div>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"pic-upload\">\n    <ion-label id=\"profile_image\" color=\"primary\" stacked>Files Submited</ion-label>\n      <ion-input type=\"file\" accept=\"image/*\" id=\"upload\" [(ngModel)]=\"imageFilePath\" (ionChange)=\"imageFilePath_change($event)\"></ion-input>\n      <ion-icon class=\"upload-icon\" name=\"add-outline\"></ion-icon>\n  </ion-item>\n</ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_registration_registration_module_ts.js.map