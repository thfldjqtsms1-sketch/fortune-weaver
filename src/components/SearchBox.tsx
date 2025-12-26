import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <div className="relative">
        <Input
          type="text"
          placeholder="선생님 찾기"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-48 md:w-64 rounded-full border-border bg-background/80"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>
      <Button type="submit" size="icon" className="rounded-full bg-muted hover:bg-muted/80">
        <Search className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default SearchBox;
