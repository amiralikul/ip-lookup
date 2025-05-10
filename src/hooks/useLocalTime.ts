import { useState, useEffect } from 'react';
import { useTime } from '@/contexts/TimeContext';

export function useLocalTime(timezone: string) {
  const { currentTime } = useTime();
  const [time, setTime] = useState('');

  useEffect(() => {
    if (!timezone || !currentTime) {
      setTime('');
      return;
    }

    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: timezone,
    });

    setTime(formatter.format(currentTime));

  }, [timezone, currentTime]);

  return time;
} 