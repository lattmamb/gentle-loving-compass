
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleFilters: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  toggleFilters 
}) => {
  return (
    <div className="flex items-center mt-4 md:mt-0 space-x-3">
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
          <Search size={18} />
        </div>
        <Input
          placeholder="Search vehicles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white/5 backdrop-blur-md border-white/10 text-white w-full rounded-full"
        />
      </div>
      
      <Button
        variant="outline" 
        className="md:hidden border-white/10 text-white hover:bg-white/10 rounded-full"
        onClick={toggleFilters}
      >
        <SlidersHorizontal size={18} className="mr-2" />
        Filters
      </Button>
    </div>
  );
};

export default SearchBar;
