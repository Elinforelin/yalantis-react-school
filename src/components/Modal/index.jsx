import { useDispatch, useSelector } from 'react-redux';

import { setModalActive } from '../../store/modal/reducer';
import classes from './style.module.css';
import { getModalStatus } from '../../store/modal/selector';

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

export default Modal;
