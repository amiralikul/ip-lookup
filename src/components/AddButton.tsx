import { Button } from '@/components/ui/button';

interface AddButtonProps {
  onClick: () => void;
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <Button
      variant="default"
      className="bg-blue-500 hover:bg-blue-600 mb-4"
      onClick={onClick}
    >
      <span className="mr-2">+</span> Add
    </Button>
  );
} 