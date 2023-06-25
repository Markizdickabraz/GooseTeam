export const isErrorField = (err, style) => {
  if (!Object.keys(err).length) {
    return style.form;
  } else {
    return style.formError;
  }
};
