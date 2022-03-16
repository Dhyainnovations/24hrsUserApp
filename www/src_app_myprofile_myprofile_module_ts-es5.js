(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunk_24HrsUserApp"] = self["webpackChunk_24HrsUserApp"] || []).push([["src_app_myprofile_myprofile_module_ts"], {
    /***/
    4790:
    /*!*******************************************************!*\
      !*** ./src/app/myprofile/myprofile-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyprofilePageRoutingModule": function MyprofilePageRoutingModule() {
          return (
            /* binding */
            _MyprofilePageRoutingModule
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


      var _myprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myprofile.page */
      47343);

      var routes = [{
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_0__.MyprofilePage
      }];

      var _MyprofilePageRoutingModule = function MyprofilePageRoutingModule() {
        _classCallCheck(this, MyprofilePageRoutingModule);
      };

      _MyprofilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyprofilePageRoutingModule);
      /***/
    },

    /***/
    22913:
    /*!***********************************************!*\
      !*** ./src/app/myprofile/myprofile.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyprofilePageModule": function MyprofilePageModule() {
          return (
            /* binding */
            _MyprofilePageModule
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


      var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myprofile-routing.module */
      4790);
      /* harmony import */


      var _myprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myprofile.page */
      47343);

      var _MyprofilePageModule = function MyprofilePageModule() {
        _classCallCheck(this, MyprofilePageModule);
      };

      _MyprofilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyprofilePageRoutingModule],
        declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_1__.MyprofilePage]
      })], _MyprofilePageModule);
      /***/
    },

    /***/
    47343:
    /*!*********************************************!*\
      !*** ./src/app/myprofile/myprofile.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyprofilePage": function MyprofilePage() {
          return (
            /* binding */
            _MyprofilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myprofile.page.html */
      95349);
      /* harmony import */


      var _myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myprofile.page.scss */
      40877);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      55160);

      var _MyprofilePage = /*#__PURE__*/function () {
        function MyprofilePage(router, http, toastCtrl, route, alertController) {
          var _this = this;

          _classCallCheck(this, MyprofilePage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.PopupModel = false;
          this.password = '';
          this.updateUsername = this.userdetails.username;
          this.updateMobile = this.userdetails.mobile;
          this.updateEmail = this.userdetails.email;
          this.getCategoryList = [];
          route.params.subscribe(function (val) {
            _this.PopupModel = false;
            console.log(_this.userdetails);

            _this.updateProfile();

            _this.getSelectCategory();
          });
        }

        _createClass(MyprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.userdetails);
          } //-------------- Navigate to supportPage ----------//

        }, {
          key: "support",
          value: function support() {
            this.router.navigate(['/support']);
          }
        }, {
          key: "backToprivious",
          value: function backToprivious() {
            this.PopupModel = false;
          }
        }, {
          key: "popupModelOpen",
          value: function popupModelOpen() {
            this.PopupModel = true;
          } //-------------- Navigate to change-categoryPage ----------//

        }, {
          key: "changeCategory",
          value: function changeCategory() {
            this.router.navigate(['change-category']);
          } //-------------- update profile Api call ----------//

        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this2 = this;

            var updateData = {
              tbid: this.userdetails.id,
              user_name: this.updateUsername,
              email_id: this.updateEmail,
              mobile_number: this.updateMobile
            };
            this.http.get('/user_update_profile').subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this2.PopupModel = false;
              } else {}
            }, function (error) {
              console.log(error);
            });
          } //-------------- Navigate to homepage ----------//

        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/homepage']);
          } //-------------- Delete account func ----------//

        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            this.presentAlertConfirm();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'buttonCss ',
                        header: 'Delete Your Account!',
                        message: 'Are You <strong>Sure</strong>!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'alert-danger',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: No');
                          }
                        }, {
                          text: 'Yes',
                          cssClass: 'buttonCss',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this3.showPrompt();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showPrompt",
          value: function showPrompt() {
            var _this4 = this;

            this.alertController.create({
              cssClass: 'buttonCss ',
              header: 'Enter The Password To Delete Your Account',
              inputs: [{
                name: 'Place',
                placeholder: 'Password',
                type: 'text'
              }],
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {
                  console.log('Canceled', data);
                }
              }, {
                text: 'Delete Account!',
                handler: function handler(data) {
                  _this4.password = data;
                  var obj = {
                    tbid: _this4.userdetails.id,
                    password: _this4.password
                  };
                  console.log(obj);

                  _this4.http.post('/user_delete_account', obj).subscribe(function (response) {
                    console.log(response);

                    if (response.success == "true") {
                      var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: function didOpen(toast) {
                          toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                          toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                        }
                      });
                      Toast.fire({
                        icon: 'success',
                        title: 'Account Deleted Successfully.'
                      });
                    }
                  }, function (error) {
                    var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 1000,
                      timerProgressBar: true,
                      didOpen: function didOpen(toast) {
                        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                      }
                    });
                    Toast.fire({
                      icon: 'error',
                      title: 'Something Went Wrong'
                    });
                    console.log(error);
                  });

                  console.log('Saved Information', data);
                }
              }]
            }).then(function (res) {
              res.present();
            });
          } //----------- get store category List ---------//

        }, {
          key: "getSelectCategory",
          value: function getSelectCategory() {
            var _this5 = this;

            this.http.get('/store_category').subscribe(function (response) {
              _this5.getCategoryList = response.records;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return MyprofilePage;
      }();

      _MyprofilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _MyprofilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-myprofile',
        template: _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        //------------- Animations ----------//
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
        styles: [_myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyprofilePage);
      /***/
    },

    /***/
    40877:
    /*!***********************************************!*\
      !*** ./src/app/myprofile/myprofile.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.top-container {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  height: 28%;\n  border-bottom-left-radius: 25%;\n  border-bottom-right-radius: 25%;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n  margin: 6px;\n}\n\n.edit-name {\n  font-size: 15px;\n  margin-top: 5px;\n}\n\n.profile {\n  width: 160px;\n  height: 125px;\n  position: relative;\n  margin-top: 15%;\n  border: 2px solid #ffffff;\n  border-radius: 30px;\n  z-index: 999;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 5%;\n  margin-bottom: 5px !important;\n}\n\n.card {\n  box-shadow: 2px 2px 2px 2px #ccc;\n  border-radius: 10px;\n  margin: 5px;\n  width: 80%;\n  text-align: left;\n}\n\n.col-6 {\n  margin-bottom: 7px !important;\n}\n\nspan {\n  margin: 15px !important;\n  font-size: 14px !important;\n}\n\nsvg {\n  margin-left: 5px !important;\n}\n\n.myproduct-div {\n  align-items: center !important;\n  justify-content: center !important;\n  text-align: center !important;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  margin-left: 2% !important;\n  margin-right: 5% !important;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 95% !important;\n  border-top-left-radius: 25%;\n  border-top-right-radius: 25%;\n}\n\nion-item {\n  --border-color: #fff;\n  text-align: left;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -25px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px solid #23d5ab !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -215px !important;\n  z-index: 999;\n}\n\n#modal {\n  position: fixed;\n  top: 20% !important;\n  margin: 5%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.update-category-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 25px;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  margin-top: 6px;\n  margin-right: 10%;\n}\n\n.delete-acc-btn {\n  text-align: center !important;\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  margin: 5px;\n  color: #fff;\n  width: 60% !important;\n}\n\n.buttonCss button.alert-button:nth-child(1) {\n  color: red;\n}\n\n.buttonCss button.alert-button:nth-child(2) {\n  color: green;\n}\n\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQUNGOztBQUdBO0VBQ0UsOERBQUE7RUFRQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUEY7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBV0E7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVBO0VBQ0UsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFORjs7QUFTQTtFQUNFLDJCQUFBO0FBTkY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFMRjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVEY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBVEY7O0FBV0E7RUFDRSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFSRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBUEY7O0FBVUE7RUFDRSw2QkFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBVEY7O0FBV0E7RUFDRSw2QkFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLDZCQUFBO0VBQ0EsK0RBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBWkY7O0FBaUJFO0VBQ0UsVUFBQTtBQWRKOztBQWlCRTtFQUNFLFlBQUE7QUFmSjs7QUFrQkE7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDRSwrREFBQTtBQWZKOztBQXFCQTtFQUNFLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFyQkY7O0FBc0JFO0VBQ0ksYUFBQTtBQXBCTiIsImZpbGUiOiJteXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi50b3AtY29udGFpbmVye1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbiAgLy8gYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI2LCAxODgsIDE1NiwgMSkgMCUsIHJnYmEoMTQyLCA2OCwgMTczLCAxKSAxMDAlKTtcblx0Ly8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDI2LCAxODgsIDE1NiwgMSkgMCUsIHJnYmEoMTQyLCA2OCwgMTczLCAxKSAxMDAlKTtcblx0Ly8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNiwgMTg4LCAxNTYsIDEpIDAlLCByZ2JhKDE0MiwgNjgsIDE3MywgMSkgMTAwJSk7XG5cbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYWE0NmUwIDIzJSwgIzVjNjNmNyA3NiUpO1xuICBoZWlnaHQ6MjglO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNSU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAgMjUlO1xuXG59XG4ubmFtZXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVDNUM1QztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zdHlsZTogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgbWFyZ2luOiA2cHg7XG59XG5cblxuLmVkaXQtbmFtZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnByb2ZpbGV7XG4gIHdpZHRoOjE2MHB4O1xuICBoZWlnaHQ6MTI1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAvLyB0b3A6MjAlO1xuICAvLyBsZWZ0OjUlO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgei1pbmRleDogOTk5O1xuXG59XG4uZWRpdHByb2ZpbGV7XG4gIHdpZHRoOjE1NXB4O1xuICBoZWlnaHQ6MTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6NSU7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuLmNhcmR7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb2wtNntcbiAgbWFyZ2luLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG59XG5zcGFue1xuICBtYXJnaW46MTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuc3Zne1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubXlwcm9kdWN0LWRpdntcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWJlNmU2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAyJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDUlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZWJlNmU2O1xuICB3aWR0aDo5NSUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjUlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogIDI1JTtcbiAgXG4gIH1cblxuLy8gaW9uLWxhYmVse1xuLy8gICBtYXJnaW4tYm90dG9tOjI1cHg7XG4vLyB9XG5pb24taXRlbXtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjo1cHg7XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyM2Q1YWI7XG59XG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOjJweCBzb2xpZCAjMjNkNWFiIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjZTlmM2ZmO1xufVxuI2NhcmR7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBoZWlnaHQ6MTUwJTtcbiAgd2lkdGg6MTUwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIG1hcmdpbi10b3A6IC0yMTVweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59XG4jbW9kYWx7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICB0b3A6MjAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjo1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWJlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICB3aWR0aDo5NCUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7ICBcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIFxufVxuLnVwZGF0ZS1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbiAgY29sb3I6I2ZmZjtcbiAgaGVpZ2h0OjI1cHg7XG4gIHdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjoxNXB4ICFpbXBvcnRhbnQ7XG59XG4udXBkYXRlLWNhdGVnb3J5LWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICBoZWlnaHQ6MjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uZGVsZXRlLWFjYy1idG57XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjgwYTBcbiAgMCUsICNlYjE1NGJcbiAgMTAwJSk7XG4gIG1hcmdpbjo1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25Dc3Mge1xuXG4gIGJ1dHRvbi5hbGVydC1idXR0b246bnRoLWNoaWxkKDEpe1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICBidXR0b24uYWxlcnQtYnV0dG9uOm50aC1jaGlsZCgyKXtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbn1cbmlvbi1jaGlwe1xuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTdweCByZ2JhKDAsIDAsIDAsIDUuNSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU1YzU5XG4gICAgMCUsICMxZDFmMWVcbiAgICAxMDAlKTtcbn1cblxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    95349:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"top-container\">\n    <div class=\"row\">\n\n      <div class=\"col-3 ion-text-center mt-4\">\n        <ion-buttons slot=\"end\">\n          <ion-menu-button style=\"color:#fff;margin:0px;\" autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <!-- <svg (click)=\"back()\" style=\"color:#fff;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"40\" fill=\"#fff\" class=\"bi bi-chevron-left\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n        </svg> -->\n      </div>\n      <div class=\"col-6 mt-4\">\n        <!-- <p style=\"color: #fff;font-size: 30px;\">My profile</p> -->\n      </div>\n\n      <!------------ Home icon ----------------->\n      <!-- <div class=\"col-3 ion-text-center mt-5\">\n        <ion-icon name=\"home\" (click)=\"back()\"\n          style=\"color:#fff;cursor:pointer;height:25px;width: 30px;margin-top: -10px;\"></ion-icon>\n      </div> -->\n    </div>\n\n    <!------------ Display Login UserDetails ----------------->\n    <div class=\"row\">\n      <div class=\"col-9 mt-1 mx-3\">\n        <p style=\"color: #fff;font-size: 30px;\">{{updateUsername}}</p>\n        <p style=\"color: #fff;font-size: 15px;margin-top: -15px\">{{updateMobile}}</p>\n        <p style=\"color: #fff;font-size: 12px;margin-top: -15px;\">{{updateEmail}}\n          <svg (click)=\"popupModelOpen()\" style=\"margin: 5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\"\n            fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n            <path fill-rule=\"evenodd\"\n              d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n          </svg>\n        </p>\n\n      </div>\n      <!-- <div class=\"col-12 ion-text-center\">\n        <img class=\"profile\" src=\"assets/sparrow.JPG\" alt=\"\">\n      </div> -->\n    </div>\n\n  </div>\n\n  <!------------ Show category's List ----------------->\n  <div @slideup class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"col-6\">\n        <p class=\"name\">Categories :</p>\n      </div>\n      <div class=\"col-6\">\n\n        <button type=\"button\" (click)=\"changeCategory()\" class=\"btn btn-success btn-sm update-category-btn\">Change\n          Preference</button>\n\n      </div>\n      <div class=\"col-12\">\n        <div class=\"container mt-1\" id=\"SelectedList\">\n          <ion-chip *ngFor=\"let category of getCategoryList\">\n            <ion-label>{{category.category}}</ion-label>\n          </ion-chip>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!------------ Delete Account button ----------------->\n  <div class=\"ion-text-center\" style=\"margin-top: 20%;\">\n    <button (click)=\"deleteAccount()\" class=\"btn btn-sm delete-acc-btn \">Delete My Account</button>\n  </div>\n\n  <!------------ update profile PopUp ----------------->\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\"\n              d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n          </svg>\n        </div>\n        <h5 style=\"margin:10px; color: #5C5C5C;\"> <b>Edit Here:</b></h5>\n        <div class=\"row\" style=\"padding-left: 10px;\">\n\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Username :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateUsername\" type=\"text\">\n          </div>\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Mobile number :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateMobile\" type=\"text\" id=\"edit-field\">\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Email:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateEmail\" type=\"text\" id=\"edit-field\">\n          </div>\n        </div>\n        <div style=\"width: 100%; text-align: center;\">\n          <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_myprofile_myprofile_module_ts-es5.js.map