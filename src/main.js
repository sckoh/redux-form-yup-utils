import set from 'lodash/set';

export const syncValidate = schema => (values, props) => {
  const formErrors = {};
  try {
    schema.validateSync(values, {
      abortEarly: false,
      context: {
        props,
        values,
      },
    });
  } catch (errors) {
    errors.inner.forEach((error) => {
      set(formErrors, error.path, error.message);
    });
  }
  return formErrors;
};

export default {};
