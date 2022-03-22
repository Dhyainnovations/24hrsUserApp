(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_searchpage_searchpage_module_ts"], {
    /***/
    56432:
    /*!*********************************************************!*\
      !*** ./src/app/searchpage/searchpage-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePageRoutingModule": function SearchpagePageRoutingModule() {
          return (
            /* binding */
            _SearchpagePageRoutingModule
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


      var _searchpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./searchpage.page */
      59992);

      var routes = [{
        path: '',
        component: _searchpage_page__WEBPACK_IMPORTED_MODULE_0__.SearchpagePage
      }];

      var _SearchpagePageRoutingModule = function SearchpagePageRoutingModule() {
        _classCallCheck(this, SearchpagePageRoutingModule);
      };

      _SearchpagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchpagePageRoutingModule);
      /***/
    },

    /***/
    31895:
    /*!*************************************************!*\
      !*** ./src/app/searchpage/searchpage.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePageModule": function SearchpagePageModule() {
          return (
            /* binding */
            _SearchpagePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-search-filter */
      44981);
      /* harmony import */


      var _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./searchpage-routing.module */
      56432);
      /* harmony import */


      var _searchpage_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./searchpage.page */
      59992);

      var _SearchpagePageModule = function SearchpagePageModule() {
        _classCallCheck(this, SearchpagePageModule);
      };

      _SearchpagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule, _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchpagePageRoutingModule],
        declarations: [_searchpage_page__WEBPACK_IMPORTED_MODULE_2__.SearchpagePage]
      })], _SearchpagePageModule);
      /***/
    },

    /***/
    59992:
    /*!***********************************************!*\
      !*** ./src/app/searchpage/searchpage.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePage": function SearchpagePage() {
          return (
            /* binding */
            _SearchpagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./searchpage.page.html */
      23437);
      /* harmony import */


      var _searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./searchpage.page.scss */
      93082);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);

      var _SearchpagePage = /*#__PURE__*/function () {
        function SearchpagePage(router, activatedRoute, http, route) {
          var _this = this;

          _classCallCheck(this, SearchpagePage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.http = http;
          this.cardVisible = false;
          this.isVisible = false;
          this.isShown = true;
          this.searchResultVisible = false;
          this.searchResult = [];
          this.searchProductList = [];
          route.params.subscribe(function (val) {
            _this.getProductList();
          });
        }

        _createClass(SearchpagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchProduct",
          value: function searchProduct() {
            var _this2 = this;

            console.log(this.searchProductName);
            this.getProductList();
            this.isVisible = true;
            this.isShown = false;
            this.cardVisible = false;
            this.searchResultVisible = true;
            this.http.get('/product_search_user' + this.searchProductName).subscribe(function (response) {
              if (response.success == "true") {
                _this2.searchProductList = response.records;
                console.log(response);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "selectSearchProduct",
          value: function selectSearchProduct(name) {
            var _this3 = this;

            this.searchProductName = name;
            var s = name;
            console.log(s);
            this.searchResultVisible = false;
            this.cardVisible = true;
            this.http.get('/product_search_user?s=' + s).subscribe(function (response) {
              if (response.success == "true") {
                console.log(response);
                _this3.storeLogo = response.records.store_logo;
                _this3.storeName = response.records.store_name;
                _this3.productName = response.records.product_name;
                _this3.productImage = response.records.product_image;
                _this3.description = response.records.description;
                _this3.weight = response.records.weight;
                _this3.unit = response.records.unit;
                _this3.totalCost = response.records.total_cost;
                _this3.offerPrice = response.records.offer_price;
                _this3.offerTime = response.records.offer_time;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getProductList",
          value: function getProductList() {
            var _this4 = this;

            this.http.get('/list_all_product').subscribe(function (response) {
              _this4.searchProductList = response.records;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "backToHome",
          value: function backToHome() {
            this.router.navigate(['/homepage']);
          }
        }]);

        return SearchpagePage;
      }();

      _SearchpagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _SearchpagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-searchpage',
        template: _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchpagePage);
      /***/
    },

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

            if (serviceName == '/user_get_otp' || serviceName == '/user_verify_otp' || serviceName == '/user_register' || serviceName == '/user_login') {
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
    93082:
    /*!*************************************************!*\
      !*** ./src/app/searchpage/searchpage.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  --background: #fff !important;\n  margin: 3px;\n}\n\n#productCard {\n  width: 97% !important;\n}\n\n#product_img {\n  border: 1px solid #FFFFFF;\n  border-radius: 15%;\n  box-shadow: 3px 3px 16px 4px #ccc;\n  width: 85px;\n  height: 75px;\n  margin: 8px;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSEo7O0FBSUk7RUFDSSxhQUFBO0FBRlIiLCJmaWxlIjoic2VhcmNocGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4O1xuXG59XG5cbiNwcm9kdWN0Q2FyZHtcbiAgICB3aWR0aDogOTclICFpbXBvcnRhbnQ7XG59XG4jcHJvZHVjdF9pbWd7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBib3gtc2hhZG93OjNweCAzcHggMTZweCA0cHggI2NjYztcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6NzVweDtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhjZGJlMlxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    23437:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchpage/searchpage.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  style=\"margin-top: -7px;\">\n  <ion-toolbar class=\"new-background-color\">\n    <div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1 mt-4 \">\n        <ion-icon (click)=\"backToHome()\" style=\"width:30px;height:25px;color:#fff;margin-top:11px;cursor: pointer;\" name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"col-11 mt-4 \">\n        <ion-searchbar (keydown)=\"searchProduct()\"  [(ngModel)]=\"searchProductName\" type=\"text\"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"searchResultVisible\" >\n  <ion-list  *ngFor=\"let product of searchProductList |filter:searchProductName\">\n   <div class=\"row\">\n    <div class=\"col-10\">\n      <ion-item (click)=\"selectSearchProduct(product.product_name)\" class=\"mx-3\" >{{product.product_name}}</ion-item>\n    </div>\n    <div class=\"col-2\">\n     <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up-left\" viewBox=\"0 0 16 16\">\n       <path fill-rule=\"evenodd\" d=\"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z\"/>\n     </svg>\n    </div>\n   </div>\n    \n</ion-list>\n</div>\n\n\n\n<div  class=\"container\">\n  <div *ngIf=\"cardVisible\" id=\"productCard\"  class=\"col-12 card mt-5\">\n    <div class=\"row\">\n      <div class=\"col-10 ion-text-left\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <img style=\"margin: 5px;border-radius: 20%;\" src=\"{{storeLogo}}\" height=\"35px\" width=\"35px\" alt=\"\">\n          </div>\n          <div style=\"margin-left: -30px;\" class=\"col-8 mt-2\">\n            <p style=\"font-size: 18px;color: #404040;\"><b>{{storeName }}</b>\n            </p>\n          </div>\n        </div>\n      </div>\n      \n\n      <div  class=\"row\">\n        <div  class=\"col-6\" style=\"margin-top: -5px;\">\n          <img id=\"product_img\" height=\"75px\" width=\"95px\"  src=\"{{productImage}}\" alt=\"\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p style=\"color: #404040;margin-left:20px;font-size: 12px;\">{{productName}}</p>\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"mx-2\">\n            <ion-badge class=\"badge ion-text-left\"  id=\"kg\" slot=\"start\">{{weight}}{{unit}}</ion-badge>\n          </div>\n          <p><span id=\"offer\"\n              style=\"font-size: smaller;color: #5F5F5F;text-decoration: line-through\">\n              <i style=\"color:#23d5ab\" class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n              {{totalCost}}.00</span> <span\n              style=\"margin: 0;padding:0;font-size:15px;\">{{cost}}.00</span></p>\n          <p style=\"font-size: smaller;\">\n            <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path\n                d=\"M8.49963 12.492L8.49859 12.5105C8.42789 13.7644 9.12154 14.9391 10.2662 15.5023L10.278 15.5081C10.6815 15.7035 11.0123 16.0258 11.221 16.4265L11.2257 16.4352C11.8025 17.5473 12.9954 18.2214 14.2672 18.1538L14.2865 18.1527C14.7477 18.1266 15.2055 18.247 15.5958 18.4974C16.6726 19.1795 18.0396 19.1795 19.1164 18.4974C19.5067 18.247 19.9645 18.1266 20.4257 18.1527L20.445 18.1538C21.7147 18.2219 22.9092 17.5473 23.4873 16.4334L23.4902 16.4273C23.6996 16.0255 24.0312 15.7027 24.4361 15.507L24.4455 15.5023C25.5902 14.9388 26.2841 13.7644 26.2131 12.5102L26.2121 12.4928C26.1886 12.0511 26.3096 11.614 26.5569 11.2492C27.2688 10.1979 27.2688 8.81162 26.5572 7.76004C26.3101 7.39552 26.1886 6.95861 26.2121 6.51696L26.2131 6.49847C26.2841 5.24429 25.5902 4.06988 24.4444 3.50618L24.434 3.5009C24.0312 3.30596 23.7012 2.98528 23.4922 2.58562L23.4862 2.57374C22.9092 1.46167 21.7147 0.787825 20.445 0.855183L20.4255 0.85624C19.9645 0.88239 19.5067 0.761938 19.1167 0.511525H19.1162C18.0393 -0.170508 16.6724 -0.170508 15.5955 0.511525C15.2052 0.761674 14.7474 0.882126 14.2862 0.855975L14.2669 0.854919C12.997 0.786768 11.8027 1.46141 11.226 2.57321L11.2215 2.5814C11.0126 2.9829 10.6815 3.30543 10.2774 3.50117L10.2665 3.50645C9.1218 4.06961 8.42789 5.24429 8.49885 6.49847L8.49989 6.5159C8.52337 6.95756 8.40233 7.39472 8.15503 7.75925C7.44312 8.81083 7.44312 10.1973 8.15503 11.2487C8.40207 11.6132 8.52337 12.0504 8.49963 12.492ZM9.03441 8.37366C9.41606 7.81102 9.60311 7.13639 9.56658 6.45488L9.56554 6.43639C9.52798 5.60538 9.98867 4.83353 10.7324 4.48037L10.7415 4.47588C11.3517 4.18003 11.8513 3.69294 12.1664 3.08698L12.1716 3.07694C12.5548 2.33785 13.3575 1.88986 14.21 1.93582L14.2288 1.93661C14.911 1.97544 15.5879 1.7974 16.165 1.42707C16.8936 0.965597 17.8181 0.965597 18.5467 1.42707C19.1238 1.79687 19.8007 1.97518 20.4826 1.93687L20.5014 1.93582C21.3581 1.89038 22.1569 2.33785 22.539 3.07483L22.5461 3.0883C22.8612 3.69347 23.3603 4.17976 23.9696 4.47535L23.9785 4.47984C24.734 4.85176 25.1926 5.61964 25.1464 6.43666L25.1454 6.45594C25.1089 7.13744 25.2962 7.81182 25.6778 8.37445C26.139 9.05569 26.1388 9.9538 25.6773 10.6348C25.2959 11.1977 25.1089 11.8723 25.1454 12.5538L25.1464 12.572C25.1926 13.3891 24.734 14.1572 23.9782 14.5294L23.9704 14.5331C23.3597 14.8295 22.8596 15.3171 22.5443 15.9241L22.5403 15.932C22.1569 16.6711 21.3555 17.1194 20.5017 17.0732L20.4831 17.0721C19.801 17.0335 19.1238 17.2118 18.5464 17.5819C17.8181 18.0431 16.8936 18.0431 16.1652 17.5819C15.6404 17.2451 15.0315 17.0665 14.4101 17.0671C14.3499 17.0671 14.2893 17.0687 14.2288 17.0721L14.21 17.0729C13.3687 17.127 12.5728 16.6812 12.1708 15.9307L12.1654 15.9204C11.8507 15.3155 11.352 14.8295 10.7428 14.5339L10.7329 14.5289C9.97719 14.1569 9.51858 13.3888 9.56502 12.572L9.56606 12.5528C9.60232 11.8713 9.41502 11.1966 9.03363 10.6342C8.57268 9.95301 8.57294 9.0549 9.03441 8.37419V8.37366Z\"\n                fill=\"#23d5ab\" />\n              <path\n                d=\"M13.9082 15.097C14.1584 15.2553 14.4879 15.1779 14.6441 14.9245L20.9731 4.65812C21.0764 4.49408 21.085 4.28646 20.9952 4.1145C20.9055 3.94228 20.7312 3.83239 20.5392 3.82631C20.3472 3.82024 20.1667 3.91903 20.0665 4.08518L13.7379 14.3516C13.5816 14.6052 13.6578 14.9388 13.9082 15.097Z\"\n                fill=\"#23d5ab\" />\n              <path\n                d=\"M14.4755 9.53113C15.7765 9.53113 16.8351 8.30891 16.8351 6.80669C16.8351 5.30447 15.7765 4.08252 14.4755 4.08252C13.1746 4.08252 12.1162 5.30447 12.1162 6.80669C12.1162 8.30891 13.1746 9.53113 14.4755 9.53113ZM14.4755 5.16448C15.1874 5.16448 15.7665 5.90119 15.7665 6.80669C15.7665 7.7122 15.1874 8.44917 14.4755 8.44917C13.7639 8.44917 13.1847 7.71193 13.1847 6.80669C13.1847 5.90145 13.7639 5.16448 14.4755 5.16448Z\"\n                fill=\"#23d5ab\" />\n              <path\n                d=\"M17.8765 12.2027C17.8765 13.7049 18.9348 14.9269 20.2358 14.9269C21.5367 14.9269 22.5953 13.7046 22.5953 12.2027C22.5953 10.701 21.537 9.47852 20.236 9.47852C18.9348 9.47852 17.8765 10.7002 17.8765 12.2027ZM21.5268 12.2027C21.5268 13.1082 20.9477 13.8449 20.2358 13.8449C19.5241 13.8449 18.945 13.1082 18.945 12.2027C18.945 11.2972 19.5241 10.5605 20.2358 10.5605C20.9477 10.5605 21.5268 11.2967 21.5268 12.2027Z\"\n                fill=\"#23d5ab\" />\n              <path\n                d=\"M28.6263 21.186C27.9188 19.9146 26.35 19.4304 25.0626 20.0861L20.8775 22.0883C20.2997 21.0003 19.1912 20.3077 17.9714 20.2728L14.108 20.165C13.4962 20.1473 12.896 19.9902 12.352 19.706L11.9589 19.4997C9.94606 18.4372 7.54686 18.4399 5.53609 19.5065L5.56061 18.6047C5.5687 18.306 5.33626 18.0571 5.04122 18.0489L0.804722 17.9309C0.50968 17.9227 0.264203 18.158 0.256116 18.4568L0.000204782 27.8708C-0.00788216 28.1696 0.224551 28.4184 0.519593 28.4266L4.75609 28.5447H4.77096C5.06026 28.5444 5.29687 28.3111 5.30496 28.0185L5.31696 27.5681L6.41756 26.9714C6.84956 26.736 7.35486 26.68 7.82677 26.8153L14.3988 28.6831C14.4103 28.6865 14.4218 28.6891 14.4335 28.6918C14.9086 28.7924 15.3927 28.8429 15.8782 28.8426C16.906 28.8431 17.9218 28.6189 18.856 28.1846C18.879 28.174 18.9011 28.1619 18.9223 28.1482L28.4513 21.9066C28.6889 21.7513 28.7656 21.4351 28.6263 21.186ZM1.08307 27.3597L1.3095 19.0276L4.47801 19.1158L4.25131 27.4482L1.08307 27.3597ZM18.3744 27.2178C17.2138 27.7482 15.9176 27.8946 14.6701 27.6362L8.11555 25.7737C7.37808 25.5624 6.58817 25.6501 5.9133 26.0175L5.35087 26.3224L5.50165 20.7824C7.28364 19.5821 9.56937 19.4587 11.4674 20.4601L11.8606 20.6664C12.5477 21.0256 13.3058 21.224 14.0787 21.2465L17.9422 21.3542C19.0274 21.3857 19.949 22.1681 20.1692 23.2448L14.4145 23.0844C14.1194 23.0762 13.874 23.3116 13.8659 23.6103C13.8578 23.9091 14.0902 24.1579 14.3853 24.1661L20.7361 24.3431H20.7512C21.0403 24.3428 21.2769 24.1096 21.285 23.8169C21.2915 23.5818 21.274 23.3465 21.2333 23.1151L25.5251 21.0613L25.5376 21.0552C26.1465 20.743 26.8829 20.8473 27.3835 21.3167L18.3744 27.2178Z\"\n                fill=\"#23d5ab\" />\n            </svg>\n            {{offerPrice}}%\n          </p>\n\n          <p id=\"offer\" style=\"font-size: smaller;\">\n            <svg width=\"20\" height=\"18\" viewBox=\"0 0 29 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path\n                d=\"M18.9116 3.42642V1.81135H20.5929V0.22644H15.5488V1.81135H17.2302V3.42642C14.4736 3.62501 12.0001 4.79208 10.1921 6.56606H3.66697V8.15044H8.86504C8.52445 8.65143 8.22897 9.18153 7.98298 9.73587H1.98559V11.3202H7.43614C7.30667 11.8354 7.21773 12.3647 7.1739 12.9057H0.304199V14.4906H7.17384C7.21773 15.0316 7.30662 15.5609 7.43608 16.0755H1.98559V17.6604H7.98298C8.22891 18.2147 8.52445 18.7448 8.86504 19.2453H3.66697V20.8302H10.1921C12.1821 22.7828 14.9784 24 18.0709 24C24.0971 24 28.9999 19.3786 28.9999 13.6981C28.9999 8.28426 24.5466 3.83242 18.9116 3.42642ZM27.2799 14.4906C26.8787 18.666 23.3412 22.0006 18.9116 22.3787V20.8302H17.2302V22.3787C12.8005 22.0006 9.26297 18.666 8.86184 14.4906H10.5046V12.9057H8.86184C9.26297 8.73025 12.8005 5.39566 17.2302 5.01756V6.56606H18.9116V5.01756C23.3412 5.39566 26.8787 8.73025 27.2799 12.9057H25.6371V14.4906H27.2799Z\"\n                fill=\"#23d5ab\" />\n              <path\n                d=\"M15.5488 13.6981C15.5488 15.009 16.6802 16.0755 18.0709 16.0755C19.0607 16.0755 19.9634 15.5259 20.3705 14.6754L23.1146 8.94385L17.0341 11.5305C16.1318 11.9144 15.5488 12.7652 15.5488 13.6981ZM17.7258 12.9751L19.7527 12.1128L18.838 14.0235C18.7021 14.3072 18.401 14.4906 18.0709 14.4906C17.6074 14.4906 17.2302 14.1351 17.2302 13.6981C17.2302 13.387 17.4248 13.1032 17.7258 12.9751Z\"\n                fill=\"#23d5ab\" />\n            </svg>\n            {{offerTime}}\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"social-media-icon-div\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <a href=\"{{websiteLink}}\">\n            <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\">\n              <path\n                d=\"M36 18C36 18.1847 35.9969 18.3663 35.9906 18.5478C35.9124 21.3393 35.1801 24.0735 33.8525 26.5304C33.6522 26.903 33.4393 27.2692 33.2108 27.6261C31.0424 31.0502 27.7837 33.644 23.9603 34.9889C22.2187 35.6002 20.3929 35.9382 18.5478 35.9906C18.3663 35.9969 18.1847 36 18 36C17.8153 36 17.6337 35.9969 17.4522 35.9906C15.6071 35.9382 13.7813 35.6002 12.0397 34.9889C8.21632 33.644 4.95758 31.0502 2.78922 27.6261C2.5607 27.2692 2.34783 26.903 2.14748 26.5304C0.819938 24.0735 0.0876035 21.3393 0.00939137 18.5478C0.0031305 18.3663 0 18.1847 0 18C0 17.8153 0.0031305 17.6337 0.00939137 17.4522C0.0876035 14.6607 0.819938 11.9265 2.14748 9.46957C2.34783 9.09704 2.5607 8.73078 2.78922 8.37391C4.95758 4.94977 8.21632 2.35601 12.0397 1.01113C13.7813 0.399761 15.6071 0.0618426 17.4522 0.00939137C17.6337 0.0031305 17.8153 0 18 0C18.1847 0 18.3663 0.0031305 18.5478 0.00939137C20.3929 0.0618426 22.2187 0.399761 23.9603 1.01113C27.7837 2.35601 31.0424 4.94977 33.2108 8.37391C33.4393 8.73078 33.6522 9.09704 33.8525 9.46957C35.1801 11.9265 35.9124 14.6607 35.9906 17.4522C35.9969 17.6337 36 17.8153 36 18Z\"\n                fill=\"#85C646\" />\n              <path\n                d=\"M35.9906 18.5478C35.9969 18.3663 36 18.1847 36 18C36 17.8153 35.9969 17.6337 35.9906 17.4522H28.4431C28.4198 14.7653 28.106 12.0889 27.5071 9.46957H33.8525C33.6522 9.09704 33.4393 8.73078 33.2108 8.37391H27.2317C26.5732 5.74963 25.4665 3.25876 23.9603 1.01113C23.3681 0.802708 22.7652 0.626108 22.1541 0.482087C23.8226 2.37913 25.1781 5.09948 26.0953 8.37391H18.5478V0.00939137C18.3663 0.0031305 18.1847 0 18 0C17.8153 0 17.6337 0.0031305 17.4522 0.00939137V8.37391H9.9047C10.8219 5.09948 12.1774 2.37913 13.8459 0.482087C13.2348 0.626108 12.6319 0.802708 12.0397 1.01113C10.5335 3.25876 9.42678 5.74963 8.76835 8.37391H2.78922C2.5607 8.73078 2.34783 9.09704 2.14748 9.46957H8.49287C7.894 12.0889 7.58017 14.7653 7.55687 17.4522H0.00939137C0.0031305 17.6337 0 17.8153 0 18C0 18.1847 0.0031305 18.3663 0.00939137 18.5478H7.55687C7.58017 21.2347 7.894 23.9111 8.49287 26.5304H2.14748C2.34783 26.903 2.5607 27.2692 2.78922 27.6261H8.76835C9.42554 30.2508 10.5323 32.7419 12.0397 34.9889C12.6319 35.1973 13.2348 35.3739 13.8459 35.5179C12.1774 33.6209 10.8219 30.9005 9.9047 27.6261H17.4522V35.9906C17.6337 35.9969 17.8153 36 18 36C18.1847 36 18.3663 35.9969 18.5478 35.9906V27.6261H26.0953C25.1781 30.9005 23.8226 33.6209 22.1541 35.5179C22.7652 35.3739 23.3681 35.1973 23.9603 34.9889C25.4689 32.7426 26.5758 30.2513 27.2317 27.6261H33.2108C33.4393 27.2692 33.6522 26.903 33.8525 26.5304H27.5071C28.106 23.9111 28.4198 21.2347 28.4431 18.5478H35.9906ZM17.4522 26.5304H9.62296C9.00202 23.9142 8.67651 21.2366 8.65252 18.5478H17.4522V26.5304ZM17.4522 17.4522H8.65252C8.6767 14.7634 9.00221 12.0858 9.62296 9.46957H17.4522V17.4522ZM26.377 26.5304H18.5478V18.5478H27.3475C27.3233 21.2366 26.9978 23.9142 26.377 26.5304ZM18.5478 17.4522V9.46957H26.377C26.998 12.0858 27.3235 14.7634 27.3475 17.4522H18.5478Z\"\n                fill=\"#6A9E38\" />\n              <path d=\"M3.52197 13.1478H32.4785V22.8522H3.52197V13.1478Z\" fill=\"#E4E4E4\" />\n              <path\n                d=\"M7.29199 15.6913H8.21265L9.20062 18.998L10.2963 15.6913H11.2104L12.2991 18.998L13.2871 15.6913H14.2077L12.7493 20.3087H11.9094L10.7533 16.8812L9.59067 20.3087H8.75735L7.29199 15.6913Z\"\n                fill=\"#6A9E38\" />\n              <path\n                d=\"M14.542 15.6913H15.4642L16.4522 18.998L17.5478 15.6913H18.4619L19.5507 18.998L20.5355 15.6913H21.4562L19.9977 20.3087H19.1581L18.0033 16.8812L16.8416 20.3087H16.007L14.542 15.6913Z\"\n                fill=\"#6A9E38\" />\n              <path\n                d=\"M21.7925 15.6913H22.7131L23.7011 18.998L24.7968 15.6913H25.7108L26.7996 18.998L27.7876 15.6913H28.7082L27.2498 20.3087H26.4096L25.2535 16.8812L24.0912 20.3087H23.2575L21.7925 15.6913Z\"\n                fill=\"#6A9E38\" />\n            </svg>\n          </a>\n\n        </div>\n        <div class=\"col-3\">\n         <a href=\"{{whatsApp}}\">\n          <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 40 41\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M0.854827 40.8334C0.629238 40.8334 0.409779 40.7446 0.247024 40.5807C0.0324696 40.3646 -0.0502871 40.0509 0.0303241 39.7576L2.64207 30.2618C1.01605 27.3342 0.15875 24.0225 0.159976 20.6606C0.164574 9.72772 9.10046 0.833374 20.0801 0.833374C25.4057 0.83551 30.4097 2.90094 34.1709 6.6485C37.9314 10.3964 40.0015 15.3784 40 20.6765C39.9951 31.6097 31.0592 40.5047 20.0801 40.5047C20.0801 40.5047 20.0719 40.5047 20.0716 40.5047C16.8646 40.5035 13.6852 39.7253 10.8543 38.2513L1.07153 40.8056C0.999804 40.8242 0.926856 40.8334 0.854827 40.8334Z\"\n            fill=\"#E5E5E5\" />\n          <path\n            d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n            fill=\"white\" />\n          <path\n            d=\"M1.51758 39.3197L4.12871 29.826C2.51771 27.0477 1.67083 23.8955 1.67175 20.6671C1.67574 10.5657 9.9321 2.34766 20.0765 2.34766C25.0003 2.34979 29.6215 4.25775 33.0957 7.72058C36.5709 11.1834 38.4835 15.7864 38.4817 20.6814C38.4774 30.783 30.2207 39.002 20.0775 39.002C20.0765 39.002 20.0778 39.002 20.0775 39.002H20.0692C16.9891 39.0008 13.9624 38.2311 11.2743 36.7724L1.51758 39.3197Z\"\n            fill=\"#64B161\" />\n          <path\n            d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n            fill=\"white\" />\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M15.3154 12.7277C14.9586 11.9379 14.5828 11.922 14.2432 11.9083C13.9655 11.8964 13.6477 11.897 13.3304 11.897C13.0129 11.897 12.4967 12.016 12.0603 12.4905C11.6235 12.9651 10.3926 14.1126 10.3926 16.4462C10.3926 18.7802 12.0998 21.0352 12.338 21.3519C12.5761 21.6684 15.6335 26.6104 20.4754 28.5117C24.4995 30.0919 25.3182 29.7775 26.1918 29.6985C27.0653 29.6195 29.0101 28.551 29.407 27.4435C29.8042 26.3361 29.8042 25.387 29.685 25.1883C29.5658 24.9909 29.2482 24.8721 28.7719 24.635C28.2956 24.3979 25.9536 23.2501 25.5168 23.092C25.0801 22.9337 24.7625 22.8549 24.445 23.3298C24.1271 23.804 23.215 24.8721 22.937 25.1883C22.659 25.5054 22.381 25.545 21.9047 25.3076C21.4283 25.0699 19.894 24.5694 18.0739 22.9535C16.6579 21.6965 15.7016 20.1437 15.4236 19.6689C15.1459 19.1946 15.419 18.9603 15.6329 18.7012C16.0182 18.2346 16.6646 17.3956 16.8234 17.0795C16.9822 16.7627 16.9028 16.4859 16.7839 16.2485C16.6646 16.0114 15.7387 13.6658 15.3154 12.7277Z\"\n            fill=\"white\" />\n        </svg>\n         </a>\n\n        </div>\n        <div class=\"col-3\">\n          <a href=\"contact\">\n            <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\"\n              fill=\"#007CFF\" />\n            <path\n              d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5903 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\"\n              fill=\"white\" />\n          </svg>\n          </a>\n\n        </div>\n        <div class=\"col-3\">\n          <a href=\"instagram\">\n            <svg style=\"margin: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 38 37\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g clip-path=\"url(#clip0_1172:10)\">\n              <path\n                d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                fill=\"url(#paint0_radial_1172:10)\" />\n              <path\n                d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n                fill=\"url(#paint1_radial_1172:10)\" />\n            </g>\n            <defs>\n              <radialGradient id=\"paint0_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                gradientTransform=\"translate(5.04861 37.1748) scale(49.6057 48.2984)\">\n                <stop offset=\"0.09\" stop-color=\"#FA8F21\" />\n                <stop offset=\"0.78\" stop-color=\"#D82D7E\" />\n              </radialGradient>\n              <radialGradient id=\"paint1_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                gradientTransform=\"translate(23.0464 38.8322) scale(39.0961 38.0657)\">\n                <stop offset=\"0.64\" stop-color=\"#8C3AAA\" stop-opacity=\"0\" />\n                <stop offset=\"1\" stop-color=\"#8C3AAA\" />\n              </radialGradient>\n              <clipPath id=\"clip0_1172:10\">\n                <rect width=\"38\" height=\"37\" fill=\"white\" />\n              </clipPath>\n            </defs>\n          </svg>\n          </a>\n        </div>\n\n        \n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<lottie-player *ngIf=\"isShown\"  src=\"https://assets6.lottiefiles.com/packages/lf20_e2zcy5pu.json\" background=\"transparent\"\nspeed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_searchpage_searchpage_module_ts-es5.js.map