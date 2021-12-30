import React from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../../Layout/Container';
import AddressInfo from './AddressInfo/AddressInfo';
import OrderContent from './OrderContent/OrderContent';

import classes from './CheckOut.module.css'

const ConfirmOrder = () => {

  const { state } = useLocation();

  return (
    <Container>
      <AddressInfo />
      <OrderContent order={ state } />
    </Container>
  )
}

export default ConfirmOrder
