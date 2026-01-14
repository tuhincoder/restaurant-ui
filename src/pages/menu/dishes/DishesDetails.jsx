import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiStar, FiShoppingBag } from "react-icons/fi";
import Loading from "@/components/loader/Loading";

// ডাটা ফেচিং ফাংশন (আপনার API থাকলে সেখানে কল করবেন)
const fetchPizzaDetails = async (id) => {
  // এখানে আপনার দেওয়া আগের ডাটা অ্যারেটি থাকবে
  const res = await fetch("/pizzaData.json");
  const data = await res.json();
  return data.find((pizza) => pizza.id === parseInt(id));
};

const DishesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: pizza,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pizza", id],
    queryFn: () => fetchPizzaDetails(id),
  });

  if (isLoading) return <Loading />;
  if (isError || !pizza)
    return (
      <div className="h-screen flex justify-center items-center">
        Pizza not found!
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to Menu
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Pizza Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={pizza.image}
            alt={pizza.title}
            className="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white"
          />
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            ${pizza.price}
          </div>
        </motion.div>

        {/* Right Side: Details Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">
            {pizza.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 italic">
            {pizza.title}
          </h1>

          <div className="flex items-center space-x-4 mb-6 text-gray-600">
            <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-md text-yellow-700">
              <FiStar className="mr-1 fill-current" /> {pizza.rating}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" /> 20-30 min
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {pizza.longDescription}
          </p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-3">Main Ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {pizza.ingredients.map((item, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all"
            >
              <FiShoppingBag className="text-xl" />
              <span>Add to Cart - ${pizza.price}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DishesDetails;
