import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Group,
  Home,
  ModeNight,
  Pages,
  People,
  Settings,
  Storefront,
} from "@mui/icons-material";

import React from "react";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
