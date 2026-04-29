import { Property } from "@/app/data/mockProperties";
import FeaturedCard from "./FeaturedCard";

interface FeaturedGridProps {
  properties: Property[];
  title: string;
  subtitle: string;
}

export default function FeaturedGrid({
  properties,
  title,
  subtitle,
}: FeaturedGridProps) {
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
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-[var(--mosque)] hover:opacity-70 transition-opacity"
        >
          View all
          <span className="material-icons text-sm">arrow_forward</span>
        </a>
      </div>

      {/* Featured Grid - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {properties.map((property) => (
          <FeaturedCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}