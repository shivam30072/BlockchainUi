import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderTypography = ({ title }) => {
  return (
    <Typography color={"white"} fontSize={{ xs: 10, sm: 20 }} fontWeight={900}>
      {title}
    </Typography>
  );
};

const DataRow = ({ item }) => {
  return (
    <Box
      bgcolor={"#2e3241"}
      display={"flex"}
      alignItems={"center"}
      py={2}
      mt={2}
      width={"100%"}
      justifyContent={"space-between"}
      px={2}
      borderRadius={3}
    >
      <HeaderTypography title={item?.id} />
      <HeaderTypography title={item?.header} />
      <HeaderTypography title={item?.last} />
      <HeaderTypography title={item?.buy} />
      <HeaderTypography title={item?.sell} />
      <HeaderTypography title={item?.base_unit} />
      <HeaderTypography title={item?.volume} />
    </Box>
  );
};

export default DataRow;
