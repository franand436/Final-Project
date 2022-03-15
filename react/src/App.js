import React from 'react';
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import ProductOverview from './components/ProductOverview';
import InventoryTable from './components/InventoryTable';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
    return (
        <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productOverview" element={<ProductOverview />} />
        <Route path="/inventoryTable" element={<InventoryTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    );
}

export default App;