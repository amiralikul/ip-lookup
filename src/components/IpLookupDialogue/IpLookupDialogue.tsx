
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useIpEntries } from '@/hooks/useIpEntries';
import { IpEntryItem } from '../IpEntryItem/IpEntryItem';
import { AddButton } from '../AddButton';
import { TimeProvider } from '@/contexts/TimeContext';

interface IpLookupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function IpLookupDialogue({ open, onOpenChange }: IpLookupProps) {
  const { entries, handleAddEntry, handleIpChange } = useIpEntries();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>IP Lookup</DialogTitle>
          <DialogDescription>
            Enter one or more IP addresses and get their country
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="mb-4">
            <AddButton onClick={handleAddEntry} />
          </div>
          <TimeProvider>
          <div className="space-y-4">
            {entries.map((entry, index) => {
              return <IpEntryItem key={entry.id} index={index} {...entry} onSearch={handleIpChange} />
            })}
          </div>
          </TimeProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
