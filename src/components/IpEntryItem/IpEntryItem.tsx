import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { IpEntry } from '@/hooks/useIpEntries';
import { TimeDisplay } from '@/components/TimeDisplay.tsx';
import { useForm, Controller, ControllerRenderProps } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getFlagEmoji } from '@/utils/getFlagEmoji';
import { useDebouncedCallback } from 'use-debounce';
interface IpEntryProps extends IpEntry {
  index: number;
  onSearch: (id: string, value: string) => void;
}

const ipSchema = z.object({
  ipAddress: z.string().ip({
    message: "Please enter a valid IP address."
  })
});

interface IpFormInput {
  ipAddress: string;
}

export const IpEntryItem = function IpEntry({
  index,
  id,
  ip,
  countryCode,
  timezone,
  isLoading,
  error,
  onSearch,
}: IpEntryProps) {
  const { handleSubmit, formState: { errors }, control } = useForm<IpFormInput>({
    defaultValues: { ipAddress: ip },
    shouldFocusError: false,
    resolver: zodResolver(ipSchema),
    mode: 'onBlur',
  });

  
  const onSubmit = useDebouncedCallback((data: IpFormInput) => {
    onSearch(id, data.ipAddress);
  }, 500);

  
  const handleBlur = async (field: ControllerRenderProps<IpFormInput, "ipAddress">) => {
    field.onBlur();
    await handleSubmit(onSubmit)();
  };

  const errorMessage = errors.ipAddress?.message || (error && !errors.ipAddress ? error : null);

  return (
    <div className="flex items-center gap-4 w-full">
      <span className="text-sm text-muted-foreground rounded-full w-7 h-7 flex items-center justify-center bg-gray-300">{index + 1}</span>
      <div className="flex-1 relative">
        
        <Controller
          name="ipAddress"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter IP address"
              onBlur={() => handleBlur(field)}
              disabled={isLoading}
              className={`${error || errors.ipAddress ? 'border-red-500' : ''}`}
            />
          )}
        />
        <p className="text-xs text-red-500 absolute left-0 bottom-[-20px]">{errorMessage}</p>
      </div>
      <div className="flex items-center gap-2 min-w-[120px] h-6">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {countryCode && (
              <>
                <span className="text-3xl">{getFlagEmoji(countryCode)}</span>
                  <TimeDisplay timezone={timezone} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

