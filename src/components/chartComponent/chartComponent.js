import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import React from "react";
import { RenderLineChart } from "../lineChart";
import { SelectInput } from "../select";
import { chartStyle } from "./style";

const labels = ["Wed 17", "Fri 19", "Sun 21", "Tue 23", "Thu 25"];
const data = {
  labels,
  datasets: [
    {
      label: "Bugs",
      data: [100, 200, 400, 600, 800],
      backgroundColor: "#36A2EB",
      borderColor: "#36A2EB",
      borderWidth: 1,
      yAxisID: "y",
    },
    {
      label: "Code Smells",
      data: [800, 400, 600, 200, 100],
      backgroundColor: "#FF9F40",
      borderColor: "#FF9F40",
      borderWidth: 1,
    },
    {
      label: "Vulnerabilities",
      data: [400, 600, 800, 200, 500],
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
    },
  ],
};

const midcardValue = {
  number: "18.6%",
  subTitle: "Duplications on 28k Lines",
  subNum: "40",
  dupText: "Duplicated Blocks",
};

const chartCard = {
  title: "Activity",
};

const selectOption = [
  { label: "Bugs" },
  { label: "code Smells" },
  { label: "Vulnerabilites" },
];

export const Chart = () => {
  return (
    <>
      <Grid container spacing={1.8}>
        {/*Dublicated  Blocks */}
        <Grid item xs={12} sm={3} md={4} lg={3}>
          <Box sx={chartStyle.rediesSX}>
            <Stack sx={chartStyle.padSX}>
              <Box>
                <Box sx={chartStyle.cercleBoder}>
                  <Box sx={chartStyle.cercleColor}></Box>
                </Box>
              </Box>

              <Box sx={chartStyle.gapSx}>
                <Typography sx={chartStyle.percetSx}>
                  {midcardValue.number}
                </Typography>
              </Box>

              <Box sx={chartStyle.gapSx}>
                <Typography sx={chartStyle.subTitle}>
                  {midcardValue.subTitle}
                </Typography>
              </Box>
              <Box sx={chartStyle.horizandalBar}></Box>
              <Box sx={chartStyle.gapSx}>
                <Typography sx={chartStyle.subTitle2}>
                  {midcardValue.subNum}
                </Typography>
              </Box>
              <Box sx={chartStyle.gapSx}>
                <Typography sx={chartStyle.subTitle}>
                  {midcardValue.dupText}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>

        {/*Activity Chats */}
        <Grid item xs={12} sm={9} md={8} lg={6}>
          <Box sx={chartStyle.chartSX}>
            <Box>
              <Grid
                height={"100%"}
                container
                justifyContent={"space-between"}
                p={2}
              >
                <Typography fontWeight={600}>{chartCard.title}</Typography>
                <SelectInput options={selectOption} placeholder="Issues" selectSx={chartCard.selectSx}/>
              </Grid>
              <Box p={2} sx={chartStyle.lineChart}>
                <RenderLineChart data={data} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={0} lg={3}></Grid>
      </Grid>
    </>
  );
};

export default Chart;
