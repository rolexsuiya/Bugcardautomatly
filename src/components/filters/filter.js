import {
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PestControlSharpIcon from "@mui/icons-material/PestControlSharp";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import { ListNested } from "../listNested/listNested";
import { filterStyle } from "./style";
import { listStyle } from "../listNested/style";

const Type = [
  {
    titlePrimary: "Bug",
    icon: <PestControlSharpIcon />,
    count: "05",
  },
  {
    titlePrimary: "Vulnerabilitiy",
    icon: <LockOpenRoundedIcon />,
    count: "00",
  },
  {
    titlePrimary: "Code Smells",
    icon: <SportsSoccerOutlinedIcon />,
    count: "00",
  },
];

const Severity = [
  {
    title: "Blocker",
    count: "00",
    color: "#BD1919",
  },
  {
    title: "Minor",
    count: "343",
    color: "#19BD50",
  },
  {
    title: "Critical",
    count: "18",
    color: "#BD1919",
  },
  {
    title: "Info",
    count: "05",
    color: "#0063E7",
  },
  {
    title: "Major",
    count: "257",
    color: "#BD1919",
  },
];

const Types = () => {
  return (
    <List component="div" disablePadding>
      {Type.map((item, key) => (
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.titlePrimary} />
          <Typography justifySelf={"self-end"} color={"#848484"}>
            {item.count}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

const Severitys = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      {Severity.map((item) => (
        <Grid item xs={12} md={12} lg={6}>
          <Box sx={listStyle.childCard} width={{ md: "10px" }} mt={1}>
            <Typography color={"#3D4755"} style={listStyle.cardTitle}>
              {item.title}
            </Typography>
            <Typography color={item.color} style={listStyle.cardCount}>
              {item.count}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export const Filter = () => {
  return (
    <>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item >
          <Typography style={filterStyle.filterText}>Filters</Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2} mr={2} mt={1}>
            <Button variant="contained" disabled size="small" sx={{textTransform:"none"}} >
            My Issues
            </Button>
            <Button variant="contained" size="small" sx={{textTransform:"none"}}>All</Button>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={filterStyle.headHorder}></Box>
      <Box>
        <Box>
          <ListNested titlePrimary={"Type"} option={<Types />} />
        </Box>
        <Box>
          <ListNested titlePrimary={"Severity"} option={<Severitys />} />
        </Box>
      </Box>
    </>
  );
};
