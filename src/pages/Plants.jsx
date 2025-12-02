import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../components/plantCard";

const Plants = () => {
  const plants = useLoaderData();
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [sortOrder, setSortOrder] = useState(""); 
  const [categoryFilter, setCategoryFilter] = useState("All");

  
  const categories = ["All", ...new Set(plants.map((p) => p.category))];

  useEffect(() => {
    let updatedPlants = [...plants];

    // Filter by category
    if (categoryFilter !== "All") {
      updatedPlants = updatedPlants.filter(
        (plant) => plant.category === categoryFilter
      );
    }

  
    if (sortOrder === "asc") {
      updatedPlants.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedPlants.sort((a, b) => b.price - a.price);
    }

    setFilteredPlants(updatedPlants);
  }, [sortOrder, categoryFilter, plants]);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center text-green-500 font-bold mt-5">
        All Our Plants
      </h1>

      {/* Filters & Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 mb-6">
        {/* Category Filter */}
        <div>
          <label className="mr-2 font-semibold text-green-700">Category:</label>
          <select
            className="border border-green-300 rounded-lg p-2"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mr-2 font-semibold text-green-700">
            Sort by Price:
          </label>
          <select
            className="border border-green-300 rounded-lg p-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
