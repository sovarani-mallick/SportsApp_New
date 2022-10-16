"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events-single_events-single_module_ts"],{

/***/ 1253:
/*!***************************************************************!*\
  !*** ./src/app/events-single/events-single-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsSinglePageRoutingModule": () => (/* binding */ EventsSinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _events_single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-single.page */ 7040);




const routes = [
    {
        path: '',
        component: _events_single_page__WEBPACK_IMPORTED_MODULE_0__.EventsSinglePage
    }
];
let EventsSinglePageRoutingModule = class EventsSinglePageRoutingModule {
};
EventsSinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventsSinglePageRoutingModule);



/***/ }),

/***/ 5392:
/*!*******************************************************!*\
  !*** ./src/app/events-single/events-single.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsSinglePageModule": () => (/* binding */ EventsSinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _events_single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-single-routing.module */ 1253);
/* harmony import */ var _events_single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-single.page */ 7040);







let EventsSinglePageModule = class EventsSinglePageModule {
};
EventsSinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _events_single_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsSinglePageRoutingModule
        ],
        declarations: [_events_single_page__WEBPACK_IMPORTED_MODULE_1__.EventsSinglePage]
    })
], EventsSinglePageModule);



/***/ }),

/***/ 7040:
/*!*****************************************************!*\
  !*** ./src/app/events-single/events-single.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsSinglePage": () => (/* binding */ EventsSinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _events_single_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-single.page.html?ngResource */ 1685);
/* harmony import */ var _events_single_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-single.page.scss?ngResource */ 6083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let EventsSinglePage = class EventsSinglePage {
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
EventsSinglePage.ctorParameters = () => [];
EventsSinglePage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal,] }]
};
EventsSinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-events-single',
        template: _events_single_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_single_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventsSinglePage);



/***/ }),

/***/ 6083:
/*!******************************************************************!*\
  !*** ./src/app/events-single/events-single.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".middle-ttl h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 20px;\n  color: #0A408A;\n  margin: 7px 0 0 -19px;\n}\n\n.left-back ion-icon {\n  padding: 0;\n  font-size: 35px;\n  color: #000;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.right-profile {\n  text-align: right;\n  vertical-align: middle;\n  margin-top: -7px;\n}\n\n.right-profile ion-icon {\n  background: #0A408A;\n  padding: 10px;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.notificason {\n  margin-right: 12px;\n  margin-bottom: 10px;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.title-rw {\n  margin-bottom: 20px;\n}\n\n.title-rw h2 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 14px;\n  color: #333333;\n  border-left: 4px solid #0A408A;\n  padding-left: 10px;\n}\n\n.events-img-section {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n  background: #fff;\n  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.img-row {\n  width: 100%;\n  padding: 15px;\n}\n\n.img-row img {\n  width: 100%;\n  position: relative;\n}\n\n.img-caption {\n  position: absolute;\n  bottom: 120px;\n  left: 25px;\n  background: url(/assets/images/ribbon.png) no-repeat !important;\n  height: 35px;\n  width: 95%;\n}\n\n.img-caption h5 {\n  color: #fff;\n  font-size: 15px;\n  color: #fff;\n  font-size: 15px;\n  margin: 8px;\n  font-family: \"Poppins\";\n}\n\n.events-img-section h4 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #0A408A;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.events-img-section h3 {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  color: #4D4D4D;\n  margin: 20px;\n}\n\n.custom-button {\n  background: #0A408A !important;\n  border-radius: 30px !important;\n  width: 100%;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 20px;\n  text-align: center;\n  color: #fff;\n  display: inline-block;\n  margin-bottom: 50px;\n}\n\n.events-img-section p {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #0A408A;\n  padding: 20px;\n}\n\n.row-event1 {\n  width: 100%;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n\n.row-event1 img {\n  vertical-align: middle;\n  width: auto;\n}\n\n.row-event1 span {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  color: #0A408A;\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.single-event-apply-modal {\n  margin-top: 100%;\n  background: #FFFFFF;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.single-event-apply-modal .custom-button {\n  --background: #0A408A !important;\n  --border-radius: 30px !important;\n  width: 98%;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 20px;\n  text-align: center;\n  color: #fff;\n  display: inline-block;\n  margin-bottom: 50px;\n  height: 45px;\n  --box-shadow: none;\n}\n\n.close-img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 9999999;\n}\n\nion-item {\n  --background: transperent;\n  padding: 0 10px 0 0;\n  --border-color: #d2d0e2 !important;\n  margin-bottom: 20px !important;\n}\n\n.form-ctrl {\n  width: 100%;\n  border: 1px solid #ccc;\n  --padding-start: 10px !important;\n  --padding-end: 10px !important;\n  border-radius: 5px;\n  font-family: \"Poppins\";\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-item {\n    --background: transperent;\n    padding: 0 10px 0 0;\n    --border-color: #d2d0e2 !important;\n  }\n  .md body {\n    --ion-background-color: #ffffff !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esc0JBQUE7RUFDSixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDRSxzQkFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQVFKOztBQUxBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVVKOztBQVJBO0VBQ0ssc0JBQUE7RUFDRCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBWUE7O0FBVkE7RUFDRyw4QkFBQTtFQUNDLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVhBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFjQTs7QUFaQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQWlCQTs7QUFmQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBa0JKOztBQWhCQTtFQUNJLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXNCSjs7QUFwQkE7RUFDQTtJQUNJLHlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQ0FBQTtFQXVCRjtFQXJCRjtJQUNJLDBDQUFBO0VBdUJGO0FBQ0YiLCJmaWxlIjoiZXZlbnRzLXNpbmdsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXR0bCBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwQTQwOEE7XG4gICAgbWFyZ2luOiA3cHggMCAwIC0xOXB4O1xufVxuLmxlZnQtYmFjayBpb24taWNvbiB7IFxuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlcntcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ucmlnaHQtcHJvZmlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnJpZ2h0LXByb2ZpbGUgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICMwQTQwOEE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdGlmaWNhc29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi50aXRsZS1ydyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50aXRsZS1ydyBoMntcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwQTQwOEE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgXG4uZXZlbnRzLWltZy1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmltZy1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG59XG4uaW1nLXJvdyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmltZy1jYXB0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEyMHB4O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL3JpYmJvbi5wbmcpIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogOTUlO1xufVxuLmltZy1jYXB0aW9uIGg1e1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cbi5ldmVudHMtaW1nLXNlY3Rpb24gaDR7XG4gICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMEE0MDhBO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmV2ZW50cy1pbWctc2VjdGlvbiBoM3tcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1zaXplOiAxNnB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5jb2xvcjogIzRENEQ0RDtcbm1hcmdpbjoyMHB4O1xufVxuLmN1c3RvbS1idXR0b24ge1xuICAgYmFja2dyb3VuZDogIzBBNDA4QSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5ldmVudHMtaW1nLXNlY3Rpb24gcHtcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxNHB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5jb2xvcjogIzBBNDA4QTtcbnBhZGRpbmc6MjBweDtcbn1cbi5yb3ctZXZlbnQxe1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucm93LWV2ZW50MSBpbWd7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIHdpZHRoOmF1dG87XG59XG4ucm93LWV2ZW50MSBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxMnB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5jb2xvcjogIzBBNDA4QTtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xubWFyZ2luLWxlZnQ6MTBweDtcbn1cbi5zaW5nbGUtZXZlbnQtYXBwbHktbW9kYWx7XG4gICAgbWFyZ2luLXRvcDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2luZ2xlLWV2ZW50LWFwcGx5LW1vZGFsIC5jdXN0b20tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMwQTQwOEEgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTglO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uY2xvc2UtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5OTk5OTk7XG59XG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjZDJkMGUyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0tY3RybCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKXtcbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkMmQwZTIgIWltcG9ydGFudDtcbn1cbi5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxufSAgICJdfQ== */";

