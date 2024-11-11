import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  // const [searchTerm, setSearchTerm] = useState([""])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Fetched plants:", data)
      setPlants(data)
  })
  .catch((err) => console.error("Error fetching plants:", err))
  }, [])


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
