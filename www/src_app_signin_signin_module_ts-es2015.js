(self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_signin_signin_module_ts"],{

/***/ 11644:
/*!*************************************************!*\
  !*** ./src/app/signin/signin-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": function() { return /* binding */ SigninPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 61895);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 87445:
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": function() { return /* binding */ SigninPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 11644);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 61895);







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 61895:
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": function() { return /* binding */ SigninPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signin.page.html */ 13746);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss */ 49180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 55160);









let SigninPage = class SigninPage {
    constructor(router, http, toastCtrl) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.intervalId = 0;
        this.message = '';
        this.seconds = 0;
        this.hour = 0;
        this.loginsts = '';
        this.signinemailid = '';
        this.signinpassword = '';
        this.sendOtpBtnVisible = false;
        this.submitBtnVisible = false;
        this.resendOtpVisible = false;
        this.timerVisible = false;
    }
    ngOnInit() {
        this.MobInputcolSize = 12;
        this.OtpInputcolSize = 12;
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
                // this.message = 'Offers Ends..!';
            }
            else {
                if (this.seconds < 0) {
                    this.seconds = 60;
                } // reset
                this.message = `${this.hour}. ${this.seconds}s`;
            }
        }, 1000);
    }
    enterMobile() {
        this.MobInputcolSize = 8;
        this.sendOtpBtnVisible = true;
    }
    enterOtp() {
        this.OtpInputcolSize = 8;
        this.submitBtnVisible = true;
    }
    sendOtp() {
        this.seconds = 60;
        this.MobInputcolSize = 12;
        this.sendOtpBtnVisible = false;
        this.resendOtpVisible = true;
    }
    ResendOtp() {
        this.timerVisible = true;
        this.start();
    }
    login() {
    }
    signin() {
        const Data = {
            email_id: this.signinemailid,
            password: this.signinpassword
        };
        this.http.post('/user_login', Data).subscribe((response) => {
            if (response.success == "true") {
                const obj = {
                    id: response.tbid,
                    username: response.user_name,
                    mobile: response.mobile_number,
                    email: response.email_id,
                    token: response.token,
                    loginstatus: response.user_status
                };
                this.loginsts = response.user_status;
                console.log(obj);
                const encodeText = btoa(JSON.stringify(obj));
                localStorage.setItem("24hrs-user-data", encodeText);
                localStorage.setItem("token", response.token);
                localStorage.setItem("loginstatus", response.user_status);
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                this.navigateTabs();
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Please enter a valid email (or) password'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    navigateTabs() {
        this.signinemailid = '';
        this.signinpassword = '';
        if (this.loginsts == "First Login") {
            console.log(this.loginsts);
            console.log("1st");
            this.router.navigate(['/selectcategories']);
        }
        else {
            console.log("2nd");
            this.router.navigate(['/homepage']);
        }
    }
    signupPage() {
        this.router.navigate(['/signuppage']);
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigninPage);



/***/ }),

/***/ 49180:
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  margin: 5px;\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n}\n\n.dot {\n  text-align: center;\n  margin-top: -20px;\n  height: 120px !important;\n  width: 125px !important;\n  background-color: #fff;\n  border-radius: 20%;\n  display: inline-block;\n  box-shadow: 1px 1px 36px -9px #ccc;\n}\n\n.signin-btn {\n  background-color: #23d5ab;\n  color: #fff;\n  text-align: right;\n  margin: 10%;\n  padding: 5px;\n}\n\n.otp-btn {\n  color: #fff;\n  background-color: #23d5ab;\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n}\n\n.facebook-btn {\n  background-color: #fff;\n  color: #23d5ab;\n  text-align: center;\n  width: 90%;\n  border: none;\n  margin: 10px;\n  font-size: 15px;\n}\n\n@media screen and (max-width: 300px) {\n  .signin-btn {\n    text-align: center;\n    margin-left: -15px !important;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .signin-btn {\n    margin-left: 55px !important;\n  }\n}\n\nion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --border-color: #23d5ab;\n  width: 95%;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLDZCQUFBO0VBR047QUFDRjs7QUFBRTtFQUNFO0lBQ0ksNEJBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSw2Q0FBQTtBQUVKOztBQUFBO0VBQ0ksaUNBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtBQUNSIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDo5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmRvdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTI1cHggIWltcG9ydGFudDtcbiAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDM2cHggLTlweCAjY2NjO1xuICAgIC8vIGJvcmRlcjoycHggc29saWQgIzIzZDVhYjtcbiAgfVxuLnNpZ25pbi1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDVhYjtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjoxMCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLm90cC1idG57XG4gICAgY29sb3I6I2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkNWFiO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYWNlYm9vay1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjojMjNkNWFiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZToxMnB4ICAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiM0YzRjNGQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1ib3JkZXItY29sb3I6ICMyM2Q1YWI7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG5pb24taW5wdXQ6Zm9jdXN7XG4gICAgLS1ib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 13746:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"bg-class\" >\n  <div class=\"container\" >\n    <div class=\"row title\">\n      <div class=\"col-12 ion-text-center\">\n       <div  @fadein class=\"dot\">\n        <img id=\"logo\" height=\"125px\" width=\"150px\" src=\"assets/logo.jpeg\" alt=\"\">\n       </div>\n      </div>\n       \n         \n      <div @slideup class=\"col-12 ion-text-center\">\n        <span class=\"welcome\">Welcome to</span> <br>\n        <span class=\"seller\"><b>24hrs</b></span>\n      </div>\n    </div>\n  \n    <div @slideup class=\"signin-div mb-4\">\n      <div class=\"row \"style=\"padding:15px;\">\n        <div class=\"col-6 signin\">\n          <b>Sign in</b>\n        </div>\n        <div style=\"cursor: pointer;\" (click)=\"signupPage()\" class=\"col-6 signup\">\n          Sign up\n        </div>\n      </div>\n      <p class=\"signin-seller\"><b>Sign in to  24hrs </b></p>\n      <p class=\"emailTo-continue\">Enter the mobile number to continue</p>\n  \n      <div class=\"input-field\" >\n        <div class=\"row\">\n          <div class=\"col-{{MobInputcolSize}}\">\n            <ion-item>\n              <ion-label position=\"floating\">  <ion-icon style=\"font-size:20px;color:#23d5ab;margin: px;\" name=\"phone-portrait-sharp\"></ion-icon>ENTER YOUR MOBILE NUMBER</ion-label>\n              <ion-input (click)=\"enterMobile()\" [(ngModel)]=\"signinemailid\" ></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"sendOtpBtnVisible\" class=\"col-4 mt-5\">\n            <button (click)=\"sendOtp()\" class=\" btn otp-btn\">Send Otp</button>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-{{OtpInputcolSize}}\">\n            <ion-item>\n              <ion-label position=\"floating\"> <svg style=\"margin: 3px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"25\" fill=\"#23d5ab\" class=\"bi bi-chat-dots-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n              </svg> ENTER YOUR OTP</ion-label>\n              <ion-input (click)=\"enterOtp()\" type=\"password\" [(ngModel)]=\"signinpassword\"> </ion-input>\n            </ion-item> \n\n            <div *ngIf=\"resendOtpVisible\" class=\"row\">\n              <div (click)=\"ResendOtp()\" class=\"col-7\">\n                <p style=\"font-size: 14px;color:#23d5ab;margin-left:20%;\">Resend Otp</p>\n              </div>\n              <div class=\"col-5\">\n                <div *ngIf=\"timerVisible\"  class=\"row\">\n                  <div class=\"col-6\">\n                    <svg style=\"margin-left:10px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" fill=\"#121212\" class=\"bi bi-clock-history\" viewBox=\"0 0 16 16\">\n                      <path d=\"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z\"/>\n                      <path d=\"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z\"/>\n                      <path d=\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"/>\n                    </svg>\n                  </div>\n                  <div class=\"col-6\">\n                    <p style=\"color:rgb(75, 72, 72);margin-left: -75%;margin-top: 2px;\"> {{message}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n           \n            \n          </div>\n          <div *ngIf=\"submitBtnVisible\"  class=\"col-4 mt-5\">\n            <button [disabled]=\"signinpassword == '' \" class=\" btn otp-btn\">Submit</button>\n          </div>\n        </div>\n\n         \n      </div>\n  \n      <div style=\"margin-top:-11px\" class=\"row\">\n        <!-- <div class=\"col-8 forgot-pw\">\n          Forgot password?\n        </div>\n        <div class=\"col-2 \">\n          <button  (click)=\"signin()\" class=\"btn btn-success btn-sm signin-btn mt-1\">SIGNIN</button>\n        </div> -->\n        \n        <div class=\"col-12 ion-text-center mt-3\">\n          <button  (click)=\"fb()\" class=\"btn btn-primary btn-sm btn-outline facebook-btn\">\n            <svg  style=\"margin-top: -5px;color:#23d5ab; margin-left:5px !important\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-google\" viewBox=\"0 0 16 16\">\n              <path d=\"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z\"/>\n            </svg><span style=\"margin-left:5px;\">Log in with Google</span></button>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  </ion-content>\n  \n");

/***/ })

}]);
//# sourceMappingURL=src_app_signin_signin_module_ts-es2015.js.map