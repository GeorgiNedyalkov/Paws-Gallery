import DogImage from "./DogImage.jsx";

export default function DogsList({ dogs, onSelectedDog }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3">
      {dogs.map((dog) => (
        <li key={dog.dogId}>
          <DogImage dog={dog} onSelectedDog={onSelectedDog} />
        </li>
      ))}
    </ul>
  );
}
