import { Card, Typography } from "@mui/material";
import { CropSquare, Group, Public } from "@mui/icons-material";

export default function WidgetSummary({ title, total, onClick }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        borderRadius: "10px",
        border: "3px solid #dfdfdf",
        cursor: "pointer",
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
        variant="h6"
        sx={{ opacity: 0.72, fontFamily: "serif", fontWeight: "500" }}
      >
        {title}
      </Typography>
    </Card>
  );
}
