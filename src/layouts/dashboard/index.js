import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import { Gear } from "phosphor-react";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {

  const [selected, setSelected] = useState(0)
  const theme = useTheme()

  return (
    <>
      <Box p={2} sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: '100vh',
        width: 100
      }}>
        <Stack direction={'column'} alignItems={"center"} sx={{ width: "100%" }} spacing={3}>
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}>
            <img src={Logo} alt="Let's Chat App Logo" />
          </Box>
          <Stack spacing={3} sx={{ width: "max-content" }} direction="column" alignItems={'center'}>
            {Nav_Buttons.map((el) => (
              el.index === selected ?
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton
                    key={el.index}
                    sx={{ width: "max-content", color: "#fff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
                :
                <IconButton
                  onClick={() => {
                    setSelected(el.index)
                  }}
                  key={el.index}
                  sx={{ width: "max-content", color: '#000' }}
                >
                  {el.icon}
                </IconButton>
            ))}
            <Divider sx={{ width: "45px" }} />
            {
              selected === 3 ?
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                  >
                    <Gear />
                  </IconButton>
                </Box>
                :
                <IconButton onClick={() => {
                  setSelected(3)
                }} >
                  <Gear />
                </IconButton>
            }
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
