import { Property } from "@/app/data/mockProperties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, priceType: "sale" | "rent") => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);

    return priceType === "rent" ? `${formatted}` : formatted;
  };

  const badgeColor =
    property.priceType === "rent"
      ? "bg-[var(--mosque)]/90 text-white"
      : "bg-[var(--nordic)]/90 text-white";

  return (
    <article className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer h-full flex flex-col border border-[var(--card-border)]">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={property.imageUrl}
        />

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-[var(--card-bg)]/90 rounded-full hover:bg-[var(--mosque)] hover:text-white transition-colors text-[var(--foreground)]">
          <span className="material-icons text-lg">favorite_border</span>
        </button>

        {/* Badge */}
        <div
          className={`absolute bottom-3 left-3 ${badgeColor} text-xs font-bold px-2 py-1 rounded`}
        >
          {property.priceType === "rent" ? "FOR RENT" : "FOR SALE"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Price */}
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-[var(--foreground)]">
            {formatPrice(property.price, property.priceType)}
            {property.priceType === "rent" && (
              <span className="text-sm font-normal text-[var(--muted)]">
                /mo
              </span>
            )}
          </h3>
        </div>

        {/* Title & Address */}
        <h4 className="text-[var(--foreground)] font-medium truncate mb-1">
          {property.title}
        </h4>
        <p className="text-[var(--muted)] text-xs mb-4">
          {property.address}, {property.city}
        </p>

        {/* Property Features */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-[var(--card-border)]">
          <div className="flex items-center gap-1 text-[var(--muted)] text-xs">
            <span className="material-icons text-sm text-[var(--mosque)]/80">
              king_bed
            </span>
            {property.bedrooms}
          </div>
          <div className="flex items-center gap-1 text-[var(--muted)] text-xs">
            <span className="material-icons text-sm text-[var(--mosque)]/80">
              bathtub
            </span>
            {property.bathrooms}
          </div>
          <div className="flex items-center gap-1 text-[var(--muted)] text-xs">
            <span className="material-icons text-sm text-[var(--mosque)]/80">
              square_foot
            </span>
            {property.area}m²
          </div>
        </div>
      </div>
    </article>
  );
}