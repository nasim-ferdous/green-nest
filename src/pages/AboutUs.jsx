import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-green-100 min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          Welcome to GreenNest 🌿
        </h1>
        <p className="text-lg text-gray-700">
          Nurturing greenery, one plant at a time. Explore, grow, and thrive
          with our indoor plants.
        </p>
      </div>

      {/* Our Mission */}
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At GreenNest, our mission is to bring the calming beauty of indoor
          plants into every home. We aim to provide high-quality plants, expert
          guidance, and a seamless experience for all plant lovers, whether
          beginners or experienced green thumbs.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GreenNest started with a simple idea: to make homes healthier,
          greener, and happier. From humble beginnings as a small urban nursery,
          we now bring a curated selection of indoor plants to homes across the
          city, accompanied by expert care advice.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every plant in our collection is carefully selected for its quality,
          ease of care, and ability to transform indoor spaces into serene,
          natural environments.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Founder */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src="https://i.ibb.co/sYKsN4x/fb-pic.jpg"
              alt="Founder"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-1">
              Nasim Ferdous Sohan
            </h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1682129383030-899300f740c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-1">
              Ayesha Rahman
            </h3>
            <p className="text-gray-600">Plant Care Expert</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047220821-2bb8e01fc587?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 mb-1">
              Rahim Uddin
            </h3>
            <p className="text-gray-600">Greenhouse Manager</p>
          </div>
        </div>
      </section>

      {/* Why Choose GreenNest */}
      <section className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Why Choose GreenNest?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Curated collection of high-quality indoor plants.</li>
          <li>Expert guidance on plant care and maintenance.</li>
          <li>Fast, safe, and eco-friendly delivery.</li>
          <li>Passionate team dedicated to creating greener homes.</li>
          <li>
            Exclusive access to tips, tricks, and workshops for plant
            enthusiasts.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Ready to bring greenery into your home?
        </h2>
        <p className="text-gray-700 mb-6">
          Explore our plants, book a consultation, or contact us for
          personalized guidance.
        </p>
        <a
          href="/plants"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
        >
          Explore Plants
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
