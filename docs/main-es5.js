(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<router-outlet></router-outlet>\n\n<footer>\n    <div class=\"text-center copyright d-print-none\">Designed & Developed By: <strong>Team R<sub>x</sub></strong></div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <a mat-raised-button color=\"primary\" routerLink=\"/patients\">Add Patient</a>\n\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div class=\"mat-elevation-z8\">\n        <table mat-table matSort [dataSource]=\"dataSource\">\n    \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n    \n            <!-- Age Column -->\n            <ng-container matColumnDef=\"age\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Age </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\n            </ng-container>\n    \n            <!-- Phone Column -->\n            <ng-container matColumnDef=\"phone\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n            </ng-container>\n    \n            <!-- Address Column -->\n            <ng-container matColumnDef=\"address\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n            </ng-container>\n    \n            <!-- Action Column -->\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <a mat-raised-button color=\"primary\" class=\"mr-2\" routerLink=\"patients/{{element.id}}\">\n                        <i class=\"material-icons\">visibility</i>\n                    </a>\n                    <a mat-raised-button color=\"accent\" class=\"mr-2\" routerLink=\"patients/edit/{{element.id}}\">\n                        <i class=\"material-icons\">edit</i>\n                    </a>\n                    <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n                        <i class=\"material-icons\">delete</i>\n                    </button>\n                </td>\n            </ng-container>\n    \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/medicine-dialog/medicine-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medicine-dialog/medicine-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ data.length !== undefined ? 'Add' : 'Update'}} Medicine</h2>\n<mat-dialog-content>\n    <form #medicineForm=\"ngForm\" class=\"mat-form\">\n        <mat-form-field class=\"mat-form-field\">\n            <input matInput [(ngModel)]=\"data.medicine\" #medicine=\"ngModel\" name=\"medicine\" placeholder=\"Medicine\" required>\n            <mat-error *ngIf=\"medicine.touched && medicine.invalid\">The <strong>medicine</strong> field is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"mat-form-field\" hidden=\"true\">\n            <input matInput [(ngModel)]=\"data.id\" name=\"id\" placeholder=\"id\">\n        </mat-form-field>\n    </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button color=\"warn\" mat--dialogclose (click)=\"cancel()\">Cancel</button>\n  <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" [disabled]=\"medicineForm.invalid\" (click)=\"save(medicineForm.value)\">{{ data.length === 0 ? 'Add' : 'Update'}}</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/medicine/medicine.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medicine/medicine.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Add Medicine</button>\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div class=\"mat-elevation-z8\">\n        <table mat-table matSort [dataSource]=\"dataSource\">\n    \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"medicine\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Medicine </th>\n                <td mat-cell *matCellDef=\"let element\"> {{ element.medicine }} </td>\n            </ng-container>\n    \n            <!-- Action Column -->\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n                <td mat-cell *matCellDef=\"let element\">\n                    <button mat-raised-button color=\"accent\" class=\"mr-2\" (click)=\"openDialog(element)\">\n                        <i class=\"material-icons\">edit</i>\n                    </button>\n                    <button mat-raised-button color=\"warn\" (click)=\"delete(element)\">\n                        <i class=\"material-icons\">delete</i>\n                    </button>\n                </td>\n            </ng-container>\n    \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"navbar\" class=\"d-print-none\">\n    <div class=\"container\">\n        <nav>\n            <a routerLink=\"/\" class=\"logo\">R<sub>x <span class=\"xm\">alpha-1.0</span></sub></a>\n            <a mat-raised-button routerLink=\"/\" class=\"mr-2\">Home</a>\n            <!-- <a mat-raised-button routerLink=\"patients\" class=\"mr-2\">Patients</a> -->\n            <a mat-raised-button routerLink=\"medicine\" class=\"mr-2\">Medicine</a>\n            \n            <!-- <button mat-raised-button [matMenuTriggerFor]=\"belowMenu\">Dropdown</button>\n            <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n              <button mat-menu-item>Item 1</button>\n              <button mat-menu-item>Item 2</button>\n            </mat-menu> -->\n        </nav>\n    </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/patient.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/patient.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <form #patientForm=\"ngForm\" (ngSubmit)=\"save(patientForm.value)\" class=\"mat-form\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <input matInput [(ngModel)]=\"patient.name\" #name=\"ngModel\" name=\"name\" placeholder=\"Patient Name\" required>\n                            <mat-error *ngIf=\"name.touched && name.invalid\">The <strong>name</strong> field is required.</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <input matInput type=\"number\" [(ngModel)]=\"patient.age\" #age=\"ngModel\" name=\"age\" placeholder=\"Age\" required>\n                            <mat-error *ngIf=\"age.touched && age.invalid\">The <strong>age</strong> field is required.</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <mat-label>Sex</mat-label>\n                            <mat-select [(ngModel)]=\"patient.sex\" name=\"sex\">\n                                <!-- <mat-option *ngFor=\"let s of sex | keyvalue\" [value]=\"s.key\"> -->\n                                <mat-option *ngFor=\"let s of sex\" [value]=\"s.key\">\n                                {{ s.value }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <mat-label>Blood Group</mat-label>\n                            <mat-select [(ngModel)]=\"patient.blood_group\" name=\"blood_group\">\n                                <mat-option *ngFor=\"let b of blood\" [value]=\"b.key\">\n                                {{ b.value }}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"mat-form-field\">\n                            <input type=\"file\" ngModel name=\"avatar\" (change)=\"onFileSelected($event)\" placeholder=\"Avatar\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <input matInput [(ngModel)]=\"patient.phone\" #phone=\"ngModel\" phone=\"CN\" name=\"phone\" placeholder=\"Phone\" required>\n                            <mat-error *ngIf=\"phone.touched && phone.invalid\">The <strong>phone</strong> field is required.</mat-error>\n                            <mat-error *ngIf=\"phone.errors?.phone\">error message</mat-error>\n\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field class=\"mat-form-field\">\n                            <input matInput [(ngModel)]=\"patient.email\" #email=\"ngModel\" name=\"email\" placeholder=\"Email\" email>\n                            <mat-error *ngIf=\"email.errors?.email\">Please enter a valid email.</mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <mat-form-field class=\"mat-form-field\">\n                    <textarea matInput [(ngModel)]=\"patient.address\" name=\"address\" placeholder=\"Address\"></textarea>\n                </mat-form-field>\n\n                <button mat-raised-button [disabled]=\"patientForm.invalid\" color=\"primary\">Submit</button>\n            </form>\n    \n        </div>\n        <div class=\"col-md-4\">\n            <mat-card class=\"example-card\" *ngIf=\"patient.length === undefined\">\n                <mat-card-header>\n                    <div mat-card-avatar [ngStyle]=\"{ 'background-image': 'url(' + patient.avatar + ')', 'background-size': 'cover'}\"></div>\n                    <mat-card-title>{{ patient.name }}</mat-card-title>\n                    <mat-card-subtitle><strong>Sex:</strong> {{ patient.sex }} <strong>Age:</strong> {{ patient.age }}</mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image [src]=\"patient.avatar\" alt=\"{{ patient.name }}\">\n                <mat-card-content>\n                    <strong>Blood Group:</strong> {{ patient.blood_group }} <br>\n                    <strong>Phone:</strong> {{ patient.phone }} <br>\n                    <strong>Email:</strong> {{ patient.email }} <br>\n                    <strong>Address:</strong> {{ patient.address }}\n                </mat-card-content>\n            </mat-card>\n    \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-patient/single-patient.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-patient/single-patient.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 d-print-none\">\r\n            <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar [ngStyle]=\"{ 'background-image': 'url(' + patient.avatar + ')', 'background-size': 'cover'}\"></div>\r\n                    <mat-card-title>{{ patient.name }}</mat-card-title>\r\n                    <mat-card-subtitle><strong>Sex:</strong> {{ patient.sex }} <strong>Age:</strong> {{ patient.age }}</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <strong>Blood Group:</strong> {{ patient.blood_group }} <br>\r\n                    <strong>Phone:</strong> {{ patient.phone }} <br>\r\n                    <strong>Email:</strong> {{ patient.email }} <br>\r\n                    <strong>Address:</strong> {{ patient.address }}\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <mat-card class=\"mt-3\">\r\n                Encounters\r\n                <mat-card-content>\r\n                    <mat-list>\r\n                        <a mat-button *ngFor=\"let e of encounters; index as i\"\r\n                        routerLink=\"/patients/{{id}}/\"\r\n                        [queryParams]=\"{ encounter: e.id }\"\r\n                        [class.active]=\"encounterId == e.id\">\r\n                            <strong>Encounter-{{ i+1 }}</strong> [{{ e.date }}]\r\n                        </a>\r\n                    </mat-list>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <div class=\"mat-elevation-z8\">\r\n            </div>\r\n\r\n            <form #encounterForm=\"ngForm\" (ngSubmit)=\"encounter(encounterForm.value)\" class=\"mat-form\">\r\n                <mat-form-field class=\"mat-form-field\" hidden=\"true\">\r\n                    <input matInput [matDatepicker]=\"picker\" ngModel name=\"date\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"mat-form-field\">\r\n                    <mat-label>Visit Type</mat-label>\r\n                    <mat-select ngModel name=\"visit_type\">\r\n                        <mat-option *ngFor=\"let v of visit\" [value]=\"v.key\">\r\n                        {{ v.value }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button color=\"primary\">Submit</button>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <mat-tab-group>\r\n                <mat-tab label=\"C/C\">\r\n                    <mat-list>\r\n                        <mat-list-item *ngFor=\"let s of symptoms\">\r\n                            <h4 matLine>{{ s.symptom }}</h4> \r\n                            <button mat-icon-button color=\"primary\" (click)=\"sigleSymptom(s)\">\r\n                                <i class=\"material-icons\">edit</i>\r\n                            </button>\r\n                            <button mat-icon-button color=\"warn\" (click)=\"deleteSymptom(s)\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                            </button>\r\n                        </mat-list-item>\r\n                    </mat-list>\r\n                    <form #symptomForm=\"ngForm\" (ngSubmit)=\"symptom(symptomForm.value); symptomForm.reset()\" class=\"mat-form\">\r\n                        <mat-form-field class=\"mat-form-field\" hidden>\r\n                            <textarea matInput [(ngModel)]=\"symp.id\" name=\"id\" placeholder=\"Id\"></textarea>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\" hidden>\r\n                            <textarea matInput [(ngModel)]=\"symp.patient\" name=\"patient\" placeholder=\"Patient\"></textarea>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <textarea matInput [(ngModel)]=\"symp.symptom\" #sym=\"ngModel\" name=\"symptom\" placeholder=\"Symptom\" required></textarea>\r\n                            <mat-error *ngIf=\"sym.touched && sym.invalid\">The <strong>symptom</strong> field is required.</mat-error>\r\n                        </mat-form-field>\r\n                        <button mat-raised-button type=\"button\" color=\"warn\" (click)=\"symptomForm.reset(); symp = []\" class=\"mr-2\">Reset</button>\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"symptomForm.invalid\">{{ symp.length !== undefined ? 'Add' : 'Update' }}</button>\r\n                    </form>\r\n                    \r\n                </mat-tab>\r\n                <mat-tab label=\"Examination\">\r\n                    <form #reportForm=\"ngForm\" (ngSubmit)=\"report(reportForm.value); reportForm.reset()\" class=\"mat-form\">\r\n                        <mat-form-field class=\"mat-form-field\" hidden>\r\n                            <input matInput [(ngModel)]=\"examination.id\" name=\"id\" placeholder=\"id\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.pulse\" name=\"pulse\" placeholder=\"Pulse\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.bp\" name=\"bp\" placeholder=\"BP\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.temp\" name=\"temp\" placeholder=\"Temp\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.resp_rate\" name=\"resp_rate\" placeholder=\"Resp rate\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.height\" name=\"height\" placeholder=\"Height\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <input matInput [(ngModel)]=\"examination.lifestyle\" name=\"lifestyle\" placeholder=\"Lifestyle\">\r\n                        </mat-form-field>\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"reportForm.invalid\">{{ examination.id ? 'Update' : 'Add' }}</button>\r\n                    </form>\r\n                </mat-tab>\r\n                <mat-tab label=\"Medicine\">\r\n                    <div *ngIf=\"encount.length === undefined\">\r\n                        <div *ngFor=\"let n of encount.medicines\">\r\n                            <div *ngFor=\"let m of medicines\">\r\n                                <div *ngIf=\"n === m.id\" class=\"mb-3\">{{ m.medicine }}</div>\r\n                            </div>\r\n                        </div>\r\n                        <form #medicineForm=\"ngForm\" (ngSubmit)=\"medicine(medicineForm.value)\" class=\"mat-form\">\r\n                            <mat-form-field class=\"mat-form-field\">\r\n                                <mat-label>Medicine</mat-label>\r\n                                <mat-select [(ngModel)]=\"encount.medicines\" name=\"medicines\" multiple>\r\n                                  <mat-option *ngFor=\"let m of medicines\" [value]=\"m.id\" selected>{{m.medicine}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                            <button mat-raised-button color=\"primary\">Add</button>\r\n                        </form>\r\n                    </div>\r\n                    <div *ngIf=\"encount.length !== undefined\">\r\n                        Please select encounter first! \r\n                    </div>\r\n                </mat-tab>\r\n                <mat-tab label=\"Advice\">\r\n                    <mat-list>\r\n                        <mat-list-item *ngFor=\"let a of advices\">\r\n                            <h4 matLine>{{ a.advice }}</h4>\r\n                            <button mat-icon-button color=\"warn\" (click)=\"singleAdvice(a)\">\r\n                                <i class=\"material-icons\">edit</i>\r\n                            </button> \r\n                            <button mat-icon-button color=\"warn\" (click)=\"deleteAdvice(a)\">\r\n                                <i class=\"material-icons\">delete</i>\r\n                            </button>\r\n                        </mat-list-item>\r\n                    </mat-list>\r\n                    <form #adviceForm=\"ngForm\" (ngSubmit)=\"advice(adviceForm.value); adviceForm.reset()\" class=\"mat-form\">\r\n                        <mat-form-field class=\"mat-form-field\" hidden>\r\n                            <textarea matInput [(ngModel)]=\"advic.id\" name=\"id\" placeholder=\"Id\"></textarea>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"mat-form-field\">\r\n                            <textarea matInput [(ngModel)]=\"advic.advice\" #adv=\"ngModel\" name=\"advice\" placeholder=\"Advice\" required></textarea>\r\n                            <mat-error *ngIf=\"adv.touched && adv.invalid\">The <strong>advice</strong> field is required.</mat-error>\r\n                        </mat-form-field>\r\n                        <button mat-raised-button type=\"button\" color=\"warn\" (click)=\"adviceForm.reset(); advic = []\" class=\"mr-2\">Reset</button>\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"adviceForm.invalid\">{{ advic.length !== undefined ? 'Add' : 'Update' }}</button>\r\n                    </form>\r\n                </mat-tab>\r\n                <mat-tab label=\"Prescription\">\r\n                    <mat-card class=\"example-card\" #print>\r\n                        <mat-card-content>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-8\">\r\n                                    <strong class=\"text-capitalize\">DR: SHOFIQUL ISLAM</strong> <br>\r\n                                    <strong>MBBS</strong> <br>\r\n                                    Stength: General Surgery <br>\r\n                                    Reg. No.- 55065\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <strong>ABC DIAGNOSTIC CENTRE</strong> <br>\r\n                                    <strong>Phone:</strong> 02-58610000-8 <br>\r\n                                    <strong>Email:</strong>\tinfo@abcgroup.com <br>\r\n                                    <strong>Website:</strong> www.abcgroup.com\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"\">\r\n                                <h3 class=\"text-center\">Patient: <strong>{{ patient.name }}</strong></h3>\r\n                                <div class=\"row align-items-middle\">\r\n                                    <div class=\"col-9\">\r\n                                        <strong>Sex:</strong> {{ patient.sex }} <strong>Age:</strong> {{ patient.age }} <strong>Blood Group:</strong> {{ patient.blood_group }} <br>\r\n                                        <strong>Phone:</strong> {{ patient.phone }} <strong>Email:</strong> {{ patient.email }} <br> <strong>Address:</strong> {{ patient.address }}\r\n                                    </div>\r\n                                    <div class=\"col-3\">\r\n                                        <strong>Encounter Id: </strong> <qrcode qrdata=\"1\" [size]=\"30\" [level]=\"'L'\"></qrcode><br>\r\n                                        <strong>Date: </strong> {{ encount.date }}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <hr>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4\">\r\n                                    <h4>Symptoms</h4> <hr>\r\n                                    <ul>\r\n                                        <li *ngFor=\"let s of symptoms\">\r\n                                            {{ s.symptom }}\r\n                                        </li>\r\n                                    </ul>\r\n                                    <h4>General Info</h4> <hr>\r\n                                    <ul>\r\n                                        <li>Pulse: {{ examination.pulse }}</li>\r\n                                        <li>B.P.: {{ examination.bp }}</li>\r\n                                        <li>Temp: {{ examination.temp }}</li>\r\n                                        <li>Resp rate: {{ examination.resp_rate }}</li>\r\n                                        <li>Height: {{ examination.height }}</li>\r\n                                        <li>Lifestyle: {{ examination.lifestyle }}</li>\r\n                                    </ul>\r\n                                    <h4>Advices</h4> <hr>\r\n                                    <ul>\r\n                                        <li *ngFor=\"let a of advices\">\r\n                                            {{ a.advice }}\r\n                                        </li>\r\n                                    </ul>\r\n\r\n                                </div>\r\n                                <div class=\"col-8\">\r\n                                    <h4>Medicines</h4> <hr>\r\n                                    <ul *ngFor=\"let n of encount.medicines\">\r\n                                        <div *ngFor=\"let m of medicines\">\r\n                                            <li *ngIf=\"n === m.id\">{{ m.medicine }}</li>\r\n                                        </div>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </mat-card-content>\r\n                        <mat-card-footer>\r\n                            <div class=\"text-center copyright\">Designed & Developed By: <strong>Team R<sub>x</sub></strong></div>\r\n                        </mat-card-footer>\r\n                    </mat-card>\r\n                    \r\n                    <button mat-raised-button color=\"primary\" (click)=\"printPage()\" class=\"mt-3 float-right  d-print-none\">Print</button>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _single_patient_single_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-patient/single-patient.component */ "./src/app/single-patient/single-patient.component.ts");
/* harmony import */ var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicine/medicine.component */ "./src/app/medicine/medicine.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'patients/edit/:id', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_4__["PatientComponent"] },
    { path: 'patients/:id', component: _single_patient_single_patient_component__WEBPACK_IMPORTED_MODULE_5__["SinglePatientComponent"] },
    { path: 'patients', component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_4__["PatientComponent"] },
    { path: 'medicine', component: _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_6__["MedicineComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rx';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _single_patient_single_patient_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./single-patient/single-patient.component */ "./src/app/single-patient/single-patient.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./medicine/medicine.component */ "./src/app/medicine/medicine.component.ts");
/* harmony import */ var _medicine_dialog_medicine_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./medicine-dialog/medicine-dialog.component */ "./src/app/medicine-dialog/medicine-dialog.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_25__["PatientComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
                _single_patient_single_patient_component__WEBPACK_IMPORTED_MODULE_29__["SinglePatientComponent"],
                _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_31__["MedicineComponent"],
                _medicine_dialog_medicine_dialog_component__WEBPACK_IMPORTED_MODULE_32__["MedicineDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__["QRCodeModule"]
            ],
            providers: [
            // { provide: MatDialogRef, useValue: {} },
            // { provide: MAT_DIALOG_DATA, useValue: [] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]],
            entryComponents: [_medicine_dialog_medicine_dialog_component__WEBPACK_IMPORTED_MODULE_32__["MedicineDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(patientService, toastr) {
        this.patientService = patientService;
        this.toastr = toastr;
        this.displayedColumns = ['name', 'age', 'phone', 'address', 'action'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getAll()
            .subscribe(function (response) {
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource._updateChangeSubscription();
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    HomeComponent.prototype.delete = function (item) {
        var _this = this;
        var index = this.dataSource.data.indexOf(item);
        this.patientService.delete(item.id)
            .subscribe(function (data) {
            _this.dataSource.data.splice(index, 1);
            _this.dataSource._updateChangeSubscription();
            _this.toastr.success('Successfully Deleted', 'Success');
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], HomeComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/medicine-dialog/medicine-dialog.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/medicine-dialog/medicine-dialog.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lLWRpYWxvZy9tZWRpY2luZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/medicine-dialog/medicine-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/medicine-dialog/medicine-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: MedicineDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineDialogComponent", function() { return MedicineDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MedicineDialogComponent = /** @class */ (function () {
    function MedicineDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MedicineDialogComponent.prototype.ngOnInit = function () {
    };
    MedicineDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    MedicineDialogComponent.prototype.save = function (value) {
        this.dialogRef.close(value);
    };
    MedicineDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    MedicineDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine-dialog',
            template: __webpack_require__(/*! raw-loader!./medicine-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/medicine-dialog/medicine-dialog.component.html"),
            styles: [__webpack_require__(/*! ./medicine-dialog.component.scss */ "./src/app/medicine-dialog/medicine-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MedicineDialogComponent);
    return MedicineDialogComponent;
}());



/***/ }),

/***/ "./src/app/medicine/medicine.component.scss":
/*!**************************************************!*\
  !*** ./src/app/medicine/medicine.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lL21lZGljaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/medicine/medicine.component.ts":
/*!************************************************!*\
  !*** ./src/app/medicine/medicine.component.ts ***!
  \************************************************/
/*! exports provided: MedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineComponent", function() { return MedicineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medicine.service */ "./src/app/services/medicine.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _medicine_dialog_medicine_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../medicine-dialog/medicine-dialog.component */ "./src/app/medicine-dialog/medicine-dialog.component.ts");






var MedicineComponent = /** @class */ (function () {
    function MedicineComponent(medicineService, dialog, toastr) {
        this.medicineService = medicineService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.errors = [];
        this.displayedColumns = ['medicine', 'action'];
    }
    MedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineService.getAll()
            .subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            _this.errorHandler(error);
        });
    };
    MedicineComponent.prototype.errorHandler = function (response) {
        console.log(response);
        if (Array.isArray(response.error)) {
            this.errors = response.error;
            for (var error in this.errors) {
                if (this.errors.hasOwnProperty(error)) {
                    this.toastr.warning(error.toUpperCase() + ': ' + this.errors[error], 'Warning');
                }
            }
        }
        else {
            if (response.status === 404) {
                this.toastr.warning('Not Found!', '404');
            }
            else {
                this.toastr.error(response.message, 'Error');
            }
        }
    };
    MedicineComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MedicineComponent.prototype.openDialog = function (elementdata) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        if (elementdata) {
            dialogConfig.data = elementdata;
        }
        else {
            dialogConfig.data = [];
        }
        var dialogRef = this.dialog.open(_medicine_dialog_medicine_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MedicineDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                if (data.id) {
                    _this.medicineService.update(data.id, data)
                        .subscribe(function (response) {
                        _this.dataSource._updateChangeSubscription();
                        _this.toastr.success('Successfully Updated', 'Success');
                    }, function (error) {
                        _this.errorHandler(error);
                    });
                }
                else {
                    _this.medicineService.create(data)
                        .subscribe(function (response) {
                        _this.dataSource.data.splice(_this.dataSource.data.length, 0, response);
                        _this.dataSource._updateChangeSubscription();
                        _this.toastr.success('Successfully Added', 'Success');
                    }, function (error) {
                        _this.errorHandler(error);
                    });
                }
            }
        });
    };
    MedicineComponent.prototype.delete = function (item) {
        var _this = this;
        var index = this.dataSource.data.indexOf(item);
        this.medicineService.delete(item.id)
            .subscribe(function (data) {
            _this.dataSource.data.splice(index, 1);
            _this.dataSource._updateChangeSubscription();
            _this.toastr.success('Successfully Deleted', 'Success');
        }, function (error) {
            console.log(error);
            _this.errorHandler(error);
        });
    };
    MedicineComponent.ctorParameters = function () { return [
        { type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_2__["MedicineService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MedicineComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MedicineComponent.prototype, "paginator", void 0);
    MedicineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medicine',
            template: __webpack_require__(/*! raw-loader!./medicine.component.html */ "./node_modules/raw-loader/index.js!./src/app/medicine/medicine.component.html"),
            styles: [__webpack_require__(/*! ./medicine.component.scss */ "./src/app/medicine/medicine.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_2__["MedicineService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MedicineComponent);
    return MedicineComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\n  background: #3f51b5;\n  padding: 1rem 0;\n  margin-bottom: 3rem;\n}\n#navbar nav {\n  display: flex !important;\n}\n.logo {\n  color: #ffffff;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: bold;\n  font-family: \"Iceland\", cursive;\n  margin-right: auto;\n}\n.xm {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0U6XFxyeFxccngvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksd0JBQUE7QUNFUjtBRENBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ubG9nbyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJY2VsYW5kJywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnhtIHtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbn0iLCIjbmF2YmFyIHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuI25hdmJhciBuYXYge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiSWNlbGFuZFwiLCBjdXJzaXZlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi54bSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/patient/patient.component.scss":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var PatientComponent = /** @class */ (function () {
    function PatientComponent(patientService, router, toastr, route) {
        var _this = this;
        this.patientService = patientService;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.selectedFile = null;
        this.patient = [];
        this.sex = [
            { key: 'Male', value: 'Male' },
            { key: 'Female', value: 'Female' },
            { key: 'Others', value: 'Others' },
        ];
        this.blood = [
            { key: 'A+', value: 'A+' },
            { key: 'A-', value: 'A-' },
            { key: 'B+', value: 'B+' },
            { key: 'B-', value: 'B-' },
            { key: 'AB+', value: 'AB+' },
            { key: 'AB-', value: 'AB-' },
            { key: 'O+', value: 'O+' },
            { key: 'O-', value: 'O-' },
        ];
        this.id = +this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.patientService.get(this.id)
                .subscribe(function (data) {
                _this.patient = data;
            });
        }
    }
    PatientComponent.prototype.ngOnInit = function () {
    };
    PatientComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PatientComponent.prototype.save = function (value) {
        var _this = this;
        var formData = new FormData();
        formData.append('name', value.name);
        formData.append('age', value.age);
        formData.append('sex', value.sex);
        formData.append('blood_group', value.blood_group);
        formData.append('phone', value.phone);
        formData.append('email', value.email);
        formData.append('address', value.address);
        if (this.selectedFile) {
            formData.append('avatar', this.selectedFile, this.selectedFile.name);
        }
        if (this.id) {
            this.patientService.update(this.id, formData)
                .subscribe(function (response) {
                _this.toastr.success('Successfully Updated', 'Success');
            }, function (error) {
                console.log(error.error);
            });
        }
        else {
            this.patientService.create(formData)
                .subscribe(function (response) {
                _this.toastr.success('Successfully Added', 'Success');
            }, function (error) {
                console.log(error.error);
            });
        }
        this.router.navigate(['/']);
    };
    PatientComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! raw-loader!./patient.component.html */ "./node_modules/raw-loader/index.js!./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.scss */ "./src/app/patient/patient.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/services/advice.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/advice.service.ts ***!
  \********************************************/
/*! exports provided: AdviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdviceService", function() { return AdviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AdviceService = /** @class */ (function () {
    function AdviceService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/advice/';
    }
    AdviceService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    AdviceService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    AdviceService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    AdviceService.prototype.update = function (id, resource) {
        return this.http.put(this.configUrl + id + '/', resource);
    };
    AdviceService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    AdviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AdviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdviceService);
    return AdviceService;
}());



/***/ }),

/***/ "./src/app/services/encounter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/encounter.service.ts ***!
  \***********************************************/
/*! exports provided: EncounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return EncounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var EncounterService = /** @class */ (function () {
    function EncounterService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/encounter/';
    }
    EncounterService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    EncounterService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    EncounterService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    EncounterService.prototype.update = function (id, resource) {
        return this.http.patch(this.configUrl + id + '/', resource);
    };
    EncounterService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    EncounterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EncounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EncounterService);
    return EncounterService;
}());



/***/ }),

