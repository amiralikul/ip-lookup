import React, { useState, useEffect } from 'react';
import { SearchBarProps } from '../types';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialValue = '' }) => {
  const [searchText, setSearchText] = useState(initialValue);
  
  useEffect(() => {
    setSearchText(initialValue);
  }, [initialValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mb-4 flex space-x-2">
      <Input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search by name..."
        
      />
      <Button
        onClick={handleSearch}
        
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar; 