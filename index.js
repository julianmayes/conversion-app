const axios = require("axios");
const {convertJPY, convertEUR, convertPHP} = require('./Conversions');

const getRates = async () => {
  console.log(await convertJPY(100, "CAD"));
  console.log(await convertEUR(100, "CAD"));
};

getRates();