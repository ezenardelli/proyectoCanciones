import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/canciones" element={<SongList />} />
        <Route path="/canciones/:id" element={<SongDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
