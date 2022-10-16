"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 3509:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 684);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 4068:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 3509);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 684);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 684:
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 9529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PaymentPage = class PaymentPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-payment',
        template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 9529:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.payment-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.left-pay {\n  width: 75%;\n  float: left;\n}\n\n.right-pay {\n  width: 25%;\n}\n\n.row-1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 15px;\n  margin-bottom: 10px;\n}\n\n.row-2 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-2 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-3 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-3 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-4 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-4 strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 25px;\n  color: #0A408A;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.row-2 {\n  color: #333;\n}\n\n.row-3 {\n  color: #333;\n}\n\n.right-pay ion-button {\n  --background: #0A408A;\n  border-radius: 6px !important;\n  text-transform: capitalize;\n  position: absolute;\n  right: 0;\n  bottom: 35%;\n}\n\nion-button.green {\n  --background: green !important;\n}\n\nion-button.red {\n  --background: red !important;\n}\n\n.row-4 {\n  margin-bottom: 9px;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxJO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBWUE7O0FBVkE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWEE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFjQTs7QUFaQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiRztFQUNBLHNCQUFBO0VBQ0gsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWdCQTs7QUFkQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBaUJBOztBQWZBO0VBQ0ksV0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0FBbUJKOztBQWpCQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0ksOEJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksNEJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksa0JBQUE7QUF1Qko7O0FBckJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUF3Qko7O0FBdEJBO0VBQ0E7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0NBQUE7RUF5QkY7QUFDRiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubGVmdC1iYWNrIGlvbi1pY29uIHsgXG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVye1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cbi5yaWdodC1wcm9maWxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucmlnaHQtcHJvZmlsZSBpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZDogIzBBNDA4QTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubm90aWZpY2Fzb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLnRpdGxlLXJ3IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlLXJ3IGgye1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBBNDA4QTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5wYXltZW50LXJvd3tcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIH1cbi5sZWZ0LXBheSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5yaWdodC1wYXkge1xuICAgIHdpZHRoOiAyNSU7XG59XG4ucm93LTEgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5yb3ctMiBzcGFuIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyNXB4O1xuY29sb3I6ICM0RDRENEQ7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB9XG4ucm93LTIgc3Ryb25nIHtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xud2lkdGg6NjVweDtcbm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6ICM0RDRENEQ7XG4gICAgfVxuLnJvdy0zIHNwYW4ge1xuZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjVweDtcbmNvbG9yOiAjNEQ0RDREO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgfVxuLnJvdy0zIHN0cm9uZyB7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbndpZHRoOjY1cHg7XG5vbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiAjNEQ0RDREO1xuICAgIH1cbiAgIC5yb3ctNCBzcGFuIHtcbiAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDI1cHg7XG5jb2xvcjogIzRENEQ0RDtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIH1cbi5yb3ctNCBzdHJvbmcge1xuZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjVweDtcbmNvbG9yOiAjMEE0MDhBO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG5tYXJnaW4tbGVmdDoxMHB4O1xuICAgIH0gXG4ucm93LTIge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLnJvdy0ze1xuICAgIGNvbG9yOiAjMzMzO1xufSBcbi5yaWdodC1wYXkgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDM1JTtcbn1cbmlvbi1idXR0b24uZ3JlZW4ge1xuICAgIC0tYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ucmVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufVxuLnJvdy00IHtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG59ICAgIl19 */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n    <div class=\"title-rw\">\n      <h2>PAYMENT HISTORY</h2>\n    </div>\n        <ion-list class=\"payment-row\">\n          \n          <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span>Product</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Amount</strong> : <span>₹ 5000.00</span>\n              </div>\n              <div class=\"row-4\">\n                  <span>Pending!</span>\n              </div>\n              \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\">Due</ion-button>\n            </div>\n          </ion-item>\n\n           <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span>Product</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Amount</strong> : <span>₹ 5000.00</span>\n              </div>\n              <div class=\"row-4\">\n                  <span>Approved By </span> <strong>Coach</strong>\n              </div>\n              \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"green\">Due</ion-button>\n            </div>\n          </ion-item>\n\n           <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Type</strong> : <span>Product</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Amount</strong> : <span>₹ 5000.00</span>\n              </div>\n              <div class=\"row-4\">\n                  <span>Failed!</span>\n              </div>\n              \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"red\">Due</ion-button>\n            </div>\n          </ion-item>\n\n\n        </ion-list>\n\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map