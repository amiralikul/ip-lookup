
const fmtCache = new Map<string, Intl.DateTimeFormat>();

export function formatLocalTime(date: Date, tz: string) {
  let fmt = fmtCache.get(tz);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: tz,
    });
    fmtCache.set(tz, fmt);
  }
  return fmt.format(date);
}
