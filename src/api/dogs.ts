export const fetchBreeds = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  return res.json();
};

export const fetchRandomImage = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  return res.json();
};

export const fetchBreedImages = async (breed: string) => {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  return res.json();
};