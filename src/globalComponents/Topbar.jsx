import React from 'react';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import Search from '@mui/icons-material/Search';

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import {InputBase} from "@mui/material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return <Box display="flex" justifyContent="space-between" p={2}>
    <InputBase></InputBase>
     <Search></Search>
     <LightModeOutlined></LightModeOutlined>
     <SettingsOutlined></SettingsOutlined>
     <PersonOutlined></PersonOutlined>
     <NotificationsOutlined></NotificationsOutlined>
  </Box>;
};

export default Topbar;
