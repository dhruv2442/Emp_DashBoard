import React from 'react';
import { useSelector } from 'react-redux';

const TableFooter = () => {
  const employees = useSelector((state) => state.employees.employees);
  const search = useSelector((state) => state.employees.search);
  const searchTerm = useSelector((state) => state.employees.searchterm);
  return (
    <tfoot>
      <tr className='tfooter'>
        <td colSpan={3}>
          Total Results:
          {/* for showing search based list */}
          {searchTerm !== '' &&
            employees.filter((emp) =>
              emp[search].toLowerCase().includes(searchTerm.toLowerCase())
            ).length +
              ' (' +
              search +
              ' = ' +
              searchTerm +
              ')'}
          {/* For showing full list */}
          {searchTerm === '' && employees.length}
        </td>
        <td colSpan={4}>
        <a href="https://github.com/dhruv2442/Emp_DashBoard"><i className='fa-brands fa-github mx-2'></i></a>
          Employee Dashboard with search functionality for each column
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
