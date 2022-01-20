(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["src_app_selectcategories_selectcategories_module_ts"],{

/***/ 98089:
/*!*********************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPageRoutingModule": function() { return /* binding */ SelectcategoriesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _selectcategories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectcategories.page */ 4912);




const routes = [
    {
        path: '',
        component: _selectcategories_page__WEBPACK_IMPORTED_MODULE_0__.SelectcategoriesPage
    }
];
let SelectcategoriesPageRoutingModule = class SelectcategoriesPageRoutingModule {
};
SelectcategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectcategoriesPageRoutingModule);



/***/ }),

/***/ 88853:
/*!*************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPageModule": function() { return /* binding */ SelectcategoriesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _selectcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectcategories-routing.module */ 98089);
/* harmony import */ var _selectcategories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectcategories.page */ 4912);







let SelectcategoriesPageModule = class SelectcategoriesPageModule {
};
SelectcategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _selectcategories_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectcategoriesPageRoutingModule
        ],
        declarations: [_selectcategories_page__WEBPACK_IMPORTED_MODULE_1__.SelectcategoriesPage]
    })
], SelectcategoriesPageModule);



/***/ }),

/***/ 4912:
/*!***********************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectcategoriesPage": function() { return /* binding */ SelectcategoriesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_selectcategories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./selectcategories.page.html */ 22091);
/* harmony import */ var _selectcategories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectcategories.page.scss */ 81347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);








let SelectcategoriesPage = class SelectcategoriesPage {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.getCategoryList = [];
        this.selectedCategoryList = [];
        this.buttonColor = '#000'; //Default Color
        route.params.subscribe(val => {
            this.getCategory();
            console.log(this.selectedCategoryList);
        });
    }
    ngOnInit() {
    }
    addEvent() {
        this.buttonColor = '#345465'; //desired Color
        /*
        YOUR FUNCTION CODE
        */
    }
    toggleClass(item) {
        item.active = !item.active;
        this.selectedCategoryList.push(item.tbid);
        // console.log(item);
        console.log(this.selectedCategoryList);
    }
    verify() {
        const storeCategory = this.selectedCategoryList.toString();
        console.log(storeCategory);
        const Data = {
            tbid: this.userdetails.id,
            store_category: storeCategory
        };
        console.log(Data);
        this.http.post('/update_store_category', Data).subscribe((response) => {
        }, (error) => {
            console.log(error);
        });
        this.router.navigate(['/homepage']);
    }
    getCategory() {
        console.log(this.selectedCategoryList);
        this.http.get('/list_category').subscribe((response) => {
            this.getCategoryList = response.records;
        }, (error) => {
            console.log(error);
        });
    }
};
SelectcategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SelectcategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-selectcategories',
        template: _raw_loader_selectcategories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_selectcategories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectcategoriesPage);



/***/ }),

/***/ 81347:
/*!*************************************************************!*\
  !*** ./src/app/selectcategories/selectcategories.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.myproducts-btn {\n  margin: 15px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\nion-list {\n  background-color: #ebf9f9 !important;\n}\nion-item {\n  background-color: #ebf9f9 !important;\n}\n.card {\n  background-color: #fff;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  margin: 5px;\n}\n.myproduct-div {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  box-shadow: 4px 4px 4px 4px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\n#SelectedList {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-top-left-radius: 30px !important;\n  border-top-right-radius: 30px !important;\n  box-shadow: 4px 4px 4px 4px #fff;\n}\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n}\nion-label {\n  font-size: 18px;\n}\nion-chip.active {\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\nion-content {\n  --background: #F4F7FA !important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ047RUFDRSxZQUFBO0VBQ0EsOERBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRTtFQUNFLG9DQUFBO0FBQUo7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRUo7QUFBRTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0Esd0JBQUE7RUFDQSxzQkFBQTtBQUdKO0FBQUU7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0FBR0o7QUFBRTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0ksZUFBQTtBQUlOO0FBRkU7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0FBS0o7QUFBRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFGSTtFQUNJLGFBQUE7QUFJUiIsImZpbGUiOiJzZWxlY3RjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcbiAgLm15cHJvZHVjdHMtYnRue1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIGlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmY5ZjkgIWltcG9ydGFudDtcbiAgfVxuICBpb24taXRlbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmOWY5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCA0cHggI2NjYztcbiAgICBtYXJnaW46NXB4O1xuICB9XG4gIC5teXByb2R1Y3QtZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4ICNjY2M7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIFxuICB9XG4gICNTZWxlY3RlZExpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggNHB4ICNmZmY7XG4gICBcbiAgfVxuICBpb24tY2hpcHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTdweCByZ2JhKDAsIDAsIDAsIDUuNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBpb24tbGFiZWx7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaW9uLWNoaXAuYWN0aXZleyBcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NWM1OVxuICAgIDAlLCAjMWQxZjFlXG4gICAgMTAwJSk7XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjRGN0ZBICFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gICJdfQ== */");

/***/ }),

/***/ 22091:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectcategories/selectcategories.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\" mt-5\">\n    <p class=\"mt-3 mx-4\" style=\"color:#5C5C5C;font-size: 24px;margin:15px;\">Select preferred categories:</p>\n    <div class=\"container mt-4\">\n      <ion-chip  (click)=\"toggleClass(item)\" [ngClass]=\"{'active': item.active}\" *ngFor=\"let item of getCategoryList\" style=\"color:#23d5ab;background-color: #fffcfa;\">\n        <ion-label >{{ item.category }}</ion-label>\n      </ion-chip>\n    </div>\n\n    <div class=\"col-12 mt-2\" style=\"text-align: right;\">\n      <button (click)=\"verify()\" class=\"btn btn-success btn-sm  myproducts-btn mt-1\">Verify</button>\n    </div>\n\n    <!-- <lottie-player (click)=\"getPicture()\" src=\"https://assets1.lottiefiles.com/packages/lf20_rsqhglyn.json\" background=\"transparent\"\n    speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player> -->\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_selectcategories_selectcategories_module_ts-es2015.js.map