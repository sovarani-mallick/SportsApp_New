"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_attendance_attendance_module_ts"],{

/***/ 4286:
/*!*********************************************************!*\
  !*** ./src/app/attendance/attendance-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageRoutingModule": () => (/* binding */ AttendancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page */ 2577);




const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
    }
];
let AttendancePageRoutingModule = class AttendancePageRoutingModule {
};
AttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AttendancePageRoutingModule);



/***/ }),

/***/ 8503:
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageModule": () => (/* binding */ AttendancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-routing.module */ 4286);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page */ 2577);







let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendancePageRoutingModule
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_1__.AttendancePage]
    })
], AttendancePageModule);



/***/ }),

/***/ 2577:
/*!***********************************************!*\
  !*** ./src/app/attendance/attendance.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePage": () => (/* binding */ AttendancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _attendance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page.html?ngResource */ 3528);
/* harmony import */ var _attendance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page.scss?ngResource */ 398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AttendancePage = class AttendancePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
AttendancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-attendance',
        template: _attendance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_attendance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AttendancePage);



/***/ }),

/***/ 398:
/*!************************************************************!*\
  !*** ./src/app/attendance/attendance.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  margin-bottom: 0;\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n  margin-top: -20px !important;\n}\n\n.row-prf {\n  width: 100%;\n  float: left;\n}\n\n.row-prf ion-label {\n  display: inline-block;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n}\n\n.row-prf ion-checkbox {\n  display: inline-block;\n  float: right;\n  vertical-align: middle;\n  padding: 0 !important;\n  margin: 0 !important;\n  --background: #fff!important;\n  border: 1px solid #4d4d4d !important;\n}\n\n.row-prf p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4D4D4D;\n  margin-block-start: 5px !important;\n  margin-block-end: 10px !important;\n}\n\n.all-select {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: right;\n  color: #4D4D4D;\n  float: right;\n  margin: 0 20px 20px 0;\n  text-decoration: none;\n}\n\n.atten-btn-row {\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\n.custom-button {\n  background: #0A408A !important;\n  border-radius: 30px !important;\n  width: 90%;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 15px 20px;\n  text-align: center;\n  color: #fff;\n  display: inline-block;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n  float: left !important;\n  width: 100% !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n    float: left !important;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxJO0VBQ0ksbUJBQUE7RUFDSixnQkFBQTtFQUVBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFTSjs7QUFQSTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVUo7O0FBUkM7RUFDRyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFXQTs7QUFUQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFZSjs7QUFWQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBYUE7O0FBWEE7RUFDQyxzQkFBQTtFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWVKOztBQWJBO0VBQ0csOEJBQUE7RUFDQyw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBZ0JKOztBQWRBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBaUJKOztBQWZBO0VBQ0E7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0NBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0VBa0JGO0FBQ0YiLCJmaWxlIjoiYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXR0bCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luOiA3cHggMCAwIC0xOXB4O1xufVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWZpZWxkLXNlY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcblxuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206MDtcbn1cbi5yb3N0ZXItcm93e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xuICAgICB9XG4gICAgLnJvdy1wcmYge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZmxvYXQ6bGVmdFxuICAgIH1cbiAucm93LXByZiBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTZweDtcbmxpbmUtaGVpZ2h0OiAyNHB4O1xuY29sb3I6ICMwQTQwOEE7XG59XG4ucm93LXByZiBpb24tY2hlY2tib3h7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGQ0ZDRkIWltcG9ydGFudDtcbn1cbi5yb3ctcHJmIHB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMThweDtcbmNvbG9yOiAjNEQ0RDREO1xubWFyZ2luLWJsb2NrLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbm1hcmdpbi1ibG9jay1lbmQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5hbGwtc2VsZWN0e1xuIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICM0RDRENEQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYXR0ZW4tYnRuLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXN0b20tYnV0dG9uIHtcbiAgIGJhY2tncm91bmQ6ICMwQTQwOEEgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwZXJlbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2QyZDBlMiAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbn0gICAiXX0= */";

/***/ }),

/***/ 3528:
/*!************************************************************!*\
  !*** ./src/app/attendance/attendance.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\" name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n<ion-content>\n  <div class=\"title-rw\">\n      <h2>Roster</h2>\n    </div>\n  <div class=\"registration-field-section\">\n    <ion-list>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-select class=\"form-ctrl\" placeholder=\"Sports\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"date\" ></ion-input>\n  </ion-item>\n</ion-list>\n</div>\n<ion-list class=\"roster-row\">\n          <a href=\"#\" class=\"all-select\">Select all</a>\n          <ion-item>\n              <div class=\"row-prf\">\n                <ion-label>Themed checkbox</ion-label>\n                  <ion-checkbox slot=\"start\"></ion-checkbox>\n  \n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <ion-label>Themed checkbox</ion-label>\n                  <ion-checkbox slot=\"start\"></ion-checkbox>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                 <ion-label>Themed checkbox</ion-label>\n                  <ion-checkbox slot=\"start\"></ion-checkbox>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                 <ion-label>Themed checkbox</ion-label>\n                  <ion-checkbox slot=\"start\"></ion-checkbox>\n              </div>\n          </ion-item>\n          <div class=\"atten-btn-row\">\n            <a class=\"custom-button\">Make Payment</a>\n          </div>\n        </ion-list>  \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_attendance_attendance_module_ts.js.map