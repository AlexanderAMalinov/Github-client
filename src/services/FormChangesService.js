export const getUserDataChanges = (previousData, actualData) => {
  const notMatchedFields = Object.entries(previousData).reduce((fields, dataItem) => {
    const [key, value] = dataItem;
    const propIsEqual = actualData[key] === value;
    if (!propIsEqual) {
      return [...fields, { key, value: actualData[key] }];
    }
    return fields;
  }, []);

  return notMatchedFields;
};