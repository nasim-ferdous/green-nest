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
    <div className="bg-green-50 max-w-11/12 mx-auto min-h-screen py-10 px-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        {detailPlant.plantName} – Full Plant Guide 🌿
      </h1>

      {/* Main Details */}
      <div className=" bg-white shadow-md rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Image */}
        <img
          src={detailPlant.image}
          alt={detailPlant.plantName}
          className="w-full h-96 object-cover rounded-xl"
        />

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {detailPlant.description}
          </p>

          {/* Main Properties */}
          <div className="space-y-2">
            <Property label="Category" value={detailPlant.category} />
            <Property label="Care Level" value={detailPlant.careLevel} />
            <Property label="Provider" value={detailPlant.providerName} />
            <Property label="Sunlight" value={detailPlant.sunlight} />
            <Property label="Watering" value={detailPlant.watering} />
            <Property label="Lifespan" value={detailPlant.lifespan} />
            <Property label="Origin" value={detailPlant.origin} />
            <Property label="Toxicity" value={detailPlant.toxicity} />
            <Property label="Plant Size" value={detailPlant.size} />
            <Property
              label="Blooming Season"
              value={detailPlant.bloomingSeason}
            />
            <Property label="Soil Type" value={detailPlant.soilType} />
          </div>

          {/* Price & Rating */}
          <div className="flex justify-between items-center mt-4 mb-6">
            <span className="text-3xl font-bold text-green-600">
              ৳ {detailPlant.price}
            </span>
            <span className="text-yellow-500 font-semibold text-xl">
              ⭐ {detailPlant.rating}
            </span>
          </div>

          <p className="text-gray-500 mb-4">
            Available Stock: {detailPlant.availableStock}
          </p>
        </div>
      </div>

      {/* Plant Benefits */}
      <Section title="🌱 Plant Benefits">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Improves indoor air quality naturally</li>
          <li>Reduces stress and boosts mood</li>
          <li>Provides a refreshing and calming environment</li>
          <li>Perfect for modern home & office decoration</li>
          <li>Low maintenance; suitable for beginners</li>
        </ul>
      </Section>

      {/* Care Guide */}
      <Section title="🧪 Complete Care Guide">
        <GuideItem
          title="💧 Watering"
          text="Water only when the top soil is dry. Avoid over-watering."
        />
        <GuideItem
          title="🌞 Sunlight"
          text="Prefers bright indirect light. Keep away from harsh direct sunlight."
        />
        <GuideItem
          title="🌡 Temperature"
          text="Ideal temperature: 18–28°C. Avoid extreme cold."
        />
        <GuideItem
          title="🌱 Soil Requirements"
          text="Use well-draining potting mix with organic matter."
        />
        <GuideItem
          title="🍃 Fertilizer"
          text="Feed once every 30 days with mild liquid fertilizer."
        />
      </Section>

      {/* Scientific Info */}
      <Section title="🔬 Scientific Information">
        <p className="text-gray-700 leading-relaxed">
          Scientific research shows that indoor plants help in lowering CO₂
          levels, stabilizing humidity, and reducing airborne dust. Many plants
          like {detailPlant.plantName} are known to remove toxins such as
          benzene, xylene, and formaldehyde.
        </p>
      </Section>

      {/* Growing Tips */}
      <Section title="🌿 Growth Tips for Beginners">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Rotate the pot weekly for even growth.</li>
          <li>Use a pot with drainage holes.</li>
          <li>Clean leaves once a month for better photosynthesis.</li>
          <li>Repot every 12–18 months.</li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section title="❓ Frequently Asked Questions">
        <FAQ
          q="Is this plant good for beginners?"
          a="Yes, it's very beginner-friendly and easy to maintain."
        />
        <FAQ
          q="How often should I water it?"
          a="Water once the top soil feels dry."
        />
        <FAQ
          q="Can this be kept in bedrooms?"
          a="Absolutely! It improves air quality and reduces toxins."
        />
      </Section>

      {/* Customer Review Section */}
      <Section title="⭐ Customer Reviews">
        <p className="text-gray-600 text-sm">Review the PLant</p>
        <div className="bg-white w-full p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-green-700">
            Nasim Ferdous
          </h3>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-700 mt-2">
            Great plant! Arrived healthy and beautiful.
          </p>
        </div>
      </Section>

      {/* Consultation Form  */}
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

/* Reusable Components */
const Property = ({ label, value }) =>
  value ? (
    <p className="text-lg text-green-700 font-semibold">
      {label}: <span className="text-gray-700">{value}</span>
    </p>
  ) : null;

const Section = ({ title, children }) => (
  <div className="max-w-6xl bg-white shadow border-l-4 border-green-500 mt-10 p-6 rounded-xl">
    <h2 className="text-2xl font-bold text-green-700 mb-3">{title}</h2>
    {children}
  </div>
);

const GuideItem = ({ title, text }) => (
  <p className="text-gray-700 mb-2">
    <span className="font-semibold text-green-700">{title}: </span>
    {text}
  </p>
);

const FAQ = ({ q, a }) => (
  <div className="mb-3">
    <p className="font-semibold text-green-700">Q: {q}</p>
    <p className="text-gray-700 ml-3">• {a}</p>
  </div>
);

export default PlantDetails;
