(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-resizable-element"), require("calendar-utils"), require("date-fns/add_days/index"), require("date-fns/add_minutes/index"), require("date-fns/get_iso_week/index"), require("date-fns/is_same_day/index"), require("@angular/common"), require("@angular/core"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define([, "calendar-utils", , , , , "@angular/common", "@angular/core", "@angular/platform-browser", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["angularCalendar"] = factory(require("angular-resizable-element"), require("calendar-utils"), require("date-fns/add_days/index"), require("date-fns/add_minutes/index"), require("date-fns/get_iso_week/index"), require("date-fns/is_same_day/index"), require("@angular/common"), require("@angular/core"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else
		root["angularCalendar"] = factory(root["angularResizableElement"], root["calendarUtils"], root["dateFns"]["addDays"], root["dateFns"]["addMinutes"], root["dateFns"]["getISOWeek"], root["dateFns"]["isSameDay"], root["ng"]["common"], root["ng"]["core"], root["ng"]["platformBrowser"], root["rx"]["Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarDateFormatter; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var CalendarDateFormatter = (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        _super.apply(this, arguments);
    }
    return CalendarDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__["a" /* CalendarNativeDateFormatter */]));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarEventTitle; });
var CalendarEventTitle = (function () {
    function CalendarEventTitle() {
    }
    CalendarEventTitle.prototype.month = function (event) {
        return event.title;
    };
    CalendarEventTitle.prototype.monthTooltip = function (event) {
        return event.title;
    };
    CalendarEventTitle.prototype.week = function (event) {
        return event.title;
    };
    CalendarEventTitle.prototype.weekTooltip = function (event) {
        return event.title;
    };
    CalendarEventTitle.prototype.day = function (event) {
        return event.title;
    };
    CalendarEventTitle.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitle;
}());


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarNativeDateFormatter; });

