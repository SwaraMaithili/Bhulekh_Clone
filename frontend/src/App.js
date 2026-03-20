// frontend/src/App.js
import React from 'react';
import MapSidebar from './components/MapSidebar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <MapSidebar />
      <SearchForm />
    </div>
  );
}

export default App;