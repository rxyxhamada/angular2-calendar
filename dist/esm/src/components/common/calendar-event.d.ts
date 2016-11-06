import { CalendarEvent as OriginalCalendarEvent } from 'calendar-utils';
export interface CalendarEvent extends OriginalCalendarEvent {
    id?: number;
    reserve?: any;
    activated: boolean;
    confirmed?: boolean;
}
