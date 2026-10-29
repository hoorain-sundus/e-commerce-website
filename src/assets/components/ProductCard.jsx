import { Link } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group focus-visible:outline-none">
      <div className="bg-surface-tint border border-border rounded-xl shadow-card cursor-pointer hover:shadow-card-hover hover:border-primary-soft-2 group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-focus transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {/* Responsive Image */}
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto pt-4 w-32 h-32 sm:w-40 sm:h-40 object-contain"
        />

        {/* Card Content */}
        <div className="bg-surface rounded-b-xl p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-text my-3 sm:my-4 text-center sm:text-left">
            {product.title.length > 15
              ? product.title.substring(0, 15) + "..."
              : product.title}
          </h2>

          <p className="text-xs sm:text-sm text-text-muted border-b border-border pb-3 sm:pb-4 text-center sm:text-left">
            {product.description.length > 70
              ? product.description.substring(0, 70) + "..."
              : product.description}
          </p>

          {/* Price + View Details Row */}
          <div className="flex justify-between mt-3 sm:mt-4 items-center">
            <p className="text-lg sm:text-xl font-semibold text-primary">
              ${product.price}
            </p>
            <p className="text-xs sm:text-sm text-primary font-semibold hover:underline hover:text-primary-hover group-hover:underline">
              View Details
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
