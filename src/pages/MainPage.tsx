import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import { User, UsersApiResponse } from '../types';
import { fetchAllUsers, searchUsers } from '../services/userService';

const PAGE_SIZE = 10;

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('q') || '');
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam, 10) : 1;
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) {
      params.set('q', searchTerm);
    }
    if (currentPage > 1) {
      params.set('page', currentPage.toString());
    } else {
      params.delete('page');
    }
    setSearchParams(params, { replace: true });
  }, [searchTerm, currentPage, setSearchParams]);

  const { data: apiResponse, isLoading, error } = useQuery<UsersApiResponse, Error>({
    queryKey: ['users', searchTerm, currentPage],
    queryFn: () => {
      const apiPage = currentPage - 1;
      return searchTerm 
        ? searchUsers(searchTerm, apiPage, PAGE_SIZE) 
        : fetchAllUsers(apiPage, PAGE_SIZE);
    },
  });

  const handleUserClick = (userId: number) => {
    navigate(`/users/${userId}`);
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const users = apiResponse?.users || [];
  const totalPages = apiResponse?.totalPages || 0;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">User Management</h1>
      <SearchBar onSearch={handleSearch} initialValue={searchTerm} />
      <UserTable 
        users={users}
        isLoading={isLoading} 
        onUserClick={handleUserClick}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {isLoading && !apiResponse && <p className="text-center text-gray-500 mt-4">Loading users...</p>}
    </div>
  );
};

export default MainPage; 