import React from "react";

const Promotional = () => {
  return (
    <div className="w-11/12 mx-auto my-10 bg-green-500 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between text-white">
      {/* Text */}
      <div className="mb-4 md:mb-0 md:mr-6">
        <h2 className="text-3xl font-bold mb-2">Special Holiday Offer! 🎉</h2>
        <p className="text-lg">
          Get 20% off on all indoor plants this season. Create your own green
          oasis today!
        </p>
      </div>
      {/* Button */}
      <a
        href="/plants"
        className="btn bg-white text-green-600 hover:bg-green-100 font-semibold rounded-xl px-6 py-3"
      >
        Shop Now
      </a>
    </div>
  );
};

export default Promotional;
