"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_leave-history_leave-history_module_ts"],{

/***/ 559:
/*!***************************************************************!*\
  !*** ./src/app/leave-history/leave-history-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPageRoutingModule": () => (/* binding */ LeaveHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _leave_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-history.page */ 7966);




const routes = [
    {
        path: '',
        component: _leave_history_page__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPage
    }
];
let LeaveHistoryPageRoutingModule = class LeaveHistoryPageRoutingModule {
};
LeaveHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaveHistoryPageRoutingModule);



/***/ }),

/***/ 5699:
/*!*******************************************************!*\
  !*** ./src/app/leave-history/leave-history.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPageModule": () => (/* binding */ LeaveHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-history-routing.module */ 559);
/* harmony import */ var _leave_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-history.page */ 7966);







let LeaveHistoryPageModule = class LeaveHistoryPageModule {
};
LeaveHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPageRoutingModule
        ],
        declarations: [_leave_history_page__WEBPACK_IMPORTED_MODULE_1__.LeaveHistoryPage]
    })
], LeaveHistoryPageModule);



/***/ }),

/***/ 7966:
/*!*****************************************************!*\
  !*** ./src/app/leave-history/leave-history.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveHistoryPage": () => (/* binding */ LeaveHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _leave_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-history.page.html?ngResource */ 2565);
/* harmony import */ var _leave_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-history.page.scss?ngResource */ 7340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let LeaveHistoryPage = class LeaveHistoryPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
LeaveHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
LeaveHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-leave-history',
        template: _leave_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leave_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeaveHistoryPage);



/***/ }),

/***/ 7340:
/*!******************************************************************!*\
  !*** ./src/app/leave-history/leave-history.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.payment-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.left-pay {\n  width: 75%;\n  float: left;\n}\n\n.right-pay {\n  width: 25%;\n}\n\n.row-1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  color: #0A408A;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 15px;\n  margin-bottom: 10px;\n}\n\n.row-2 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-2 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-3 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-3 strong {\n  display: inline-block;\n  width: 65px;\n  ont-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 25px;\n  color: #4D4D4D;\n}\n\n.row-4 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 25px;\n  color: #4D4D4D;\n  display: inline-block;\n}\n\n.row-4 strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 25px;\n  color: #0A408A;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.row-2 {\n  color: #333;\n}\n\n.row-3 {\n  color: #333;\n}\n\n.right-pay ion-button {\n  --background: #0A408A;\n  border-radius: 6px !important;\n  text-transform: capitalize;\n  position: absolute;\n  right: 0;\n  bottom: 45%;\n}\n\nion-button.green {\n  --background: green !important;\n  bottom: 45% !important;\n}\n\nion-button.red {\n  --background: red !important;\n  bottom: 5% !important;\n}\n\nion-button.only-green {\n  --background: green !important;\n}\n\nion-button.only-red {\n  --background: red !important;\n}\n\n.row-4 {\n  margin-bottom: 9px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxJO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBWUE7O0FBVkE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBYUo7O0FBWEE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFjQTs7QUFaQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiRztFQUNBLHNCQUFBO0VBQ0gsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWdCQTs7QUFkQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBaUJBOztBQWZBO0VBQ0ksV0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0FBbUJKOztBQWpCQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSw0QkFBQTtFQUNBLHFCQUFBO0FBc0JKOztBQXBCQTtFQUNJLDhCQUFBO0FBdUJKOztBQXBCQTtFQUNJLDRCQUFBO0FBdUJKOztBQXBCQTtFQUNJLGtCQUFBO0FBdUJKOztBQXJCQTtFQUNRLG1CQUFBO0VBQ0osZ0JBQUE7RUFFQSxjQUFBO0FBdUJKOztBQXJCQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBd0JKOztBQXRCQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FBeUJKOztBQXZCQTtFQUNBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtDQUFBO0VBMEJGO0FBQ0YiLCJmaWxlIjoibGVhdmUtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXR0bCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luOiA3cHggMCAwIC0xOXB4O1xufVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAucGF5bWVudC1yb3d7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICB9XG4ubGVmdC1wYXkge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ucmlnaHQtcGF5IHtcbiAgICB3aWR0aDogMjUlO1xufVxuLnJvdy0xIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucm93LTIgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjVweDtcbmNvbG9yOiAjNEQ0RDREO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgfVxuLnJvdy0yIHN0cm9uZyB7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbndpZHRoOjY1cHg7XG5vbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiAjNEQ0RDREO1xuICAgIH1cbi5yb3ctMyBzcGFuIHtcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDI1cHg7XG5jb2xvcjogIzRENEQ0RDtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIH1cbi5yb3ctMyBzdHJvbmcge1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG53aWR0aDo2NXB4O1xub250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzRENEQ0RDtcbiAgICB9XG4gICAucm93LTQgc3BhbiB7XG4gICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyNXB4O1xuY29sb3I6ICM0RDRENEQ7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB9XG4ucm93LTQgc3Ryb25nIHtcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDI1cHg7XG5jb2xvcjogIzBBNDA4QTtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xubWFyZ2luLWxlZnQ6MTBweDtcbiAgICB9IFxuLnJvdy0yIHtcbiAgICBjb2xvcjogIzMzMztcbn1cbi5yb3ctM3tcbiAgICBjb2xvcjogIzMzMztcbn0gXG4ucmlnaHQtcGF5IGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzBBNDA4QTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiA0NSU7XG59XG5pb24tYnV0dG9uLmdyZWVuIHtcbiAgICAtLWJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiA0NSUgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ucmVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuICAgIGJvdHRvbTogNSUgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ub25seS1ncmVlbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xuXG59XG5pb24tYnV0dG9uLm9ubHktcmVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuXG59XG4ucm93LTQge1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbn1cbi5yZWdpc3RyYXRpb24tZmllbGQtc2VjdGlvbntcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuXG4gICAgei1pbmRleDogOTk5OTk7XG59XG4uZm9ybS1jdHJsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkMmQwZTIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkMmQwZTIgIWltcG9ydGFudDtcbn1cbn0gICAiXX0= */";

