import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/EmployeeSlice';

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    age: '',
    position: '',
    department: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    let form = document.getElementById('myForm');
    if(form.checkValidity()){
        dispatch(addEmployee(employee));
        setEmployee({
          name: '',
          email: '',
          age: '',
          position: '',
          department: '',
          mobileNumber: '',
        });
    }else{
        alert('Please fill out all required fields correctly.');
    }
    
  };
  return (
    <>
      <div
        className='modal model-sm fade'
        id='exampleModal'
        tabindex='-1'

        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5 text-dark' id='exampleModalLabel'>
                Add Employee
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body text-light bg-primary'>
              <form  id='myForm' className='p-0' onSubmit={handleSubmit}>
                <div className=''>
                  <label for='name' className='form-label'>
                    *Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={employee.name}
                    required

                  />
                </div>
                <div className=''>
                  <label for='email' className='form-label'>
                    *Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    aria-describedby='emailHelp'
                    onChange={handleChange}
                    value={employee.email}
                    required

                  />
                </div>
                <div className=''>
                  <label for='age' className='form-label'>
                    *Age
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='age'
                    name='age'
                    onChange={handleChange}
                    value={employee.age}
                    required
                  />
                </div>
                <div className=''>
                  <label for='position' className='form-label'>
                    *Position
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='position'
                    name='position'
                    onChange={handleChange}
                    value={employee.position}
                    required

                  />
                </div>
                <div className=''>
                  <label for='department' className='form-label'>
                    *Department
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='department'
                    name='department'
                    onChange={handleChange}
                    value={employee.department}
                    required

                  />
                </div>
                <div className=''>
                  <label for='mobileNumber' className='form-label'>
                    *Mobile Number
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='mobileNumber'
                    name='mobileNumber'
                    onChange={handleChange}
                    value={employee.mobileNumber}
                    required

                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
                <button
                type='submit'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={handleSubmit}
              >
                Add
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
