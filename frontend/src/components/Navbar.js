import { Box, Typography, Menu, Button, MenuItem } from "@mui/material";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import React, { useState } from "react";
import { options1 } from "../constants/Options";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      pt={2.5}
      px={{ xs: 2, sm: 3.4 }}
      display={{ sm: "flex" }}
      justifyContent={{ sm: "space-between" }}
      alignItems={{ xs: "center" }}
    >
      <Box textAlign={{ xs: "center", sm: "left" }}>
        <Typography sx={{ color: "#6ccacb", fontSize: 45 }}>
          HOLDINFO
        </Typography>
      </Box>
      <Box display={"flex"} gap={2} justifyContent={"center"}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownOutlined />}
          sx={{
            marginRight: 1,
            bgcolor: "#2e3241",
            fontWeight: "bold",
            paddingY: 1,
            borderRadius: 3,
            "&:hover": {
              bgcolor: "#2e3241",
            },
          }}
        >
          BTC
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options1.map((opt) => (
            <MenuItem
              sx={{ marginLeft: 1 }}
              key={opt}
              onClick={handleClose}
              disableRipple
            >
              {opt}
            </MenuItem>
          ))}
        </Menu>
        <Button
          sx={{
            color: "white",
            bgcolor: "#2e3241",
            fontWeight: "bold",
            borderRadius: 3,
            "&:hover": {
              bgcolor: "#2e3241",
            },
          }}
        >
          BUY
        </Button>
      </Box>
      <Box display={"flex"} mt={{ xs: 2, sm: 0 }} justifyContent={"center"}>
        <Button
          startIcon={<TelegramIcon />}
          sx={{
            marginRight: 2,
            // paddingY: 1,
            borderRadius: 3,
            // paddingX: 1.5,
            bgcolor: "#3dc6c1",
            fontWeight: "bold",
            color: "white",
            "&:hover": {
              bgcolor: "#3dc6c1",
            },
          }}
        >
          {" "}
          Connect Telegram
        </Button>
        <Box>
          <ToggleOnIcon
            fontSize="large"
            sx={{
              height: "50px",
              width: "60px",
              color: "#2e3241",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
