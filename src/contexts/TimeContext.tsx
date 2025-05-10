import { createContext, useContext, useState, ReactNode } from 'react';
import useInterval from '../hooks/useInterval';

interface TimeContextType {
  currentTime: Date;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const useTime = () => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error('useTime must be used within a TimeProvider');
  }
  return context;
};

interface TimeProviderProps {
  children: ReactNode;
}

export const TimeProvider = ({ children }: TimeProviderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return (
    <TimeContext.Provider value={{ currentTime }}>
      {children}
    </TimeContext.Provider>
  );
}; 