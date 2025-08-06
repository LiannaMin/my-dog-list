import React, { useEffect, useState } from 'react';
import styles from './DogViewer.module.css';
import { useBreedImages, useRandomImage } from '../../hooks/useDogs';

type Props = {
  breed: string | null;
};

const DogViewer = ({ breed }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { data: breedImages } = useBreedImages(breed);
  const { data: randomImage } = useRandomImage();

  useEffect(() => {
    setImageIndex(0);
  }, [breed]);

  const nextImage = () => {
    if (!breedImages) return;
    setImageIndex((prev) => (prev + 1) % breedImages.message.length);
  };

  const imageUrl = breed
    ? breedImages?.message[imageIndex] ?? ''
    : randomImage?.message;

  return (
    <div className={styles.viewerContainer} onClick={nextImage}>
      {breed && <h2>{breed}</h2>}
      <img src={imageUrl} alt={breed ?? 'Random Dog'} className={styles.image} />
    </div>
  );
};

export default DogViewer;