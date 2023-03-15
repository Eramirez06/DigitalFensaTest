export const getItemsPicker = records => {
  const initialElements = Object.keys(records);
  const pickerElements = initialElements.map(key => ({
    label: key,
    value: key,
  }));
  return pickerElements;
};
