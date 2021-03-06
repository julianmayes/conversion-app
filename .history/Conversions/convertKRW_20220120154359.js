const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/JPY"
  );
  console.log(res.data);
  return res.data;
};

const convertJPY = async (x, y) => {
  const rates = await getRates();
  return x * rates[y];
};

convertJPY(100, "CAD");

module.exports = convertJPY;
