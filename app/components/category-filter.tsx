"use client";

import {
  BookIcon,
  DumbbellIcon,
  MessagesSquareIcon,
  LayoutGridIcon,
} from "lucide-react";

const categories = ["All", "Education", "Health", "Social"] as const;

const getCategoryIcon = (category: (typeof categories)[number]) => {
  switch (category) {
    case "Education":
      return <BookIcon className="h-4 w-4 mr-2" />;
    case "Health":
      return <DumbbellIcon className="h-4 w-4 mr-2" />;
    case "Social":
      return <MessagesSquareIcon className="h-4 w-4 mr-2" />;
    case "All":
      return <LayoutGridIcon className="h-4 w-4 mr-2" />;
  }
};

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center ${
            activeCategory === category
              ? "bg-indigo-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {getCategoryIcon(category)}
          {category}
        </button>
      ))}
    </div>
  );
}
