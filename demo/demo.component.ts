import { Component } from '@angular/core';
import {
  startOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction
} from './../src'; // import should be from `angular2-calendar` in your app
// import {CalendarEvent} from "../src/components/common/calendar-event";

const colors: any = {
    red: {
        primary: '#ccc',
        secondary: '#eee'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

export const MOCK: CalendarEvent[] = [
    {
        start: new Date('2016-11-16T12:00:00+0900'),
        end:   new Date('2016-11-16T14:00:00+0900'),
        title: 'A1',
        color: colors.red,
        actions: this.actions,
        activated: true,
    },
    {
        start: new Date('2016-11-16T14:00:00+0900'),
        end:   new Date('2016-11-16T16:00:00+0900'),
        title: 'A2',
        color: colors.red,
        actions: this.actions,
        activated: true,
    },
    {
        start: new Date('2016-11-17T14:00:00+0900'),
        end:   new Date('2016-11-17T16:00:00+0900'),
        title: 'B',
        color: colors.red,
        actions: this.actions,
        activated: true,
        reserve: {
            name: '古坂 和仁'
        }
    },
    {
        start: new Date('2016-11-17T16:00:00+0900'),
        end:   new Date('2016-11-17T18:00:00+0900'),
        title: 'B',
        color: colors.red,
        actions: this.actions,
        activated: true,
        confirmed: false,
        reserve: {
            name: '斎藤 司'
        }
    },
    {
        start: new Date('2016-11-18T10:00:00+0900'),
        end:   new Date('2016-11-18T12:00:00+0900'),
        title: 'B',
        color: colors.red,
        actions: this.actions,
        activated: true,
        confirmed: false,
        reserve: {
            name: '斎藤 司'
        }
    },
    {
        start: new Date('2016-11-22T14:00:00+0900'),
        end:   new Date('2016-11-22T16:00:00+0900'),
        title: 'B',
        color: colors.red,
        actions: this.actions,
        activated: true,
        confirmed: false,
        reserve: {
            name: '斎藤 司'
        }
    },
    {
        start: new Date('2016-11-18T14:00:00+0900'),
        end:   new Date('2016-11-18T16:00:00+0900'),
        title: 'B',
        color: colors.red,
        actions: this.actions,
        activated: true,
        reserve: {
            name: '石田 明'
        }
    },
];


@Component({
  selector: 'mwl-demo-app',
  styles: [`
    h3 {
      margin: 0;
    }
    .container {
      padding-bottom: 50px;
    }
  `],
  template: `
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4">
           <div class="btn-group">
             <div class="btn btn-primary" (click)="decrement()">
               Previous
             </div>
             <div class="btn btn-default" (click)="today()">
               Today
             </div>
             <div class="btn btn-primary" (click)="increment()">
               Next
             </div>
           </div>
        </div>
        <div class="col-md-4">
          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>
        </div>
        <div class="col-md-4">
          <div class="btn-group">
            <div class="btn btn-primary" (click)="view = 'month'" [class.active]="view === 'month'">Month</div>
            <div class="btn btn-primary" (click)="view = 'week'" [class.active]="view === 'week'">Week</div>
            <div class="btn btn-primary" (click)="view = 'day'" [class.active]="view === 'day'">Day</div>
          </div>
        </div>
      </div>
      <br>
      <div [ngSwitch]="view">
        <mwl-calendar-month-view
          *ngSwitchCase="'month'"
          [viewDate]="viewDate"
          [events]="events"
          [activeDayIsOpen]="activeDayIsOpen"
          (dayClicked)="dayClicked($event.day)"
          (eventClicked)="eventClicked($event.event)"
          (removeEventClicked)="removeEventClicked($event.event)"
          (toggleTimeSlotClicked)="toggleTimeSlotClicked($event.event)"
          (toggleAllTimeSlotsClicked)="toggleAllTimeSlotsClicked($event.day)">
        </mwl-calendar-month-view>
        <mwl-calendar-week-view
          *ngSwitchCase="'week'"
          [viewDate]="viewDate"
          [events]="events">
        </mwl-calendar-week-view>
        <mwl-calendar-day-view
          *ngSwitchCase="'day'"
          [viewDate]="viewDate"
          [events]="events">
        </mwl-calendar-day-view>
      </div>
    </div>
  `
})
export class DemoComponent {

  view: string = 'month';

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      console.log('Edit event', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
    }
  }];

  events: CalendarEvent[] = MOCK;

  activeDayIsOpen: boolean = true;

  increment(): void {

    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths
    }[this.view];

    this.viewDate = addFn(this.viewDate, 1);

  }

  decrement(): void {

    const subFn: any = {
      day: subDays,
      week: subWeeks,
      month: subMonths
    }[this.view];

    this.viewDate = subFn(this.viewDate, 1);

  }

  today(): void {
    this.viewDate = new Date();
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent): void {
    console.log('eventClicked', event);
  }

  removeEventClicked(event: CalendarEvent): void {
    console.log('removeEventClicked', event);
  }

  toggleTimeSlotClicked(event: CalendarEvent): void {
    event.activated = !event.activated;
  }

  toggleAllTimeSlotsClicked(day: any): void {
      console.log('toggleAllTimeSlotsClicked', day);
  }

}
