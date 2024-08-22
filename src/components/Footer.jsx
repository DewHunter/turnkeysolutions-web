import { Box, Typography } from "@mui/material";

function ViteLogo() {
  return <object data="vite.svg" height="20px" width="20px" />;
}
function ReactLogo() {
  return <object data="react.svg" height="20px" width="20px" />;
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      className="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        color: "gray",
        backgroundColor: "var(--theme-secondary-color)",
      }}
    >
      <Typography variant="subtitle1">
        Copyright © {currentYear} TurnKey Solutions Co. All Rights Reserved.
      </Typography>
      <div>
        <Typography variant="subtitle1">Powered by</Typography>
        <ReactLogo /> + <ViteLogo /> + 🌮
      </div>
    </Box>
  );
}

export default Footer;
