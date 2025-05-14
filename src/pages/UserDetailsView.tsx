import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { fetchUserDetail } from '@/services/userService';

const UserDetailsView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: user, isLoading, error } = useQuery<User, Error>({
    queryKey: ['userDetail', id], 
    queryFn: () => fetchUserDetail(id!),
    enabled: !!id,
  });

  if (!id) {
    return <p>No user ID provided.</p>;
  }

  if (isLoading) return <p>Loading user details...</p>;
  if (error) return <p>Error fetching user details: {error.message}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150"
      >
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{user.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Information</h2>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          {user.age !== undefined && <p className="text-gray-600"><strong>Age:</strong> {user.age}</p>}
        </div>
    
      </div>
    </div>
  );
};

export default UserDetailsView; 