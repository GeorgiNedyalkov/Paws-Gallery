import { Link, useParams } from "react-router-dom";

export default function Dog({ dog, onSelectedDog }) {
  const { dogId } = useParams();

  return (
    <div onClick={() => onSelectedDog(dog)} className="w-full h-64">
      <Link to={`/${dogId}`}>
        <img
          src={dog}
          className="object-cover w-full h-full rounded shadow-md hover:scale-110 duration-150 cursor-pointer"
          alt="A dogs image"
        />
      </Link>
    </div>
  );
}
