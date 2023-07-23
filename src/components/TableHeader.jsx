import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setSearchTerm } from '../store/EmployeeSlice';

const TableHeader = () => {
  const columns = [
    {
      title:'Id',
      lable: 'id',
      width: '5%',
    },
    {
      title:'Name',
      lable: 'name',
      width: '10%',
    },
    {
      title:'Email',
      lable: 'email',
      width: '20%',
    },
    {
      title:'Age',
      lable: 'age',
      width: '10%',
    },
    {
      title:'Position',
      lable: 'position',
      width: '20%',
    },
    {
      title:'Department',
      lable: 'department',
      width: '20%',
    },
    {
      title:'Mobile Number',
      lable:'mobileNumber',
      width:'15%'
    }
  ];
  return (
    <thead className='tableHeader'>
      <tr>
        {columns.map((col, index) => {
          return (
            <SingleColumn
              key={index}
              name={col.lable}
              title={col.title}
              customwidth={col.width}
            />
          );
        })}
      </tr>
    </thead>
  );
};

const SingleColumn = ({ name,title, customwidth }) => {
  const search = useSelector((state) => state.employees.search);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <td style={{ width: customwidth }}>

      {/* For showing input box */}
      {search === name && (
        <div>
          <input
            type='text'
            placeholder={`Enter ${title}`}
            autoFocus
            onChange={handleChange}
          />
          <span onClick={() => dispatch(setSearch(''))}>
            <i class='fa-regular fa-circle-xmark'></i>
          </span>
        </div>
      )}

      {/* For showing regular column name */}
      {search !== name && (
        <div>
          <h4>{title}</h4>
          <span
            onClick={() => dispatch(setSearch(name))}
            title={`Enter ${name}`}
          >
            {name !== 'id' && <i className='fa-solid fa-search'></i>}
          </span>
        </div>
      )}

    </td>
  );
};

export default TableHeader;
