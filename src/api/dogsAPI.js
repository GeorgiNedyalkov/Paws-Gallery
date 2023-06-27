const apiURL = "https://dog.ceo/api/breeds/image/random/50";

export async function getDogs() {
  const response = await fetch(apiURL);
  const data = await response.json();

  // adding id to a dog url and slicing the "https://images.dog.ceo/breeds/" string
  const dogsWithIds = data.message.map((dog) => {
    return {
      dogId: dog.slice(30),
      dogImage: dog,
    };
  });

  return dogsWithIds;
}
