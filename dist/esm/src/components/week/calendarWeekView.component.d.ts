import { EventEmitter, ChangeDetectorRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { WeekDay, CalendarEvent, WeekViewEvent, WeekViewEventRow } from 'calendar-utils';
import { ResizeEvent } from 'angular-resizable-element';
import { CalendarEventTimesChangedEvent } from './../../interfaces/calendarEventTimesChangedEvent.interface';
export declare class CalendarWeekViewComponent implements OnChanges, OnInit, OnDestroy {
    private cdr;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     */
    events: CalendarEvent[];
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * The placement of the event tooltip
     */
    tooltipPlacement: string;
    /**
     * The start number of the week
     */
    weekStartsOn: number;
    /**
     * Called when a header week day is clicked
     */
    dayClicked: EventEmitter<{
        date: Date;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent>;
    days: WeekDay[];
    eventRows: WeekViewEventRow[];
    refreshSubscription: Subscription;
    currentResize: {
        originalOffset: number;
        originalSpan: number;
        edge: string;
    };
    constructor(cdr: ChangeDetectorRef, locale: string);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    resizeStarted(weekEvent: WeekViewEvent, resizeEvent: ResizeEvent): void;
    resizing(weekEvent: WeekViewEvent, resizeEvent: ResizeEvent, dayWidth: number): void;
    resizeEnded(weekEvent: WeekViewEvent): void;
    private refreshHeader();
    private refreshBody();
    private refreshAll();
}
