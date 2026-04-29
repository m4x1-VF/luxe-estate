"use client";

interface FilterChipsProps {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  showFiltersButton?: boolean;
  onFiltersClick?: () => void;
}

export default function FilterChips({
  categories,
  selectedCategory = "All",
  onSelectCategory,
  showFiltersButton = true,
  onFiltersClick,
}: FilterChipsProps) {
  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory?.(category)}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? "bg-[var(--nordic)] text-white shadow-lg shadow-[var(--nordic)]/10"
              : "bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--mosque)]/50 hover:bg-[var(--mosque)]/5"
          }`}
        >
          {category}
        </button>
      ))}

      {showFiltersButton && (
        <>
          <div className="w-px h-6 bg-[var(--card-border)] mx-2"></div>
          <button
            onClick={onFiltersClick}
            className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-[var(--foreground)] font-medium text-sm hover:bg-[var(--foreground)]/5 transition-colors"
          >
            <span className="material-icons text-base">tune</span>
            Filters
          </button>
        </>
      )}
    </div>
  );
}