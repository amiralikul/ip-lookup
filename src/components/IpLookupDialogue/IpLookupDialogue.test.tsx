import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IpLookupDialogue } from './IpLookupDialogue';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TimeProvider } from '@/contexts/TimeContext';


vi.mock('@/hooks/useIpEntries', () => ({
  useIpEntries: () => ({
    entries: [],
    handleAddEntry: vi.fn(),
    handleIpChange: vi.fn(),
  }),
}));

const queryClient = new QueryClient();

describe('IpLookupDialogue', () => {
  it('should render the dialog with the correct title', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TimeProvider>
          <IpLookupDialogue open={true} onOpenChange={vi.fn()} />
        </TimeProvider>
      </QueryClientProvider>
    );
    expect(screen.getByText('IP Lookup')).toBeInTheDocument();
  });
}); 