const apiURL = "https://dog.ceo/api/breeds/image/random/50";

export async function getDogs() {
  const response = await fetch(apiURL);
  return response.json();
}
