"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_coach-dashboard_coach-dashboard_module_ts"],{

/***/ 1698:
/*!*******************************************************************!*\
  !*** ./src/app/coach-dashboard/coach-dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachDashboardPageRoutingModule": () => (/* binding */ CoachDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _coach_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coach-dashboard.page */ 1148);




const routes = [
    {
        path: '',
        component: _coach_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.CoachDashboardPage
    }
];
let CoachDashboardPageRoutingModule = class CoachDashboardPageRoutingModule {
};
CoachDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachDashboardPageRoutingModule);



/***/ }),

/***/ 3380:
/*!***********************************************************!*\
  !*** ./src/app/coach-dashboard/coach-dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachDashboardPageModule": () => (/* binding */ CoachDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _coach_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coach-dashboard-routing.module */ 1698);
/* harmony import */ var _coach_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coach-dashboard.page */ 1148);







let CoachDashboardPageModule = class CoachDashboardPageModule {
};
CoachDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coach_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoachDashboardPageRoutingModule
        ],
        declarations: [_coach_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.CoachDashboardPage]
    })
], CoachDashboardPageModule);



/***/ }),

/***/ 1148:
/*!*********************************************************!*\
  !*** ./src/app/coach-dashboard/coach-dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachDashboardPage": () => (/* binding */ CoachDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _coach_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coach-dashboard.page.html?ngResource */ 4049);
/* harmony import */ var _coach_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coach-dashboard.page.scss?ngResource */ 5070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let CoachDashboardPage = class CoachDashboardPage {
    constructor() {
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    }
    ngOnInit() {
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    ;
};
CoachDashboardPage.ctorParameters = () => [];
CoachDashboardPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal,] }]
};
CoachDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-coach-dashboard',
        template: _coach_dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_coach_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoachDashboardPage);



/***/ }),

