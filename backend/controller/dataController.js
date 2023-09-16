const Data = require("../model/dataModel");

const getData = async (req, res) => {
  try {
    const result = await Data.find({});
    res.status(200).json({ result });
    // res.send(result[0].data);
  } catch (error) {
    console.log("error", error);
    res.send(400);
    throw new Error("Server Error");
  }
};

module.exports = { getData };
