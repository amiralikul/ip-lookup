import { useTime } from '@/contexts/TimeContext';
import { formatLocalTime } from '@/utils/formatLocalTime';

export const TimeDisplay =  ({ timezone }: { timezone: string }) => {

  const { currentTime } = useTime();

  const time = formatLocalTime(currentTime, timezone);
  return <span className="text-sm">{time}</span>;
};