import React from 'react';
import { AppContext } from '../Context/AppContext';

const AppForm = () => {
  const {
    emp__name,
    emp__position,
    emp__phoneNumber,
    emp__salary
  } = useContext(AppContext);




const AppForm = () => {
  return (
    <div className="App__form">
      <form onSubmit={addEmployee}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Employee Name"
        />
        <input
          type="text"
          onChange={e => setPosition(e.target.value)}
          placeholder="Employee Positions"
        />
        <input
          type="number"
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="number"
          onChange={e => setSalary(e.target.value)}
          placeholder="Salary"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AppForm;
