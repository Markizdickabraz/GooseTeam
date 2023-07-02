const autocomplete = value => {
  let res = value;

  if (value.length === 1) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      if (num > 2) {
        res = '0' + value + ':';
      }
    }
  }

  if (value.length === 2) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      if (num > 24) {
        res = '24:';
      } else {
        res = value + ':';
      }
    }
  }

  if (value.length === 4) {
    const arr = value.split(':');
    const num = Number(arr[1]);

    if (!Number.isNaN(num)) {
      if (num > 5) {
        res = arr[0] + ':0' + arr[1];
      }
    }
  }

  if (value.length === 7) {
    res = value.slice(0, 6);
  }

  return res;
};

export { autocomplete };
