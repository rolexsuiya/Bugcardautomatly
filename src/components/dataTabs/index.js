import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import React from "react";
import { navTabs } from "./style";

const useStyles = makeStyles((theme) => ({
  tab: {
    "&.Mui-selected": {
      color: "#000",
    },
  },

  underTab: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#0065e6",
      height: "3px",
      borderRadius: "12px 12px 0px 0px",
    },
  },
}));
export const DataTabs = ({ tabs = [], activeTab, handleChangeTab }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    handleChangeTab(newValue);
  };

  return (
    <div>
      <Box>
        <TabContext value={activeTab}>
          <Box sx={navTabs.tabSx}>
            <TabList
              className={classes.underTab}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {tabs?.map((tab) => (
                <Tab
                  className={classes.tab}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0px" }} value={activeTab}>
            {tabs?.find((tab) => tab.value === activeTab)?.body}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
