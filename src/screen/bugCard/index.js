import FileDownloadIcon from '@mui/icons-material/FileDownload';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import StatCard from "../../components/cards";
import Chart from "../../components/chartComponent/chartComponent";
import { DataTabs } from "../../components/dataTabs";
import DropDown from "../../components/dropDown";
import { BugIcon, LockIcon, ModeIcon, ProtectIcon } from "../../components/icon";
import { NavIcon } from "../../components/icon/navIcon";
import Issues from "../../components/issues/issues";
import NavBar from "../../components/navBar";
import VerBar from "../../components/verBar";
import useWindowDimensions from '../../hooks';
import CodeSmall from "../Issue";
import { bugStyle } from "./style";



const navData = {
  icons: <NavIcon />,
  headTitle: "Project Name",
  downloadIcon: <FileDownloadIcon sx={bugStyle.iconSx} />,
  homeIcon: <HomeOutlinedIcon  sx={bugStyle.iconHomeSx}/>,
  downArrow: <DropDown />,
};

const issueData = {
  issue: "Issue Name V.3",
};

const cardData = [
  {
    count: "40",
    icon: <BugIcon height={"18px"} width={"20px"}/>,
    subText: "Bugs",
    footerText: "Reliability",
    avatar: "C",
    color: {
      numberColor: "#BF0F9C",
    },
  },
  {
    count: "0",
    icon: <LockIcon height={"23px"} width={"18px"}/>,
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
    footerText: "Maintainability",
    color: {
      backgroundColor: "#21E067",
      color: "#D5F9E9",
      numberColor: "#0F9CBF",
    },
    avatar: "A",
    icon: <ModeIcon width={"18px"} height={"18px"}/>,
    subText: "Code Smells",
    count: "672",
  },
  {
    count: "0",
    icon: <ProtectIcon width={"18px"} height={"22px"}/>,
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
  
];

const BugCard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [open, setOpen] = useState(true);
  const size = useWindowDimensions();

  const handleClick = () => {
    setOpen(false);
  };
  const tabs = [
    {
      label: <Typography sx={bugStyle.typeSx}>Overview</Typography>,
      value: 1,
      body: (
        <div>
          <Box sx={{...bugStyle.outSX, height:size?.height - 164,}}>
            <Grid container spacing={1.8}>
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
              <Grid item xs={12} mt={1}>
                <Chart />
              </Grid>
            </Grid>
          </Box>
        </div>
      ),
    },
    {
      label: <Typography sx={bugStyle.typeSx}>Issues</Typography>,
      value: 2,
      body: (
        <div>
          <VerBar issueData={issueData} />
          <Box>
            {open ? (
              <Issues handleClick={handleClick} />
            ) : (
              <CodeSmall setOpen={setOpen} />
            )}
          </Box>
        </div>
      ),
    },
  ];

  return (
    <>
      <Box>
        <NavBar navData={navData} />
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
