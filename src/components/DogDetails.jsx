import { useNavigate, useParams } from "react-router-dom";

export default function DogDetails({ selectedDog, onDeleteDog }) {
  const { dogId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-2 w-50">
        <button
          className="w-32 border-2 p-2 font-semibold rounded-md border-green-500 bg-green-300 hover:bg-green-500"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
        <button
          className="w-32 border-2 p-2 font-semibold rounded-md border-red-800 bg-red-400 hover:bg-red-500"
          onClick={() => onDeleteDog(dogId)}
        >
          Delete Dog
        </button>
      </div>
      <div className="w-96 mx-auto">
        <img src={selectedDog} className="object-cover" alt="dog full image" />
      </div>
    </div>
  );
}
