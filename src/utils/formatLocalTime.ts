import { formatInTimeZone } from 'date-fns-tz';

export function formatLocalTime(date: Date, tz: string) {
  return formatInTimeZone(date, tz, 'HH:mm:ss');
}