/***/ 5070:
/*!**********************************************************************!*\
  !*** ./src/app/coach-dashboard/coach-dashboard.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.middle-ttl h2 span {\n  color: #FF3528;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n  width: 100%;\n  float: left;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n  float: left;\n}\n\n.title-rw h2 span {\n  color: #FF0000;\n}\n\n.title-rw a {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  text-align: right;\n  color: #FF0000;\n  text-decoration: none;\n  float: right;\n  padding-right: 10px;\n  margin-top: 18px;\n}\n\n.dashboard-header {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.dashboard-header-top {\n  margin: 0 20px 15px;\n  border-bottom: 2px solid #ebf2f7;\n  padding: 0;\n}\n\n.dashboard-header-top-left h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0A408A;\n  margin-bottom: 0px !important;\n}\n\n.dashboard-header-top-right {\n  text-align: right;\n}\n\n.dashboard-header-top-right img {\n  vertical-align: middle;\n}\n\n.dashboard-header-btm-col {\n  text-align: center;\n}\n\n.dashboard-header-btm-col img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.dashboard-header-btm-col h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  color: #4D4D4D;\n  margin-top: 0;\n}\n\n.events-img-section {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.img-row {\n  width: 100%;\n  padding: 15px;\n}\n\n.img-row img {\n  width: 100%;\n  position: relative;\n}\n\n.img-caption {\n  position: absolute;\n  bottom: 25px;\n  left: 25px;\n  background: url(/assets/images/ribbon.png) no-repeat !important;\n  height: 35px;\n  width: 95%;\n}\n\n.img-caption h5 {\n  color: #fff;\n  font-size: 15px;\n  color: #fff;\n  font-size: 15px;\n  margin: 8px;\n  font-family: \"Poppins\";\n}\n\n.bttns-row {\n  width: 100%;\n  float: left;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.bttns-row-middle {\n  text-align: center;\n  color: #FF3528;\n}\n\n.bttns-row-middle h3 {\n  margin: 5px auto 0 auto;\n  vertical-align: middle;\n  line-height: 48px;\n  height: 37px;\n  width: 2px;\n  background: #FF3528;\n}\n\n.custom-button span {\n  text-transform: capitalize;\n  margin-left: 8px;\n  border-left: 1px solid #fff;\n  padding-left: 10px;\n}\n\nion-col.bttns-row-left {\n  padding: 0;\n}\n\nion-col.bttns-row-right {\n  padding: 0;\n}\n\n.right-to-play-bdy {\n  width: 100%;\n  float: left;\n  margin-top: -10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 22px;\n}\n\n.right-to-play-left {\n  text-align: left;\n}\n\n.right-to-play-left img {\n  background: #EBF2F7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.right-to-play-mdl {\n  text-align: left;\n}\n\n.right-to-play-mdl h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n}\n\n.right-to-play-mdl h3 span {\n  color: #FF3528;\n}\n\n.right-to-play-right {\n  text-align: right;\n  padding-top: 22px;\n}\n\n.right-to-play-right ion-icon {\n  color: #0A408A;\n}\n\n.single-event-apply-modal {\n  margin-top: 85%;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.single-event-apply-modal .custom-button {\n  margin-bottom: 20px;\n}\n\n.close-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 9999999;\n}\n\n@media (prefers-color-scheme: dark) {\n  .form-ctrl::-moz-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl:-ms-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  .form-ctrl::-webkit-input-placeholder {\n    color: black;\n    z-index: 9999;\n  }\n  ion-list {\n    background: #fff;\n  }\n  ion-item {\n    --background:transperent;\n  }\n  .form-ctrl {\n    color: #333 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNBLGNBQUE7QUFFQTs7QUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQU1KOztBQUpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxBO0VBQ0Usc0JBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkM7RUFDQSxjQUFBO0FBU0Q7O0FBUEE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkM7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBWUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFhSjs7QUFYQTtFQUNJLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxzQkFBQTtBQWVKOztBQVpBO0VBQ0ksa0JBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0osMkNBQUE7RUFDQSxhQUFBO0VBQ0ksa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBaUJBOztBQWZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBbUJKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBc0JKOztBQXBCQTtFQUNRLG1CQUFBO0VBQ0osZ0JBQUE7RUFFQSxjQUFBO0FBc0JKOztBQXBCQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxVQUFBO0FBMkJKOztBQXpCQTtFQUNJLFVBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBNkJKOztBQTFCQTtFQUNJLGdCQUFBO0FBNkJKOztBQTNCQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksZ0JBQUE7QUErQko7O0FBN0JBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWdDQTs7QUE5QkE7RUFDSSxjQUFBO0FBaUNKOztBQS9CQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksY0FBQTtBQW1DSjs7QUFqQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBb0NKOztBQWxDQTtFQUNJLG1CQUFBO0FBcUNKOztBQW5DQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQXNDSjs7QUFwQ0E7RUFDQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBdUNBO0VBcENGO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFzQ0E7RUFuQ0Y7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQXFDQTtFQW5DRjtJQUNJLGdCQUFBO0VBcUNGO0VBbkNGO0lBQ0ksd0JBQUE7RUFxQ0Y7RUFuQ0Y7SUFDSSxzQkFBQTtFQXFDRjtBQUNGIiwiZmlsZSI6ImNvYWNoLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXR0bCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luOiA3cHggMCAwIC0xOXB4O1xufVxuLm1pZGRsZS10dGwgaDIgc3BhbntcbmNvbG9yOiAjRkYzNTI4O1xuICAgIH1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gLnRpdGxlLXJ3IGgyIHNwYW57XG4gY29sb3I6I0ZGMDAwMDtcbiB9ICAgXG4udGl0bGUtcncgYXtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI0ZGMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cbiAuZGFzaGJvYXJkLWhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmRhc2hib2FyZC1oZWFkZXItdG9wIHtcbiAgICBtYXJnaW46IDAgMjBweCAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWJmMmY3O1xuICAgIHBhZGRpbmc6IDA7XG59XG4uZGFzaGJvYXJkLWhlYWRlci10b3AtbGVmdCBoM3tcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufSAgXG4uZGFzaGJvYXJkLWhlYWRlci10b3AtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLXRvcC1yaWdodCBpbWd7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0gXG4uZGFzaGJvYXJkLWhlYWRlci1idG17fVxuLmRhc2hib2FyZC1oZWFkZXItYnRtLWNvbHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5kYXNoYm9hcmQtaGVhZGVyLWJ0bS1jb2wgaW1ne1xuICAgIGJhY2tncm91bmQ6ICNFQkYyRjc7XG5ib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xucGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZGFzaGJvYXJkLWhlYWRlci1idG0tY29sIGgze1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxMnB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jb2xvcjogIzRENEQ0RDtcbm1hcmdpbi10b3A6IDA7XG59XG4uZXZlbnRzLWltZy1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmltZy1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG4uaW1nLXJvdyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmltZy1jYXB0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDI1cHg7XG4gICAgbGVmdDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcmliYm9uLnBuZykgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA5NSU7XG59XG4uaW1nLWNhcHRpb24gaDV7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xufVxuLmJ0dG5zLXJvd3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xufVxuLnJlZ2lzdHJhdGlvbi1maWVsZC1zZWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG5cbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5jdXN0b20tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwQTQwOEEgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0dG5zLXJvdy1taWRkbGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGMzUyODtcbn1cbi5idHRucy1yb3ctbWlkZGxlIGgzIHtcbiAgICBtYXJnaW46IDVweCBhdXRvIDAgYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNGRjM1Mjg7XG59XG4uY3VzdG9tLWJ1dHRvbiBzcGFuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tY29sLmJ0dG5zLXJvdy1sZWZ0IHtcbiAgICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbC5idHRucy1yb3ctcmlnaHQge1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucmlnaHQtdG8tcGxheS1iZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG5cbi5yaWdodC10by1wbGF5LWxlZnR7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuLnJpZ2h0LXRvLXBsYXktbGVmdCBpbWd7XG4gICAgYmFja2dyb3VuZDogI0VCRjJGNztcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJpZ2h0LXRvLXBsYXktbWRse1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cbi5yaWdodC10by1wbGF5LW1kbCBoM3tcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xuY29sb3I6ICMwMDAwMDA7XG59XG4ucmlnaHQtdG8tcGxheS1tZGwgaDMgc3BhbntcbiAgICBjb2xvcjojRkYzNTI4O1xufVxuLnJpZ2h0LXRvLXBsYXktcmlnaHR7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcbn1cbi5yaWdodC10by1wbGF5LXJpZ2h0IGlvbi1pY29ue1xuICAgIGNvbG9yOiAjMEE0MDhBO1xufVxuLnNpbmdsZS1ldmVudC1hcHBseS1tb2RhbHtcbiAgICBtYXJnaW4tdG9wOiA4NSU7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNpbmdsZS1ldmVudC1hcHBseS1tb2RhbCAuY3VzdG9tLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xufVxuLmNsb3NlLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG4uZm9ybS1jdHJsOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4Ojk5OTk7XG59XG5cbi5mb3JtLWN0cmw6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6OTk5OTtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BlcmVudDtcbn1cbi5mb3JtLWN0cmwge1xuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG59Il19 */";

