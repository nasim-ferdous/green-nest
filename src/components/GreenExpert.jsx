import React, { useEffect, useState } from "react";

const GreenExpert = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("../greenExpert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <div className=" bg-green-50">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
        Meet Our <br /> Green Experts
      </h2>

      <div className="max-w-6xl mx-auto space-y-3 grid grid-cols-1  gap-8 px-4">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all text-center overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">
                {expert.name}
              </h3>
              <p className="text-gray-600 text-sm">{expert.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExpert;