/***/ "./src/app/services/examination.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/examination.service.ts ***!
  \*************************************************/
/*! exports provided: ExaminationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return ExaminationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ExaminationService = /** @class */ (function () {
    function ExaminationService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/examination/';
    }
    ExaminationService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    ExaminationService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    ExaminationService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    ExaminationService.prototype.update = function (id, resource) {
        return this.http.put(this.configUrl + id + '/', resource);
    };
    ExaminationService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    ExaminationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExaminationService);
    return ExaminationService;
}());



/***/ }),

/***/ "./src/app/services/medicine.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/medicine.service.ts ***!
  \**********************************************/
/*! exports provided: MedicineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineService", function() { return MedicineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MedicineService = /** @class */ (function () {
    function MedicineService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/medicine/';
    }
    MedicineService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    MedicineService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    MedicineService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    MedicineService.prototype.update = function (id, resource) {
        return this.http.put(this.configUrl + id + '/', resource);
    };
    MedicineService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    MedicineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MedicineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MedicineService);
    return MedicineService;
}());



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/patients/';
    }
    PatientService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    PatientService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    PatientService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    PatientService.prototype.update = function (id, resource) {
        return this.http.put(this.configUrl + id + '/', resource);
    };
    PatientService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    PatientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/services/symptom.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/symptom.service.ts ***!
  \*********************************************/
