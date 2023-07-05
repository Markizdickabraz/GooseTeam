const checkFormat = str => {
  const arr = str.split(':');
  const res =
    arr.length === 2 &&
    arr[0].length === 2 &&
    arr[1].length === 2 &&
    !Number.isNaN(Number(arr[0])) &&
    !Number.isNaN(Number(arr[1]));
  return res;
};

const endAfterStart = (start, end) => {
  const startArr = start.split(':');
  const startTime = Number(startArr[0]) * 60 + Number(startArr[1]);
  const endArr = end.split(':');
  const endTime = Number(endArr[0]) * 60 + Number(endArr[1]);
  return endTime > startTime;
};

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 250) {
    errors.title = 'Must be 250 characters or less';
  }

  if (!values.start) {
    errors.start = 'Required';
  } else if (!checkFormat(values.start)) {
    errors.start = 'XX:YY format only';
  }

  if (!values.end) {
    errors.end = 'Required';
  } else if (!checkFormat(values.end)) {
    errors.end = 'XX:YY format only';
  } else if (!endAfterStart(values.start, values.end)) {
    errors.end = 'End must be after start';
  }

  if (
    values.priority !== 'low' &&
    values.priority !== 'medium' &&
    values.priority !== 'high'
  ) {
    errors.priority = 'Wrong checkbox selected';
  }

  return errors;
};

export { validate };