import { Box, Typography } from "@mui/material";

function AboutSection() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ color: "var(--theme-main-color)", fontWeight: "bold" }}
      >
        About TurnKey Solutions Co.
      </Typography>
    </Box>
  );
}

export default AboutSection;
