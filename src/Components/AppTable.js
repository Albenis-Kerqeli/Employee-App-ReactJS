import React from 'react';
import { AppContext } from '../Context/AppContext';

const AppTable = () => {
  const { emp__list, emp__del } = React.useContext(AppContext);
  const [employees, setEmployees] = emp__list;
  const { deleteEmployee } = emp__del;

  return (
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
              <td onClick={() => deleteEmployee(employee.id)}>X</td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

export default AppTable;
