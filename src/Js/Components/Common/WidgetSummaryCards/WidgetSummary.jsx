import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { CropSquare, Group, Public } from "@mui/icons-material";

WidgetSummary.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default function WidgetSummary({ title, total, color = "primary" }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        borderRadius: "10px",
        border: "3px solid #dfdfdf",
      }}
    >
      <div
        sx={{
          color: "gray",
        }}
      >
        {title === "Countries" ? (
          <Public style={{ fontSize: "40px" }} />
        ) : title === "Population" ? (
          <Group style={{ fontSize: "40px" }} />
        ) : (
          <CropSquare style={{ fontSize: "40px" }} />
        )}
      </div>

      <Typography variant="h4">
        {total}
        {title === "Area" ? " km2" : ""}
      </Typography>

      <Typography
        variant="h6"
        sx={{ opacity: 0.72, fontFamily: "serif", fontWeight: "500" }}
      >
        {title}
      </Typography>
    </Card>
  );
}
