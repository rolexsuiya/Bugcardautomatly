import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Filter } from "../filters/filter";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { Typography } from "@mui/material";
import { RemoveComment } from "../removeComment";
import { issuesStyle } from "./style";

export default function Issues({ handleClick = () => {} }) {
  return (
    <Box>
      <Box >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Box sx={issuesStyle.paperBlock}>
              <Filter />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={9}>
            <Box sx={issuesStyle.rootBlock}>
              <Box sx={issuesStyle.iconOutlined}>
                <Box>
                  <TextSnippetOutlinedIcon style={issuesStyle.pathIcon} />
                </Box>
                <Box>
                  <Typography sx={issuesStyle.pathText}>src/App.tsx</Typography>
                </Box>
              </Box>
              <Box>
                <RemoveComment handleClick={handleClick} />
                <RemoveComment handleClick={handleClick} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
