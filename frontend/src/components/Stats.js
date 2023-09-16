import { Box, Typography } from "@mui/material";
import React from "react";

const Numbers = ({ percent, time, amount = false }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Typography
        textAlign={amount ? "center" : ""}
        color={"#4c9e9d"}
        fontSize={{ xs: 20, sm: 35 }}
      >
        {percent}
      </Typography>
      <Typography textAlign={"center"} color={"#818389"} fontSize={20}>
        {time}
      </Typography>
    </Box>
  );
};

const Stats = () => {
  return (
    <Box
      px={5}
      mt={2}
      display={"flex"}
      justifyContent={"space-between"}
      gap={1}
    >
      <Numbers percent={"1.68%"} time={"5 Mins"} />
      <Numbers percent={"0.54%"} time={"1 Hrs"} />
      <Numbers
        amount={true}
        percent={"$24,567"}
        time={"Average BTC/INR net price including commission"}
      />
      <Numbers percent={"1.38%"} time={"1 Day"} />
      <Numbers percent={"2.68%"} time={"7 Days"} />
    </Box>
  );
};

export default Stats;
