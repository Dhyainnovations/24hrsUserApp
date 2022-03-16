(self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_slide-test_slide-test_module_ts"],{

/***/ 22193:
/*!*********************************************************!*\
  !*** ./src/app/slide-test/slide-test-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideTestPageRoutingModule": function() { return /* binding */ SlideTestPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _slide_test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-test.page */ 97338);




const routes = [
    {
        path: '',
        component: _slide_test_page__WEBPACK_IMPORTED_MODULE_0__.SlideTestPage
    }
];
let SlideTestPageRoutingModule = class SlideTestPageRoutingModule {
};
SlideTestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SlideTestPageRoutingModule);



/***/ }),

/***/ 17652:
/*!*************************************************!*\
  !*** ./src/app/slide-test/slide-test.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideTestPageModule": function() { return /* binding */ SlideTestPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _slide_test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-test-routing.module */ 22193);
/* harmony import */ var _slide_test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-test.page */ 97338);







let SlideTestPageModule = class SlideTestPageModule {
};
SlideTestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _slide_test_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlideTestPageRoutingModule
        ],
        declarations: [_slide_test_page__WEBPACK_IMPORTED_MODULE_1__.SlideTestPage]
    })
], SlideTestPageModule);



/***/ }),

/***/ 97338:
/*!***********************************************!*\
  !*** ./src/app/slide-test/slide-test.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideTestPage": function() { return /* binding */ SlideTestPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_slide_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./slide-test.page.html */ 25239);
/* harmony import */ var _slide_test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-test.page.scss */ 19497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _darkmode_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../darkmode/theme.service */ 10917);










