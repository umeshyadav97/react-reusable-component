import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material"
import { Form, Formik } from "formik"
import React from "react"
import useAddRolesController from "./addRoles.controller"
import { rolesConfig } from "./roles.config"

const Heading = ({ title }) => {
  return (
    <Typography variant="h3" fontWeight={600} mb={2} mt={2}>
      {title}
    </Typography>
  )
}

const TableHeading = ({ title }) => {
  return (
    <Typography sx={{ textTransform: "capitalize" }} variant="h5" fontWeight={500} mb={2} mt={2}>
      {title}
    </Typography>
  )
}

const CustomButton = ({ text, ...props }) => {
  return (
    <Box width={rolesConfig.buttonBoxWidth}>
      <Button fullWidth size="large" {...props}>
        {text}
      </Button>
    </Box>
  )
}

const AddRolesComponent = (props) => {
  const rc = useAddRolesController(props)
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={rc.initialState}
        validationSchema={rc.validation}
        onSubmit={rc.handleSave}>
        {(formik) => (
          <Form>
            <Grid container>
              {/*----- Basic Details -----*/}
              <Grid item xs={12}>
                <Heading title={"Basic Detail"} />
                <Stack spacing={3}>
                  <Box width={rolesConfig.textFieldBoxwidth}>
                    <TextField
                      fullWidth
                      id="role"
                      name="role"
                      label="Role *"
                      variant="outlined"
                      {...formik.getFieldProps("role")}
                      helperText={formik.touched.role && formik.errors.role}
                    />
                  </Box>
                  <Box width={rolesConfig.textFieldBoxwidth}>
                    <TextField
                      fullWidth
                      id="description"
                      name="description"
                      label="Description"
                      variant="outlined"
                      minRows={2}
                      multiline
                      {...formik.getFieldProps("description")}
                    />
                  </Box>
                </Stack>
              </Grid>

              {/*----- Permissions -----*/}
              <Grid item xs={12}>
                <Heading title={"Permissions"} />
                <TableContainer>
                  <Table>
                    {formik.values.modules?.map((ele, i) => (
                      <React.Fragment key={ele}>
                        {i == 0 && (
                          <TableHead>
                            <TableRow>
                              <TableCell>
                                <TableHeading title={"Modules"} />
                              </TableCell>
                              {Object.keys(formik.values.permission[ele]).map((k) => (
                                <TableCell key={k}>
                                  <TableHeading title={k} />
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                        )}
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <TableHeading title={ele} />
                            </TableCell>
                            {Object.keys(formik.values.permission[ele]).map((k) => (
                              <TableCell key={k} align="left">
                                <FormControlLabel
                                  sx={{ ml: 1 }}
                                  onChange={() => rc.handleCheck(formik, ele, k)}
                                  control={<Checkbox checked={formik.values.permission[ele][k]} />}
                                />
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableBody>
                      </React.Fragment>
                    ))}
                  </Table>
                </TableContainer>
              </Grid>

              {/*----- Buttons -----*/}
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <CustomButton text={"Cancel"} variant="outlined" onClick={rc.handleClose} />
                  </Grid>
                  <Grid item>
                    <CustomButton
                      disabled={
                        formik.values.checkAtleastOneViewSelected === props?.modules?.length
                      }
                      text={"Save"}
                      variant="contained"
                      type="submit"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AddRolesComponent