/***/ }),

/***/ 4049:
/*!**********************************************************************!*\
  !*** ./src/app/coach-dashboard/coach-dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-header >\n     <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"menu\"></ion-icon>   \n              </ion-col>\n              <ion-col size=\"6\" class=\"middle-ttl\">\n                <h2>Hello <span>Coach! </span></h2>\n              </ion-col>\n              <ion-col size=\"4\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n</ion-header>\n<ion-content>\n    \n    <div class=\"dashboard-header\">\n        <ion-grid class=\"dashboard-header-top\">\n          <ion-row>\n              <ion-col size=\"9\" class=\"dashboard-header-top-left\">\n                    <h3>Welcome to your Dashboard!</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-top-right\">\n                <ion-button size=\"small\">Enquiry</ion-button>\n              </ion-col>\n          </ion-row>\n     </ion-grid> \n      <ion-grid class=\"dashboard-header-btm\">\n          <ion-row>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/jersey-view\" src=\"/assets/images/soccer-jersey1.png\">\n                    <h3 routerLink=\"/jersey-view\">Jersey / Kit</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/roster\"  src=\"/assets/images/checklist-1.png\">\n                    <h3 routerLink=\"/roster\" >Roster</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img src=\"/assets/images/checked1.png\">\n                    <h3>Attendance</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img src=\"/assets/images/debit-card.png\">\n                    <h3>Payments</h3>   \n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col id=\"open-modal\" expand=\"block\" size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img src=\"/assets/images/inventory.png\">\n                    <h3>Inventory</h3>   \n              </ion-col>\n              <ion-col id=\"open-modal2\" expand=\"block\" size=\"3\" class=\"dashboard-header-btm-col\" >\n                    <img src=\"/assets/images/accounting.png\">\n                    <h3>Expenses</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img routerLink=\"/leave-request\"  src=\"/assets/images/stamp.png\">\n                    <h3 routerLink=\"/leave-request\"  >Leave</h3>   \n              </ion-col>\n              <ion-col size=\"3\" class=\"dashboard-header-btm-col\">\n                    <img src=\"/assets/images/event1.png\">\n                    <h3>Events</h3>   \n              </ion-col>\n          </ion-row>\n     </ion-grid>  \n    </div>\n    <div class=\"right-to-play-bdy\">\n        <ion-grid>\n          <ion-row>\n              <ion-col size=\"3\" class=\"right-to-play-left\">\n                      <img src=\"/assets/images/rupee1.png\"> \n              </ion-col>\n              <ion-col size=\"6\" class=\"right-to-play-mdl\">\n                      <h3>Revenue</h3>\n              </ion-col>\n              <ion-col size=\"3\" class=\"right-to-play-right\">\n                      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <div class=\"title-rw\">\n      <h2>Events</h2>\n      <a href=\"#\">View All</a>\n    </div>\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n     \n    </div>\n    </div>\n<ion-modal class=\"single-event-apply-modal\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n          <img class=\"close-img\" (click)=\"cancel()\" src=\"/assets/images/cancel.png\">\n         \n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <div class=\"event-pop-form\">\n          <div class=\"registration-field-section\">\n    <ion-list>\n      <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">Acknowledgement</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">STOCK</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">NEW REQUESTS</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">ISSUANCE</ion-button> \n  </ion-item>\n \n</ion-list>\n\n</div>\n  \n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n   <ion-modal class=\"single-event-apply-modal\" trigger=\"open-modal2\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      \n      <ion-content class=\"ion-padding\">\n        <img class=\"close-img\" (click)=\"cancel()\" src=\"/assets/images/cancel.png\">\n        <div class=\"event-pop-form\">\n          <div class=\"registration-field-section\">\n    <ion-list>\n      <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">Acknowledgement</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">STOCK</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">NEW REQUESTS</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">ISSUANCE</ion-button> \n  </ion-item>\n <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">NEW REQUESTS</ion-button> \n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button class=\"custom-button\">ISSUANCE</ion-button> \n  </ion-item>\n</ion-list>\n\n</div>\n  \n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\" routerLink=\"/pre-login-dashboard\"></ion-icon>\n              <h5 class=\"act\" routerLink=\"/pre-login-dashboard\" >Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_coach-dashboard_coach-dashboard_module_ts.js.map