import { Link } from "react-router-dom";

export default function DogImage({ dog, onSelectedDog }) {
  return (
    <div onClick={() => onSelectedDog(dog)} className="w-full h-64">
      <Link to={`/${dog.dogId}`}>
        <img
          src={dog.dogImage}
          className="object-cover w-full h-full rounded shadow-md hover:scale-110 duration-150 cursor-pointer"
          alt="A dogs image"
        />
      </Link>
    </div>
  );
}
