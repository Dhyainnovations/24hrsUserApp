(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_signin_signin_module_ts"], {
    /***/
    14506:
    /*!*************************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/definitions.js ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); /// <reference types="@capacitor/cli" />
      //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    31543:
    /*!*******************************************************************************!*\
      !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GoogleAuth": function GoogleAuth() {
          return (
            /* binding */
            _GoogleAuth
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      14506);

      var _GoogleAuth = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('GoogleAuth', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_codetrix-studio_capacitor-google-auth_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          44906)).then(function (m) {
            return new m.GoogleAuthWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    11644:
    /*!*************************************************!*\
      !*** ./src/app/signin/signin-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageRoutingModule": function SigninPageRoutingModule() {
          return (
            /* binding */
            _SigninPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
      }];

      var _SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      _SigninPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SigninPageRoutingModule);
      /***/
    },

    /***/
    87445:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageModule": function SigninPageModule() {
          return (
            /* binding */
            _SigninPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin-routing.module */
      11644);
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var _SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      _SigninPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
      })], _SigninPageModule);
      /***/
    },

    /***/
    61895:
    /*!***************************************!*\
      !*** ./src/app/signin/signin.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPage": function SigninPage() {
          return (
            /* binding */
            _SigninPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signin.page.html */
      13746);
      /* harmony import */


      var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page.scss */
      49180);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @codetrix-studio/capacitor-google-auth */
      31543);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _SigninPage = /*#__PURE__*/function () {
        function SigninPage(router, http, toastCtrl, route, platform) {
          var _this = this;

          _classCallCheck(this, SigninPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.platform = platform;
          this.intervalId = 0;
          this.message = '';
          this.seconds = 0;
          this.hour = 0;
          this.userInfo = null;
          this.loginsts = localStorage.getItem("loginstatus");
          this.mobileNumber = '';
          this.otp = '';
          this.sendOtpBtnVisible = false;
          this.submitBtnVisible = false;
          this.resendOtpVisible = false;
          this.timerVisible = false;
          route.params.subscribe(function (val) {
            _this.loginsts = localStorage.getItem("loginstatus");
            _this.mobileNumber = '';
            _this.otp = '';
          });
          this.platform.ready().then(function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.initialize();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
        }

        _createClass(SigninPage, [{
          key: "googleSignup",
          value: function googleSignup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var googleUser;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.signIn();

                    case 2:
                      googleUser = _context2.sent;
                      console.log('my user: ', googleUser);
                      this.userInfo = googleUser;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MobInputcolSize = 12;
            this.OtpInputcolSize = 12; // this.geolocation.getCurrentPosition().then((resp) => {
            //   this.lat = resp.coords.latitude
            //   this.lon = resp.coords.longitude
            // }).catch((error) => {
            //   console.log('Error getting location', error);
            // });
            // let watch = this.geolocation.watchPosition();
            // watch.subscribe((data) => {
            //   // data can be a set of coordinates, or an error (if an error occurred).
            //   // data.coords.latitude
            //   // data.coords.longitude
            // });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearTimer();
          }
        }, {
          key: "clearTimer",
          value: function clearTimer() {
            clearInterval(this.intervalId);
          }
        }, {
          key: "start",
          value: function start() {
            this.countDown();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.clearTimer();
            this.message = "$ ".concat(this.hour, " {this.seconds} ");
          }
        }, {
          key: "countDown",
          value: function countDown() {
            var _this2 = this;

            this.clearTimer();
            this.intervalId = window.setInterval(function () {
              _this2.seconds -= 1;

              if (_this2.seconds === 0) {// this.message = 'Offers Ends..!';
              } else {
                if (_this2.seconds < 0) {
                  _this2.seconds = 60;
                } // reset


                _this2.message = "".concat(_this2.hour, ". ").concat(_this2.seconds, "s");
              }
            }, 1000);
          }
        }, {
          key: "enterMobile",
          value: function enterMobile() {
            this.MobInputcolSize = 8;
            this.sendOtpBtnVisible = true;
          }
        }, {
          key: "enterOtp",
          value: function enterOtp() {
            this.OtpInputcolSize = 8;
            this.submitBtnVisible = true;
          }
        }, {
          key: "sendOtp",
          value: function sendOtp() {
            var _this3 = this;

            this.seconds = 60;
            this.MobInputcolSize = 12;
            this.sendOtpBtnVisible = false;
            this.resendOtpVisible = true;
            var Data = {
              mobile_number: this.mobileNumber
            };
            console.log(Data);
            this.http.post('/user_get_otp', Data).subscribe(function (response) {
              console.log(response);
              _this3.registersts = response.user_status;
              localStorage.setItem("registerstatus", response.user_status);
            }, function (error) {
              console.log(error);
            });
            console.log(this.registersts);
            this.http.post('/user_register', Data).subscribe(function (response) {
              console.log(response);
              _this3.loginsts = response.user_status;
            }, function (error) {
              console.log(error);
            });
          } //--------------------- Resent Otp ------------------//

        }, {
          key: "ResendOtp",
          value: function ResendOtp() {
            this.timerVisible = true;
            this.start();
            var Data = {
              mobile_number: this.mobileNumber
            };
            console.log(Data);
            this.http.post('/user_get_otp', Data).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          } //------------------- signIn api call -----------//

        }, {
          key: "signIn",
          value: function signIn() {
            var _this4 = this;

            var Data = {
              mobile_number: this.mobileNumber,
              verify_otp: this.otp
            };
            this.http.post('/user_verify_otp', Data).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this4.http.post('/user_login', Data).subscribe(function (response) {
                  console.log(response);
                  localStorage.setItem("token", response.token);
                  localStorage.setItem("tbid", response.tbid);
                  localStorage.setItem("mobilenumber", response.mobile_number);
                  var obj = {
                    id: response.tbid,
                    username: response.user_name,
                    mobile: response.mobile_number,
                    token: response.token,
                    loginstatus: response.user_status
                  };
                  _this4.loginsts = response.user_status;
                  console.log(obj);
                  var encodeText = btoa(JSON.stringify(obj));
                  localStorage.setItem("24hrs-user-data", encodeText);
                  localStorage.setItem("loginstatus", response.user_status);
                  console.log(_this4.registersts);

                  if (_this4.registersts == "1" || _this4.loginsts == "First Login" && _this4.loginsts != undefined) {
                    console.log(_this4.registersts);
                    console.log("1st");

                    _this4.router.navigate(['/signuppage']);
                  } else {
                    console.log("2nd");

                    _this4.router.navigate(['/homepage']);
                  }
                }, function (error) {
                  console.log(error);
                });
              }
            }, function (error) {
              console.log(error);
            });
          } // ------------------- navigation checking -------------//
          // navigateTabs() {
          //   if (this.loginsts == "1") {
          //     console.log(this.loginsts);
          //     console.log("1st");
          //     this.router.navigate(['/signuppage'])
          //   }
          //   if (this.loginsts == "2") {
          //     console.log("2nd");
          //     this.router.navigate(['/homepage'])
          //   }
          // }

        }, {
          key: "signupPage",
          value: function signupPage() {
            this.router.navigate(['/signuppage']);
          }
        }, {
          key: "signin",
          value: function signin() {
            this.router.navigate(['/homepage']);
          }
        }, {
          key: "navigateToLocal",
          value: function navigateToLocal() {
            this.router.navigate(['/home']);
          }
        }]);

        return SigninPage;
      }();

      _SigninPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }];
      };

      _SigninPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SigninPage);
      /***/
    },

    /***/
    49180:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#logo {\n  margin: 5px;\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n}\n\n.dot {\n  text-align: center;\n  margin-top: -20px;\n  height: 120px !important;\n  width: 125px !important;\n  background-color: #fff;\n  border-radius: 20%;\n  display: inline-block;\n  box-shadow: 1px 1px 36px -9px #ccc;\n}\n\n.signin-btn {\n  background-color: #23d5ab;\n  color: #fff;\n  text-align: right;\n  margin: 10%;\n  padding: 5px;\n}\n\n.otp-btn {\n  color: #fff;\n  background-color: #23d5ab;\n  border: none !important;\n  font-size: 14px;\n  text-align: center;\n}\n\n.facebook-btn {\n  background-color: #fff;\n  color: #23d5ab;\n  text-align: center;\n  width: 90%;\n  border: none;\n  margin: 10px;\n  font-size: 15px;\n}\n\n@media screen and (max-width: 300px) {\n  .signin-btn {\n    text-align: center;\n    margin-left: -15px !important;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .signin-btn {\n    margin-left: 55px !important;\n  }\n}\n\nion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --border-color: #23d5ab;\n  width: 95%;\n  margin: auto !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLDZCQUFBO0VBR047QUFDRjs7QUFBRTtFQUNFO0lBQ0ksNEJBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLDZDQUFBO0FBRUo7O0FBQUE7RUFDSSxpQ0FBQTtFQUlBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBQ0k7RUFDSSxhQUFBO0FBQ1IiLCJmaWxlIjoic2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dve1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OjkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZG90IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMjVweCAhaW1wb3J0YW50O1xuICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMzZweCAtOXB4ICNjY2M7XG4gICAgLy8gYm9yZGVyOjJweCBzb2xpZCAjMjNkNWFiO1xuICB9XG4uc2lnbmluLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkNWFiO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOjEwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ub3RwLWJ0bntcbiAgICBjb2xvcjojZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2Q1YWI7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhY2Vib29rLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiMyM2Q1YWI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgICAuc2lnbmluLWJ0biB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lnbmluLWJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOjEycHggICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzRjNGM0ZCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWJvcmRlci1jb2xvcjogIzIzZDVhYjtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbmlvbi1pbnB1dDpmb2N1c3tcbiAgICAtLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    13746:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"bg-class\" >\n  <div class=\"container\" >\n    <div class=\"row title\">\n      <div class=\"col-12 ion-text-center\">\n       <div  @fadein class=\"dot\">\n        <img id=\"logo\" height=\"125px\" width=\"150px\" src=\"assets/logo.jpeg\" alt=\"\">\n       </div>\n      </div>\n       \n         \n      <div @slideup class=\"col-12 ion-text-center\">\n        <span class=\"welcome\">Welcome to</span> <br>\n        <span class=\"seller\"><b>24hrs</b></span>\n      </div>\n    </div>\n  <!-- <h1>{{lat}}</h1>\n  <h1>{{lon}}</h1> -->\n    <div @slideup class=\"signin-div mb-4\">\n      <div class=\"row \"style=\"padding:15px;\">\n        <div class=\"col-12 signin\">\n          <b>Sign in</b>\n        </div>\n        <!-- <div style=\"cursor: pointer;\" (click)=\"signupPage()\" class=\"col-6 signup\">\n          Sign up\n        </div> -->\n      </div>\n      <p class=\"signin-seller\"><b>Sign in to  24hrs </b></p>\n      <p class=\"emailTo-continue\">Enter the mobile number to continue</p>\n  \n      <div class=\"input-field\" >\n        <div class=\"row\">\n          <div class=\"col-{{MobInputcolSize}}\">\n            <ion-item>\n              <ion-label position=\"floating\">  <ion-icon style=\"font-size:20px;color:#23d5ab;margin: px;\" name=\"phone-portrait-sharp\"></ion-icon>ENTER YOUR MOBILE NUMBER</ion-label>\n              <ion-input (click)=\"enterMobile()\" [(ngModel)]=\"mobileNumber\" ></ion-input>\n            </ion-item>\n          </div>\n          <div *ngIf=\"sendOtpBtnVisible\" class=\"col-4 mt-5\">\n            <button (click)=\"sendOtp()\" class=\" btn otp-btn\">Send Otp</button>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-{{OtpInputcolSize}}\">\n            <ion-item>\n              <ion-label position=\"floating\"> <svg style=\"margin: 3px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"25\" fill=\"#23d5ab\" class=\"bi bi-chat-dots-fill\" viewBox=\"0 0 16 16\">\n                <path d=\"M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/>\n              </svg> ENTER YOUR OTP</ion-label>\n              <ion-input (click)=\"enterOtp()\" type=\"password\" [(ngModel)]=\"otp\"> </ion-input>\n            </ion-item> \n\n            <div *ngIf=\"resendOtpVisible\" class=\"row\">\n              <div (click)=\"ResendOtp()\" class=\"col-7\">\n                <p style=\"font-size: 14px;color:#23d5ab;margin-left:20%;\">Resend Otp</p>\n              </div>\n              <div class=\"col-5\">\n                <div *ngIf=\"timerVisible\"  class=\"row\">\n                  <div class=\"col-6\">\n                    <svg style=\"margin-left:10px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" fill=\"#121212\" class=\"bi bi-clock-history\" viewBox=\"0 0 16 16\">\n                      <path d=\"M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z\"/>\n                      <path d=\"M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z\"/>\n                      <path d=\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"/>\n                    </svg>\n                  </div>\n                  <div class=\"col-6\">\n                    <p style=\"color:rgb(75, 72, 72);margin-left: -75%;margin-top: 2px;\"> {{message}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n           \n            \n          </div>\n          <div *ngIf=\"submitBtnVisible\"  class=\"col-4 mt-5\">\n            <button (click)=\"signIn()\" [disabled]=\"otp == '' \" class=\" btn otp-btn\">Submit</button>\n          </div>\n        </div>\n\n         \n      </div>\n  \n     \n      \n      <div style=\"margin-top:-11px\" class=\"row\">\n        <!-- <div class=\"col-8 forgot-pw\">\n          Forgot password?\n        </div>\n        <div class=\"col-2 \">\n          <button  (click)=\"signin()\" class=\"btn btn-success btn-sm signin-btn mt-1\">SIGNIN</button>\n        </div>  -->\n        <ion-button (click)=\"googleSignup()\">Sign in</ion-button>\n        <ion-card>\n          <ion-card-content>\n            {{ userInfo | json}}\n          </ion-card-content>\n        </ion-card>\n        <div class=\"col-12 ion-text-center mt-3\">\n          <button  (click)=\"googleSignup()\" class=\"btn btn-primary btn-sm btn-outline facebook-btn\">\n            <svg  style=\"margin-top: -5px;color:#23d5ab; margin-left:5px !important\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-google\" viewBox=\"0 0 16 16\">\n              <path d=\"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z\"/>\n            </svg><span style=\"margin-left:5px;\">Log in with Google</span></button>\n            <ion-card>\n              <ion-card-content>\n                {{ userInfo | json}}\n              </ion-card-content>\n            </ion-card>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n\n<!-- <ion-button (click)=\"navigateToLocal()\" >Local Notification</ion-button> -->\n\n  </ion-content>\n  \n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signin_signin_module_ts-es5.js.map