let SlideTestPage = class SlideTestPage {
    constructor(theme, router, activatedRoute, http, route, popoverController) {
        this.theme = theme;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.popoverController = popoverController;
        this.intervalId = 0;
        this.message = '';
        this.seconds = 11;
        this.hour = 1;
        this.city = "coimbatore";
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.slideName = 'Home';
        this.isvisible = false;
        this.popUpisvisible = false;
        this.productDetails = true;
        this.storedetailsVisible = false;
        this.noDataFound = false;
        this.offerListVisible = true;
        this.getCategoryList = [];
        this.offerlist = [];
        this.offerView = [];
        this.storedetails = [];
        this.locationChangeVisible = false;
        this.currentCategory = "Home";
        //--------------- Ion slide option ----------//
        this.slideOpts = {
            slidesPerView: 2,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        route.params.subscribe(val => {
            this.getSelectCategory();
            this.offerList();
            this.alaramList();
        });
    }
    ngOnInit() {
        this.offerList();
    }
    ngOnDestroy() { this.clearTimer(); }
    clearTimer() { clearInterval(this.intervalId); }
    start() { this.countDown(); }
    stop() {
        this.clearTimer();
        this.message = `$ ${this.hour} {this.seconds} `;
    }
    countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Offers Ends..!';
            }
            else {
                if (this.seconds < 0) {
                    this.seconds = 60;
                } // reset
                this.message = `${this.hour}. ${this.seconds} Hrs`;
            }
        }, 1000);
    }
    sliderChange(val) {
        console.log(val);
        this.alaramList();
        this.currentCategory = val;
    }
    hidepopup() {
        this.popUpisvisible = false;
    }
    showPopup() {
        this.popUpisvisible = true;
    }
    // ----------- spam report -----------//
    spam(val) {
        console.log(this.spamMsg);
        if (this.spamMsg == true) {
            this.spam_msg = "spam Msg";
        }
        else {
            this.spam_msg = "";
        }
    }
    // ----------- storeNA report -----------//
    storeNA(val) {
        if (this.store == true) {
            this.store = "store NA";
        }
        else {
            this.store = "";
        }
    }
    // ----------- OfferDenaid report -----------//
    OfferDenaid(val) {
        if (this.store == true) {
            this.offer_denied = "offer Denaid";
        }
        else {
            this.offer_denied = "";
        }
    }
    // ----------- Seller report Api call -----------//
    reportSeller() {
        const obj = {
            store_name: this.storeID,
            spam_msg: this.spam_msg,
            store: this.store,
            offer_denied: this.offer_denied,
            others: this.others
        };
        this.http.post('/seller_report', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.others = '';
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Report Successfully'
                });
                this.popUpisvisible = false;
            }
        }, (error) => {
            console.log(error);
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
            });
        });
    }
    //------------- Read one Offer(card) Api call ------------//
    singleCard(tbid) {
        this.deliveryAvilability = '';
        const o = tbid;
        this.isvisible = true;
        this.storedetailsVisible = false;
        this.productDetails = true;
        this.http.get('/readone_offer_user?o=' + o).subscribe((response) => {
            if (response.success == "true") {
                this.storeTbid = response.records.tbid;
                this.storeLogo = response.records.store_logo;
                this.storeName = response.records.store_name;
                this.productName = response.records.product;
                this.productImage = response.records.product_image;
                this.description = response.records.description;
                this.offer = response.records.offer;
                this.totalPrice = response.records.total_cost;
                this.offerPrice = response.records.offer_price;
                this.offerTime = response.records.offer_time;
            }
        }, (error) => {
            console.log(error);
        });
    }
    //---------------Get Store Details  Api call -------------//
    storeDetails(storename) {
        this.storedetailsVisible = true;
        this.productDetails = false;
        const obj = {
            store_name: storename
        };
        this.http.post('/store_details_user', obj).subscribe((response) => {
            this.storedetails = response.records;
            console.log(this.storedetails);
            this.storeAddress = response.records.store_address;
            this.websiteLink = response.records.website;
            this.whatsApp = response.records.whatsapp;
            this.contact = response.records.contact_number;
            this.instagram = response.records.instagram;
            this.storeID = response.records.tbid;
            this.deliveryAvilability = response.records.delivery_availability;
            if (this.deliveryAvilability == 1 && this.deliveryAvilability == false && this.deliveryAvilability == "Available") {
                this.deliveryAvilability = false;
            }
            else {
                this.deliveryAvilability = true;
            }
        }, (error) => {
            console.log(error);
        });
    }
    //-------------- Navigate to dashboard ----------//
    navigateHome() {
        this.storedetailsVisible = false;
        this.isvisible = false;
        this.productDetails = true;
    }
    //-------------- Navigate to searchPage ----------//
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    //-------------- Navigate to setalarmPage ----------//
    setalarm() {
        this.router.navigate(['/setalarm']);
    }
    //-------------- Navigate to notificationPage ----------//
    notification() {
        this.router.navigate(['/notification']);
    }
    //--------- Get User Selected store Category's------------//
    getSelectCategory() {
        this.http.get('/store_category').subscribe((response) => {
            this.getCategoryList = response.records;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    //------------- get offer list -----------//
    offerList() {
        this.http.get('/list_all_offer').subscribe((response) => {
            this.offerlist = response.records;
            console.log(this.offerlist);
        }, (error) => {
            console.log(error);
        });
    }
    //------------- click home slider ----------//
    clickSlideHome() {
        this.slideName = "Home";
        this.offerListVisible = true;
        this.noDataFound = false;
        this.isvisible = false;
        this.offerList();
    }
    alaramList() {
        this.http.get('/alarm_notification').subscribe((response) => {
            console.log(response);
            this.notificationList = response.records;
            console.log(this.notificationList);
        }, (error) => {
            console.log(error);
        });
    }
    //------------- click  slider to fetch data based on category ----------//
    clickSlide(item) {
        console.log(item);
        this.isvisible = false;
        this.slideName = item;
        if (this.slideName == "Home") {
            this.offerListVisible = true;
            this.noDataFound = false;
            this.offerList();
        }
        const obj = {
            store_category: item
        };
        this.http.post('/list_offer_category', obj).subscribe((response) => {
            if (response.success == "true") {
                this.offerlist = response.records;
                console.log(response);
                this.offerListVisible = true;
                this.noDataFound = false;
            }
            else {
            }
        }, (error) => {
            console.log(error);
            this.offerListVisible = false;
            this.noDataFound = true;
        });
    }
    locationChange() {
        this.locationChangeVisible = !this.locationChangeVisible;
    }
    testSlide() {
        this.router.navigate(['/slide-test']);
    }
};
SlideTestPage.ctorParameters = () => [
    { type: _darkmode_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController }
];
SlideTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-slide-test',
        template: _raw_loader_slide_test_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_slide_test_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SlideTestPage);



/***/ }),

