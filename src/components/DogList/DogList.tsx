import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import styles from './DogList.module.css';
import { useBreeds } from '../../hooks/useDogs';

type Props = {
  selectedBreed: string | null;
  onSelectBreed: (breed: string) => void;
};

const DogList = ({ selectedBreed, onSelectBreed }: Props) => {
  const { data, isLoading } = useBreeds();
  const breeds = data ? Object.keys(data.message) : [];

  if (isLoading) return <div>Loading breeds...</div>;

  return (
    <div className={styles.listContainer}>
      <Virtuoso
        totalCount={breeds.length}
        itemContent={(index) => {
          const breed = breeds[index];
          const isSelected = breed === selectedBreed;
          return (
            <div
              key={breed}
              className={`${styles.item} ${index % 2 === 0 ? styles.even : styles.odd} ${
                isSelected ? styles.selected : ''
              }`}
              onClick={() => onSelectBreed(breed)}
            >
              {breed}
            </div>
          );
        }}
      />
    </div>
  );
};

export default DogList;