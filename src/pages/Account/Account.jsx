import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { userServices } from '../../services';
import { getUserInfo, updateUser } from '../../stores/features/authSlice'
import { InputWithLabel, SideBar, ConfirmDialog } from '../../components'
import Container from '../../Layout/Container'

import classes from './Acount.module.css'

const AccountBody = () => {
  const params = useParams();
  const navigate = useNavigate()
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const [confirmOptions, setConfirmOptions] = useState({});

  const formik = useFormik({
    initialValues: {
      id: userInfo["_id"],
      firstname: userInfo.name.firstname,
      lastname: userInfo.name.lastname,
      phone: userInfo.phone,
      email: userInfo.email,
      username: userInfo.username,
      password: '',
      confirmpassword: '',
      city: userInfo.address.city,
      street: userInfo.address.street,
      number: userInfo.address.number,
    },
    validationSchema: Yup.object({
      id: Yup.string().required(),
      firstname: Yup.string().required('Type your first name'),
      lastname: Yup.string().required('Type your last name'),
      phone: Yup.string().required('Type your phone number'),
      password: Yup.string(),
      confirmpassword: Yup.string().test('Passwords is valid', 'Passwords must match', function (value) {
        return this.parent.password === value
      })
    }),
    onSubmit: (values) => {
      submitHandler(values.id, values);
    }
  })

  const submitHandler = (id, data) => {
    const { city, email, firstname, lastname, password, phone, street, username, number } = data;

    if (params.accountOption === 'profile') {
      const formatData = {
        email,
        username,
        password: userInfo.password,
        name: {
          firstname,
          lastname
        },
        address: {
          city: city,
          street: street,
          number: +number,
        },
        phone
      }

      setConfirmOptions({
        ...confirmOptions,
        type: 'confirmChange',
        show: true,
        title: `Are you sure to save your change?`,
        rightBtn: 'Confirm',
        leftBtn: 'Cancel',
        data: formatData,
        id: id,
      })
    } else {
      const formatData = {
        email,
        username,
        password,
        name: {
          firstname,
          lastname
        },
        address: {
          city: city,
          street: street,
          number: +number,
        },
        phone
      }

      setConfirmOptions({
        ...confirmOptions,
        type: 'confirmChange',
        show: true,
        title: `Are you sure to change your password?`,
        rightBtn: 'Confirm',
        leftBtn: 'Cancel',
        data: formatData,
        id: id,
      })
    }
  }

  const updateHandler = (id, data) => {
    setConfirmOptions({
      show: false
    })
    userServices.updateUser(id, data)
      .then(res => {
        if (res.success) {
          if (params.accountOption === 'profile') {
            toast.success('You have been updated your profile succesfully!')
            dispatch(updateUser({
              userInfo: data
            }))
          } else {
            toast.success('You have been changed your password succesfully!', {
              onClose: () => {
                navigate("/account/profile")
                dispatch(updateUser({
                  userInfo: data
                }))
                formik.setFieldValue('password', '');
                formik.setFieldValue('confirmpassword', '')
              }
            })
          }

        } else {
          toast.error(res.message)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const cancel = () => {
    setConfirmOptions({
      show: false
    })
  }


  return <>
    <div className={ classes.accountBody }>
      <div className={ classes.accountInfo }>
        <div className={ classes.accountHeading }>
          { params.accountOption === 'profile' ?
            <>
              <h1>My Profile</h1>
              <p>
                Manage your profile to protect your account
              </p>
            </> :
            <>
              <h1>Reset Password</h1>
            </>
          }

        </div>
        <div className={ classes.accountContent }>
          <div className={ classes.accountForm }>
            <form>
              {
                params.accountOption === 'profile' ?
                  <>
                    <InputWithLabel
                      type="text"
                      label="User Name"
                      id="username"
                      placeholder="Your username"
                      name="username"
                      formikField={ formik.getFieldProps('username') }
                      err={ formik.touched.username && formik.errors.username }
                      errMessage={ formik.errors.username }
                    />
                    <InputWithLabel
                      label="Email"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                      formikField={ formik.getFieldProps('email') }
                      err={ formik.touched.email && formik.errors.email }
                      errMessage={ formik.errors.email }
                    />
                    <InputWithLabel
                      label="First Name"
                      id="firstname"
                      placeholder="Your first name"
                      name="firstname"
                      formikField={ formik.getFieldProps('firstname') }
                      err={ formik.touched.firstname && formik.errors.firstname }
                      errMessage={ formik.errors.firstname }
                    />
                    <InputWithLabel
                      label="Last Name"
                      id="lastname"
                      placeholder="Your last name"
                      name="lastname"
                      formikField={ formik.getFieldProps('lastname') }
                      err={ formik.touched.lastname && formik.errors.lastname }
                      errMessage={ formik.errors.lastname }
                    />
                    <InputWithLabel
                      label="Phone"
                      id="phone"
                      placeholder="Your phone number"
                      name="lastname"
                      formikField={ formik.getFieldProps('phone') }
                      err={ formik.touched.phone && formik.errors.phone }
                      errMessage={ formik.errors.phone }
                    />
                    <div className={ classes.inputWrapper }>
                      <label >Address</label>
                      <div>
                        <div>
                          <label>City</label>
                          <input
                            placeholder="City"
                            { ...formik.getFieldProps('city') }
                          />
                        </div>
                        <div>
                          <label >Street</label>
                          <input
                            placeholder="Street"
                            { ...formik.getFieldProps('street') }
                          />
                        </div>
                        <div>
                          <label >Number</label>
                          <input
                            placeholder="Number"
                            { ...formik.getFieldProps('number') }
                          />
                        </div>
                      </div>
                    </div>
                    <div className={ classes.accountBtn }>
                      <Link to="/account/reset">
                        Change password
                      </Link>
                      <button onClick={ formik.handleSubmit }>
                        Save
                      </button>
                    </div>
                  </> :
                  <>
                    <InputWithLabel
                      label="New Password"
                      type="password"
                      id="password"
                      placeholder="Type your password"
                      name="password"
                      formikField={ formik.getFieldProps('password') }
                      err={ formik.touched.password && formik.errors.password }
                      errMessage={ formik.errors.password }
                    />
                    <InputWithLabel
                      label="Confirm password"
                      type="password"
                      id="confirmpassword"
                      placeholder="Type your password"
                      name="confirmpassword"
                      formikField={ formik.getFieldProps('confirmpassword') }
                      err={ formik.touched.confirmpassword && formik.errors.confirmpassword }
                      errMessage={ formik.errors.confirmpassword }
                    />
                    <div className={ classes.accountBtn }>
                      <button onClick={ formik.handleSubmit }>
                        Save
                      </button>
                    </div>
                  </>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
    <ConfirmDialog options={ confirmOptions } onConfirm={ updateHandler } cancel={ cancel } />
  </>
}

const Account = () => {
  return (
    <Container>
      <div className={ classes.wrapper }>
        <SideBar />
        <AccountBody />
      </div>
    </Container>
  )
}

export default Account
