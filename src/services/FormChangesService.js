export const getUserDataChanges = (previousData, actualData) => {
  const notMatchedFields = Object.entries(previousData).reduce((fields, dataItem) => {
    const [key, value] = dataItem;
    const propIsEqual = actualData[key] === value;
    if (!propIsEqual) {
      fields[key] = actualData[key];
    }
    return fields;
  }, {});

  return Object.keys(notMatchedFields).length === 0 ? null : notMatchedFields;
};