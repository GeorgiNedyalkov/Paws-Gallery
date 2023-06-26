import { useNavigate, useParams } from "react-router-dom";

export default function DogDetails({ selectedDog, onDeleteDog }) {
  const { dogId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dog</h2>
      <button onClick={() => navigate("/")}>Go Back</button>
      <div className="w-6/12 h-6/12 mx-auto ">
        <img src={selectedDog} className="w-full h-full object-cover" alt="" />
      </div>
      <button onClick={() => onDeleteDog(dogId)}>Delete Dog</button>
    </div>
  );
}
