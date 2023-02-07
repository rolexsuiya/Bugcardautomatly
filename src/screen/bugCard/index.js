import { Box, Grid, Typography } from "@mui/material";
import StatCard from "../../components/cards";
import Chart from "../../components/chartComponent/chartComponent";
import { DataTabs } from "../../components/dataTabs";
import { BugIcon } from "../../components/icon";
import { LockIcon } from "../../components/icon";
import { ProtectIcon } from "../../components/icon";
import { ModeIcon } from "../../components/icon";
import { NavIcon } from "../../components/icon/navIcon";
import NavBar from "../../components/navBar";
import { bugStyle } from "./style";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import DropDown from "../../components/dropDown";
import VerBar from "../../components/verBar";
import DownloadIcon from '@mui/icons-material/Download';
import Issues from "../../components/issues/issues";
import CodeSmall from "../Issue";
const BugCard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [open, setOpen] = useState(true);

 
  const verData = {
    overView: "OverView Name V.2",
  };

  const issueData = {
    issue: "Issue Name V.3",
  };

  const cardData = [
    {
      count: "40",
      icon: <BugIcon />,
      subText: "Bugs",
      footerText: "Reliability",
      avatar: "C",
      color: {
        numberColor: "#BF0F9C",
      },
    },
    {
      count: "0",
      icon: <LockIcon />,
      subText: "Vulnerabilities",
      footerText: "Security",
      color: {
        backgroundColor: "#21E067",
        color: "#D5F9E9",
        numberColor: "#4A0FBF",
      },
      avatar: "A",
    },
    {
      count: "0",
      icon: <ProtectIcon />,
      subText: "Security Hotspots",
      footerText: "Security Review",
      avatar: "A",
      color: {
        backgroundColor: "#21E067",
        color: "#D5F9E9",
        numberColor: "#0F9CBF",
      },
      data: "-",
      rightText: "Reviewed",
    },
    {
      count: "5d 4h",
      subText: "Debt",
      footerText: "Maintainability",
      color: {
        backgroundColor: "#21E067",
        color: "#D5F9E9",
        numberColor: "#0F9CBF",
      },
      avatar: "A",
      data: <ModeIcon />,
      rightText: "Code Smells",
      number: "672",
    },
  ];
const handleClick =()=>{
  
  setOpen(false)
}
  const tabs = [
    {
      label: (
        <Typography variant="body1" sx={bugStyle.typeSx}>
          Overview
        </Typography>
      ),
      value: 1,
      body: (
        <div>
          <VerBar verData={verData} />
          <Box sx={bugStyle.outSX}>
            <Grid container spacing={1.5}>
              {cardData.map((val, i) => (
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <StatCard
                    count={val.count}
                    icon={val.icon}
                    subText={val.subText}
                    footerText={val.footerText}
                    avatar={val.avatar}
                    color={val.color}
                    data={val.data}
                    rightText={val.rightText}
                    number={val.number}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Chart />
              </Grid>
            </Grid>
          </Box>
        </div>
      ),
    },
    {
      label: (
        <Typography
          variant="body1"
          sx={bugStyle.typeSx}
          color="black"
          textTransform="capitalize"
        >
          Issues
        </Typography>
      ),
      value: 2,
      body: (
        <div>
          
          
          
          <Box>
            
            <VerBar issueData={issueData} />
          {open ?  <Issues handleClick={handleClick}/>            
             :  <CodeSmall/>}

          </Box>
          
        </div>
      ),
    },
  ];

  return (
    <>
      <Box>
        
        <DataTabs
          tabs={tabs}
          activeTab={activeTab}
          handleChangeTab={(val) => setActiveTab(val)}
        />
        
      </Box>
    </>
  );
};

export default BugCard;
