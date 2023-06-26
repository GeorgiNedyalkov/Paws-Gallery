import Dog from "./Dog.jsx";

export default function DogsList({ dogs, onSelectedDog }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3">
      {dogs.map((dog, idx) => (
        <li key={dog + idx}>
          <Dog dog={dog} onSelectedDog={onSelectedDog} />
        </li>
      ))}
    </ul>
  );
}
