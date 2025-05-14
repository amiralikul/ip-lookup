import { UsersApiResponse } from '../types';


const API_BASE_URL = 'http://localhost:3000';

export const fetchAllUsers = async (page: number, pageSize: number): Promise<UsersApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page: page,
      pageSize: pageSize,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to fetch users and parse error' }));
    throw new Error(errorData.message || 'Failed to fetch users');
  }
  const data: UsersApiResponse = await response.json();
  return data;
};

export const searchUsers = async (searchTerm: string, page: number, pageSize: number): Promise<UsersApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/users/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: { name: searchTerm },
      page: page,
      pageSize: pageSize,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Search request failed and parse error' }));
    throw new Error(errorData.message || 'Search request failed');
  }
  const data: UsersApiResponse = await response.json();
  return data;
};

export const fetchUserDetail = async (id: string): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
