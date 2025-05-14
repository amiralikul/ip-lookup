export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;

}

export interface UsersApiResponse {
  users: User[];
  totalPages: number;
  currentPage?: number;
  totalItems?: number;
}


export interface UserTableProps {
  users: User[];
  isLoading?: boolean;
  onUserClick: (userId: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchBarProps {
  onSearch: (searchText: string) => void;
  initialValue?: string;
}

export interface UserDetailProps {
  userId: number; 
} 