import { useNavigate } from "react-router-dom";

export default function DogDetails({ selectedDog, onDeleteDog }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-around md:items-start md:justify-start lg:items-start lg:justify-start gap-2 w-50 mb-4">
        <button
          className="w-32 border-2 p-2 font-semibold rounded-md border-green-500 bg-green-300 hover:bg-green-500"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
        <button
          className="w-32 border-2 p-2 font-semibold rounded-md border-red-800 bg-red-400 hover:bg-red-500"
          onClick={() => onDeleteDog(selectedDog.dogId)}
        >
          Delete Dog
        </button>
      </div>
      <div className="w-full lg:w-96 max-w-96 mx-auto">
        <img
          src={selectedDog.dogImage}
          className="object-cover"
          alt="dog full image"
        />
      </div>
    </div>
  );
}
