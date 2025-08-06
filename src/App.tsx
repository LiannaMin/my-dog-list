import React, { useState } from 'react';
import styles from './App.module.css';
import DogList from './components/DogList/DogList';
import DogViewer from './components/DogViewer/DogViewer';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <DogList selectedBreed={selectedBreed} onSelectBreed={setSelectedBreed} />
      <DogViewer breed={selectedBreed} />
    </div>
  );
};

export default App;