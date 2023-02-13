import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
import { CropSquare, Group, Public } from "@mui/icons-material";

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

WidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function WidgetSummary({ title, total, color = "primary" }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        borderRadius: "10px",
      }}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.5)} 100%)`,
        }}
      >
        {title === "Countries" ? (
          <Public style={{ fontSize: "40px" }} />
        ) : title === "Population" ? (
          <Group style={{ fontSize: "40px" }} />
        ) : (
          <CropSquare style={{ fontSize: "40px" }} />
        )}
      </StyledIcon>

      <Typography variant="h4">
        {total}
        {title === "Area" ? " km2" : ""}
      </Typography>

      <Typography variant="h6" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
