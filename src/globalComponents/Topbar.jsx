import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import {InputBase} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, NotificationAddOutlined, Person2Outlined, SettingsOutlined } from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return <Box display="flex" justifyContent="space-between" p={2}>
    <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
    <InputBase sx={{ml: 2, flex:1}} placeholder='Search'></InputBase>
    
     <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        </Box>
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined/>
          )}
        </IconButton>
        <IconButton>
          <NotificationAddOutlined/>
        </IconButton>
        <IconButton>
          <SettingsOutlined/>
        </IconButton>
        <IconButton>
          <Person2Outlined />
        </IconButton>
      </Box>
  </Box>;
};

export default Topbar;
