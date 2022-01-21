import ReactDOM from 'react-dom';
import { DevTool } from '@hookform/devtools';

import classes from './styles.module.css';
import { useProductForm } from './useProductForm';
import { originOptions } from '../../constants/origins';

const ProductForm = () => {
  const {
    handleSubmit,
    register,
    errors,
    disabledSubmit,
    control,
    createProduct,
    editProduct,
    closeModal,
    onReset,
    isEdit,
    isSubmitting,
  } = useProductForm();

  return (
    <form
      onSubmit={handleSubmit(isEdit ? editProduct : createProduct)}
      className={classes.form}
    >
      <button className={classes.closeBtn} onClick={closeModal}>
        x
      </button>
      <label>
        Product's name
        <div>
          <input
            {...register('name')}
            className={classes.input}
            placeholder="Enter name..."
            disabled={isSubmitting}
          />
          <div className={classes.error}>{errors.name?.message}</div>
        </div>
      </label>
      <label>
        Price
        <div>
          <input
            {...register('price')}
            className={classes.input}
            placeholder="Enter price..."
            disabled={isSubmitting}
          />
        </div>
        <div className={classes.error}>{errors.price?.message}</div>
      </label>
      <label>
        Origin
        <div>
          <select
            {...register('origin', {})}
            className={classes.select}
            disabled={isSubmitting}
          >
            {originOptions.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </label>

      <button
        type="submit"
        className={classes.submitBtn}
        disabled={isSubmitting}
      >
        {isEdit ? 'Save changes' : 'Add'}
      </button>
      {isEdit && (
        <button
          className={classes.submitBtn}
          disabled={disabledSubmit}
          onClick={onReset}
        >
          Reset
        </button>
      )}
      {ReactDOM.createPortal(
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <DevTool control={control} />
        </div>,
        document.getElementById('root')
      )}
    </form>
  );
};

export default ProductForm;
