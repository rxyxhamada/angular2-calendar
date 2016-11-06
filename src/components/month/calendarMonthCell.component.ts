import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MonthViewDay } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-month-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cal-cell-top">
      <!--<span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{ day.badgeTotal }}</span>-->
      <span class="cal-day-number">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>
      <span class="cal-day-toggle-slot fa fa-ban" (click)="toggleAllTimeSlots.emit({day: day})"></span>
    </div>
    <div class="cal-events">
      <div
        class="cal-event"
        *ngFor="let event of day.events"
        [ngClass]="event?.cssClass"
        (mouseenter)="highlightDay.emit({event: event})"
        (mouseleave)="unhighlightDay.emit({event: event})"
        [mwlCalendarTooltip]="event | calendarEventTitle:'monthTooltip'"
        [tooltipPlacement]="tooltipPlacement"
        (click)="selectEvent.emit({event: event}); $event.stopPropagation()"
        [class.activated]="event.activated"
        [class.deactivated]="!event.activated"
        [class.reserved]="event.reserve != null"
        [class.not-confirmed]="event.confirmed==false">
        <span>{{event.start | calendarDate:'dayViewHour':'ja'}}-{{event.end | calendarDate:'dayViewHour':'ja'}}</span>
        <span *ngIf="event.reserve != null">{{event.reserve.name}}</span>
        <i class="fa fa-circle-o"
           *ngIf="event.reserve==null && !event.activated"
           (click)="toggleTimeSlot.emit({event: event}); $event.stopPropagation()"></i>
        <i class="fa fa-check-circle-o"
           *ngIf="event.reserve==null && event.activated"
           (click)="toggleTimeSlot.emit({event: event}); $event.stopPropagation()"></i>
        <!--<i class="fa fa-close"-->
           <!--*ngIf="event.reserve !=null"-->
           <!--(click)="removeEvent.emit({event: event}); $event.stopPropagation()"></i>-->
        
      </div>
    </div>
  `,
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
})
export class CalendarMonthCellComponent {

  @Input() day: MonthViewDay;

  @Input() openDay: MonthViewDay;

  @Input() locale: string;

  @Input() tooltipPlacement: string;

  @Output() highlightDay: EventEmitter<any> = new EventEmitter();

  @Output() unhighlightDay: EventEmitter<any> = new EventEmitter();

  @Output() selectEvent: EventEmitter<any> = new EventEmitter();

  @Output() removeEvent: EventEmitter<any> = new EventEmitter();

  @Output() toggleTimeSlot: EventEmitter<any> = new EventEmitter();

  @Output() toggleAllTimeSlots: EventEmitter<any> = new EventEmitter();

}