import React from "react";
import Slider from "../components/Slider";
import { Link, useLoaderData } from "react-router";
import PlantCard from "../components/plantCard";
import PlantCare from "../components/PlantCare";
import GreenExpert from "../components/GreenExpert";
import Promotional from "../components/Promotional";

const Home = () => {
  const plants = useLoaderData();
  const topRatedPlants = plants.filter((plant) => plant.rating > 4.7);
  const plantOfTheWeek = plants.find((plant) => plant.rating > 4.8);

  return (
    <div className="my-10">
      <Slider></Slider>
      <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-12 gap-6 ">
        {/* left */}
        <div className="left-side col-span-3 md:sticky top-0 h-fit">
          <PlantCare></PlantCare>
        </div>
        {/* middle */}
        <div className="card-section bg-green-50 col-span-6">
          <h1 className="font-bold text-2xl text-center text-green-800 mb-3">
            Our Top Rated plants
          </h1>
          <div className="space-y-4">
            {topRatedPlants.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant}></PlantCard>
            ))}
          </div>
          <div className="flex justify-center  mt-5">
            <Link
              to={"/plants"}
              className="btn w-full rounded-xl text-white bg-green-500 hover:bg-green-600"
            >
              See All Our PLants
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="left-side col-span-3 md:sticky top-0 h-fit">
          <GreenExpert></GreenExpert>
        </div>
      </div>
      {/* promotional */}
      <Promotional></Promotional>
      {/* plan of the week */}
      <div>
        <div className="bg-green-100 text-green-700 py-12 px-6 md:px-16 text-center border-t border-green-100">
          <h2 className="text-3xl font-bold mb-6"> Plant of the Week</h2>

          <div className="max-w-xl mx-auto bg-green-50 rounded-2xl shadow-sm p-6">
            <img
              src={plantOfTheWeek.image}
              alt={plantOfTheWeek.name}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl text-green-800 font-bold mb-2">
              {plantOfTheWeek.plantName}
            </h3>
            <p className="text-green-600 text-sm">
              {plantOfTheWeek.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
