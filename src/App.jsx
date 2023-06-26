import { useEffect, useState } from "react";

const apiURL = "https://dog.ceo/api/breeds/image/random/50";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setDogs(data.message));
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

const DogsList = ({ dogs }) => {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3">
      {dogs.map((dog, idx) => (
        <li key={dog + idx}>
          <Dog dog={dog} />
        </li>
      ))}
    </ul>
  );
};

const Dog = ({ dog }) => {
  return (
    <div className="w-64 h-64">
      <img
        src={dog}
        className="object-cover w-full h-full rounded shadow-md hover:scale-125"
        alt=""
      />
    </div>
  );
};
