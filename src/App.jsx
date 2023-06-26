import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import DogsList from "./components/DogsList";
import DogDetails from "./components/DogDetails";
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
    <div className="mx-auto w-11/12 bg-slate-100">
      <header>
        <h1 className="text-3xl font-bold text-center h-16">Dogs Gallery</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={<DogsList dogs={dogs} onSelectedDog={onSelectedDog} />}
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
