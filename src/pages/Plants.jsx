import React from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../components/plantCard";

const Plants = () => {
  const plants = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center text-green-500 font-bold mt-5">
        All Our PLants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {plants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Plants;
