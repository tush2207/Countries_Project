import { Card, Typography } from "@mui/material";
import { CropSquare, Group, Public } from "@mui/icons-material";

export default function WidgetSummary({ title, total, onClick }) {
  return (
    <Card
      sx={{
        py: 5,
        textAlign: "center",
        borderRadius: "10px",
        border: "3px solid #dfdfdf",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#dfdfdf",
          boxShadow: 5,
          color: "black",
        },
      }}
      onClick={onClick}
    >
      <div
        sx={{
          color: "gray",
        }}
      >
        {title === "Countries" ? (
          <Public style={{ fontSize: "40px", color: "gray" }} />
        ) : title === "Population" ? (
          <Group style={{ fontSize: "40px", color: "gray" }} />
        ) : (
          <CropSquare style={{ fontSize: "40px", color: "gray" }} />
        )}
      </div>

      <Typography variant="h4">
        {total}
        {title === "Area" ? " km2" : ""}
      </Typography>

      <Typography
        sx={{
          opacity: 0.72,
          fontWeight: "500",
          fontFamily: "serif",
          fontSize:"25px"
        }}
      >
        {title}
      </Typography>
    </Card>
  );
}
