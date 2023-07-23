import React from 'react';
import { useSelector } from 'react-redux';

const TableBody = () => {
  const employees = useSelector((state) => state.employees.employees);
  const search = useSelector((state) => state.employees.search);
  const searchTerm = useSelector((state) => state.employees.searchterm);
  const columns = [
    {
      lable: 'id',
      width: '5%',
    },
    {
      lable: 'name',
      width: '20%',
    },
    {
      lable: 'email',
      width: '20%',
    },
    {
      lable: 'age',
      width: '5%',
    },
    {
      lable: 'position',
      width: '20%',
    },
    {
      lable: 'department',
      width: '20%',
    },
    {
      lable:'mobileNumber',
      width:'15%'
    }
  ];
  return (
    <tbody className='tableBody'>

      {/* For showing list based on search parameter */}
      {searchTerm !== '' &&
        employees
          .filter((emp) =>
            emp[search].toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((emp, index) => {
            return (
              <tr key={index}>
                {columns.map((col, index) => {
                  return <td key={index}>{emp[col.lable]}</td>;
                })}
              </tr>
            );
          })}

      {/* For showing full */}
      {searchTerm === '' &&
        employees.map((emp, index) => {
          return (
            <tr key={index}>
              {columns.map((col, index) => {
                return <td key={index}>{emp[col.lable]}</td>;
              })}
            </tr>
          );
        })}

    </tbody>
  );
};

export default TableBody;