var CalendarNativeDateFormatter = (function () {
    function CalendarNativeDateFormatter() {
    }
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
        var weekNumber = __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendarEventTitle_provider__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarNativeDateFormatter_provider__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_calendarDateFormatter_interface__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_calendarDateFormatter_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interfaces_calendarDateFormatter_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_calendarEventTimesChangedEvent_interface__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces_calendarEventTimesChangedEvent_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__interfaces_calendarEventTimesChangedEvent_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_module__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_calendar_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_calendar_event__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_calendar_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_common_calendar_event__);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CalendarEventTitle", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_calendarEventTitle_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "MOMENT", function() { return __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CalendarMomentDateFormatter", function() { return __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CalendarNativeDateFormatter", function() { return __WEBPACK_IMPORTED_MODULE_2__providers_calendarNativeDateFormatter_provider__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CalendarDateFormatter", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__["a"]; });
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__interfaces_calendarDateFormatter_interface__) if(["CalendarEventAction","CalendarEvent","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_4__interfaces_calendarDateFormatter_interface__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__interfaces_calendarEventTimesChangedEvent_interface__) if(["CalendarEventAction","CalendarEvent","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_5__interfaces_calendarEventTimesChangedEvent_interface__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CalendarModule", function() { return __WEBPACK_IMPORTED_MODULE_6__calendar_module__["a"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7_calendar_utils__, "EventAction")) __webpack_require__.d(exports, "CalendarEventAction", function() { return __WEBPACK_IMPORTED_MODULE_7_calendar_utils__["EventAction"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__components_common_calendar_event__, "CalendarEvent")) __webpack_require__.d(exports, "CalendarEvent", function() { return __WEBPACK_IMPORTED_MODULE_8__components_common_calendar_event__["CalendarEvent"]; });











/***/ },
/* 7 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_day_calendarDayView_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_week_calendarWeekView_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_month_calendarMonthView_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_calendarEventActions_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_calendarEventTitle_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_month_calendarMonthCell_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_month_calendarOpenDayEvents_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_week_calendarWeekViewHeader_component__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_week_calendarWeekViewEvent_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_day_calendarAllDayEvent_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_day_calendarDayViewHourSegment_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_day_calendarDayViewEvent_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_calendarTooltip_directive__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_calendarDate_pipe__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_calendarEventTitle_pipe__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_calendarEventTitle_provider__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_calendarDateFormatter_provider__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function () {
        return {
            ngModule: CalendarModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__providers_calendarEventTitle_provider__["a" /* CalendarEventTitle */],
                __WEBPACK_IMPORTED_MODULE_19__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */]
            ]
        };
    };
    CalendarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_calendarTooltip_directive__["a" /* CalendarTooltipWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_calendarTooltip_directive__["b" /* CalendarTooltipDirective */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_calendarDate_pipe__["a" /* CalendarDate */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitle */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__["ResizableModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */], __WEBPACK_IMPORTED_MODULE_5__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */], __WEBPACK_IMPORTED_MODULE_16__pipes_calendarDate_pipe__["a" /* CalendarDate */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__directives_calendarTooltip_directive__["a" /* CalendarTooltipWindowComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarModule);
    return CalendarModule;
}());


/***/ },
/* 9 */
/***/ function(module, exports) {



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarEventActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEventActionsComponent = (function () {
    function CalendarEventActionsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"]) === 'function' && _a) || Object)
    ], CalendarEventActionsComponent.prototype, "event", void 0);
    CalendarEventActionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-event-actions',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (click)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarEventActionsComponent);
    return CalendarEventActionsComponent;
    var _a;
}());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarEventTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEventTitleComponent = (function () {
    function CalendarEventTitleComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"]) === 'function' && _a) || Object)
    ], CalendarEventTitleComponent.prototype, "event", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarEventTitleComponent.prototype, "view", void 0);
    CalendarEventTitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-event-title',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <a\n      class=\"cal-event-title\"\n      href=\"javascript:;\"\n      [innerHTML]=\"event | calendarEventTitle:view\">\n    </a>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarEventTitleComponent);
    return CalendarEventTitleComponent;
    var _a;
}());


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarAllDayEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarAllDayEventComponent = (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["CalendarEvent"]) === 'function' && _a) || Object)
    ], CalendarAllDayEventComponent.prototype, "event", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarAllDayEventComponent.prototype, "eventClicked", void 0);
    CalendarAllDayEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-all-day-event',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div\n      class=\"cal-all-day-event\"\n      [style.backgroundColor]=\"event.color.secondary\"\n      [style.borderColor]=\"event.color.primary\">\n      <mwl-calendar-event-title\n        [event]=\"event\"\n        view=\"day\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n      <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarAllDayEventComponent);
    return CalendarAllDayEventComponent;
    var _a, _b;
}());


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarDayViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SEGMENT_HEIGHT = 30;
var CalendarDayViewComponent = (function () {
    function CalendarDayViewComponent(cdr, locale) {
        this.cdr = cdr;
        /**
         * An array of events to display on view
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hours = [];
        this.width = 0;
        this.locale = locale;
    }
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        var _this = this;
        this.hours = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["getDayViewHourGrid"])({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        if (this.hourSegmentModifier) {
            this.hours.forEach(function (hour) {
                hour.segments.forEach(function (segment) { return _this.hourSegmentModifier(segment); });
            });
        }
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["getDayView"])({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT
        });
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CalendarDayViewComponent.prototype, "viewDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CalendarDayViewComponent.prototype, "events", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "eventWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]) === 'function' && _a) || Object)
    ], CalendarDayViewComponent.prototype, "refresh", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarDayViewComponent.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CalendarDayViewComponent.prototype, "hourSegmentModifier", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarDayViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-day-view',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-day-view\">\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <mwl-calendar-day-view-event\n            *ngFor=\"let dayEvent of view?.events\"\n            [dayEvent]=\"dayEvent\"\n            [hourSegments]=\"hourSegments\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [eventSnapSize]=\"eventSnapSize\"\n            (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\"\n            (eventResized)=\"eventTimesChanged.emit($event)\">\n          </mwl-calendar-day-view-event>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            (click)=\"hourSegmentClicked.emit({date: segment.date})\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _e) || Object, String])
    ], CalendarDayViewComponent);
    return CalendarDayViewComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarDayViewEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarDayViewEventComponent = (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventResized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.prototype.resizeStarted = function (event, resizeEvent) {
        this.currentResize = {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        };
    };
    CalendarDayViewEventComponent.prototype.resizing = function (event, resizeEvent) {
        if (resizeEvent.edges.top) {
            event.top = this.currentResize.originalTop + +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = this.currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewEventComponent.prototype.resizeEnded = function (dayEvent) {
        var segments;
        if (this.currentResize.edge === 'top') {
            segments = (dayEvent.top - this.currentResize.originalTop) / this.eventSnapSize;
        }
        else {
            segments = (dayEvent.height - this.currentResize.originalHeight) / this.eventSnapSize;
        }
        dayEvent.top = this.currentResize.originalTop;
        dayEvent.height = this.currentResize.originalHeight;
        var segmentAmountInMinutes = 60 / this.hourSegments;
        var minutesMoved = segments * segmentAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (this.currentResize.edge === 'top') {
            newStart = __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_2_date_fns_add_minutes___default()(newEnd, minutesMoved);
        }
        this.eventResized.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["DayViewEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["DayViewEvent"]) === 'function' && _a) || Object)
    ], CalendarDayViewEventComponent.prototype, "dayEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewEventComponent.prototype, "hourSegments", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarDayViewEventComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarDayViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarDayViewEventComponent.prototype, "eventClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CalendarDayViewEventComponent.prototype, "eventResized", void 0);
    CalendarDayViewEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-day-view-event',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div\n      class=\"cal-event\"\n      [style.marginTop.px]=\"dayEvent.top\"\n      [style.marginLeft.px]=\"dayEvent.left + 70\"\n      [style.height.px]=\"dayEvent.height\"\n      [style.width.px]=\"dayEvent.width - 1\"\n      [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n      [style.borderColor]=\"dayEvent.event.color.primary\"\n      [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n      [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n      [ngClass]=\"dayEvent.event.cssClass\"\n      [mwlCalendarTooltip]=\"dayEvent.event | calendarEventTitle:'dayTooltip'\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      mwlResizable\n      [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n      [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n      (resizeStart)=\"resizeStarted(dayEvent, $event)\"\n      (resizing)=\"resizing(dayEvent, $event)\"\n      (resizeEnd)=\"resizeEnded(dayEvent)\">\n      <mwl-calendar-event-title\n        [event]=\"dayEvent.event\"\n        view=\"day\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n      <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarDayViewEventComponent);
    return CalendarDayViewEventComponent;
    var _a, _b, _c;
}());


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarDayViewHourSegmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarDayViewHourSegmentComponent = (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["DayViewHourSegment"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["DayViewHourSegment"]) === 'function' && _a) || Object)
    ], CalendarDayViewHourSegmentComponent.prototype, "segment", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarDayViewHourSegmentComponent.prototype, "locale", void 0);
    CalendarDayViewHourSegmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-day-view-hour-segment',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-hour-segment\" [ngClass]=\"segment.cssClass\">\n      <div [hidden]=\"!segment.isStart\" class=\"cal-time\">\n        {{ segment.date | calendarDate:'dayViewHour':locale }}\n      </div>\n      &nbsp;\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarDayViewHourSegmentComponent);
    return CalendarDayViewHourSegmentComponent;
    var _a;
}());


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarMonthCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarMonthCellComponent = (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unhighlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleTimeSlot = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleAllTimeSlots = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["MonthViewDay"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["MonthViewDay"]) === 'function' && _a) || Object)
    ], CalendarMonthCellComponent.prototype, "day", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["MonthViewDay"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["MonthViewDay"]) === 'function' && _b) || Object)
    ], CalendarMonthCellComponent.prototype, "openDay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarMonthCellComponent.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], CalendarMonthCellComponent.prototype, "selectEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], CalendarMonthCellComponent.prototype, "removeEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _g) || Object)
    ], CalendarMonthCellComponent.prototype, "toggleTimeSlot", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _h) || Object)
    ], CalendarMonthCellComponent.prototype, "toggleAllTimeSlots", void 0);
    CalendarMonthCellComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-month-cell',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-cell-top\">\n      <!--<span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>-->\n      <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      <span class=\"cal-day-toggle-slot fa fa-ban\" (click)=\"toggleAllTimeSlots.emit({day: day})\"></span>\n    </div>\n    <div class=\"cal-events\">\n      <div\n        class=\"cal-event\"\n        *ngFor=\"let event of day.events\"\n        [ngClass]=\"event?.cssClass\"\n        (mouseenter)=\"highlightDay.emit({event: event})\"\n        (mouseleave)=\"unhighlightDay.emit({event: event})\"\n        [mwlCalendarTooltip]=\"event | calendarEventTitle:'monthTooltip'\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        (click)=\"selectEvent.emit({event: event}); $event.stopPropagation()\"\n        [class.activated]=\"event.activated\"\n        [class.reserved]=\"event.reserve != null\"\n        [class.not-confirmed]=\"event.confirmed==false\">\n        <span>{{event.start | calendarDate:'dayViewHour':'ja'}}-{{event.end | calendarDate:'dayViewHour':'ja'}}</span>\n        <span *ngIf=\"event.reserve != null\">{{event.reserve.name}}</span>\n        <i class=\"fa fa-check-circle-o\"\n           *ngIf=\"event.reserve==null && !event.activated\"\n           (click)=\"toggleTimeSlot.emit({event: event}); $event.stopPropagation()\"></i>\n        <i class=\"fa fa-ban\"\n           *ngIf=\"event.reserve==null && event.activated\"\n           (click)=\"toggleTimeSlot.emit({event: event}); $event.stopPropagation()\"></i>\n        <!--<i class=\"fa fa-close\"-->\n           <!--*ngIf=\"event.reserve !=null\"-->\n           <!--(click)=\"removeEvent.emit({event: event}); $event.stopPropagation()\"></i>-->\n        \n      </div>\n    </div>\n  ",
            host: {
                '[class]': '"cal-cell cal-day-cell " + day?.cssClass',
                '[class.cal-past]': 'day.isPast',
                '[class.cal-today]': 'day.isToday',
                '[class.cal-future]': 'day.isFuture',
                '[class.cal-weekend]': 'day.isWeekend',
                '[class.cal-in-month]': 'day.inMonth',
                '[class.cal-out-month]': '!day.inMonth',
                '[class.cal-has-events]': 'day.events.length > 0',
                '[class.cal-open]': 'day === openDay',
                '[style.backgroundColor]': 'day.backgroundColor'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarMonthCellComponent);
    return CalendarMonthCellComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_is_same_day__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_is_same_day__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarMonthViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CalendarMonthViewComponent = (function () {
    function CalendarMonthViewComponent(cdr, locale) {
        this.cdr = cdr;
        /**
         * An array of events to display on view
         */
        this.events = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event remove button is clicked
         */
        this.removeEventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the toggle time slot button is clicked
         */
        this.toggleTimeSlotClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the toggle all time slots in a day button is clicked
         */
        this.toggleAllTimeSlotsClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locale = locale;
    }
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate) {
            this.refreshHeader();
        }
        if (changes.viewDate || changes.events) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen || changes.viewDate || changes.events) {
            this.checkActiveDayIsOpen();
        }
    };
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["getWeekViewHeader"])({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        var _this = this;
        this.view = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["getMonthView"])({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
        if (this.dayModifier) {
            this.view.days.forEach(function (day) { return _this.dayModifier(day); });
        }
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) { return __WEBPACK_IMPORTED_MODULE_3_date_fns_is_same_day___default()(day.date, _this.viewDate); });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / 7) * 7;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CalendarMonthViewComponent.prototype, "dayModifier", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]) === 'function' && _a) || Object)
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarMonthViewComponent.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], CalendarMonthViewComponent.prototype, "removeEventClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], CalendarMonthViewComponent.prototype, "toggleTimeSlotClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], CalendarMonthViewComponent.prototype, "toggleAllTimeSlotsClicked", void 0);
    CalendarMonthViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-month-view',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-month-view\">\n      <div class=\"cal-cell-row cal-header\">\n        <div class=\"cal-cell\" *ngFor=\"let header of columnHeaders\">\n          {{ header.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + 7\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              (click)=\"dayClicked.emit({day: day})\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              (selectEvent)=\"eventClicked.emit($event)\"\n              (toggleTimeSlot)=\"toggleTimeSlotClicked.emit($event)\"\n              (removeEvent)=\"removeEventClicked.emit($event)\"\n              (toggleAllTimeSlots)=\"toggleAllTimeSlotsClicked.emit($event)\">\n            </mwl-calendar-month-cell>\n          </div>\n          <!--<mwl-calendar-open-day-events-->\n            <!--[isOpen]=\"openRowIndex === rowIndex\"-->\n            <!--[events]=\"openDay?.events\"-->\n            <!--(eventClicked)=\"eventClicked.emit({event: $event.event})\">-->\n          <!--</mwl-calendar-open-day-events>-->\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])), 
        __metadata('design:paramtypes', [(typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _g) || Object, String])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarOpenDayEventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarOpenDayEventsComponent = (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CalendarOpenDayEventsComponent.prototype, "events", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
    CalendarOpenDayEventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-open-day-events',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\">\n        <span class=\"cal-event\" [style.backgroundColor]=\"event.color.primary\"></span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"month\"\n          (click)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </div>\n  ",
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('collapse', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '*' }))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '*' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('150ms linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarOpenDayEventsComponent);
    return CalendarOpenDayEventsComponent;
    var _a;
}());


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_calendar_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_days__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_days__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarWeekViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CalendarWeekViewComponent = (function () {
    function CalendarWeekViewComponent(cdr, locale) {
        this.cdr = cdr;
        /**
         * An array of events to display on view
         */
        this.events = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Called when a header week day is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventRows = [];
        this.locale = locale;
    }
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate) {
            this.refreshBody();
        }
    };
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekEvent, resizeEvent) {
        this.currentResize = {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        };
    };
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = this.currentResize.originalOffset + diff;
            weekEvent.span = this.currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = this.currentResize.originalSpan + diff;
        }
    };
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var daysDiff;
        if (this.currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - this.currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - this.currentResize.originalSpan;
        }
        weekEvent.offset = this.currentResize.originalOffset;
        weekEvent.span = this.currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (this.currentResize.edge === 'left') {
            newStart = __WEBPACK_IMPORTED_MODULE_3_date_fns_add_days___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_3_date_fns_add_days___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_calendar_utils__["getWeekViewHeader"])({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_calendar_utils__["getWeekView"])({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], CalendarWeekViewComponent.prototype, "events", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]) === 'function' && _a) || Object)
    ], CalendarWeekViewComponent.prototype, "refresh", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarWeekViewComponent.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarWeekViewComponent.prototype, "dayClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarWeekViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-week-view',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"cal-week-view\">\n      <div class=\"cal-day-headers\">\n        <mwl-calendar-week-view-header\n          *ngFor=\"let day of days\"\n          [day]=\"day\"\n          [locale]=\"locale\"\n          (click)=\"dayClicked.emit({date: day.date})\">\n        </mwl-calendar-week-view-header>\n      </div>\n      <div *ngFor=\"let eventRow of eventRows\" #container>\n        <div\n          class=\"cal-event-container\"\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / 7) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / 7) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: container.offsetWidth / 7, right: container.offsetWidth / 7}\"\n          (resizeStart)=\"resizeStarted(weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, container.offsetWidth / 7)\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])), 
        __metadata('design:paramtypes', [(typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _e) || Object, String])
    ], CalendarWeekViewComponent);
    return CalendarWeekViewComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarWeekViewEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarWeekViewEventComponent = (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["WeekViewEvent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["WeekViewEvent"]) === 'function' && _a) || Object)
    ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
    CalendarWeekViewEventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-week-view-event',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div\n      class=\"cal-event\"\n      [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n      [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n      [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n      [ngClass]=\"weekEvent.event?.cssClass\"\n      [mwlCalendarTooltip]=\"weekEvent.event | calendarEventTitle:'weekTooltip'\"\n      [tooltipPlacement]=\"tooltipPlacement\">\n      <mwl-calendar-event-title\n        [event]=\"weekEvent.event\"\n        view=\"week\"\n        (click)=\"eventClicked.emit()\">\n      </mwl-calendar-event-title>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarWeekViewEventComponent);
    return CalendarWeekViewEventComponent;
    var _a, _b;
}());


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarWeekViewHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarWeekViewHeaderComponent = (function () {
    function CalendarWeekViewHeaderComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["WeekDay"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_calendar_utils__["WeekDay"]) === 'function' && _a) || Object)
    ], CalendarWeekViewHeaderComponent.prototype, "day", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    CalendarWeekViewHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mwl-calendar-week-view-header',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n    <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n  ",
            host: {
                '[class]': '"cal-header"',
                '[class.cal-past]': 'day.isPast',
                '[class.cal-today]': 'day.isToday',
                '[class.cal-future]': 'day.isFuture',
                '[class.cal-weekend]': 'day.isWeekend'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarWeekViewHeaderComponent);
    return CalendarWeekViewHeaderComponent;
    var _a;
}());


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_util_positioning__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CalendarTooltipDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CalendarTooltipWindowComponent = (function () {
    function CalendarTooltipWindowComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    CalendarTooltipWindowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: ["\n    .cal-tooltip {\n      position: absolute;\n      z-index: 1070;\n      display: block;\n      font-style: normal;\n      font-weight: normal;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: 11px;\n      word-wrap: break-word;\n      opacity: 0.9;\n    }\n\n    .cal-tooltip.cal-tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px;\n    }\n\n    .cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px 5px 0;\n      border-top-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px;\n    }\n\n    .cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px;\n    }\n\n    .cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 0 5px 5px;\n      border-bottom-color: #000;\n    }\n\n    .cal-tooltip.cal-tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px;\n    }\n\n    .cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000;\n    }\n\n    .cal-tooltip-inner {\n      max-width: 200px;\n      padding: 3px 8px;\n      color: #fff;\n      text-align: center;\n      background-color: #000;\n      border-radius: 0.25rem;\n    }\n\n    .cal-tooltip-arrow {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid;\n    }\n  "],
            template: "\n    <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n      <div class=\"cal-tooltip-arrow\"></div>\n      <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarTooltipWindowComponent);
    return CalendarTooltipWindowComponent;
}());
var CalendarTooltipDirective = (function () {
    function CalendarTooltipDirective(elementRef, renderer, injector, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        ) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'top'; // tslint:disable-line no-input-rename
        this.positioning = new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_util_positioning__["a" /* Positioning */]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngAfterViewChecked = function () {
        this.positionPopover();
    };
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.renderer.invokeElementMethod(this.document.body, 'appendChild', [this.tooltipRef.location.nativeElement]);
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionPopover = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, true);
            var targetStyle = this.tooltipRef.location.nativeElement.children[0].style;
            targetStyle.top = targetPosition.top + "px";
            targetStyle.left = targetPosition.left + "px";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mwlCalendarTooltip'), 
        __metadata('design:type', String)
    ], CalendarTooltipDirective.prototype, "contents", void 0);
    __decorate([
        // tslint:disable-line no-input-rename
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tooltipPlacement'), 
        __metadata('design:type', String)
    ], CalendarTooltipDirective.prototype, "placement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOver", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[mwlCalendarTooltip]'
        }),
        __param(5, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object, Object])
    ], CalendarTooltipDirective);
    return CalendarTooltipDirective;
    var _a, _b, _c, _d, _e;
}());


