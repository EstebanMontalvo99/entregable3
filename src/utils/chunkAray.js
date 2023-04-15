const chunkArray = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 20) {
    result.push(array.slice(i, i + 20));
  }
  return result;
};
export default chunkArray;
