import React from 'react'
import { Modal, Button } from 'react-bootstrap';

import classes from './ConfirmDialog.module.css';

const ConfirmDialog = (props) => {

  const { show, title, rightBtn, leftBtn, type, data, id } = props.options;

  const handleClose = () => {
    props.cancel();
  }

  const hanldeOk = (id, data) => {
    if (type === 'confirmOrder') {
      props.onConfirm(data);
    }
    if (type === 'confirmChange') {
      props.onConfirm(id, data);
    }
    if (type === 'backToHomeConfirm') {
      props.backToHome();
    }
  }

  return (
    <>
      <Modal
        show={ show }
        onHide={ handleClose }
        backdrop="static"
        keyboard="false"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { title }
        </Modal.Body>
        <Modal.Footer>
          <Button className={ classes.leftBtn } variant="secondary" onClick={ handleClose }>
            { leftBtn }
          </Button>
          <Button className={ classes.rightBtn } variant="primary" onClick={ () => hanldeOk(id, data) }>
            { rightBtn }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmDialog