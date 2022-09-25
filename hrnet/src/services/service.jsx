/* import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mockedEmployee } from "../data/mockedEmployeeList";
import moment from "moment";


import { POST_EMPLOYEE } from "../store/actions/constant";



const GetEmployees = () => {
  const [tableData, setTableData] = useState([]);

  const dispatch = useDispatch();

  const newEmployeeData = useSelector((state) => state.data.employees); */


  /* const init = async (e) => {
    console.log(e);
    const employeeData = {
      id: e.id,
      firstName: e.firstName,
      lastName: e.lastName,
      dateOfBirth: moment(e.dateOfBirth).format("DD/MM/YYYY"),
      startDate: moment(e.startDate).format("DD/MM/YYYY"),
      department: e.department,
      street: e.street,
      city: e.city,
      state: e.state,
      zipCode: e.zipCode,
    };
    console.log(employeeData);
    dispatch({
      type: POST_EMPLOYEE,
      payload: employeeData,
    });
  }; */

  //useEffect(() => {
    //fetch("../data/mockedEmployeeList.js")
      /*.then(init())*/
      //.then((data) =>
      //setTableData(mockedEmployee)
    //);
  //});

  //setTableData(newEmployeeData);

  
  
  //const [data,setData]=useState([]);
  /* const getData=()=>{
    fetch('../data/mockedEmployeeList.js')
      .then((data) =>
        console.log(data)
    );
  }
  useEffect(()=>{
    getData()
  }, [tableData, setTableData])
} */


  /*   dispatch({
    type: POST_EMPLOYEE,
    payload: tableData,
  });
  
  console.log(tableData)
}; */



//export default GetEmployees;
