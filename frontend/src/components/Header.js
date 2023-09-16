import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderTypography = ({ title }) => {
  return (
    <Typography
      color={"#777980"}
      fontSize={{ xs: 13, sm: 20 }}
      fontWeight={900}
    >
      {title}
    </Typography>
  );
};

const Header = () => {
  return (
    <Box
      display={"flex"}
      py={2}
      mt={2}
      justifyContent={"space-between"}
      px={{ xs: 2, sm: 5 }}
      alignItems={"center"}
      width={{ sm: "100%", md: "95%" }}
    >
      <HeaderTypography title={"ID"} />
      <HeaderTypography title={"NAME"} />
      <HeaderTypography title={"LAST"} />
      <HeaderTypography title={"BUY"} />
      <HeaderTypography title={"SELL"} />
      <HeaderTypography title={"BASE UNIT"} />
      <HeaderTypography title={"VOLUME"} />
    </Box>
  );
};

export default Header;
