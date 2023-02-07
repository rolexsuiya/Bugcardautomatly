import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";

export const ListNested = ({
  titlePrimary,
  option,
  onClick,
  sxButton,
  sxColaps,
  sxTitle,
  onClickNav
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
        <Box onClick={onClickNav}>

      <List>
        <ListItemButton onClick={handleClick} sx={sxButton} disableRipple>
          <ListItemText primary={titlePrimary} sx={sxTitle} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit sx={sxColaps}>
          {option}
          {onClick}
        </Collapse>
      </List>
        </Box>
    </>
  );
};

const propTypes = {
  sxButton: PropTypes.object,
  sxTitle: PropTypes.object,
  titlePrimary: PropTypes.string,
  sxColaps: PropTypes.object,
};