/*! exports provided: SymptomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomService", function() { return SymptomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SymptomService = /** @class */ (function () {
    function SymptomService(http) {
        this.http = http;
        this.configUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/symptom/';
    }
    SymptomService.prototype.getAll = function () {
        return this.http.get(this.configUrl);
    };
    SymptomService.prototype.get = function (id) {
        return this.http.get(this.configUrl + id + '/');
    };
    SymptomService.prototype.create = function (resource) {
        return this.http.post(this.configUrl, resource);
    };
    SymptomService.prototype.update = function (id, resource) {
        return this.http.put(this.configUrl + id + '/', resource);
    };
    SymptomService.prototype.delete = function (id) {
        return this.http.delete(this.configUrl + id + '/');
    };
    SymptomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SymptomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SymptomService);
    return SymptomService;
}());



/***/ }),

/***/ "./src/app/single-patient/single-patient.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/single-patient/single-patient.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wYXRpZW50L3NpbmdsZS1wYXRpZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/single-patient/single-patient.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-patient/single-patient.component.ts ***!
  \************************************************************/
/*! exports provided: SinglePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePatientComponent", function() { return SinglePatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_advice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/advice.service */ "./src/app/services/advice.service.ts");
/* harmony import */ var _services_encounter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/encounter.service */ "./src/app/services/encounter.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/medicine.service */ "./src/app/services/medicine.service.ts");
/* harmony import */ var _services_examination_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/examination.service */ "./src/app/services/examination.service.ts");
/* harmony import */ var _services_symptom_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/symptom.service */ "./src/app/services/symptom.service.ts");










