import { Property } from "@/app/data/mockProperties";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  title: string;
  subtitle: string;
  showFilters?: boolean;
  columns?: "sm" | "md" | "lg" | "xl";
}

export default function PropertyGrid({
  properties,
  title,
  subtitle,
  showFilters = false,
  columns = "md",
}: PropertyGridProps) {
  const gridCols = {
    sm: "grid-cols-1 sm:grid-cols-2",
    md: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    lg: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    xl: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-[var(--foreground)]">
            {title}
          </h2>
          <p className="text-[var(--muted)] mt-1 text-sm">{subtitle}</p>
        </div>
        {showFilters && (
          <div className="hidden md:flex bg-[var(--card-bg)] p-1 rounded-lg border border-[var(--card-border)]">
            <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-[var(--nordic)] text-white shadow-sm">
              All
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]">
              Buy
            </button>
            <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]">
              Rent
            </button>
          </div>
        )}
      </div>

      {/* Property Grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}