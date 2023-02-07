import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavIcon } from "../../components/icon/navIcon";
import CodeBox from "../../components/codeBox";
import { codeSmallSx } from "./style";
import { CricleIcon } from "../../components/icon/cricleIcon";
import { RemoveError } from "../../components/removeError/removeError";

export default function CodeSmall() {

    const [active, setActive] =useState(false);
    const [selected, setSelected] =useState('');

    const handleClick =(i)=>{
       
            setActive(!active)
            setSelected(i)
    }

  const boxData = [
    {
        id:"1",
      boxText: "Remove this commented out code",
      icon: <CricleIcon />,
      subText: "Code Smell",
    },
    {
        id:"2",

      boxText: "Remove this unused import of 'RequireAuth'.",
      icon: <CricleIcon />,
      subText: "Code Smell",
    },
    {
        id:"3",
      boxText: "Rename this file to 'graphqlReq'",
      icon: <CricleIcon />,
      subText: "Code Smell",
    },
    {
        id:"4",
      boxText: "Remove this unused import of 'config'.",
      icon: <CricleIcon />,
      subText: "Code Smell",
    },
  ];

  return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
            
          <Box sx={codeSmallSx.textBoxSx}>
            <Box sx={codeSmallSx.boxSx}>
              <NavIcon />
            </Box>
            <Box sx={codeSmallSx.codeSx}>
              {boxData.map((val, i) => (
                <Box sx={selected === val?.id ? codeSmallSx.activeBox : codeSmallSx.mapBoxSx} onClick={()=>handleClick(val.id)}>
                  <CodeBox
                    boxText={val.boxText}
                    icon={val.icon}
                    subText={val.subText}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9} sx={{backgroundColor:"#F6F6F6"}}>
          <Box >
            <RemoveError/>
          </Box>
        </Grid>
      </Grid>
  );
}

