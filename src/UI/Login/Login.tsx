import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../BLL/AuthReducer";
import {FormikErrorType} from "../../DAL/todolists-api";
import {AppRootStateType} from "../../BLL/store";
import {Navigate} from "react-router-dom";


export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password){
                errors.password = 'Required'
            } else if (values.password.length < 3){
                errors.password = "Min length is 4 symbols"
            }
            return errors;
        },

        onSubmit: values => {
            // alert(JSON.stringify(values));
            dispatch(loginTC(values))
        },
    })
    if (isLoggedIn){
        return <Navigate to={"/"}/>
    }
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: sa.kozh@yandex.ru</p>
                    <p>Password: 123456789</p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <TextField label="Email" margin="normal"
                        {...formik.getFieldProps("email")}
                               // onBlur={formik.handleBlur}
                               // onChange={formik.handleChange} value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                    <TextField type="password" label="Password"
                               margin="normal"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                    <FormControlLabel label={'Remember me'} control={<Checkbox
                        {...formik.getFieldProps("rememberMe")}
                   />}/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
                </form>
            </FormControl>
        </Grid>
    </Grid>
}
