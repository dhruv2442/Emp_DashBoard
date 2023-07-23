import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'John Doe',
      age: '30',
      position: 'Software Engineer',
      department: 'Engineering',
      
      mobileNumber: '123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: '28',
      position: 'Product Manager',
      department: 'Product',
      mobileNumber: '987-654-3210',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: '35',
      position: 'Sales Manager',
      department: 'Sales',
      mobileNumber: '555-123-4567',
      email: 'michael.johnson@example.com',
    },
    {
      id: 4,
      name: 'Emily Williams',
      age: '26',
      position: 'Graphic Designer',
      department: 'Design',
      mobileNumber: '444-222-1111',
      email: 'emily.williams@example.com',
    },
    {
      id: 5,
      name: 'Robert Brown',
      age: '32',
      position: 'Marketing Specialist',
      department: 'Marketing',
      mobileNumber: '333-999-0000',
      email: 'robert.brown@example.com',
    },
    {
      id: 6,
      name: 'Laura Jones',
      age: '29',
      position: 'HR Manager',
      department: 'Human Resources',
      mobileNumber: '111-777-5555',
      email: 'laura.jones@example.com',
    },
    {
      id: 7,
      name: 'William Lee',
      age: '31',
      position: 'Data Analyst',
      department: 'Analytics',
      mobileNumber: '777-111-3333',
      email: 'william.lee@example.com',
    },
    {
      id: 8,
      name: 'Sophia Wilson',
      age: '27',
      position: 'Content Writer',
      department: 'Content',
      mobileNumber: '888-000-4444',
      email: 'sophia.wilson@example.com',
    },
    {
      id: 9,
      name: 'James Taylor',
      age: '33',
      position: 'Accountant',
      department: 'Finance',
      mobileNumber: '222-444-6666',
      email: 'james.taylor@example.com',
    },
    {
      id: 10,
      name: 'Olivia Anderson',
      age: '25',
      position: 'Customer Support',
      department: 'Support',
      mobileNumber: '999-888-7777',
      email: 'olivia.anderson@example.com',
    },
    {
      id: 11,
      name: 'Liam Martinez',
      age: '34',
      position: 'Project Manager',
      department: 'Project Management',
      mobileNumber: '444-333-2222',
      email: 'liam.martinez@example.com',
    },
    {
      id: 12,
      name: 'Ava Hernandez',
      age: '26',
      position: 'QA Tester',
      department: 'Quality Assurance',
      mobileNumber: '666-777-8888',
      email: 'ava.hernandez@example.com',
    },
    {
      id: 13,
      name: 'Noah Miller',
      age: '30',
      position: 'Business Analyst',
      department: 'Business',
      mobileNumber: '777-666-5555',
      email: 'noah.miller@example.com',
    },
    {
      id: 14,
      name: 'Isabella Gonzales',
      age: '28',
      position: 'Operations Manager',
      department: 'Operations',
      mobileNumber: '666-555-4444',
      email: 'isabella.gonzales@example.com',
    },
    {
      id: 15,
      name: 'Mason Perez',
      age: '29',
      position: 'UX Designer',
      department: 'Design',
      mobileNumber: '444-555-6666',
      email: 'mason.perez@example.com',
    },
    {
      id: 16,
      name: 'Emma Turner',
      age: '31',
      position: 'Frontend Developer',
      department: 'Engineering',
      mobileNumber: '555-666-7777',
      email: 'emma.turner@example.com',
    },
    {
      id: 17,
      name: 'Jackson Scott',
      age: '27',
      position: 'Social Media Manager',
      department: 'Marketing',
      mobileNumber: '777-888-9999',
      email: 'jackson.scott@example.com',
    },
    {
      id: 18,
      name: 'Charlotte Green',
      age: '32',
      position: 'Recruiter',
      department: 'Human Resources',
      mobileNumber: '666-777-8888',
      email: 'charlotte.green@example.com',
    },
    {
      id: 19,
      name: 'Aiden Adams',
      age: '26',
      position: 'Data Scientist',
      department: 'Analytics',
      mobileNumber: '888-999-0000',
      email: 'aiden.adams@example.com',
    },
    {
      id: 20,
      name: 'Avery Hill',
      age: '29',
      position: 'Content Marketing',
      department: 'Content',
      mobileNumber: '111-222-3333',
      email: 'avery.hill@example.com',
    },
    
  ],
  search: '',
  searchterm: '',
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      let length = state.employees.length;
      state.employees.push({ id: length + 1, ...action.payload });
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.searchterm = '';
    },
    setSearchTerm: (state, action) => {
      state.searchterm = action.payload;
    },
  },
});

export const { addEmployee, setSearch, setSearchTerm } = employeeSlice.actions;

export default employeeSlice.reducer;
