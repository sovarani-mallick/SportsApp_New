"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-roster_user-roster_module_ts"],{

/***/ 3625:
/*!***********************************************************!*\
  !*** ./src/app/user-roster/user-roster-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRosterPageRoutingModule": () => (/* binding */ UserRosterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _user_roster_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roster.page */ 3752);




const routes = [
    {
        path: '',
        component: _user_roster_page__WEBPACK_IMPORTED_MODULE_0__.UserRosterPage
    }
];
let UserRosterPageRoutingModule = class UserRosterPageRoutingModule {
};
UserRosterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserRosterPageRoutingModule);



/***/ }),

/***/ 9282:
/*!***************************************************!*\
  !*** ./src/app/user-roster/user-roster.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRosterPageModule": () => (/* binding */ UserRosterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_roster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roster-routing.module */ 3625);
/* harmony import */ var _user_roster_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roster.page */ 3752);







let UserRosterPageModule = class UserRosterPageModule {
};
UserRosterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_roster_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRosterPageRoutingModule
        ],
        declarations: [_user_roster_page__WEBPACK_IMPORTED_MODULE_1__.UserRosterPage]
    })
], UserRosterPageModule);



/***/ }),

/***/ 3752:
/*!*************************************************!*\
  !*** ./src/app/user-roster/user-roster.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRosterPage": () => (/* binding */ UserRosterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_roster_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-roster.page.html?ngResource */ 7416);
/* harmony import */ var _user_roster_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roster.page.scss?ngResource */ 6603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UserRosterPage = class UserRosterPage {
    constructor() { }
    ngOnInit() {
    }
};
UserRosterPage.ctorParameters = () => [];
UserRosterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-roster',
        template: _user_roster_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_roster_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserRosterPage);



/***/ }),

/***/ 6603:
/*!**************************************************************!*\
  !*** ./src/app/user-roster/user-roster.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.row-prf {\n  width: 100%;\n  float: left;\n}\n\n.row-prf img {\n  vertical-align: middle;\n}\n\n.row-prf strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n  margin-left: 10px;\n}\n\n.row-prf p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4D4D4D;\n  margin-block-start: 5px !important;\n  margin-block-end: 10px !important;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcm9zdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUpBO0VBQ0Usc0JBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMSTtFQUNJLG1CQUFBO0VBQ0osZ0JBQUE7RUFFQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBJO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFVSjs7QUFSSztFQUNELHNCQUFBO0FBV0o7O0FBVEk7RUFDQSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFZQTs7QUFWQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBYUE7O0FBWEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQWNKOztBQVpBO0VBQ0E7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0NBQUE7RUFlRjtFQWJGO0lBQ0ksMENBQUE7RUFlRjtBQUNGIiwiZmlsZSI6InVzZXItcm9zdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubGVmdC1iYWNrIGlvbi1pY29uIHsgXG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVye1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cbi5yaWdodC1wcm9maWxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucmlnaHQtcHJvZmlsZSBpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZDogIzBBNDA4QTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubm90aWZpY2Fzb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLnRpdGxlLXJ3IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlLXJ3IGgye1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBBNDA4QTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tZmllbGQtc2VjdGlvbntcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuXG4gICAgei1pbmRleDogOTk5OTk7XG59XG4uZm9ybS1jdHJsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbn1cbi5yb3N0ZXItcm93e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgfVxuICAgIC5yb3ctcHJmIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsb2F0OmxlZnRcbiAgICB9XG4gICAgIC5yb3ctcHJmIGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAucm93LXByZiBzdHJvbmd7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE2cHg7XG5saW5lLWhlaWdodDogMjRweDtcbmNvbG9yOiAjMEE0MDhBO1xubWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuLnJvdy1wcmYgcHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAxOHB4O1xuY29sb3I6ICM0RDRENEQ7XG5tYXJnaW4tYmxvY2stc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xubWFyZ2luLWJsb2NrLWVuZDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwZXJlbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2QyZDBlMiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspe1xuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwZXJlbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2QyZDBlMiAhaW1wb3J0YW50O1xufVxuLm1kIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICB9XG59ICAgIl19 */";

/***/ }),

/***/ 7416:
/*!**************************************************************!*\
  !*** ./src/app/user-roster/user-roster.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n<ion-content>\n  <div class=\"title-rw\">\n      <h2>Roster</h2>\n    </div>\n  <div class=\"registration-field-section\">\n    <ion-list>\n  \n  <ion-item lines=\"none\">\n   <ion-input type=\"date\" class=\"form-ctrl\" placeholder=\"date\" ></ion-input>\n  </ion-item>\n</ion-list>\n</div>\n<ion-list class=\"roster-row\">\n          \n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <img src=\"/assets/images/calendar.png\"><strong>10:00 AM - 12:00 PM</strong>\n                  <p>Text goes here text goes here text goes here, text goes here.</p>\n              </div>\n          </ion-item>\n  \n        </ion-list>  \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_user-roster_user-roster_module_ts.js.map