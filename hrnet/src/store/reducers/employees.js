import { FILTER_EMPLOYEE, POST_EMPLOYEE } from "../actions/constant";
let out = [];
let pl = [];

const employeesReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case POST_EMPLOYEE: {
      const employeesList = state.employees;
      let input = action.payload;
      
      if (Array.isArray(input) === false) {
        pl = [];
        pl.push({ ...action.payload });
        const test = out.concat(pl);
        out = test;
      }else{
        input.forEach((element) =>{
            out.push(element);
        });
      }
      
      return {
        ...state,
        employees: [...out],
      };
    }
/*     case FILTER_EMPLOYEE: {
      console.log(...state.employees.payload)
      return {
        ...state,
        employees: action.payload,
      };
    } */
    default:
      return state;
  }
};

export default employeesReducer;