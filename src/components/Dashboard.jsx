import React from 'react';
import Table from './Table';
import AddEmployee from './AddEmployee';

const Dashboard = () => {
  return (
    <div className='main'>
        <div className='empHeader'>
          <span>Employee Dashboard</span>
          <button className='btn btn-light' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Employee</button>
          <AddEmployee/>
        </div>
        <div className='tableMain'>
          <Table />
        </div>
    </div>
  );
};

export default Dashboard;
