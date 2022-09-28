import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "../data/statesList";
import { departments } from "../data/departmentsList";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

//import { Modal } from "../components/Modal";
//@ts-ignore
import { Modal } from "modal-snm07-p14";

import { POST_EMPLOYEE } from "../store/actions/constant";

import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

export default function CreateEmployee(props) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    dispatch({
      type: POST_EMPLOYEE,
      payload: employeeData,
    });
    setShowModal(true);
    reset();
  };

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          modalTitle="Wealth Health - HRNET"
          modalBody="New Employee added"
        />
      )}
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        label="First Name"
                        {...register("firstName")}
                        error={!!errors?.firstName}
                        helperText={
                          errors.firstName && "First Name is a required field"
                        }
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
                        label="Last Name"
                        {...register("lastName")}
                        error={!!errors?.lastName}
                        helperText={
                          errors.lastName && "Last Name is a required field"
                        }
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
                              <TextField
                                helperText={invalid ? error.message : null}
                                id="dateOfBirth"
                                variant="standard"
                                margin="dense"
                                fullWidth
                                color="primary"
                                autoComplete="bday"
                                {...params}
                                error={invalid}
                              />
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
                              <TextField
                                helperText={invalid ? error.message : null}
                                id="startDate"
                                variant="standard"
                                margin="dense"
                                fullWidth
                                color="primary"
                                autoComplete="bday"
                                {...params}
                                error={invalid}
                              />
                            )}
                          />
                        )}
                      />
                    </Box>
                  </Container>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth error={Boolean(errors["department"])}>
                    <InputLabel>- Select a department -</InputLabel>
                    <Controller
                      control={control}
                      name="department"
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          fullWidth
                          label="- Select a Department -"
                        >
                          {departments.map(({ value, label, index }) => (
                            <MenuItem key={value} value={value}>
                              {label}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                    <FormHelperText>
                      {errors.department && "Department is a required field"}
                    </FormHelperText>
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
                        label="Street"
                        {...register("street")}
                        error={!!errors?.street}
                        helperText={
                          errors.street && "Street is a required field"
                        }
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
                        label="City"
                        {...register("city")}
                        error={!!errors?.city}
                        helperText={errors.city && "City is a required field"}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth error={Boolean(errors["state"])}>
                    <InputLabel>- Select a State -</InputLabel>
                    <Controller
                      control={control}
                      name="state"
                      defaultValue=""
                      render={({ field }) => (
                        <Select {...field} fullWidth>
                          {states.map(({ name, abbreviation, index }) => (
                            <MenuItem key={abbreviation} value={name}>
                              {name} ({abbreviation})
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                    <FormHelperText>
                      {errors.state && "State is a required field"}
                    </FormHelperText>
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
                        label="Zip Code"
                        {...register("zipCode")}
                        error={!!errors?.zipCode}
                        helperText={
                          errors.zipCode && "Zip Code is a required field"
                        }
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
    </>
  );
}
