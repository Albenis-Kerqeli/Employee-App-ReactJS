import './style.css';
import React, { useState } from 'react';
export default function App() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([
    {
      name: 'Albenis Kerqeli',
      position: 'Software Developer',
      phoneNumber: '+38345909783',
      salary: '450$'
    }
  ]);

  const addEmployee = e => {
    e.preventDefault();
    if (name == '' || position == '' || phoneNumber == '' || salary == '') {
      alert('Fill all the fields');
    } else {
      setEmployees([
        ...employees,
        {
          name: name,
          position: position,
          phoneNumber: phoneNumber,
          salary: salary
        }
      ]);
    }
  };

  return (
    <div className="App">
      <div className="App__row">
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
              placeholder="Employee Position"
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
        <div className="App__table">
          <table>
            <div className="table__head">
              <tr>
                <th>Employee Name</th>
                <th>Employee Position</th>
                <th>Phone Number</th>
                <th>Employee Salary</th>
                <th>Actions</th>
              </tr>
            </div>
            {employees.map(employee => (
              <div className="table__data">
                <tr>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.salary}</td>
                  <td>X</td>
                </tr>
              </div>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
