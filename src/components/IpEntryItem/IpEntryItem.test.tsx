import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { IpEntryItem } from './IpEntryItem';
import { getFlagEmoji } from '@/utils/getFlagEmoji';


vi.mock('@/utils/getFlagEmoji', () => ({
  getFlagEmoji: vi.fn().mockReturnValue('🇺🇸')
}));

// Mock TimeDisplay component
vi.mock('@/components/TimeDisplay.tsx', () => ({
  TimeDisplay: ({ timezone }: { timezone: string }) => <span data-testid="time-display">{timezone}</span>
}));

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  Loader2: () => <div data-testid="loading-spinner" />
}));

describe('IpEntryItem', () => {
  const mockProps = {
    id: '123',
    ip: '',
    countryCode: '',
    timezone: '',
    isLoading: false,
    index: 0,
    onSearch: vi.fn(),
  };

  it('should trigger onSearch when input field loses focus', async () => {
    render(<IpEntryItem {...mockProps} />);
    
    const inputField = screen.getByPlaceholderText('Enter IP address');
    

    await userEvent.type(inputField, '1.1.1.1');
    await userEvent.tab();
    

    await waitFor(() => {
      expect(mockProps.onSearch).toHaveBeenCalledWith('123', '1.1.1.1');
    });
  });
  
  it('should display country flag when countryCode is provided', () => {
    const propsWithCountry = {
      ...mockProps,
      countryCode: 'US',
      timezone: 'America/New_York',
    };
    
    render(<IpEntryItem {...propsWithCountry} />);
    
    // Check that flag emoji is rendered (mocked to return 🇺🇸)
    expect(getFlagEmoji).toHaveBeenCalledWith('US');
    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
    
    // Check that timezone is displayed
    expect(screen.getByTestId('time-display')).toBeInTheDocument();
    expect(screen.getByTestId('time-display').textContent).toBe('America/New_York');
  });
  
  it('should not display country flag when countryCode is empty', () => {
    render(<IpEntryItem {...mockProps} />);
    
    // Check that flag emoji is not rendered
    expect(screen.queryByText('🇺🇸')).not.toBeInTheDocument();
    expect(screen.queryByTestId('time-display')).not.toBeInTheDocument();
  });
  
  it('should show loading indicator when isLoading is true', () => {
    const loadingProps = {
      ...mockProps,
      isLoading: true,
    };
    
    render(<IpEntryItem {...loadingProps} />);
    
    // Check that loading spinner is displayed
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('should display validation error when invalid IP is entered', async () => {
    render(<IpEntryItem {...mockProps} />);
    
    const inputField = screen.getByPlaceholderText('Enter IP address');
    
    // Enter an invalid IP and trigger blur
    await userEvent.type(inputField, 'invalid-ip-address');
    await userEvent.tab();
    
    // Check that validation error is displayed
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid IP address.')).toBeInTheDocument();
    });
  });
}); 