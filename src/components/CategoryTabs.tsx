import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'tarot', label: '타로 상담사', icon: '🔮' },
  { id: 'fortune', label: '역학 상담사', icon: '☯️' },
  { id: 'spiritual', label: '신점 상담사', icon: '🌙' },
  { id: 'new', label: '신규 상담사', icon: '✨' },
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex justify-center gap-2 md:gap-4 mb-8 overflow-x-auto scrollbar-hide py-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
            activeCategory === category.id
              ? 'text-primary-foreground'
              : 'text-foreground/70 hover:text-foreground bg-muted hover:bg-muted/80'
          }`}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-primary rounded-full"
              initial={false}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
