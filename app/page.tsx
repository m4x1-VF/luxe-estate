import Navbar from "./components/ui/Navbar";
import SearchBar from "./components/ui/SearchBar";
import FilterChips from "./components/ui/FilterChips";
import FeaturedGrid from "./components/ui/FeaturedGrid";
import PropertyGrid from "./components/ui/PropertyGrid";
import { mockProperties, featuredProperties } from "./data/mockProperties";

const categories = ["All", "House", "Apartment", "Villa", "Penthouse"];

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] leading-tight">
              Find your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">sanctuary</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--mosque)]/20 -rotate-1 z-0"></span>
              </span>
              .
            </h1>

            {/* Search Bar */}
            <SearchBar />

            {/* Filter Chips */}
            <FilterChips categories={categories} />
          </div>
        </section>

        {/* Featured Collections */}
        <FeaturedGrid
          properties={featuredProperties}
          title="Featured Collections"
          subtitle="Curated properties for the discerning eye."
        />

        {/* New in Market */}
        <PropertyGrid
          properties={mockProperties}
          title="New in Market"
          subtitle="Fresh opportunities added this week."
          showFilters={true}
        />

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--mosque)] hover:text-[var(--mosque)] text-[var(--foreground)] font-medium rounded-lg transition-all hover:shadow-md">
            Load more properties
          </button>
        </div>
      </main>
    </div>
  );
}