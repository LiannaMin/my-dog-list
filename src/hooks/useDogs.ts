import { useQuery } from '@tanstack/react-query';
import { fetchBreeds, fetchBreedImages, fetchRandomImage } from '../api/dogs';

export const useBreeds = () => {
  return useQuery({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });
};

export const useRandomImage = () => {
  return useQuery({
    queryKey: ['random-image'],
    queryFn: fetchRandomImage,
  });
};

export const useBreedImages = (breed: string | null) => {
  return useQuery({
    queryKey: ['breed-images', breed],
    queryFn: () => fetchBreedImages(breed!),
    enabled: !!breed,
  });
};