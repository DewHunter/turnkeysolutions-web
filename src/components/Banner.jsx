import { Button, Typography, Unstable_Grid2 } from "@mui/material";

function Banner() {
  return (
    <div
      id="home"
      style={{
        backgroundColor: "var(--theme-main-color)",
      }}
    >
      <Unstable_Grid2 container spacing={0} direction="row">
        <div
          style={{
            width: "50%",
            maxHeight: "450px",
            overflow: "hidden",
            backgroundColor: "#a7a6a7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
            className="landing-logo"
            src="turnkey_landingpage_logo.webp"
            alt="Turnkey Solutions landing page logo"
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            Building Stability,
            <br />
            Restoring Confidence
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Affordable and reliable solutions for <br />
            all your home repair needs
          </Typography>
          <Button variant="contained" color="secondary">
            Get a quote
          </Button>
        </div>
      </Unstable_Grid2>
    </div>
  );
}

export default Banner;
