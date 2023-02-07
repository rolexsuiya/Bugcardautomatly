import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Filter } from "../filters/filter";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { Typography } from "@mui/material";
import { RemoveComment } from "../removeComment";
import { issuesStyle } from "./style";

export default function Issues({handleClick=()=>{},}) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Paper sx={issuesStyle.paperBlock}>
            <Filter />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={9}  sx={issuesStyle.rootBlock}>
          <Box sx={issuesStyle.iconOutlined}>
            <Box>
              <TextSnippetOutlinedIcon style={issuesStyle.pathIcon} />
            </Box>
            <Box ml={2}>
              <Typography sx={issuesStyle.pathText}>src/App.tsx</Typography>
            </Box>
          </Box>
          <Box>
            <RemoveComment handleClick={handleClick}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
