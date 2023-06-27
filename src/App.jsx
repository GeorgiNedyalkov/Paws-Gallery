import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import DogDetails from "./components/DogDetails";
import Home from "./components/Home";

import { getDogs } from "./api/dogsAPI";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState("");

  const onSelectedDog = (dogImage) => {
    setSelectedDog(dogImage);
  };

  const onDeleteDog = () => {
    const filteredDogs = dogs.filter((dog) => dog !== selectedDog);
    setDogs(filteredDogs);
    navigate("/");
  };

  useEffect(() => {
    getDogs().then(setDogs);
  }, []);

  return (
    <div className="mx-auto w-11/12 lg:w-9/12">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home dogs={dogs} onSelectedDog={onSelectedDog} />}
        />
        <Route
          path="/:dogId/:breed/"
          element={
            <DogDetails
              dogs={dogs}
              selectedDog={selectedDog}
              onDeleteDog={onDeleteDog}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
