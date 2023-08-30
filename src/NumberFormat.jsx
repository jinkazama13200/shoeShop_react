const NUMBER_FORMAT = new Intl.NumberFormat("us-US", {
  style: "currency",
  currency: "USD",
});
const numberFormat = (number) => {
  return NUMBER_FORMAT.format(number);
};

export default numberFormat;
