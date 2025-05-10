
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IpLookupDialogue } from './components/IpLookupDialogue/IpLookupDialogue.tsx';
import { Button } from './components/ui/button';
import { useState } from 'react';
import { TimeProvider } from './contexts/TimeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
      retry: 2,
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
        <div className="container mx-auto py-10">
          <Button onClick={() => setOpen(true)}>Open IP Lookup</Button>
          <TimeProvider>
            <IpLookupDialogue open={open} onOpenChange={setOpen} />
          </TimeProvider>
        </div>
    </QueryClientProvider>
  );
}

export default App;
