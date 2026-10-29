import React from "react";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../Features/Products/ProductSlice";
import Hero from "../assets/components/Hero";

const categories = ["All", "Electronics", "Fashion", "Sports", "Home Appliances"];

function Home() {
  const dispatch = useDispatch();
  // read-only: used solely to style the selected category chip
  const selectedCategory = useSelector((state) => state.product.selectedCategory);

  return (
    <div>
      <Hero />

      {/* ✅ Category Section */}
      <div className="container mx-auto my-10 px-4">
        {/* ✅ Flex row on desktop, horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto md:overflow-visible md:flex-wrap scrollbar-hide bg-surface-tint rounded-lg shadow-[0_0_0_8px_var(--color-surface-tint)]">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => dispatch(setSelectedCategory(cat))}
                aria-pressed={selectedCategory === cat}
                className={`flex-shrink-0 border py-2 px-4 rounded-md cursor-pointer active:scale-105 focus-visible:-outline-offset-4 transition-all ease-in ${
                  selectedCategory === cat
                    ? "bg-primary border-primary text-on-primary hover:bg-primary-hover focus-visible:outline-on-primary"
                    : "bg-surface border-border text-text hover:bg-primary-soft active:bg-primary-soft-2"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
