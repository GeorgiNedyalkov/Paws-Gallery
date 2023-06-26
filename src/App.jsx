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
    <>
      <header>
        <h1 className="text-3xl font-bold text-center h-16">Dogs Gallery</h1>
        {dogs.map((dogImage) => (
          <div>
            <img src={dogImage} alt="" />
          </div>
        ))}
      </header>
    </>
  );
}

export default App;
