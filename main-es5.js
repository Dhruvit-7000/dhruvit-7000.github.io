function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [// { path : '' ,redirectTo:"about" , pathMatch: "full" },
      // { path : 'about' , component : ImageSectionsComponent },
      // { path : 'education' , component : EducationComponent },
      // { path : 'internship' , component : InternshipComponent },
      // { path : 'knowledge' , component : ResumeMiddleComponent },
      // { path : 'project' , component : PersonalProjectComponent }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/resume-header/resume-header.component */
    "./src/app/components/resume-header/resume-header.component.ts");
    /* harmony import */


    var _components_resume_middle_resume_middle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/resume-middle/resume-middle.component */
    "./src/app/components/resume-middle/resume-middle.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Dhruvit-Resume';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Can You PLease Access in Big Screen like Laptop or Computer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-resume-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resume-middle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        }
      },
      directives: [_components_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_1__["ResumeHeaderComponent"], _components_resume_middle_resume_middle_component__WEBPACK_IMPORTED_MODULE_2__["ResumeMiddleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n@-webkit-keyframes openinmobile{\r\n  from{color: white;}\r\n  to{ color:  rgb(59, 58, 58);}\r\n}\r\n\r\n@keyframes openinmobile{\r\n  from{color: white;}\r\n  to{ color:  rgb(59, 58, 58);}\r\n}\r\n\r\n@media only screen and (max-width : 1212px){\r\n\r\n  app-resume-header[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  app-resume-middle[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]{\r\n    display: block;\r\n    background: #1b9bff;\r\n    position: fixed;\r\n    height: 100vh;\r\n    width: 100%;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    -webkit-animation-name :openinmobile;\r\n            animation-name :openinmobile;\r\n    -webkit-animation-duration: 0.5s;\r\n            animation-duration: 0.5s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n    margin-top: 50%;\r\n    text-shadow: rgb(59, 58, 58);\r\n    text-align: center;\r\n    display: flex;\r\n    line-height: 50px;\r\n    color: white;\r\n    font-family: montserrat;\r\n    font-size: 50px;\r\n    top: 80px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUtBO0VBQ0UsS0FBSyxZQUFZLENBQUM7RUFDbEIsSUFBSSx1QkFBdUIsQ0FBQztBQUM5Qjs7QUFIQTtFQUNFLEtBQUssWUFBWSxDQUFDO0VBQ2xCLElBQUksdUJBQXVCLENBQUM7QUFDOUI7O0FBR0E7O0VBRUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgb3BlbmlubW9iaWxle1xyXG4gIGZyb217Y29sb3I6IHdoaXRlO31cclxuICB0b3sgY29sb3I6ICByZ2IoNTksIDU4LCA1OCk7fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTIxMnB4KXtcclxuXHJcbiAgYXBwLXJlc3VtZS1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgYXBwLXJlc3VtZS1taWRkbGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzFiOWJmZjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgYW5pbWF0aW9uLW5hbWUgOm9wZW5pbm1vYmlsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IHJnYig1OSwgNTgsIDU4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/resume-header/resume-header.component */
    "./src/app/components/resume-header/resume-header.component.ts");
    /* harmony import */


    var _components_resume_middle_resume_middle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/resume-middle/resume-middle.component */
    "./src/app/components/resume-middle/resume-middle.component.ts");
    /* harmony import */


    var _components_resume_header_image_sections_image_sections_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/resume-header/image-sections/image-sections.component */
    "./src/app/components/resume-header/image-sections/image-sections.component.ts");
    /* harmony import */


    var _services_knowledge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_resume_middle_education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/resume-middle/education/education.component */
    "./src/app/components/resume-middle/education/education.component.ts");
    /* harmony import */


    var _components_resume_middle_internship_internship_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/resume-middle/internship/internship.component */
    "./src/app/components/resume-middle/internship/internship.component.ts");
    /* harmony import */


    var _components_resume_middle_personal_project_personal_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/resume-middle/personal-project/personal-project.component */
    "./src/app/components/resume-middle/personal-project/personal-project.component.ts");
    /* harmony import */


    var _components_resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/resume-footer/resume-footer.component */
    "./src/app/components/resume-footer/resume-footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_knowledge_service__WEBPACK_IMPORTED_MODULE_7__["KnowledgeService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_4__["ResumeHeaderComponent"], _components_resume_middle_resume_middle_component__WEBPACK_IMPORTED_MODULE_5__["ResumeMiddleComponent"], _components_resume_header_image_sections_image_sections_component__WEBPACK_IMPORTED_MODULE_6__["ImageSectionsComponent"], _components_resume_middle_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"], _components_resume_middle_internship_internship_component__WEBPACK_IMPORTED_MODULE_10__["InternshipComponent"], _components_resume_middle_personal_project_personal_project_component__WEBPACK_IMPORTED_MODULE_11__["PersonalProjectComponent"], _components_resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_12__["ResumeFooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_4__["ResumeHeaderComponent"], _components_resume_middle_resume_middle_component__WEBPACK_IMPORTED_MODULE_5__["ResumeMiddleComponent"], _components_resume_header_image_sections_image_sections_component__WEBPACK_IMPORTED_MODULE_6__["ImageSectionsComponent"], _components_resume_middle_education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"], _components_resume_middle_internship_internship_component__WEBPACK_IMPORTED_MODULE_10__["InternshipComponent"], _components_resume_middle_personal_project_personal_project_component__WEBPACK_IMPORTED_MODULE_11__["PersonalProjectComponent"], _components_resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_12__["ResumeFooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          providers: [_services_knowledge_service__WEBPACK_IMPORTED_MODULE_7__["KnowledgeService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-footer/resume-footer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/resume-footer/resume-footer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ResumeFooterComponent */

  /***/
  function srcAppComponentsResumeFooterResumeFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeFooterComponent", function () {
      return ResumeFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeFooterComponent = /*#__PURE__*/function () {
      function ResumeFooterComponent() {
        _classCallCheck(this, ResumeFooterComponent);
      }

      _createClass(ResumeFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeFooterComponent;
    }();

    ResumeFooterComponent.ɵfac = function ResumeFooterComponent_Factory(t) {
      return new (t || ResumeFooterComponent)();
    };

    ResumeFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeFooterComponent,
      selectors: [["app-resume-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "background"], [1, "text-footer"]],
      template: function ResumeFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copyright \xA9 2020 Soni Dhruvit Resume - All rights reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".text-footer[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 30px 0;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  background: rgb(59, 58, 58);\r\n  background-size: cover;\r\n  background-blend-mode: darken;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtZm9vdGVyL3Jlc3VtZS1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkRBQTZEO0VBQzdELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS1mb290ZXIvcmVzdW1lLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZm9vdGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmIDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU5LCA1OCwgNTgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcbn1cclxuXHJcbip7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume-footer',
          templateUrl: './resume-footer.component.html',
          styleUrls: ['./resume-footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-header/image-sections/image-sections.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/resume-header/image-sections/image-sections.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ImageSectionsComponent */

  /***/
  function srcAppComponentsResumeHeaderImageSectionsImageSectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSectionsComponent", function () {
      return ImageSectionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageSectionsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "P");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "location_on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dhruvitDetail_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", dhruvitDetail_r1.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dhruvitDetail_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dhruvitDetail_r1.info);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 \xA0 ", dhruvitDetail_r1.address, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 \xA0 ", dhruvitDetail_r1.email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 \xA0 ", dhruvitDetail_r1.mobilenumber, "");
      }
    }

    var ImageSectionsComponent = /*#__PURE__*/function () {
      function ImageSectionsComponent(_knowledgeservice) {
        _classCallCheck(this, ImageSectionsComponent);

        this._knowledgeservice = _knowledgeservice;
        this.dhruvitDetails = [];
      }

      _createClass(ImageSectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._knowledgeservice.getDhruvitdetail().subscribe(function (data) {
            return _this.dhruvitDetails = data;
          });
        }
      }]);

      return ImageSectionsComponent;
    }();

    ImageSectionsComponent.ɵfac = function ImageSectionsComponent_Factory(t) {
      return new (t || ImageSectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]));
    };

    ImageSectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageSectionsComponent,
      selectors: [["app-image-sections"]],
      decls: 2,
      vars: 1,
      consts: [[1, "background", "firstsection"], ["class", "box-main", "id", "about", 4, "ngFor", "ngForOf"], ["id", "about", 1, "box-main"], [1, "firstHalf"], [1, "text-big"], ["aria-hidden", "true", 1, "fa", "fa-user", 2, "font-size", "30px"], [1, "text-small"], [1, "material-icons", 2, "font-size", "20px"], [1, "fas", "fa-mobile-alt", 2, "font-size", "20px"], [1, "secondHalf"], ["src", "../../../../assets/images/profile.jpg", "alt", "Personal Image", 1, "animate__animated", "animate__flip"]],
      template: function ImageSectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageSectionsComponent_div_1_Template, 23, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dhruvitDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".background[_ngcontent-%COMP%]{\r\n    background:  rgba(0, 0, 0, 0.7) url('header-image.jpg');\r\n    background-size: cover;\r\n    background-blend-mode: darken;\r\n}\r\n\r\n.firstsection[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n}\r\n\r\n.box-main[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    max-width: 56%;\r\n    margin: auto;\r\n    height: 80%;\r\n}\r\n\r\n.firstHalf[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.secondHalf[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n}\r\n\r\n.secondHalf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    border: 4px solid white;\r\n    border-radius: 150px;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.text-big[_ngcontent-%COMP%]{\r\n    font-size: 38px;\r\n}\r\n\r\n.text-small[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n@media only screen and (max-width : 1200px){\r\n  .box-main[_ngcontent-%COMP%]{\r\n    flex-direction: column-reverse;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n  .secondHalf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    border-radius: 120px;\r\n    margin-top: 150px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtaGVhZGVyL2ltYWdlLXNlY3Rpb25zL2ltYWdlLXNlY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1REFBaUY7SUFDakYsc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNERBQTREO0lBQzVELGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksVUFBVTtBQUNkOztBQUdBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFLQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7OztFQUdBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLWhlYWRlci9pbWFnZS1zZWN0aW9ucy9pbWFnZS1zZWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiYSgwLCAwLCAwLCAwLjcpIHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXItaW1hZ2UuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcbn1cclxuXHJcbi5maXJzdHNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYm94LW1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA1NiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuLmZpcnN0SGFsZntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnNlY29uZEhhbGZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5cclxuLnNlY29uZEhhbGYgaW1ne1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi50ZXh0LWJpZ3tcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuLnRleHQtc21hbGx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweCl7XHJcbiAgLmJveC1tYWlue1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zZWNvbmRIYWxmIGltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-sections',
          templateUrl: './image-sections.component.html',
          styleUrls: ['./image-sections.component.css']
        }]
      }], function () {
        return [{
          type: _services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-header/resume-header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/resume-header/resume-header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ResumeHeaderComponent */

  /***/
  function srcAppComponentsResumeHeaderResumeHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeHeaderComponent", function () {
      return ResumeHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _image_sections_image_sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./image-sections/image-sections.component */
    "./src/app/components/resume-header/image-sections/image-sections.component.ts");

    var ResumeHeaderComponent = /*#__PURE__*/function () {
      function ResumeHeaderComponent() {
        _classCallCheck(this, ResumeHeaderComponent);

        this.burger = document.querySelector('.burger');
        this.navbar = document.querySelector('.navbar');
        this.leftNav = document.querySelector('.leftNav');
        this.navList = document.querySelector('.nav-list');
      }

      _createClass(ResumeHeaderComponent, [{
        key: "hamburger",
        value: function hamburger() {
          this.leftNav.classList.toggle('v-class');
          this.navList.classList.toggle('v-class');
          this.navbar.classList.toggle('h-nav');
        }
      }, {
        key: "toAbout",
        value: function toAbout() {
          document.getElementById("about").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "toEducation",
        value: function toEducation() {
          document.getElementById("education").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "toInternship",
        value: function toInternship() {
          document.getElementById("internship").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "toProject",
        value: function toProject() {
          document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "toKnowledge",
        value: function toKnowledge() {
          document.getElementById("knowledge").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeHeaderComponent;
    }();

    ResumeHeaderComponent.ɵfac = function ResumeHeaderComponent_Factory(t) {
      return new (t || ResumeHeaderComponent)();
    };

    ResumeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeHeaderComponent,
      selectors: [["app-resume-header"]],
      decls: 26,
      vars: 0,
      consts: [[1, "sticky-top"], ["type", "checkbox", "id", "check"], ["for", "check", 1, "checkbtn"], [1, "fas", "fa-bars"], [1, "navbar"], [1, "logo2", "animate__animated", "animate__backInLeft"], ["src", "../../../assets/images/favicon.png", "alt", "Logo"], [1, "logo"], ["routerLinkActive", "active", "routerLink", "#about", 3, "click"], ["routerLinkActive", "active", "routerLink", "#education", 3, "click"], ["routerLinkActive", "active", "routerLink", "#internship", 3, "click"], ["routerLinkActive", "active", "routerLink", "#knowledge", 3, "click"], ["routerLinkActive", "active", "routerLink", "#project", 3, "click"]],
      template: function ResumeHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Soni Dhruvit Harshadbhai");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeHeaderComponent_Template_a_click_11_listener() {
            return ctx.toAbout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeHeaderComponent_Template_a_click_14_listener() {
            return ctx.toEducation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeHeaderComponent_Template_a_click_17_listener() {
            return ctx.toInternship();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Internship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeHeaderComponent_Template_a_click_20_listener() {
            return ctx.toProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeHeaderComponent_Template_a_click_23_listener() {
            return ctx.toKnowledge();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Knowledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-image-sections");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _image_sections_image_sections_component__WEBPACK_IMPORTED_MODULE_2__["ImageSectionsComponent"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n\tpadding:0;\r\n\tmargin: 0;\r\n\ttext-decoration : none;\r\n\tlist-style : none;\r\n\tbox-sizing : border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n\tfont-family: montserrat;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  background :  rgb(59, 58, 58);\r\n\theight:80px;\r\n  width : 100%;\r\n}\r\n\r\n.logo2[_ngcontent-%COMP%]{\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.logo2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 47px;\r\n  margin-top: 15px;\r\n  border: 3px solid white;\r\n  border-radius: 50px;\r\n}\r\n\r\nlabel.logo[_ngcontent-%COMP%]{\r\n\tcolor : white;\r\n\tfont-size: 25px;\r\n  line-height :80px;\r\n\tpadding: 0px 100x;\r\n  font-weight: bold;\r\n  margin-left: -150px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tfloat : right ;\r\n\tmargin-right : 20px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\tdisplay : inline-block;\r\n\tline-height: 80px;\r\n  margin: 0 15px;\r\n\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tcolor: white;\r\n\tfont-size: 17px;\r\n\tpadding:7px 13px;\r\n\tborder-radius: 10px;\r\n\ttext-transform: uppercase;\r\n  text-decoration: none;\r\n}\r\n\r\na.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{\r\n\tbackground: #1b9bff;\r\n\ttransition: .6s;\r\n}\r\n\r\n.checkbtn[_ngcontent-%COMP%]{\r\n\tfont-size: 30px;\r\n\tcolor: white;\r\n\tfloat: right;\r\n\tmargin-top:25px;\r\n\tline-height : 80px;\r\n\tmargin-right: 40px;\r\n\tcursor:pointer;\r\n\tdisplay: none;\r\n}\r\n\r\n#check[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtaGVhZGVyL3Jlc3VtZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBR0E7RUFDRSw2QkFBNkI7Q0FDOUIsV0FBVztFQUNWLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7RUFDZCxpQkFBaUI7Q0FDbEIsaUJBQWlCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGlCQUFpQjtFQUNoQixjQUFjOztBQUVoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix5QkFBeUI7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtaGVhZGVyL3Jlc3VtZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcblx0cGFkZGluZzowO1xyXG5cdG1hcmdpbjogMDtcclxuXHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG5cdGxpc3Qtc3R5bGUgOiBub25lO1xyXG5cdGJveC1zaXppbmcgOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5e1xyXG5cdGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG59XHJcblxyXG5cclxubmF2e1xyXG4gIGJhY2tncm91bmQgOiAgcmdiKDU5LCA1OCwgNTgpO1xyXG5cdGhlaWdodDo4MHB4O1xyXG4gIHdpZHRoIDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5sb2dvMntcclxuICB3aWR0aDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubG9nbzIgaW1ne1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxubGFiZWwubG9nb3tcclxuXHRjb2xvciA6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuICBsaW5lLWhlaWdodCA6ODBweDtcclxuXHRwYWRkaW5nOiAwcHggMTAweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG5uYXYgdWx7XHJcblx0ZmxvYXQgOiByaWdodCA7XHJcblx0bWFyZ2luLXJpZ2h0IDogMjBweDtcclxufVxyXG5cclxubmF2IHVsIGxpe1xyXG5cdGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG5uYXYgdWwgbGkgYXtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdHBhZGRpbmc6N3B4IDEzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYS5hY3RpdmUsIGE6aG92ZXJ7XHJcblx0YmFja2dyb3VuZDogIzFiOWJmZjtcclxuXHR0cmFuc2l0aW9uOiAuNnM7XHJcbn1cclxuXHJcbi5jaGVja2J0bntcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOjI1cHg7XHJcblx0bGluZS1oZWlnaHQgOiA4MHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNDBweDtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jY2hlY2t7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume-header',
          templateUrl: './resume-header.component.html',
          styleUrls: ['./resume-header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-middle/education/education.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/resume-middle/education/education.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppComponentsResumeMiddleEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EducationComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "School / Collage :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var education_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", education_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](education_r1.purpose);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", education_r1.school, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](education_r1.year);
      }
    }

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent(_service) {
        _classCallCheck(this, EducationComponent);

        this._service = _service;
        this.educations = [];
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._service.getEducation().subscribe(function (data) {
            return _this2.educations = data;
          });
        }
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]));
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 6,
      vars: 1,
      consts: [[1, "container"], [1, "name"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "shadow-lg", "p-3", 2, "margin-bottom", "50px"], [1, "card", 2, "width", "20rem", "border-radius", "10px"], [1, "inner"], ["alt", "image", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationComponent_div_5_Template, 14, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educations);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".name[_ngcontent-%COMP%]{\r\n  color: rgb(59, 58, 58);\r\n  text-align: center;\r\n  margin: 40px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 40px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color: orange;\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  margin-left: 35%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  background-color: rgb(59, 58, 58);\r\n  color: white;\r\n  padding: 10px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-radius: 1em;\r\n  min-block-size: 400px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  height: 160px;\r\n  width: 280px;\r\n  margin-top: 10px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-radius: 1em;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: center;\r\n     object-position: center;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  margin-left: -5px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-left: 1.0em;\r\n  transition: all 1.5s ease;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform: scale(1.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtbWlkZGxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDBCQUF1QjtLQUF2Qix1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLW1pZGRsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXtcclxuICBjb2xvcjogcmdiKDU5LCA1OCwgNTgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5oMXtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcblxyXG4uY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU4LCA1OCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICBtaW4tYmxvY2stc2l6ZTogNDAwcHg7XHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbm5lcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG59XHJcblxyXG5cclxuLmlubmVyIGltZ3tcclxuICBtYXJnaW4tbGVmdDogMS4wZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXMgZWFzZTtcclxufVxyXG5cclxuXHJcbi5pbm5lcjpob3ZlciBpbWd7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-middle/internship/internship.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/resume-middle/internship/internship.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: InternshipComponent */

  /***/
  function srcAppComponentsResumeMiddleInternshipInternshipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InternshipComponent", function () {
      return InternshipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/knowledge.service */
    "./src/app/services/knowledge.service.ts");

    var InternshipComponent = /*#__PURE__*/function () {
      function InternshipComponent(_knowledgeService) {
        _classCallCheck(this, InternshipComponent);

        this._knowledgeService = _knowledgeService;
        this.internshipDatas = [];
      }

      _createClass(InternshipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._knowledgeService.getInternship().subscribe(function (data) {
            return _this3.internshipDatas = data;
          });
        }
      }]);

      return InternshipComponent;
    }();

    InternshipComponent.ɵfac = function InternshipComponent_Factory(t) {
      return new (t || InternshipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]));
    };

    InternshipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InternshipComponent,
      selectors: [["app-internship"]],
      decls: 60,
      vars: 0,
      consts: [[1, "container"], [1, "name"], [1, "centre"], [1, "direction"], [1, "internship"]],
      template: function InternshipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Internship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " - Nadiad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(Gujarat)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " - Edutech Infotech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " - Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - I Create a Grocery List App, In this app there is list of items with Price. Customer just Select Multiple Items. And than selected Items,and there Total Price Show in other Page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " : 1 Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " : Nisrag Jani - 9909727302");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " - Nadiad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "(Gujarat)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " - Edutech Infotech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " - NodeJs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " - I create WebSite the name is Todo List. In this User enter a data and than below that Form the notes are showen in Proper way. In This web site for Front-End is use AngularJs and for a Back-End is use Node Express Server.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " : 1 Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " : Nisrag Jani - 9909727302");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".name[_ngcontent-%COMP%]{\r\n  color: rgb(59, 58, 58);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.direction[_ngcontent-%COMP%]{\r\n  font-family: Arial, Helvetica;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  display: flex;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: 'Ubuntu', sans-serif;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n.internship[_ngcontent-%COMP%]{\r\n  width: 700px;\r\n  height: 550px;\r\n  margin-top: 50px;\r\n  padding: 10px 10px;\r\n  background: rgb(250, 244, 243);\r\n  color: rgb(59, 58, 58);\r\n  text-align: center;\r\n  margin-right: 150px;\r\n  margin-left: 50px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 1);\r\n  -webkit-animation-name: internship;\r\n          animation-name: internship;\r\n  -webkit-animation-duration: 8s;\r\n          animation-duration: 8s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n          animation-direction: alternate;\r\n}\r\n\r\n\r\n.internship[_ngcontent-%COMP%]:nth-child(even){\r\n  animation-direction: alternate-reverse;\r\n}\r\n\r\n\r\n.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\r\n  font-size: 2.5rem;\r\n  margin-top: 60px;\r\n}\r\n\r\n\r\n@-webkit-keyframes internship{\r\n  from{ border-radius: 0%; }\r\n  to{ border-radius: 30%;\r\n     \r\n\r\n    background-color: rgb(59, 58, 58);\r\n     color: white;}\r\n}\r\n\r\n\r\n@keyframes internship{\r\n  from{ border-radius: 0%; }\r\n  to{ border-radius: 30%;\r\n     \r\n\r\n    background-color: rgb(59, 58, 58);\r\n     color: white;}\r\n}\r\n\r\n\r\n@media only screen and (max-width : 1200px){\r\n  .direction[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n\r\n\r\n  .internship[_ngcontent-%COMP%]{\r\n    width: 340px;\r\n    height: 600px;\r\n    margin-top: 50px;\r\n    margin-left: auto;\r\n    background: rgb(250, 244, 243);\r\n    color: #03446A;\r\n    text-align: center;\r\n    margin-right: auto;\r\n    padding-right: 10px;\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 1);\r\n    -webkit-animation-name: internship;\r\n            animation-name: internship;\r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtbWlkZGxlL2ludGVybnNoaXAvaW50ZXJuc2hpcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHNDQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7OztBQUdBO0VBQ0UsTUFBTSxpQkFBaUIsRUFBRTtFQUN6QixJQUFJLGtCQUFrQjtLQUNuQix5QkFBeUI7O0lBRTFCLGlDQUFpQztLQUNoQyxZQUFZLENBQUM7QUFDbEI7OztBQVBBO0VBQ0UsTUFBTSxpQkFBaUIsRUFBRTtFQUN6QixJQUFJLGtCQUFrQjtLQUNuQix5QkFBeUI7O0lBRTFCLGlDQUFpQztLQUNoQyxZQUFZLENBQUM7QUFDbEI7OztBQUdBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7OztFQUdBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHNDQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLW1pZGRsZS9pbnRlcm5zaGlwL2ludGVybnNoaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1le1xyXG4gIGNvbG9yOiByZ2IoNTksIDU4LCA1OCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmRpcmVjdGlvbntcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5pbnRlcm5zaGlwe1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDU1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDI0NCwgMjQzKTtcclxuICBjb2xvcjogcmdiKDU5LCA1OCwgNTgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGludGVybnNoaXA7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5pbnRlcm5zaGlwOm50aC1jaGlsZChldmVuKXtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcclxufVxyXG5cclxuLmgxLCBoMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgaW50ZXJuc2hpcHtcclxuICBmcm9teyBib3JkZXItcmFkaXVzOiAwJTsgfVxyXG4gIHRveyBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICAgLyogYmFja2dyb3VuZDogdG9tYXRvOyAgKi9cclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU4LCA1OCk7XHJcbiAgICAgY29sb3I6IHdoaXRlO31cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDEyMDBweCl7XHJcbiAgLmRpcmVjdGlvbntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuXHJcbiAgLmludGVybnNoaXB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjQ0LCAyNDMpO1xyXG4gICAgY29sb3I6ICMwMzQ0NkE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbnRlcm5zaGlwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternshipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-internship',
          templateUrl: './internship.component.html',
          styleUrls: ['./internship.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-middle/personal-project/personal-project.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/resume-middle/personal-project/personal-project.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PersonalProjectComponent */

  /***/
  function srcAppComponentsResumeMiddlePersonalProjectPersonalProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalProjectComponent", function () {
      return PersonalProjectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PersonalProjectComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var Project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Project_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", Project_r1.description, "");
      }
    }

    var PersonalProjectComponent = /*#__PURE__*/function () {
      function PersonalProjectComponent(knowledgeService) {
        _classCallCheck(this, PersonalProjectComponent);

        this.knowledgeService = knowledgeService;
        this.Projects = [];
      }

      _createClass(PersonalProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.knowledgeService.getProjects().subscribe(function (data) {
            return _this4.Projects = data;
          });
        }
      }]);

      return PersonalProjectComponent;
    }();

    PersonalProjectComponent.ɵfac = function PersonalProjectComponent_Factory(t) {
      return new (t || PersonalProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]));
    };

    PersonalProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonalProjectComponent,
      selectors: [["app-personal-project"]],
      decls: 5,
      vars: 1,
      consts: [[1, "main"], [1, "container"], [1, "text"], [4, "ngFor", "ngForOf"], [1, "pro-one"]],
      template: function PersonalProjectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonalProjectComponent_div_4_Template, 8, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Projects);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".main[_ngcontent-%COMP%]{\r\n  background-color: rgb(247, 244, 244);\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding-bottom: 20px;\r\n  color: rgb(59, 58, 58);\r\n  font-size: 40px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.pro-one[_ngcontent-%COMP%]{\r\n  padding: 50px 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: auto;\r\n  font-size: 20px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n.pro-two[_ngcontent-%COMP%]{\r\n  padding: 50px 0;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: auto;\r\n  font-size: 20px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtbWlkZGxlL3BlcnNvbmFsLXByb2plY3QvcGVyc29uYWwtcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsNERBQTREO0FBQzlEOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFJQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsNERBQTREO0FBQzlEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtbWlkZGxlL3BlcnNvbmFsLXByb2plY3QvcGVyc29uYWwtcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ0LCAyNDQpO1xyXG59XHJcblxyXG5oMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6IHJnYig1OSwgNTgsIDU4KTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucHJvLW9uZXtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4udGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnByby10d297XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personal-project',
          templateUrl: './personal-project.component.html',
          styleUrls: ['./personal-project.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resume-middle/resume-middle.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/resume-middle/resume-middle.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ResumeMiddleComponent */

  /***/
  function srcAppComponentsResumeMiddleResumeMiddleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeMiddleComponent", function () {
      return ResumeMiddleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/knowledge.service */
    "./src/app/services/knowledge.service.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/components/resume-middle/education/education.component.ts");
    /* harmony import */


    var _internship_internship_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./internship/internship.component */
    "./src/app/components/resume-middle/internship/internship.component.ts");
    /* harmony import */


    var _personal_project_personal_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./personal-project/personal-project.component */
    "./src/app/components/resume-middle/personal-project/personal-project.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../resume-footer/resume-footer.component */
    "./src/app/components/resume-footer/resume-footer.component.ts");

    function ResumeMiddleComponent_section_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var knowledge_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](knowledge_r1.knowledgeTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](knowledge_r1.knowledgeDiscription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", knowledge_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ResumeMiddleComponent = /*#__PURE__*/function () {
      function ResumeMiddleComponent(_knowledgeservice) {
        _classCallCheck(this, ResumeMiddleComponent);

        this._knowledgeservice = _knowledgeservice;
        this.knowledges = [];
      }

      _createClass(ResumeMiddleComponent, [{
        key: "toAbout",
        value: function toAbout() {
          document.getElementById("about").scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this._knowledgeservice.getKnowledge().subscribe(function (data) {
            return _this5.knowledges = data;
          });
        }
      }]);

      return ResumeMiddleComponent;
    }();

    ResumeMiddleComponent.ɵfac = function ResumeMiddleComponent_Factory(t) {
      return new (t || ResumeMiddleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]));
    };

    ResumeMiddleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeMiddleComponent,
      selectors: [["app-resume-middle"]],
      decls: 12,
      vars: 1,
      consts: [["id", "education"], ["id", "internship"], ["id", "projects"], ["id", "knowledge", 1, "name"], ["class", "section", 4, "ngFor", "ngForOf"], ["routerLink", "#about", 1, "gotopbtn", 3, "click"], [1, "fas", "fa-arrow-up"], [1, "section"], [1, "paraGraph"], [1, "sectionTag", "text-big"], [1, "sectionsubTag", "text-small"], [1, "thumbnail"], ["alt", "Angular", 1, "imgFluid", 3, "src"]],
      template: function ResumeMiddleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-education", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-internship", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-personal-project", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Knowledge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResumeMiddleComponent_section_7_Template, 8, 3, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeMiddleComponent_Template_a_click_8_listener() {
            return ctx.toAbout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-resume-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.knowledges);
        }
      },
      directives: [_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"], _internship_internship_component__WEBPACK_IMPORTED_MODULE_3__["InternshipComponent"], _personal_project_personal_project_component__WEBPACK_IMPORTED_MODULE_4__["PersonalProjectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_7__["ResumeFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: ["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\r\n\r\n.name[_ngcontent-%COMP%]{\r\n  margin-top: 35px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  color:  rgb(59, 58, 58);\r\n}\r\n\r\n.section[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    max-width: 80%;\r\n    margin: auto;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]:nth-child(odd){\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.paraGraph[_ngcontent-%COMP%]{\r\n    padding: 0px 65px;\r\n}\r\n\r\n.text-big[_ngcontent-%COMP%]{\r\n    font-size: 41px;\r\n}\r\n\r\n.text-small[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n\r\n.sectionTag[_ngcontent-%COMP%]{\r\n    padding: 16px 0;\r\n}\r\n\r\n.sectionsubTag[_ngcontent-%COMP%]{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    border: 2px solid white;\r\n    border-radius: 26px;\r\n    margin-top: 20px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color: orange;\r\n  padding-top: 50px;\r\n  padding-bottom: 20px;\r\n  margin-left: 35%;\r\n}\r\n\r\n.gotopbtn[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  width: 50px;\r\n  height: 50px;\r\n  background: rgb(90, 85, 85);\r\n  bottom: 40px;\r\n  right: 50px;\r\n  border-radius: 20px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  line-height: 50px;\r\n  color: white;\r\n  font-size: 22px;\r\n}\r\n\r\n.gotopbtn[_ngcontent-%COMP%]:hover{\r\n  background:  #1b9bff;\r\n  transition: 0.5s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtbWlkZGxlL3Jlc3VtZS1taWRkbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFNQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksNERBQTREO0FBQ2hFOztBQUdBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUtBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lLW1pZGRsZS9yZXN1bWUtbWlkZGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubmFtZXtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAgcmdiKDU5LCA1OCwgNTgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zZWN0aW9uOm50aC1jaGlsZChvZGQpe1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuXHJcbi5wYXJhR3JhcGh7XHJcbiAgICBwYWRkaW5nOiAwcHggNjVweDtcclxufVxyXG5cclxuLnRleHQtYmlne1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG59XHJcblxyXG4udGV4dC1zbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcbi5zZWN0aW9uVGFne1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb25zdWJUYWd7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4udGh1bWJuYWlsIGltZ3tcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmdvdG9wYnRue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDkwLCA4NSwgODUpO1xyXG4gIGJvdHRvbTogNDBweDtcclxuICByaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuXHJcbi5nb3RvcGJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAgIzFiOWJmZjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeMiddleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume-middle',
          templateUrl: './resume-middle.component.html',
          styleUrls: ['./resume-middle.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_knowledge_service__WEBPACK_IMPORTED_MODULE_1__["KnowledgeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/knowledge.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/knowledge.service.ts ***!
    \***********************************************/

  /*! exports provided: KnowledgeService */

  /***/
  function srcAppServicesKnowledgeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnowledgeService", function () {
      return KnowledgeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import 'rxjs/add/operator/catch';
    // import 'rxjs/add/observable/throw';


    var KnowledgeService = /*#__PURE__*/function () {
      function KnowledgeService(http) {
        _classCallCheck(this, KnowledgeService);

        this.http = http;
        this._url = "../../assets/data/knowledge.json";
        this._url1 = "../../assets/data/dhruvitDetail.json";
        this.education_link = "../../assets/data/education.json";
        this.projects_link = "../../assets/data/pproject.json";
        this.internship_link = "../../assets/data/internship.json";
      }

      _createClass(KnowledgeService, [{
        key: "getKnowledge",
        value: function getKnowledge() {
          return this.http.get(this._url);
        }
      }, {
        key: "getDhruvitdetail",
        value: function getDhruvitdetail() {
          return this.http.get(this._url1);
        }
      }, {
        key: "getEducation",
        value: function getEducation() {
          return this.http.get(this.education_link);
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          return this.http.get(this.projects_link);
        }
      }, {
        key: "getInternship",
        value: function getInternship() {
          return this.http.get(this.internship_link);
        }
      }]);

      return KnowledgeService;
    }();

    KnowledgeService.ɵfac = function KnowledgeService_Factory(t) {
      return new (t || KnowledgeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    KnowledgeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KnowledgeService,
      factory: KnowledgeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Dhruvit-Resume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map