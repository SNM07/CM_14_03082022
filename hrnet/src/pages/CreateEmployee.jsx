import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "../data/statesList";
import { departments } from "../data/departmentsList";

import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";

import { v4 as uuid } from 'uuid';

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
  zipCode: yup.string().required(),
});

/* schema.validate(data, { abortEarly: false }).then(function() {
  // Success
}).catch(function (err) {
  err.inner.forEach(e => {
      console.log(e.message, e.path));
  }); */

export default function CreateEmployee(props) {
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

  const onError = (errors, e) => console.log(errors, e);

  let newId = uuid();

  const onSubmit = async (e) => {
    console.log(e);
    const employeeData = {
      id: newId,
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
  };
/*
  const employeeForLocalStorage = useSelector((state) => state.data.employees);
  localStorage.setItem("employees", JSON.stringify(employeeForLocalStorage));

  console.log(employeeForLocalStorage);*/

  const [reqDate, setreqDate] = useState(new Date());

  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Box
          mx={16}
          my={6}
          p={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ boxShadow: 2, borderRadius: 1 }}
        >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
                      error={!!errors?.lastName}
                      helperText={errors.lastName && errors.lastName.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
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

              <Grid item xs={12}>
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

              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
                      error={!!errors?.street}
                      helperText={errors.street && errors.street.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
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
                      error={!!errors?.city}
                      helperText={errors.city && errors.city.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
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

              <Grid item xs={12}>
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
                      error={!!errors?.zipCode}
                      helperText={errors.zipCode && errors.zipCode.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} mt={3} style={{ textAlign: "center" }}>
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </LocalizationProvider>
  );
}
