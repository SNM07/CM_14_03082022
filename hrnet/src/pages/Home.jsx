import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//import Select from 'react-select';
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "../data/statesList";
import { departments } from "../data/departmentsList";

import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";


import { POST_EMPLOYEE } from "../store/actions/constant";

import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import DatePicker from "@mui/lab/DatePicker";

/* import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; */

//import Header from "./Header";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  dateOfBirth: yup
    .string()
    .nullable()
    .test("dateOfBirth", "You must be 18 years or older", function (value) {
      return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
    })
    .required("Please enter your age"),
  startDate: yup.string().nullable().required("Please enter your start date"),
  department: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipCode: yup.number(),
});

/* schema.validate(data, { abortEarly: false }).then(function() {
  // Success
}).catch(function (err) {
  err.inner.forEach(e => {
      console.log(e.message, e.path));
  }); */

export default function Home(props) {
  /*  const { control, register, handleSubmit,     formState: { errors }
} = useForm(); */

  const [data, setData] = useState("");


  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


 /*  const submitForm = (data) => {
    console.log(data); //, JSON.stringify(data));
    
    dispatch({
      type: POST_EMPLOYEE,
      payload: data
  });
  }; */
  
  //const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  let newId = Date.now();

  const onSubmit = async e => {
    console.log(e)
    const employeeData = {
      id: newId,
        firstName: e.firstName,
        lastName: e.lastName,
        dateOfBirth: moment(e.dateOfBirth).format('DD/MM/YYYY'),
        startDate: moment(e.startDate).format('DD/MM/YYYY'),
        department: e.department,
        street: e.street,
        city: e.city,
        state: e.state,
        zipCode: e.zipCode
    };
console.log(employeeData)
    dispatch({
        type: POST_EMPLOYEE,
        payload: employeeData
    });
} 


  const employeeForLocalStorage = useSelector(state => state.data.employees);
  localStorage.setItem('employees', JSON.stringify(employeeForLocalStorage));

  console.log(employeeForLocalStorage)
  
  const [reqDate, setreqDate] = useState(new Date());

  const [value, setValue] = useState(null);

  //const selectvalue = "-- Select state --";


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        


          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="firstName"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="filled"
                    label="firstName"
                    {...register("firstName")}
                    error={!!errors?.firstName}
                    helperText={errors.firstName && errors.firstName.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="lastName"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="filled"
                    label="lastName"
                    {...register("lastName")}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Container maxWidth="lg">
                <Box>
                  <Controller
                    name="dateOfBirth"
                    control={control}
                    defaultValue={null}
                    render={({
                      field: { onChange, value },
                      fieldState: { error, invalid },
                    }) => (
                      <DatePicker
                        label="Date of birth"
                        disableFuture
                        value={value}
                        onChange={(value) =>
                          onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                          console.log(invalid),
                          (
                            <TextField
                              error={invalid}
                              helperText={invalid ? error.message : null}
                              id="dateOfBirth"
                              variant="standard"
                              margin="dense"
                              fullWidth
                              color="primary"
                              autoComplete="bday"
                              {...params}
                            />
                          )
                        )}
                      />
                    )}
                  />
                </Box>
              </Container>
            </Grid>

            <Grid item xs={6}>
              <Container maxWidth="lg">
                <Box>
                  <Controller
                    name="startDate"
                    control={control}
                    defaultValue={null}
                    render={({
                      field: { onChange, value },
                      fieldState: { error, invalid },
                    }) => (
                      <DatePicker
                        label="Start Date"
                        disableFuture
                        value={value}
                        onChange={(value) =>
                          onChange(moment(value).format("YYYY-MM-DD"))
                        }
                        renderInput={(params) => (
                          console.log(invalid),
                          (
                            <TextField
                              error={invalid}
                              helperText={invalid ? error.message : null}
                              id="startDate"
                              variant="standard"
                              margin="dense"
                              fullWidth
                              color="primary"
                              autoComplete="bday"
                              {...params}
                            />
                          )
                        )}
                      />
                    )}
                  />
                </Box>
              </Container>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>- Select a department -</InputLabel>
                <Controller
                  control={control}
                  name="department"
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      fullWidth
                      label="- Select a department -"
                    >
                      {departments.map(({ value, label, index }) => (
                        <MenuItem key={index} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="street"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="filled"
                    label="street"
                    {...register("street")}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="city"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="filled"
                    label="city"
                    {...register("city")}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>- Select a state -</InputLabel>
                <Controller
                  control={control}
                  name="state"
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} fullWidth>
                      {states.map(({ name, abbreviation, index }) => (
                        <MenuItem key={index} value={name}>
                          {name} ({abbreviation})
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="zipCode"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="filled"
                    label="zipCode"
                    {...register("zipCode")}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </LocalizationProvider>
  );
}
