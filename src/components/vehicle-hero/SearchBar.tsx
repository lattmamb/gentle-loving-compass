
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchValue: string;
  onSearchChange?: (value: string) => void;
}

export default function SearchBar({ searchValue, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
      <Input 
        placeholder="Search vehicles..."
        value={searchValue}
        onChange={(e) => onSearchChange?.(e.target.value)}
        className="pl-12 bg-white/5 border-white/10 text-white w-full"
      />
    </div>
  );
}
