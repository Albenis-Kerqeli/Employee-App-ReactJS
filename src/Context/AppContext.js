import React, { useState, createContext, useEffect, useContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([{}]);

  useEffect(() => {
    const getEmployee = JSON.parse(localStorage.getItem('employee'));
    if (getEmployee) {
      setEmployees(getEmployee);
    }
  });
  useEffect(() => {
    localStorage.setItem('employes', JSON.stringify(employees));
  }, [employees]);

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

  const deleteEmployee = id => {
    const removeEmployee = [...employees].filter(
      employee => employee.id !== id
    );
  };

  return (
    <AppContext.Provider
      value={{
        emp__list: [employees, setEmployees],
        emp__name: [name, setName],
        emp__position: [position, setPosition],
        emp__phoneNumber: [phoneNumber, setPhoneNumber],
        emp__salary: [salary, setSalary],
        emp__add: { addEmployee },
        emp__del: { deleteEmployee }
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
