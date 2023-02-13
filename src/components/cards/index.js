import { Avatar, Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { cardstyle } from "./style";

export default function StatCard(props) {
  const {
    data,
    color,
    count,
    icon,
    subText = "",
    footerText = "",
    avatar,
    rightText = "",
    number,
  } = props;

  return (
    <Card sx={cardstyle?.rediesSx}>
      <Box sx={cardstyle?.cardSx}>
        <Stack
          sx={cardstyle?.stackSx}
          direction="row"
          justifyContent={"space-between"}
        >
          <Box sx={cardstyle?.boxSx}>
            <Typography
              sx={[cardstyle?.numberSx, { color: color?.numberColor }]}
            >
              {count}
            </Typography>
            <Box sx={{marginTop:"4px"}}>{icon}</Box>
          </Box>
          <Box sx={cardstyle?.boxxxSx}>
            <Typography
              sx={[cardstyle?.numberSx, { color: color?.numberColor }]}
            >
              {data}
            </Typography>
            <Box sx={[cardstyle?.numberSx, { color: color?.numberColor }]}>
              {number}
            </Box>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          <Box>
            <Typography sx={cardstyle?.HeadText}>{subText}</Typography>
          </Box>
          <Typography sx={cardstyle?.HeadText}>{rightText}</Typography>
        </Stack>
      </Box>
      <Box sx={[cardstyle?.cardContent, { backgroundColor: color?.color }]}>
        <Typography sx={cardstyle?.cardText}>{footerText}</Typography>
        <Avatar
          sx={[
            cardstyle?.cardAvater,
            { backgroundColor: color?.backgroundColor },
          ]}
        >
          {avatar}
        </Avatar>
      </Box>
    </Card>
  );
}
