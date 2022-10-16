"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_acknowledgement_acknowledgement_module_ts"],{

/***/ 7505:
/*!*******************************************************************!*\
  !*** ./src/app/acknowledgement/acknowledgement-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcknowledgementPageRoutingModule": () => (/* binding */ AcknowledgementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _acknowledgement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acknowledgement.page */ 3146);




const routes = [
    {
        path: '',
        component: _acknowledgement_page__WEBPACK_IMPORTED_MODULE_0__.AcknowledgementPage
    }
];
let AcknowledgementPageRoutingModule = class AcknowledgementPageRoutingModule {
};
AcknowledgementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcknowledgementPageRoutingModule);



/***/ }),

/***/ 680:
/*!***********************************************************!*\
  !*** ./src/app/acknowledgement/acknowledgement.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcknowledgementPageModule": () => (/* binding */ AcknowledgementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acknowledgement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acknowledgement-routing.module */ 7505);
/* harmony import */ var _acknowledgement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acknowledgement.page */ 3146);







let AcknowledgementPageModule = class AcknowledgementPageModule {
};
AcknowledgementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acknowledgement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcknowledgementPageRoutingModule
        ],
        declarations: [_acknowledgement_page__WEBPACK_IMPORTED_MODULE_1__.AcknowledgementPage]
    })
], AcknowledgementPageModule);



/***/ }),

/***/ 3146:
/*!*********************************************************!*\
  !*** ./src/app/acknowledgement/acknowledgement.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcknowledgementPage": () => (/* binding */ AcknowledgementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acknowledgement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acknowledgement.page.html?ngResource */ 5851);
/* harmony import */ var _acknowledgement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acknowledgement.page.scss?ngResource */ 3395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AcknowledgementPage = class AcknowledgementPage {
    constructor() { }
    ngOnInit() {
    }
};
AcknowledgementPage.ctorParameters = () => [];
AcknowledgementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-acknowledgement',
        template: _acknowledgement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acknowledgement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcknowledgementPage);



/***/ }),

/***/ 3395:
/*!**********************************************************************!*\
  !*** ./src/app/acknowledgement/acknowledgement.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.payment-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.left-pay {\n  width: 75%;\n  float: left;\n}\n\n.right-pay {\n  width: 25%;\n}\n\n.row-1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  color: #0A408A;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 15px;\n  margin-bottom: 10px;\n}\n\n.row-2 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-2 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-3 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-3 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-4 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-4 strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 25px;\n  color: #0A408A;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.row-2 {\n  color: #333;\n}\n\n.row-3 {\n  color: #333;\n}\n\n.right-pay ion-button {\n  --background: #0A408A;\n  border-radius: 6px !important;\n  text-transform: capitalize;\n  position: absolute;\n  right: 0;\n  bottom: 45%;\n}\n\nion-button.green {\n  --background: green !important;\n  bottom: 45% !important;\n}\n\nion-button.red {\n  --background: red !important;\n  bottom: 5% !important;\n}\n\nion-button.only-green {\n  --background: green !important;\n}\n\nion-button.only-red {\n  --background: red !important;\n}\n\n.row-4 {\n  margin-bottom: 9px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFja25vd2xlZGdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFKQTtFQUNFLHNCQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEk7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtBQVVKOztBQVJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFZQTs7QUFWQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWNBOztBQVpBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWVKOztBQWJHO0VBQ0Esc0JBQUE7RUFDSCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBZ0JBOztBQWRBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFpQkE7O0FBZkE7RUFDSSxXQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7QUFtQko7O0FBakJBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FBcUJKOztBQW5CQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksOEJBQUE7QUF1Qko7O0FBcEJBO0VBQ0ksNEJBQUE7QUF1Qko7O0FBcEJBO0VBQ0ksa0JBQUE7QUF1Qko7O0FBckJBO0VBQ1EsbUJBQUE7RUFDSixnQkFBQTtFQUVBLGNBQUE7QUF1Qko7O0FBckJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF3Qko7O0FBdEJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUF5Qko7O0FBdkJBO0VBQ0E7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0NBQUE7RUEwQkY7QUFDRiIsImZpbGUiOiJhY2tub3dsZWRnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnBheW1lbnQtcm93e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgfVxuLmxlZnQtcGF5IHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnJpZ2h0LXBheSB7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi5yb3ctMSBzcGFuIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJvdy0yIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDI1cHg7XG5jb2xvcjogIzRENEQ0RDtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIH1cbi5yb3ctMiBzdHJvbmcge1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG53aWR0aDo2NXB4O1xub250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzRENEQ0RDtcbiAgICB9XG4ucm93LTMgc3BhbiB7XG5mb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyNXB4O1xuY29sb3I6ICM0RDRENEQ7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB9XG4ucm93LTMgc3Ryb25nIHtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xud2lkdGg6NjVweDtcbm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6ICM0RDRENEQ7XG4gICAgfVxuICAgLnJvdy00IHNwYW4ge1xuICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjVweDtcbmNvbG9yOiAjNEQ0RDREO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgfVxuLnJvdy00IHN0cm9uZyB7XG5mb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyNXB4O1xuY29sb3I6ICMwQTQwOEE7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbm1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfSBcbi5yb3ctMiB7XG4gICAgY29sb3I6ICMzMzM7XG59XG4ucm93LTN7XG4gICAgY29sb3I6ICMzMzM7XG59IFxuLnJpZ2h0LXBheSBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNDUlO1xufVxuaW9uLWJ1dHRvbi5ncmVlbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogNDUlICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9uLnJlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiAgICBib3R0b206IDUlICFpbXBvcnRhbnQ7XG59XG5pb24tYnV0dG9uLm9ubHktZ3JlZW4ge1xuICAgIC0tYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcblxufVxuaW9uLWJ1dHRvbi5vbmx5LXJlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcblxufVxuLnJvdy00IHtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG59XG4ucmVnaXN0cmF0aW9uLWZpZWxkLXNlY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcblxuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG59ICAgIl19 */";

/***/ }),

/***/ 5851:
/*!**********************************************************************!*\
  !*** ./src/app/acknowledgement/acknowledgement.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n    <div class=\"title-rw\">\n      <h2>Acknowledgement</h2>\n    </div>\n\n        <ion-list class=\"payment-row\">\n          \n          <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 </span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span> Jersey</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Quantity</strong> : <span>4 No.s</span>\n              </div>\n                            \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"green\">Accept</ion-button>\n              <ion-button size=\"small\" class=\"red\">Reject</ion-button>\n            </div>\n          </ion-item>\n\n            <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 </span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span> Jersey</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Quantity</strong> : <span>4 No.s</span>\n              </div>\n                            \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"green\">Accept</ion-button>\n              <ion-button size=\"small\" class=\"red\">Reject</ion-button>\n            </div>\n          </ion-item>\n           <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 </span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span> Jersey</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Quantity</strong> : <span>4 No.s</span>\n              </div>\n                            \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"green\">Accept</ion-button>\n              <ion-button size=\"small\" class=\"red\">Reject</ion-button>\n            </div>\n          </ion-item>\n\n\n        </ion-list>\n\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_acknowledgement_acknowledgement_module_ts.js.map