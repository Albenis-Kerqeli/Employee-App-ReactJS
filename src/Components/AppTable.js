import React from 'react';
import { AppContext } from '../Context/AppContext';

const AppTable = () => {
  const { emp__list, emp__del } = React.useContext(AppContext);
  const [employees, setEmployees] = emp__list;
  const { deleteEmployee } = emp__del;

  const calc__Salary = employees.reduce((acc, current) => {
    return acc + parseInt(current.salary);
  }, 0);
  const calc__Age = employees.reduce((current, employer) => {
    return current + parseInt(employer.age) / employees.length;
  }, 0);
  console.log(employees.length);

  return employees != '' ? (
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
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td onClick={() => deleteEmployee(employee.id)}>X</td>
            </tr>
          </div>
        ))}

        <div className="table__data">
          <tr>
            <td>Total Employers : {employees.length}</td>
            <td>Average Employers Age : {calc__Age}</td>
            <td>Total Salary : {calc__Salary}</td>
          </tr>
        </div>
      </table>
    </div>
  ) : (
    ''
  );
};

export default AppTable;
