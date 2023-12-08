import styles from './App.module.scss';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.stars}>
        <div className={styles.twinkling}></div>
      </div>

      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
