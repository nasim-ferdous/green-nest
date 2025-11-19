import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, image, price, rating, providerName } = plant;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <img
        src={image}
        alt={plantName}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 ">{plantName}</h3>
        <p className="text-sm text-gray-500 mb-2">By {providerName}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-green-600 font-bold text-lg">৳ {price}</span>
          <span className="text-yellow-500 font-medium">⭐ {rating}</span>
        </div>

        <Link
          to={`/plantdetail/${plantId}`}
          className=" btn w-full bg-green-500 hover:bg-green-600 text-white font-medium p-2 rounded-lg transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
