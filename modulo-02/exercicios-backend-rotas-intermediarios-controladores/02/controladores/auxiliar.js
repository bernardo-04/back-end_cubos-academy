const capitalizeString = (string) => {
  const capString = string.slice(0, 1).toUpperCase() + string.slice(1);

  return capString;
};

module.exports = {
  capitalizeString,
};
