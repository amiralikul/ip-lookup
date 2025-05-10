import { useLocalTime } from '@/hooks/useLocalTime.ts';

export const TimeDisplay =  ({ timezone }: { timezone: string }) => {
  const time = useLocalTime(timezone);
  return <span className="text-sm">{time}</span>;
};