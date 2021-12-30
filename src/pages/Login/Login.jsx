import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';

import { userServices } from '../../services';
import { login } from '../../stores/features/authSlice';
import { Button, Input } from '../../components';

import classes from './Login.module.css';

const SignIn = ({ from }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef?.current?.value;
    const password = passwordRef?.current?.value;
    userServices.login(username, password)
      .then((res) => {
        if (res.success) {
          const token = res.accessToken
          const { role, ...others } = res.user

          navigate(from, { replace: true });
          dispatch(login({
            token: token,
            userInfo: others
          }));

          setError(false);
          setErrorMessage('');
        }
      })
      .catch(err => {
        console.log(err);
        setError(true);
        setErrorMessage('Incorrect username or password');
      })
  }

  return (
    <Container className='text-center'>
      <div className={ classes.header }>
        <h1>Sign In</h1>
      </div>
      <div className={ classes.form }>
        <form onSubmit={ (e) => submitHandler(e) }>
          { error ? <p className='text-center text-danger'>{ errorMessage }</p> : null }
          <Input attributes={ classes.input } type="text" placeholder="User Name" ref={ usernameRef } />
          <Input attributes={ classes.input } type="password" placeholder="Password" ref={ passwordRef } />
          <Button type='submit' attributes={ classes.btn }>
            Sign In
          </Button>
        </form>
      </div>
      <div className={ classes.actions }>
        <Link to='/'>Back to HomePage</Link>
        <Link to='/login/forgot'>Forgot password?</Link>
      </div>
    </Container>
  )
}

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      username: '',
      password: '',
      city: '',
      street: '',
      number: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Type something'),
      lastName: Yup.string().required('Type something'),
      phone: Yup.string().required('Type something').min(10, 'Phone number is allowed 10 numbers'),
      email: Yup.string().required('Type something').email("Error email's format"),
      username: Yup.string().required('Type something').min(6, "User's name is too short!"),
      password: Yup.string().required('Type something')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      city: Yup.string().required('Type something'),
      street: Yup.string().required('Type something'),
      number: Yup.number().required('Type something')
    }),
    onSubmit: (values) => {
      submitHandler(values);
    }
  })

  const submitHandler = (data) => {
    const { city, email, firstName, lastName, password, phone, street, username, number } = data;
    const registerInfo = {
      email,
      username,
      password,
      name: {
        firstname: firstName,
        lastname: lastName
      },
      address: {
        city: city,
        street: street,
        number: +number,
      },
      phone
    }

    userServices.register(registerInfo)
      .then(res => {
        if (res.success) {
          toast.success('Your account is activated', {
            onClose: () => navigate('/login/login')
          })
          formik.resetForm();
        } else {
          toast.error(res.message)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <Container className='text-center'>
      <div className={ classes.header }>
        <h1>Register</h1>
      </div>
      <div className={ classes.form }>
        <form>
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Fisrt Name"
            name="firstName"
            formikField={ formik.getFieldProps('firstName') }
            err={ formik.touched.firstName && formik.errors.firstName }
            errMessage={ formik.errors.firstName }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Last Name"
            name="lastName"
            formikField={ formik.getFieldProps('lastName') }
            err={ formik.touched.lastName && formik.errors.lastName }
            errMessage={ formik.errors.lastName }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Phone"
            name="phone"
            formikField={ formik.getFieldProps('phone') }
            err={ formik.touched.phone && formik.errors.phone }
            errMessage={ formik.errors.phone }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Email"
            name="email"
            formikField={ formik.getFieldProps('email') }
            err={ formik.touched.email && formik.errors.email }
            errMessage={ formik.errors.email }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="User Name"
            name="username"
            formikField={ formik.getFieldProps('username') }
            err={ formik.touched.username && formik.errors.username }
            errMessage={ formik.errors.username }
          />
          <Input
            attributes={ classes.input }
            type="password"
            placeholder="Password"
            name="password"
            formikField={ formik.getFieldProps('password') }
            err={ formik.touched.password && formik.errors.password }
            errMessage={ formik.errors.password }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="City"
            name="city"
            formikField={ formik.getFieldProps('city') }
            err={ formik.touched.city && formik.errors.city }
            errMessage={ formik.errors.city }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Street"
            name="street"
            formikField={ formik.getFieldProps('street') }
            err={ formik.touched.street && formik.errors.street }
            errMessage={ formik.errors.street }
          />
          <Input
            attributes={ classes.input }
            type="text"
            placeholder="Number"
            name="number"
            formikField={ formik.getFieldProps('number') }
            err={ formik.touched.number && formik.errors.number }
            errMessage={ formik.errors.number }
          />
          <Button type='submit' attributes={ classes.btn } onClick={ formik.handleSubmit }>
            Sign Up
          </Button>
        </form>
      </div>
      <div className={ classes.actions }>
        <Link to='/'>Back to HomePage</Link>
      </div>
    </Container>
  )
}

const RegainPassWord = () => {
  return (
    <Container className='text-center'>
      <div className={ classes.header }>
        <h1>Forgot password?</h1>
      </div>
      <div className={ classes.form }>
        <form>
          <p className='text-center'>We will send you an email to change your password</p>
          <Input attributes={ classes.input } type="text" name="Email" />
          <Button type='submit' attributes={ classes.btn }>
            Send email
          </Button>
        </form>
      </div>
      <div className={ classes.actions }>
        <Link to='/'>Back to HomePage</Link>
      </div>
    </Container>
  )
}

const Login = () => {
  const { loginState } = useParams();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  return (
    <>
      { loginState === "login" &&
        <SignIn from={ from } />
      }
      { loginState === "register" &&
        <SignUp />
      }
      {
        loginState === 'forgot' &&
        <RegainPassWord />
      }
    </>
  )
}

export default Login
