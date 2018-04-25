webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-contacts>Loading..</app-contacts>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // replaces previous Http service



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = /** @class */ (function () {
    function appConfig() {
    }
    appConfig.API_ENDPOINT = 'http://localhost:3000/api/contacts/';
    return appConfig;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (submit)=\"addContact()\">\n    <fieldset>\n      <legend>Add Contact</legend>\n      <hr class=\"my-1\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">First Name</label>\n        <input type=\"email\" [(ngModel)]=\"first_name\" name=\"first_name\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter first name\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your name with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Last Name</label>\n        <input [(ngModel)]=\"last_name\" name=\"last_name\" class=\"form-control\" placeholder=\"Enter last name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Phone</label>\n        <input [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\n      </div>\n      <button [disabled]=\"!first_name || !last_name || !phone\" type=\"submit\" class=\"btn btn-primary\">{{_id?\"Update\":\"Add\"}}</button>\n    </fieldset>\n  </form>\n</div>\n<div class=\"container\">\n  <legend>Contact List</legend>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Phone</th>\n        <th scope=\"col\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts\">\n        <!-- <th scope=\"row\">Default</th> -->\n        <td>{{contact.first_name}}</td>\n        <td>{{contact.last_name}}</td>\n        <td>{{contact.phone}}</td>\n        <td>\n          <input type=\"button\" (click)=\"editContact(contact)\" title=\"edit\" class=\"btn btn-success\" value=\"!\" />\n          <input type=\"button\" (click)=\"deleteContact(contact._id)\" title=\"delete\" class=\"btn btn-danger\" value=\"X\" />\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <!-- <div class=\"row mb-5\" *ngFor=\"let contact of contacts\">\n    <div class=\"col-md-2\">\n      {{contact.first_name}}\n    </div>\n    <div class=\"col-md-2\">\n      {{contact.last_name}}\n    </div>\n    <div class=\"col-md-2\">\n      {{contact.phone}}\n    </div>\n    <div class=\"col-md-2\">\n      <input type=\"button\" (click)=\"deleteContact(contact._id)\" class=\"btn btn-danger\" value=\"X\" />\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("./src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactSerrvice) {
        this.contactSerrvice = contactSerrvice;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactSerrvice.getContacts().subscribe(function (data) {
            _this.contacts = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    ContactsComponent.prototype.addContact = function () {
        var _this = this;
        var newContact = {
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone
        };
        if (!this._id) {
            this.contactSerrvice.addContact(newContact).subscribe(function (data) {
                console.log(data);
                _this.getContacts();
                _this.clearFields();
            }, function (err) { return console.error(err); });
        }
        else {
            newContact._id = this._id;
            this.contactSerrvice.updateContact(newContact).subscribe(function (data) {
                console.log(data);
                _this.getContacts();
                _this.clearFields();
            }, function (err) { return console.error(err); });
        }
    };
    ContactsComponent.prototype.editContact = function (contact) {
        this._id = contact._id;
        this.first_name = contact.first_name;
        this.last_name = contact.last_name;
        this.phone = contact.phone;
    };
    ContactsComponent.prototype.deleteContact = function (id) {
        var _this = this;
        this.contactSerrvice.deleteContact(id).subscribe(function (data) {
            if (data.n == 1) {
                _this.getContacts();
            }
        }, function (err) { return console.error(err); });
    };
    ContactsComponent.prototype.clearFields = function () {
        this.first_name = '';
        this.last_name = '';
        this.phone = '';
        this._id = '';
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ContactService = /** @class */ (function () {
    function ContactService(httpClient) {
        this.httpClient = httpClient;
    }
    // retrieving contacts
    ContactService.prototype.getContacts = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* appConfig */].API_ENDPOINT);
    };
    // adding new contact
    ContactService.prototype.addContact = function (contact) {
        var body = JSON.stringify(contact);
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* appConfig */].API_ENDPOINT, contact, httpOptions);
    };
    // update existing contact
    ContactService.prototype.updateContact = function (contact) {
        var body = JSON.stringify(contact);
        var endPoint = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* appConfig */].API_ENDPOINT + contact._id;
        return this.httpClient.put(endPoint, contact, httpOptions);
    };
    // retrieving contacts
    ContactService.prototype.deleteContact = function (id) {
        var endPoint = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* appConfig */].API_ENDPOINT + id;
        return this.httpClient.delete(endPoint);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map