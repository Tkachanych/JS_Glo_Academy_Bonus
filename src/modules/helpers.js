const findText = (str, text = '') => {
  const regex = new RegExp(text, 'gi');
  return regex.test(str);
};

export { findText };
