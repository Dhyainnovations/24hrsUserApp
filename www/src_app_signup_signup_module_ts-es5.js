(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_signup_signup_module_ts"], {
    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_login' || serviceName == '/user_register') {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
              var options = {
                headers: headers,
                withCredentials: false
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            } else {
              var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);

              var _options = {
                headers: _headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: _headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              'enctype': 'multipart/form-data;',
              'Content-Type': 'multipart/form-data;',
              'Accept': 'plain/text',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    50159:
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageRoutingModule": function SignupPageRoutingModule() {
          return (
            /* binding */
            _SignupPageRoutingModule
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
      }];

      var _SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      _SignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SignupPageRoutingModule);
      /***/
    },

    /***/
    77648:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPageModule": function SignupPageModule() {
          return (
            /* binding */
            _SignupPageModule
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signup-routing.module */
      50159);
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page */
      80771);

      var _SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      _SignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
      })], _SignupPageModule);
      /***/
    },

    /***/
    80771:
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupPage": function SignupPage() {
          return (
            /* binding */
            _SignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signup.page.html */
      21355);
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signup.page.scss */
      74194);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, http, toastCtrl, popoverController, route) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.popoverController = popoverController;
          this.route = route;
          this.locationn = "coimbate";
          this.userName = "";
          this.mobileNumber = 8838373520;
          this.x = document.getElementById("demo");
          this.route.queryParams.subscribe(function (queryParams) {});
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getLocation",
          value: function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
              this.x.innerHTML = "Geolocation is not supported by this browser.";
            }
          }
        }, {
          key: "showPosition",
          value: function showPosition(position) {
            this.x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
          }
        }]);

        return SignupPage;
      }();

      _SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _SignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateX(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('600ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateX(0%)',
          opacity: 1
        }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          opacity: 0,
          transform: 'translateY(150%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translateY(0%)',
          opacity: 1
        }))])])],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SignupPage);
      /***/
    },

    /***/
    74194:
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".get-started {\n  font-size: 20px;\n  color: #4d4848;\n  margin: 8px;\n}\n\n.myproduct-div {\n  position: absolute;\n  top: 18%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  margin-top: 18px !important;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid blue;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 5px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #23d5ab;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 5px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\n.row {\n  margin-bottom: 10px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0VBR0EsNkJBQUE7QUFBSjs7QUFFRTtFQUNFLDZCQUFBO0VBQ0EseUVBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFDRTtFQUNJLGFBQUE7QUFDTiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1zdGFydGVkIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3IgICAgOiAjNGQ0ODQ4O1xuICAgIG1hcmdpbiAgIDogOHB4O1xufVxuXG4ubXlwcm9kdWN0LWRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjE4JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICBcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiOztcbiAgfVxuICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAycHggIzIzZDVhYjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTs7XG4gIH1cbiAgLnVwZGF0ZS1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICB3aWR0aDo1NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQgO1xufVxuLnNraXAtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IzIzZDVhYjtcbiAgaGVpZ2h0OjI1cHg7XG4gIHdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjo1cHggIWltcG9ydGFudDtcbn1cbmxvdHRpZS1wbGF5ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWxlY3R7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gXG59XG4ucm93e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojRjRGN0ZBICAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4iXX0= */";
      /***/
    },

    /***/
    21355:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#23d5ab\" name=\"close\"></ion-icon>\n\n      </div>\n\n      <div class=\"col-5 ion-text-center\">\n        <span class=\"seller\"><b>24hrs</b></span>\n        <!-- <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\"> -->\n      </div>\n\n    </div>\n    <p class=\"get-started mt-2 mx-3\"><b>Getting Started</b></p>\n\n  \n\n\n\n    <div class=\"row ion-text-center\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_ultyaniw.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:60%;margin-left: 15px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Username\" [(ngModel)]=\"userName\" maxlength=\"10\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_uz8b4wzt.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:65%;margin-left: 15px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input disabled type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobileNumber\">\n        <p class=\"small text-danger\" *ngIf=\"youtubeurlCheck\"><i>Kindly Enter Correct Youtube Url</i></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/datafiles/uihIaQIvWBfYL9a/data.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"select\">\n          <select ngModel name=\"subcategory\">\n            <option value=\"\" disabled selected>Location</option>\n            <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">\n              {{subcat.subsubcategory}}\n            </option>\n            <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n            <option value=\"1\">Coimbatore</option>\n            <option value=\"1\">Chennai</option>\n            <option value=\"1\">Madhurai</option>\n            <option value=\"1\">Salem</option>\n          \n          </select>\n        </div> \n      </div>\n    </div>\n    \n\n    <div class=\"row \">\n      <div class=\"col-7\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n      </div>\n      <div class=\"col-5\">\n        <button (click)=\"sellerContact()\" type=\"button\" class=\"btn btn-success btn-sm update-btn\">Next</button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signup_signup_module_ts-es5.js.map