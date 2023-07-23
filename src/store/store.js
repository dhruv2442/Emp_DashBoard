import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './EmployeeSlice';



const store = configureStore({
  reducer: {
    employees: employeeReducer
    // Add other reducers here if needed
  },
});

export default store;
