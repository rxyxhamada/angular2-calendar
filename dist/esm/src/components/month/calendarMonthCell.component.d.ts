import { EventEmitter } from '@angular/core';
import { MonthViewDay } from 'calendar-utils';
export declare class CalendarMonthCellComponent {
    day: MonthViewDay;
    openDay: MonthViewDay;
    locale: string;
    tooltipPlacement: string;
    highlightDay: EventEmitter<any>;
    unhighlightDay: EventEmitter<any>;
    selectEvent: EventEmitter<any>;
    removeEvent: EventEmitter<any>;
    toggleTimeSlot: EventEmitter<any>;
    toggleAllTimeSlots: EventEmitter<any>;
}
