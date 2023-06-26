import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import DogDetails from "./components/DogDetails";
import Home from "./components/Home";

import { getDogs } from "./api/dogsAPI";

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
    getDogs().then((data) => setDogs(data.message));
  }, []);

  return (
    <div className="mx-auto w-11/12 lg:w-9/12">
      <header>
        <nav className="h-16 flex items-center justify-center bg-green-300 mb-5 rounded-b-lg">
          <h1 className="text-3xl font-bold align-bottom">Paws Gallery</h1>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home dogs={dogs} onSelectedDog={onSelectedDog} />}
        />
        <Route
          path="/:dogId"
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
