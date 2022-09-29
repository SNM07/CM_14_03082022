import { POST_EMPLOYEE } from "../actions/constant";
let outputStorage = [];
let payloadStorage = [];

const employeesReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case POST_EMPLOYEE: {
      let inputStorage = action.payload;
      if (Array.isArray(inputStorage) === false) {
        payloadStorage = [];
        payloadStorage.push({ ...action.payload });
        outputStorage = outputStorage.concat(payloadStorage);
      } else {
        inputStorage.forEach((element) => {
          outputStorage.push(element);
        });
      }
      return {
        ...state,
        employees: [...outputStorage],
      };
    }
    default:
      return state;
  }
};

export default employeesReducer;
