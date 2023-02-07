import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { removeStyle } from "./style";
import BasicTabs from "./tabs";

const data = {
  title: "Remove this commented out code",
  subTitle: 'Sections of code should not be commented out typescript:S125'
};
export const RemoveError = () => {

  
  return (
    <>
    
        <Box sx={removeStyle.rootBlock} >
          <Box >
            <Typography sx={removeStyle.titleText}>{data.title}</Typography>
            <Typography sx={removeStyle.subText}>{data.subTitle} </Typography>
          </Box>

          <Paper sx={removeStyle.paperBlock}>
            <Box>
              <BasicTabs />
            </Box>
          </Paper>
        </Box>
    </>
  );
};
