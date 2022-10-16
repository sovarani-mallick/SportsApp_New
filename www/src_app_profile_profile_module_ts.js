"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 6611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ProfilePage = class ProfilePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    Back() {
        this.navCtrl.back();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 6611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 0;\n  display: inline-block;\n  vertical-align: bottom;\n  margin-top: 15px;\n}\n\n.row-1 {\n  margin-bottom: 10px;\n}\n\n.row-1 img {\n  vertical-align: middle;\n}\n\n.row-1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  color: #4D4D4D;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.left-profile-text h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #313131;\n}\n\n.right-profile-icon ion-icon {\n  background: #0A408A;\n  border: 5px solid #FFFFFF;\n  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  font-size: 60px;\n  text-align: center;\n  margin: 25px 0px 0 20px;\n  float: right;\n}\n\n.payment-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\n.row-prf {\n  width: 100%;\n  float: left;\n}\n\n.row-prf strong {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #0A408A;\n}\n\n.row-prf p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4D4D4D;\n  margin-block-start: 5px !important;\n  margin-block-end: 10px !important;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0FBT0o7O0FBTEE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQU9BOztBQUxBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFBOztBQU5BO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFTSjs7QUFQQztFQUNHLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFVSjs7QUFSSTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBV0o7O0FBVEk7RUFDQSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWUE7O0FBVkE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtBQWFBOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUFjSjs7QUFaQTtFQUNBO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGtDQUFBO0VBZUY7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtdHRsIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzBBNDA4QTtcbiAgICBtYXJnaW46IDdweCAwIDAgLTE5cHg7XG59XG4ubGVmdC1iYWNrIGlvbi1pY29uIHsgXG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVye1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cbi5yaWdodC1wcm9maWxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucmlnaHQtcHJvZmlsZSBpb24taWNvbiB7XG4gICAgYmFja2dyb3VuZDogIzBBNDA4QTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ubm90aWZpY2Fzb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucm93LTF7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLnJvdy0xIGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSBcbi5yb3ctMSBzcGFuIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDQwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMXB4O1xuXG5jb2xvcjogIzRENEQ0RDtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xubWFyZ2luLWxlZnQ6MTBweDtcbn1cbi5sZWZ0LXByb2ZpbGUtdGV4dCBoM3tcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDYwMDtcbmZvbnQtc2l6ZTogMjBweDtcbmxpbmUtaGVpZ2h0OiAzMHB4O1xuY29sb3I6ICMzMTMxMzE7XG59XG4ucmlnaHQtcHJvZmlsZS1pY29uIGlvbi1pY29ue1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHggMHB4IDAgMjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4gLnBheW1lbnQtcm93e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgfVxuICAgIC5yb3ctcHJmIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsb2F0OmxlZnRcbiAgICB9XG4gICAgLnJvdy1wcmYgc3Ryb25ne1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxNnB4O1xubGluZS1oZWlnaHQ6IDI0cHg7XG5jb2xvcjogIzBBNDA4QTtcbiAgICB9XG4ucm93LXByZiBwe1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDE4cHg7XG5jb2xvcjogIzRENEQ0RDtcbm1hcmdpbi1ibG9jay1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG5tYXJnaW4tYmxvY2stZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG59ICAgIl19 */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon (click)=\"Back()\"\n                    name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    \n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n          <ion-row>\n              <ion-col size=\"8\" class=\"left-profile-text\">\n                      <h3>Player’s Name</h3>\n                      <div class=\"row-1\">\n                        <img src=\"/assets/images/calendar.png\"> <span>06/09/2022</span>\n                      </div>\n                      <div class=\"row-1\">\n                        <img src=\"/assets/images/phone-call.png\"> <span>(+91) 99999 99999</span>\n                      </div>\n                      <div class=\"row-1\">\n                        <img src=\"/assets/images/email-1.png\"> <span>mail@website.com</span>\n                      </div>\n              </ion-col>\n              <ion-col size=\"4\" class=\"right-profile-icon\">\n                <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n              \n          </ion-row>\n     </ion-grid> \n     <ion-list class=\"payment-row\">\n          \n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Aadhar Number</strong>\n                  <p>0000 0000 0000</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Age Group</strong>\n                  <p>Under 16</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Blood Group</strong>\n                  <p>B +ve</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Address</strong>\n                  <p>Address text goes here text goes here text goes here  text goes here text goes here text goes here</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Parent’s Name</strong>\n                  <p>Name Middle Surname</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Parent’s Contact Number</strong>\n                  <p>(+91) 99999 99999</p>\n              </div>\n          </ion-item>\n          <ion-item>\n              <div class=\"row-prf\">\n                  <strong>Date Of Joining</strong>\n                  <p>06/09/2022</p>\n              </div>\n          </ion-item>\n\n           \n\n\n        </ion-list>    \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map