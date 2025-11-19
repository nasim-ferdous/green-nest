import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { id } = useParams();
  const plants = useLoaderData();
  const detailPlant = plants.find((plant) => plant.plantId == id);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success("Consultation booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="bg-green-50 min-h-screen py-10 px-6 flex flex-col items-center">
      {/* Plant Details */}
      <div className="max-w-11/12 bg-white shadow-md rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <img
          src={detailPlant.image}
          alt={detailPlant.plantName}
          className="w-full h-96 object-cover rounded-xl"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            {detailPlant.plantName}
          </h2>
          <p className="text-gray-600 mb-4">{detailPlant.description}</p>

          <p className="text-lg text-green-700 font-semibold mb-1">
            Category:{" "}
            <span className="text-gray-700">{detailPlant.category}</span>
          </p>
          <p className="text-lg text-green-700 font-semibold mb-1">
            Care Level:{" "}
            <span className="text-gray-700">{detailPlant.careLevel}</span>
          </p>
          <p className="text-lg text-green-700 font-semibold mb-1">
            Provider:{" "}
            <span className="text-gray-700">{detailPlant.providerName}</span>
          </p>

          <div className="flex justify-between items-center mt-4 mb-6">
            <span className="text-2xl font-bold text-green-600">
              ৳ {detailPlant.price}
            </span>
            <span className="text-yellow-500 font-medium">
              ⭐ {detailPlant.rating}
            </span>
          </div>

          <p className="text-gray-500">
            Available Stock: {detailPlant.availableStock}
          </p>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="max-w-md w-full bg-white mt-10 p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">
          Book Consultation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