var SinglePatientComponent = /** @class */ (function () {
    function SinglePatientComponent(patientService, adviceService, encounterService, medicineService, examinationService, symptomService, toastr, route) {
        var _this = this;
        this.patientService = patientService;
        this.adviceService = adviceService;
        this.encounterService = encounterService;
        this.medicineService = medicineService;
        this.examinationService = examinationService;
        this.symptomService = symptomService;
        this.toastr = toastr;
        this.route = route;
        this.patient = [];
        this.advic = [];
        this.advices = [];
        this.encounters = [];
        this.symp = [];
        this.symptoms = [];
        this.examination = [];
        this.encount = [];
        this.medicines = [];
        this.visit = [
            { key: 'ODP', value: 'ODP' },
        ];
        this.displayedColumns = ['position'];
        route.queryParamMap.subscribe(function (params) {
            _this.encounterId = params.get('encounter');
            if (_this.encounterId) {
                _this.encounterService.get(_this.encounterId)
                    .subscribe(function (data) {
                    _this.encount = data;
                });
            }
        });
        this.id = +this.route.snapshot.paramMap.get('id');
        this.patientService.get(this.id)
            .subscribe(function (data) {
            _this.patient = data;
        });
    }
    SinglePatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adviceService.getAll()
            .subscribe(function (data) {
            _this.advices = data.filter(function (p) { return p.patient === _this.id; });
        });
        this.symptomService.getAll()
            .subscribe(function (data) {
            _this.symptoms = data.filter(function (p) { return p.patient === _this.id; });
        });
        this.examinationService.getAll()
            .subscribe(function (data) {
            var filtered = data.find(function (p) { return p.patient === _this.id; });
            if (filtered) {
                _this.examination = filtered;
            }
        });
        this.encounterService.getAll()
            .subscribe(function (data) {
            _this.encounters = data.filter(function (p) { return p.patient === _this.id; });
        });
        this.medicineService.getAll()
            .subscribe(function (data) {
            _this.medicines = data;
        });
    };
    SinglePatientComponent.prototype.encounter = function (data) {
        var _this = this;
        var formData = new FormData();
        formData.append('date', data.date);
        formData.append('visit_type', data.visit_type);
        formData.append('patient', this.id.toString());
        this.encounterService.create(formData)
            .subscribe(function (response) {
            _this.encounters.splice(_this.encounters.length, 0, response);
            _this.toastr.success('Successfully Added', 'Success');
        });
    };
    SinglePatientComponent.prototype.medicine = function (data) {
        var _this = this;
        var formData = new FormData();
        formData.append('medicines', data.medicine);
        formData.append('patient', this.id.toString());
        formData.append('id', this.encounterId);
        this.encounterService.update(this.encounterId, data)
            .subscribe(function (response) {
            _this.toastr.success('Successfully Added', 'Success');
        });
    };
    SinglePatientComponent.prototype.report = function (value) {
        var _this = this;
        var formData = new FormData();
        formData.append('pulse', value.pulse);
        formData.append('bp', value.bp);
        formData.append('temp', value.temp);
        formData.append('resp_rate', value.resp_rate);
        formData.append('height', value.height);
        formData.append('lifestyle', value.lifestyle);
        formData.append('patient', this.id.toString());
        if (value.id) {
            formData.append('id', value.id);
            this.examinationService.update(value.id, formData)
                .subscribe(function (response) {
                _this.examination = response;
                _this.toastr.success('Successfully Updated', 'Success');
            });
        }
        else {
            this.examinationService.create(formData)
                .subscribe(function (response) {
                _this.examination = response;
                _this.toastr.success('Successfully Added', 'Success');
            });
        }
    };
    SinglePatientComponent.prototype.symptom = function (data) {
        var _this = this;
        var formData = new FormData();
        formData.append('symptom', data.symptom);
        formData.append('patient', this.id.toString());
        if (data.id) {
            var index_1 = this.symptoms.map(function (x) { return x.id; }).indexOf(data.id);
            formData.append('id', data.id);
            this.symptomService.update(data.id, formData)
                .subscribe(function (response) {
                _this.symptoms.splice(index_1, 1, response);
                _this.toastr.success('Successfully Updated', 'Success');
            });
        }
        else {
            this.symptomService.create(formData)
                .subscribe(function (response) {
                _this.symptoms.splice(_this.symptoms.length, 0, response);
                _this.toastr.success('Successfully Added', 'Success');
            });
        }
    };
    SinglePatientComponent.prototype.sigleSymptom = function (item) {
        var _this = this;
        this.symptomService.get(item.id)
            .subscribe(function (data) {
            _this.symp = data;
        }, function (error) {
            console.log(error);
        });
    };
    SinglePatientComponent.prototype.deleteSymptom = function (item) {
        var _this = this;
        var index = this.symptoms.indexOf(item);
        this.symptomService.delete(item.id)
            .subscribe(function (data) {
            _this.symptoms.splice(index, 1);
            _this.toastr.success('Successfully Deleted', 'Success');
        }, function (error) {
            console.log(error);
        });
    };
    SinglePatientComponent.prototype.advice = function (data) {
        var _this = this;
        var formData = new FormData();
        formData.append('advice', data.advice);
        formData.append('patient', this.id.toString());
        if (data.id) {
            var index_2 = this.advices.map(function (x) { return x.id; }).indexOf(data.id);
            formData.append('id', data.id);
            this.adviceService.update(data.id, formData)
                .subscribe(function (response) {
                _this.advices.splice(index_2, 1, response);
                _this.toastr.success('Successfully Updated', 'Success');
            });
        }
        else {
            this.adviceService.create(formData)
                .subscribe(function (response) {
                _this.advices.splice(_this.advices.length, 0, response);
                _this.toastr.success('Successfully Added', 'Success');
            });
        }
    };
    SinglePatientComponent.prototype.singleAdvice = function (item) {
        var _this = this;
        this.adviceService.get(item.id)
            .subscribe(function (data) {
            _this.advic = data;
        }, function (error) {
            console.log(error);
        });
    };
    SinglePatientComponent.prototype.deleteAdvice = function (item) {
        var _this = this;
        var index = this.advices.indexOf(item);
        this.adviceService.delete(item.id)
            .subscribe(function (data) {
            _this.advices.splice(index, 1);
            _this.toastr.success('Successfully Deleted', 'Success');
        }, function (error) {
            console.log(error);
        });
    };
    SinglePatientComponent.prototype.printPage = function () {
        window.print();
    };
    SinglePatientComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
        { type: _services_advice_service__WEBPACK_IMPORTED_MODULE_4__["AdviceService"] },
        { type: _services_encounter_service__WEBPACK_IMPORTED_MODULE_5__["EncounterService"] },
        { type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_7__["MedicineService"] },
        { type: _services_examination_service__WEBPACK_IMPORTED_MODULE_8__["ExaminationService"] },
        { type: _services_symptom_service__WEBPACK_IMPORTED_MODULE_9__["SymptomService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('print', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SinglePatientComponent.prototype, "print", void 0);
    SinglePatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-patient',
            template: __webpack_require__(/*! raw-loader!./single-patient.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-patient/single-patient.component.html"),
            styles: [__webpack_require__(/*! ./single-patient.component.scss */ "./src/app/single-patient/single-patient.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"],
            _services_advice_service__WEBPACK_IMPORTED_MODULE_4__["AdviceService"],
            _services_encounter_service__WEBPACK_IMPORTED_MODULE_5__["EncounterService"],
            _services_medicine_service__WEBPACK_IMPORTED_MODULE_7__["MedicineService"],
            _services_examination_service__WEBPACK_IMPORTED_MODULE_8__["ExaminationService"],
            _services_symptom_service__WEBPACK_IMPORTED_MODULE_9__["SymptomService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SinglePatientComponent);
    return SinglePatientComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'https://rxpy.pythonanywhere.com',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\rx\rx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map