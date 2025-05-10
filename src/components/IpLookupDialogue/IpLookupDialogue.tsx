import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useIpEntries } from '@/hooks/useIpEntries';
import { IpEntryItem } from '../IpEntryItem/IpEntryItem';
import { AddButton } from '../AddButton';

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
          <AddButton onClick={handleAddEntry} />
          <form>
          <div className="space-y-4">
            {entries.map((entry, index) => {
              return <IpEntryItem key={entry.id} index={index} {...entry} onSearch={handleIpChange} />
            })}
          </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
