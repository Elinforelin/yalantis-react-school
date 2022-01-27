import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setModalActive } from '../../store/modal/reducer';
import classes from './style.module.css';
import { getModalStatus } from '../../store/modal/selector';
import React from 'react';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const active = useSelector(getModalStatus);

  if (!active) return null;

  return (
    <div
      className={active ? classes.activeModal : classes.modal}
      onClick={() => dispatch(setModalActive(false))}
    >
      <div
        className={active ? classes.activeContent : classes.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
