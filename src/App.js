import React from "react";
import { BrowserRouter } from "react-router-dom";
import DropDown from "./components/dropDown";
import { NavIcon } from "./components/icon/navIcon";
import NavBar from "./components/navBar";
import AppRoutes from "./router";
import DownloadIcon from '@mui/icons-material/Download';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { bugStyle } from "./screen/bugCard/style";
function App() {

  const navData = {
    icons: <NavIcon />,
    headTitle: "Project Name",
    downloadIcon:<DownloadIcon  sx={bugStyle.iconSx}/>,
    homeIcon: <HomeOutlinedIcon sx={bugStyle.iconSx}/>,
    downArrow: <DropDown/>,
  };

  return (
    <>
    <NavBar navData={navData} />
    <BrowserRouter>

    <AppRoutes/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
