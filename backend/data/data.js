const axios = require("axios");
const DataModel = require("../model/dataModel");

const apiCall = async () => {
  try {
    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const result = Object.keys(data)
      .map((key) => ({
        header: key,
        ...data[key],
      }))
      .slice(0, 10);

    const apiData = await DataModel.create({ data: result });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { apiCall };
