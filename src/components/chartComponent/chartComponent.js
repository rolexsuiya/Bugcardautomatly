import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import React from "react";
import { RenderLineChart } from "../lineChart";
import { SelectInput } from "../select";
import { chartStyle } from "./style";

const data = [
  { name: " ", Wed17: 30, CodeSmells: 40, Vulnerabilities: 60 },
  { name: "Wed 17", Bugs: 400, CodeSmells: 800, Vulnerabilities: 400 },
  { name: "Fri 19", Bugs: 400, CodeSmells: 100, Vulnerabilities: 500 },
  { name: "Sun 21", Bugs: 400, CodeSmells: 500, Vulnerabilities: 100 },
  { name: "Tue 23", Bugs: 400, CodeSmells: 300, Vulnerabilities: 200 },
  { name: "Thu 25", Bugs: 400, CodeSmells: 400, Vulnerabilities: 700 },
];

const midcardValue = {
  number: "18.6%",
  subTitle: "Duplications on 28k Lines",
  subNum: "40",
  dupText: "Duplicated Blocks",
};

const chartCard = {
  title: "Activity",
};

export const Chart = () => {
  return (
    <>
      <Grid container spacing={1.8}>
        {/*Dublicated  Blocks */}
        <Grid item xs={12} sm={3} md={4} lg={3}>
          <Paper elevation={2} sx={chartStyle.rediesSX}>
            <Stack spacing={2} p={3}>
              <Box>
                <Box sx={chartStyle.cercleBoder}>
                  <Box sx={chartStyle.cercleColor}></Box>
                </Box>
              </Box>

              <Box>
                <Typography sx={chartStyle.percetSx}>
                  {midcardValue.number}
                </Typography>
              </Box>

              <Box>
                <Typography sx={chartStyle.subTitle}>
                  {midcardValue.subTitle}
                </Typography>
              </Box>
              <Box sx={chartStyle.horizandalBar}></Box>
              <Box>
                <Typography sx={chartStyle.subTitle2}>
                  {midcardValue.subNum}
                </Typography>
              </Box>
              <Box>
                <Typography sx={chartStyle.subTitle}>
                  {midcardValue.dupText}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/*Activity Chats */}
        <Grid item xs={12} sm={9} md={8} lg={6}>
          <Paper sx={chartStyle.chartSX} elevation={2}>
            <Box>
              <Grid
                height={"100%"}
                container
                justifyContent={"space-between"}
                p={2}
              >
                <Typography fontWeight={600}>{chartCard.title}</Typography>
                <SelectInput />
              </Grid>
              <Box height={{ xs: "70vw", sm: "33vw", md: "14vw" }}>
                <RenderLineChart data={data} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={0} lg={3}></Grid>
      </Grid>
    </>
  );
};

export default Chart;
