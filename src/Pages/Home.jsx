import React from "react";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../Features/Products/ProductSlice";
import Hero from "../assets/components/Hero";

const categories = ["All", "Electronics", "Fashion", "Sports", "Home Appliances"];

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <Hero />

      {/* ✅ Category Section */}
      <div className="container mx-auto my-10 px-4">
        {/* ✅ Flex row on desktop, horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto md:overflow-visible md:flex-wrap scrollbar-hide">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => dispatch(setSelectedCategory(cat))}
                className="flex-shrink-0 bg-gray-300 py-2 px-4 rounded-md cursor-pointer text-black active:scale-105 hover:bg-lime-500 hover:text-white transition-all ease-in"
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
