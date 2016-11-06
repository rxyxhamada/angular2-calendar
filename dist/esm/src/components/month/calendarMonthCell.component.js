import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
export var CalendarMonthCellComponent = (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.selectEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.toggleTimeSlot = new EventEmitter();
        this.toggleAllTimeSlots = new EventEmitter();
    }
    CalendarMonthCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-month-cell',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"cal-cell-top\">\n      <!--<span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>-->\n      <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      <span class=\"cal-day-toggle-slot fa fa-ban\" (click)=\"toggleAllTimeSlots.emit({day: day})\"></span>\n    </div>\n    <div class=\"cal-events\">\n      <div\n        class=\"cal-event\"\n        *ngFor=\"let event of day.events\"\n        [ngClass]=\"event?.cssClass\"\n        (mouseenter)=\"highlightDay.emit({event: event})\"\n        (mouseleave)=\"unhighlightDay.emit({event: event})\"\n        [mwlCalendarTooltip]=\"event | calendarEventTitle:'monthTooltip'\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        (click)=\"selectEvent.emit({event: event}); $event.stopPropagation()\"\n        [class.activated]=\"event.activated\"\n        [class.deactivated]=\"!event.activated\"\n        [class.reserved]=\"event.reserve != null\"\n        [class.not-confirmed]=\"event.confirmed==false\">\n        <span>{{event.start | calendarDate:'dayViewHour':'ja'}}-{{event.end | calendarDate:'dayViewHour':'ja'}}</span>\n        <span *ngIf=\"event.reserve != null\">{{event.reserve.name}}</span>\n        <i class=\"fa fa-circle-o\"\n           *ngIf=\"event.reserve==null && !event.activated\"\n           (click)=\"toggleTimeSlot.emit({event: event}); $event.stopPropagation()\"></i>\n        <i class=\"fa fa-check-circle-o\"\n           *ngIf=\"event.reserve==null && event.activated\"\n           (click)=\"toggleTimeSlot.emit({event: event}); $event.stopPropagation()\"></i>\n        <!--<i class=\"fa fa-close\"-->\n           <!--*ngIf=\"event.reserve !=null\"-->\n           <!--(click)=\"removeEvent.emit({event: event}); $event.stopPropagation()\"></i>-->\n        \n      </div>\n    </div>\n  ",
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
                },] },
    ];
    /** @nocollapse */
    CalendarMonthCellComponent.ctorParameters = [];
    CalendarMonthCellComponent.propDecorators = {
        'day': [{ type: Input },],
        'openDay': [{ type: Input },],
        'locale': [{ type: Input },],
        'tooltipPlacement': [{ type: Input },],
        'highlightDay': [{ type: Output },],
        'unhighlightDay': [{ type: Output },],
        'selectEvent': [{ type: Output },],
        'removeEvent': [{ type: Output },],
        'toggleTimeSlot': [{ type: Output },],
        'toggleAllTimeSlots': [{ type: Output },],
    };
    return CalendarMonthCellComponent;
}());
//# sourceMappingURL=calendarMonthCell.component.js.map