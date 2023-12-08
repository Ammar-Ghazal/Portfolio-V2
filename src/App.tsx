import styles from './App.module.scss';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.stars}>
        <div className={styles.twinkling}></div>
        {/* Other background elements if needed */}
      </div>

      <div className={styles.scrollable}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes or components here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
