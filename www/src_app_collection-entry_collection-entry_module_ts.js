"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_collection-entry_collection-entry_module_ts"],{

/***/ 1646:
/*!*********************************************************************!*\
  !*** ./src/app/collection-entry/collection-entry-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionEntryPageRoutingModule": () => (/* binding */ CollectionEntryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _collection_entry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-entry.page */ 6098);




const routes = [
    {
        path: '',
        component: _collection_entry_page__WEBPACK_IMPORTED_MODULE_0__.CollectionEntryPage
    }
];
let CollectionEntryPageRoutingModule = class CollectionEntryPageRoutingModule {
};
CollectionEntryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CollectionEntryPageRoutingModule);



/***/ }),

/***/ 8650:
/*!*************************************************************!*\
  !*** ./src/app/collection-entry/collection-entry.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionEntryPageModule": () => (/* binding */ CollectionEntryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _collection_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-entry-routing.module */ 1646);
/* harmony import */ var _collection_entry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection-entry.page */ 6098);







let CollectionEntryPageModule = class CollectionEntryPageModule {
};
CollectionEntryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _collection_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__.CollectionEntryPageRoutingModule
        ],
        declarations: [_collection_entry_page__WEBPACK_IMPORTED_MODULE_1__.CollectionEntryPage]
    })
], CollectionEntryPageModule);



/***/ }),

/***/ 6098:
/*!***********************************************************!*\
  !*** ./src/app/collection-entry/collection-entry.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionEntryPage": () => (/* binding */ CollectionEntryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _collection_entry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-entry.page.html?ngResource */ 3201);
/* harmony import */ var _collection_entry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection-entry.page.scss?ngResource */ 4341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let CollectionEntryPage = class CollectionEntryPage {
    constructor() { }
    ngOnInit() {
    }
};
CollectionEntryPage.ctorParameters = () => [];
CollectionEntryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-collection-entry',
        template: _collection_entry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_collection_entry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CollectionEntryPage);



/***/ }),

/***/ 4341:
/*!************************************************************************!*\
  !*** ./src/app/collection-entry/collection-entry.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.registration-field-section {\n  background: #FFFFFF;\n  margin-top: 17px;\n  z-index: 99999;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\n.custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.roster-row {\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  height: 100%;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\nion-item.view-history a {\n  margin: auto;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #0A408A;\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxJO0VBQ0ksbUJBQUE7RUFDSixnQkFBQTtFQUVBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNFLHNCQUFBO0FBUU47O0FBTkE7RUFDSSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFVSjs7QUFQQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRBO0VBQ0E7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0NBQUE7RUFZRjtFQVZGO0lBQ0ksMENBQUE7RUFZRjtBQUNGIiwiZmlsZSI6ImNvbGxlY3Rpb24tZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS10dGwgaDIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbjogN3B4IDAgMCAtMTlweDtcbn1cbi5sZWZ0LWJhY2sgaW9uLWljb24geyBcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXJ7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJpZ2h0LXByb2ZpbGUge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5yaWdodC1wcm9maWxlIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEE0MDhBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4udGl0bGUtcncge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGl0bGUtcncgaDJ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMEE0MDhBO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnJlZ2lzdHJhdGlvbi1maWVsZC1zZWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG5cbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cbi5jdXN0b20tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwQTQwOEEgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJvc3Rlci1yb3d7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICB9XG4gICBcbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkMmQwZTIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbS52aWV3LWhpc3RvcnkgYSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMEE0MDhBO1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayl7XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG59XG4ubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIH1cbn0gICAiXX0= */";

/***/ }),

/***/ 3201:
/*!************************************************************************!*\
  !*** ./src/app/collection-entry/collection-entry.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n<ion-content>\n  <div class=\"title-rw\">\n      <h2>Collection Entry</h2>\n    </div>\n  <div class=\"registration-field-section\">\n    <ion-list>\n    <ion-item lines=\"none\">\n   <ion-select class=\"form-ctrl\" placeholder=\"Select Center\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-select class=\"form-ctrl\" placeholder=\"Select Player\">\n      <ion-select-option value=\"apples\">Apples</ion-select-option>\n      <ion-select-option value=\"oranges\">Oranges</ion-select-option>\n      <ion-select-option value=\"bananas\">Bananas</ion-select-option>\n    </ion-select>\n  </ion-item>\n   <ion-item lines=\"none\">\n   <ion-input type=\"text\"  class=\"form-ctrl\" placeholder=\"Amount\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n  <ion-button type=\"submit\" class=\"custom-button\">Submit</ion-button> \n</ion-item>\n</ion-list>\n</div>\n  \n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_collection-entry_collection-entry_module_ts.js.map