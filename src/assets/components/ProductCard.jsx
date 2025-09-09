import { Link } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer bg-gray-50 hover:shadow-xl transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {/* Responsive Image */}
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto pt-4 w-32 h-32 sm:w-40 sm:h-40 object-contain"
        />

        {/* Card Content */}
        <div className="bg-gray-50 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold my-3 sm:my-4 text-center sm:text-left">
            {product.title.length > 15
              ? product.title.substring(0, 15) + "..."
              : product.title}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-500 border-b pb-3 sm:pb-4 text-center sm:text-left">
            {product.description.length > 70
              ? product.description.substring(0, 70) + "..."
              : product.description}
          </p>

          {/* Price + View Details Row */}
          <div className="flex justify-between mt-3 sm:mt-4 items-center">
            <p className="text-lg sm:text-xl font-semibold text-lime-500">
              ${product.price}
            </p>
            <p className="text-xs sm:text-sm text-lime-700 font-semibold hover:underline">
              View Details
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
