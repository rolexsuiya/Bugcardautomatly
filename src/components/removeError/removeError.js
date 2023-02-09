import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { removeStyle } from "./style";
import { SideTabs } from "./tabs";

const data = {
  title: "Remove this commented out code",
  subTitle: 'Sections of code should not be commented out typescript:S125',
  typeText:"Where is the issue?",
  subText:"Where is the issue?"
};

export const RemoveError = () => {

  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
        label: <Typography sx={removeStyle.typoLableSX} gutterBottom >{data.typeText}</Typography>,
        value: 1,
        body: <div><Box sx={removeStyle.indiseBox}>{data.subText}</Box></div>
    },
    {
        label: <Typography sx={removeStyle.typoLableSX} gutterBottom >{data.typeText}</Typography>,
        value: 2,
        body: <div><Box sx={removeStyle.indiseBox}>{data.subText}</Box></div>
    },
]
  return (
    <>
    
        <Box sx={removeStyle.rootBlock} >
          <Box >
            <Typography sx={removeStyle.titleText}>{data.title}</Typography>
            <Typography sx={removeStyle.subText}>{data.subTitle} </Typography>
          </Box>

          <Box sx={removeStyle.paperBlock}>
            <Box>
              <SideTabs tabs={tabs} activeTab={activeTab} handleChangeTab={(val) => setActiveTab(val)}/>
            </Box>
          </Box>
        </Box>
    </>
  );
};
