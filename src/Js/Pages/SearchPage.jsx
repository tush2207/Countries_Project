import { Card, CardContent, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import CountrtiesDetails from "../Components/Hooks/Context/Context";

const SearchPage = () => {

  const data = useContext(CountrtiesDetails);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      {data.map((item) => (
        <Card
          key={item._id}
          sx={{ width: "100%", cursor: "pointer" }}
          // onClick={() => onClickHandler(item._id)}
        >
          <CardContent>
            <Stack spacing={1}>
              {data.map((cardField) => (
                <Typography key={cardField.label} fontSize={15}>
                  <Typography color="GrayText" component="span" fontSize={14}>
                    {cardField.Name}:
                  </Typography>{" "}
                  {/* {item[cardField.field]} */}
                </Typography>
              ))}
              {/* <Stack direction="row">
                    <Typography variant="subtitle2" color={teal[700]} mr={1}>
                      View more{" "}
                    </Typography>
                    <EastOutlined fontSize="small" sx={{ color: teal[700] }} />
                  </Stack> */}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default SearchPage;
