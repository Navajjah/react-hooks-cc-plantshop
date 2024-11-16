import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let newData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function addPlant(newPlant) {
    setData([...data, newPlant]);
  }
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList data={newData} />
    </main>
  );
}

export default PlantPage;