/***/ }),

/***/ 2565:
/*!******************************************************************!*\
  !*** ./src/app/leave-history/leave-history.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n    <div class=\"title-rw\">\n      <h2>PAYMENT HISTORY</h2>\n    </div>\n    <div class=\"registration-field-section\">\n    <ion-list>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Open/Approved/Rejected\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n</ion-list>\n</div>\n        <ion-list class=\"payment-row\">\n          \n          <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 - 28/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Name</strong> : <span> Player’s nam</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Reason</strong> : <span>Reason test</span>\n              </div>\n                            \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"green\">Accept</ion-button>\n              <ion-button size=\"small\" class=\"red\">Reject</ion-button>\n            </div>\n          </ion-item>\n\n           <ion-item>\n\n            <div class=\"left-pay\">\n              <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 - 28/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Name</strong> : <span> Player’s nam</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Reason</strong> : <span>Reason test</span>\n              </div>\n              \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"only-green\">Approved</ion-button>\n            </div>\n          </ion-item>\n\n           <ion-item>\n\n            <div class=\"left-pay\">\n             <div class=\"row-1\">\n                  <img src=\"/assets/images/calendar.png\"> <span>22/08/2022 - 28/08/2022</span>\n              </div>\n              <div class=\"row-2\">\n                  <strong>Name</strong> : <span> Player’s nam</span>\n              </div>\n              <div class=\"row-3\">\n                  <strong>Reason</strong> : <span>Reason test</span>\n              </div>\n              \n            </div>\n            <div class=\"right-pay\">\n              <ion-button size=\"small\" class=\"only-red\">Rejected</ion-button>\n            </div>\n          </ion-item>\n\n\n        </ion-list>\n\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_leave-history_leave-history_module_ts.js.map