import { useEffect, useState } from "react";

import DogsList from "./components/DogsList";
import { getDogs } from "./api/dogsAPI";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs().then((data) => setDogs(data.message));
  }, []);

  return (
    <div className="mx-auto w-11/12 bg-slate-100">
      <header>
        <h1 className="text-3xl font-bold text-center h-16">Dogs Gallery</h1>
      </header>
      <main>
        <DogsList dogs={dogs} />
      </main>
    </div>
  );
}

export default App;
