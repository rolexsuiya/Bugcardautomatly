import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { chartStyle } from "../chartComponent/style";

export const SelectInput = () => {
    const [select, setSelect] = useState("");

    const handleChange = (e) => {
      setSelect(e.target.value);
    };
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      placeholder="Issues"
      value={select}
      onChange={handleChange}
      sx={chartStyle.selectSx}
    >
      <MenuItem value={0}>Bugss</MenuItem>
      <MenuItem value={20}>Code Smells</MenuItem>
      <MenuItem value={30}>Vulnerabilities</MenuItem>
    </Select>
  );
};

