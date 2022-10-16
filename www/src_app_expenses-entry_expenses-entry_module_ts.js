"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_expenses-entry_expenses-entry_module_ts"],{

/***/ 2044:
/*!*****************************************************************!*\
  !*** ./src/app/expenses-entry/expenses-entry-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesEntryPageRoutingModule": () => (/* binding */ ExpensesEntryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _expenses_entry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses-entry.page */ 4691);




const routes = [
    {
        path: '',
        component: _expenses_entry_page__WEBPACK_IMPORTED_MODULE_0__.ExpensesEntryPage
    }
];
let ExpensesEntryPageRoutingModule = class ExpensesEntryPageRoutingModule {
};
ExpensesEntryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExpensesEntryPageRoutingModule);



/***/ }),

/***/ 9236:
/*!*********************************************************!*\
  !*** ./src/app/expenses-entry/expenses-entry.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesEntryPageModule": () => (/* binding */ ExpensesEntryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _expenses_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses-entry-routing.module */ 2044);
/* harmony import */ var _expenses_entry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses-entry.page */ 4691);







let ExpensesEntryPageModule = class ExpensesEntryPageModule {
};
ExpensesEntryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _expenses_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpensesEntryPageRoutingModule
        ],
        declarations: [_expenses_entry_page__WEBPACK_IMPORTED_MODULE_1__.ExpensesEntryPage]
    })
], ExpensesEntryPageModule);



/***/ }),

/***/ 4691:
/*!*******************************************************!*\
  !*** ./src/app/expenses-entry/expenses-entry.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesEntryPage": () => (/* binding */ ExpensesEntryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _expenses_entry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses-entry.page.html?ngResource */ 8429);
/* harmony import */ var _expenses_entry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses-entry.page.scss?ngResource */ 6325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ExpensesEntryPage = class ExpensesEntryPage {
    constructor() { }
    ngOnInit() {
    }
};
ExpensesEntryPage.ctorParameters = () => [];
ExpensesEntryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-expenses-entry',
        template: _expenses_entry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expenses_entry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpensesEntryPage);



/***/ }),

/***/ 6325:
/*!********************************************************************!*\
  !*** ./src/app/expenses-entry/expenses-entry.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\nion-item.view-history a {\n  margin: auto;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VzLWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUpBO0VBQ0Usc0JBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMSTtFQUNJLG1CQUFBO0VBQ0osZ0JBQUE7RUFFQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDRSxzQkFBQTtBQVFOOztBQU5BO0VBQ0ksZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtDQUFBO0VBWUY7RUFWRjtJQUNJLDBDQUFBO0VBWUY7QUFDRiIsImZpbGUiOiJleHBlbnNlcy1lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXR0bCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luOiA3cHggMCAwIC0xOXB4O1xufVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAucmVnaXN0cmF0aW9uLWZpZWxkLXNlY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcblxuICAgIHotaW5kZXg6IDk5OTk5O1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmN1c3RvbS1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzBBNDA4QSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm9zdGVyLXJvd3tcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIH1cbiAgIFxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwZXJlbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2QyZDBlMiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtLnZpZXctaGlzdG9yeSBhIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMwQTQwOEE7XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkMmQwZTIgIWltcG9ydGFudDtcbn1cbi5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxufSAgICJdfQ== */";

/***/ }),

/***/ 8429:
/*!********************************************************************!*\
  !*** ./src/app/expenses-entry/expenses-entry.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n<ion-content>\n  <div class=\"title-rw\">\n      <h2>Expenses Entry</h2>\n    </div>\n  <div class=\"registration-field-section\">\n    <ion-list>\n    <ion-item lines=\"none\">\n   <ion-select class=\"form-ctrl\" placeholder=\"Select Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-select class=\"form-ctrl\" placeholder=\"Select Expense Type\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-textarea  class=\"form-ctrl\" placeholder=\"Description\"></ion-textarea>\n  </ion-item>\n   <ion-item lines=\"none\">\n   <ion-input type=\"text\"  class=\"form-ctrl\" placeholder=\"Amount\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <ion-button type=\"submit\" class=\"custom-button\">Submit</ion-button> \n</ion-item>\n</ion-list>\n</div>\n  \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_expenses-entry_expenses-entry_module_ts.js.map