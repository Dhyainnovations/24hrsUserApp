(self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_faq_faq_module_ts"],{

/***/ 62783:
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": function() { return /* binding */ FaqPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 24864);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ 5083:
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": function() { return /* binding */ FaqPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 62783);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 24864);







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
    })
], FaqPageModule);



/***/ }),

/***/ 24864:
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": function() { return /* binding */ FaqPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faq.page.html */ 18576);
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss */ 87125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let FaqPage = class FaqPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToPrivious() {
        this.router.navigate(['/support']);
    }
    //-------------- Navigate to notificationPage ----------//
    notification() {
        this.router.navigate(['/notification']);
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaqPage);



/***/ }),

/***/ 87125:
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 18576:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg  (click)=\"notification()\" style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n  <div class=\"card mt-2\">\n    <div class=\"row ion-text-center\">\n      <div class=\"col-2 ion-text-left mx-2\" style=\"margin-top: 20px;\">\n        <svg (click)=\"backToPrivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\"\n            d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n        </svg>\n      </div>\n\n      <div class=\"col-10 \">\n        <h4 style=\" color:#5C5C5C\" ><b>FAQ</b></h4>\n      </div>\n      <div class=\"mt-4\">\n        <p><b>1.) How do I use the App ?</b><br>\n          - It Is Easy and Simple to Use.</p>\n        <p><b>2.) How do I use the App ?</b><br>\n          - It Is Easy and Simple to Use.</p>\n        <p><b>3.) How do I use the App ?</b><br>\n          - It Is Easy and Simple to Use.</p>\n        <p><b>4.) How do I use the App ?</b><br>\n          - It Is Easy and Simple to Use.</p>\n        <p><b>5.) How do I use the App ?</b><br>\n          - It Is Easy and Simple to Use.</p>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts-es2015.js.map