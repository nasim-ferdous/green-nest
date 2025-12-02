import React, { useEffect, useState } from "react";

const PlantCare = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("../plantCare.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <div className="bg-green-50 ">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-800">
         Plant Care Tips 
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-6 px-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center"
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCare;
