import React from 'react';
import './App.css';
import Home from './components/Home';
import ProductOverview from './components/ProductOverview';
import InventoryTable from './components/InventoryTable';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productOverview" element={<ProductOverview />} />
        <Route path="/inventoryTable" element={<InventoryTable />} />
      </Routes>
    </div>
    );
}

export default App;