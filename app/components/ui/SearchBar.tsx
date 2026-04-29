"use client";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Search by city, neighborhood, or address...",
  onSearch,
}: SearchBarProps) {
  return (
    <div className="relative group">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span className="material-icons text-[var(--muted)] text-2xl group-focus-within:text-[var(--mosque)] transition-colors">
          search
        </span>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full pl-12 pr-32 py-4 rounded-xl border-none bg-[var(--card-bg)] text-[var(--foreground)] shadow-soft placeholder-[var(--muted)]/60 focus:ring-2 focus:ring-[var(--mosque)] focus:bg-[var(--card-bg)] transition-all text-lg"
        onChange={(e) => onSearch?.(e.target.value)}
      />

      {/* Search Button */}
      <button className="absolute inset-y-2 right-2 px-6 bg-[var(--mosque)] hover:bg-[var(--mosque)]/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-[var(--mosque)]/20">
        Search
      </button>
    </div>
  );
}