/***/ },
/* 23 */
/***/ function(module, exports) {



/***/ },
/* 24 */
/***/ function(module, exports) {



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarDate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CalendarDate = (function () {
    function CalendarDate(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDate.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    CalendarDate = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'calendarDate'
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */]) === 'function' && _a) || Object, String])
    ], CalendarDate);
    return CalendarDate;
    var _a;
}());


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitle_provider__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarEventTitle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEventTitle = (function () {
    function CalendarEventTitle(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitle.prototype.transform = function (event, titleType) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitle = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'calendarEventTitle'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitle_provider__["a" /* CalendarEventTitle */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitle_provider__["a" /* CalendarEventTitle */]) === 'function' && _a) || Object])
    ], CalendarEventTitle);
    return CalendarEventTitle;
    var _a;
}());


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CalendarMomentDateFormatter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var MOMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('Moment');
var CalendarMomentDateFormatter = (function () {
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D');
    };
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('MMMM YYYY');
    };
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D MMM');
    };
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('[Week] W [of] YYYY');
    };
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('ha');
    };
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter = __decorate([
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(MOMENT)), 
        __metadata('design:paramtypes', [Object])
    ], CalendarMomentDateFormatter);
    return CalendarMomentDateFormatter;
}());


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}


/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_angular_calendar_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_angular_calendar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_angular_calendar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__index__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(exports, key, function() { return __WEBPACK_IMPORTED_MODULE_1__index__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-calendar.js.map