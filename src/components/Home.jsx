import Hero from "./Hero";
import DogsList from "./DogsList";

export default function Home({ dogs, onSelectedDog }) {
  return (
    <>
      <Hero />
      <DogsList dogs={dogs} onSelectedDog={onSelectedDog} />
    </>
  );
}