/***/ 19497:
/*!*************************************************!*\
  !*** ./src/app/slide-test/slide-test.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646b;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: #000000;\n  color: var(--ion-text-color, #000000);\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFNO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNSOztBQUVJO0VBQ0ksWUFBQTtBQUNSOztBQUVNO0VBQ0UsY0FBQTtBQUNSOztBQUVNO0VBQ0Usa0JBQUE7QUFDUjs7QUFFTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNSOztBQUVNO0VBQ0UsZ0JBQUE7QUFDUjs7QUFFTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQUEseUNBQUE7QUFDUjs7QUFFTTtFQUNFLGNBQUE7RUFBQSxxQ0FBQTtBQUNSOztBQUVNO0VBQ0osb0NBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQUlFO0VBQ0ksYUFBQTtBQUZOIiwiZmlsZSI6InNsaWRlLXRlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgOnJvb3Qge1xuICAgICAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgICAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICAgICAgfVxuICAgIFxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnN3aXBlci1zbGlkZSBoMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgICAgIH1cblxuICAgICAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG4gICAgICB9XG5cbiAgICAgIHAgYiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ 25239:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide-test/slide-test.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n\n\n  <ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n\n    <ion-slides>\n\n\n\n      <ion-slide (mouseup)=\"sliderChange(category.category)\" *ngFor=\"let category of getCategoryList\">\n        <div class=\"slide\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h6  >{{currentCategory}}</h6>\n            </div>\n            <div class=\"col-6\">\n              <h6  [style.border-bottom]=\"slideName == category.tbid ? '2px solid red' : '#23d5ab' \"\n                [style.color]=\"slideName == category.tbid ? '#eb154b' : '#23d5ab' \" class=\"tam-title ion-text-left\">\n                {{category.category}} </h6>\n            </div>\n          </div>\n          \n\n          <img\n            src=\"https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg\" />\n          <h2>Welcome</h2>\n          <p>\n            The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a\n            demonstration of proper code use.\n          </p>\n\n\n\n          <div class=\"container\">\n            <div *ngFor=\"let  notification of notificationList\" class=\" card mt-4\">\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"{{notification.store_logo}}\" alt=\"\">\n                  <span>{{notification.store_name}}/ {{notification.product}}</span>\n                </div>\n                <div class=\"col-8\">\n                  <p style=\"font-size:10px;margin:10px;\">{{notification.description}}</p>\n                </div>\n                <div class=\"col-4 ion-text-right\">\n                  <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">{{notification\n                      .offer}}% off</span></span>\n                </div>\n              </div>\n              <div class=\"row\">\n\n                <div class=\"col-5\">\n                  <p style=\"margin:5px;font-size: 10px;\">\n                    <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path\n                        d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                        fill=\"#5F5F5F\" />\n                      <path\n                        d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                        fill=\"#5F5F5F\" />\n                    </svg>\n                    {{notification.offer_time}}\n                  </p>\n                </div>\n                <div class=\"col-7\">\n                  <p style=\"margin:5px;font-size: 10px;\" class=\"product-name\">Date/Time: <span>{{notification.created_at\n                      | date: 'MMMM d'}}/ {{notification.created_at | date: 'h :mm a'}}</span></p>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <h1>slide2</h1>\n        <img\n          src=\".https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg\" />\n        <h2>What is Ionic?</h2>\n        <p>\n          <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps\n          with web technologies like HTML, CSS, and JavaScript.\n        </p>\n      </ion-slide>\n\n      <ion-slide>\n        <h1>slide3</h1>\n        <img\n          src=\".https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg\" />\n        <h2>What is Appflow?</h2>\n        <p>\n          <b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a\n          totally new level of app development agility to mobile dev teams.\n        </p>\n      </ion-slide>\n\n      <ion-slide>\n        <h1>slide4</h1>\n        <img\n          src=\".https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg\" />\n        <h2>Ready to Play?</h2>\n        <ion-button fill=\"clear\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_slide-test_slide-test_module_ts-es2015.js.map