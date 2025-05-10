import { Button } from '@/components/ui/button';

interface AddButtonProps {
  onClick: () => void;
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <Button
      variant="default"
      onClick={onClick}
    >
      <span className="mr-2">+</span> Add
    </Button>
  );
} 