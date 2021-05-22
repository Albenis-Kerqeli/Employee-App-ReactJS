import './style.css';
import React, { useState } from 'react';
import AppForm from './Components/AppForm';
import AppTable from './Components/AppTable';

export default function App() {
  return (
    <div className="App">
      <div className="App__text">
        <h1>Employee Management System</h1>
      </div>
      <div className="App__row" />
      <AppForm />
      <AppTable />
    </div>
  );
}