/***/ }),

/***/ 1685:
/*!******************************************************************!*\
  !*** ./src/app/events-single/events-single.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  \n    <ion-grid>\n          <ion-row>\n              <ion-col size=\"2\" class=\"left-back\">\n                    <ion-icon name=\"chevron-back-outline\"></ion-icon>    \n              </ion-col>\n              <ion-col size=\"4\" class=\"middle-ttl\">\n                <h2>Dashboard</h2>\n              </ion-col>\n              <ion-col size=\"6\" class=\"right-profile\">\n                    <img class=\"notificason\" src=\"/assets/images/notification-bell.png\">\n                    <ion-icon name=\"person\"></ion-icon>\n              </ion-col>\n          </ion-row>\n     </ion-grid>     \n\n</ion-header>\n\n<ion-content>\n    <div class=\"title-rw\">\n      <h2>Event Title Goes Here</h2>\n    </div>\n    <div class=\"events-img-section\">\n      <div class=\"img-row\">\n      <img src=\"/assets/images/match-img.jpg\">\n      <div class=\"img-caption\">\n        <h5>Football Match</h5>\n      </div>\n      <h4>Event Title Goes Here</h4>\n      <div class=\"row-event1\">\n          <img src=\"/assets/images/calendar.png\">\n          <span>10th September, 2022 | 10:00 AM</span>\n      </div>\n    \n    <div class=\"row-event1\">\n          <img src=\"/assets/images/map-location.png\">\n          <span>Patia, Bhaubaneswar</span>\n      </div>\n    </div>\n    </div>\n    <div class=\"events-img-section\">\n      <h3>EVENT DETAILS</h3>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n    </div>\n\n    <a class=\"custom-button\" id=\"open-modal\" expand=\"block\">Apply</a>\n<ion-modal class=\"single-event-apply-modal\" trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n          <img class=\"close-img\" (click)=\"cancel()\" src=\"/assets/images/cancel.png\">\n         \n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <div class=\"event-pop-form\">\n          <div class=\"registration-field-section\">\n    <ion-list>\n      <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Name\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Phone\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-input type=\"text\" class=\"form-ctrl\" placeholder=\"Email\" ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\">\n   <ion-button type=\"submit\" class=\"custom-button\">Apply</ion-button> \n  </ion-item>\n \n</ion-list>\n\n</div>\n  \n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n<ion-footer>\n    <div class=\"container\">\n      <ion-grid>\n        <ion-row>\n          <ion-col  size=\"5\" class=\"left-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"home\"></ion-icon>\n              <h5 class=\"act\">Home</h5> \n            </ion-col>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-col size=\"6\">\n              <ion-icon name=\"timer-outline\"></ion-icon>\n              <h5>Tab 2</h5> \n            </ion-col>\n                        </ion-col>\n          </ion-row>\n          </ion-col>\n          <ion-col  size=\"2\" class=\"middle-footer\">\n            <a class=\"white-round-p\"><img src=\"/assets/images/home.png\"></a>\n          </ion-col>\n          <ion-col  size=\"5\" class=\"right-footer\">\n            <ion-row>\n            <ion-col class=\"footer-con\"  size=\"6\">\n              <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              <h5>Tab 3</h5> \n            </ion-col>\n            <ion-col  class=\"footer-con\"  size=\"6\">\n              <ion-col  size=\"6\">\n              <ion-icon name=\"person-outline\"></ion-icon>\n              <h5>Tab 4</h5> \n            </ion-col>\n            </ion-col>\n          </ion-row>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_events-single_events-single_module_ts.js.map