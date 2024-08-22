import { Box, Container, Typography, Unstable_Grid2 } from "@mui/material";

function AboutSection() {
  return (
    <Container id="aboutus">
      <Typography
        variant="h4"
        sx={{
          margin: "1em",
          color: "var(--theme-main-color)",
          fontWeight: "bold",
        }}
      >
        About TurnKey Solutions Co.
      </Typography>
      <Unstable_Grid2 container spacing={2}>
        <Unstable_Grid2 xs={12} md={6}>
          <Box sx={{ margin: "1em" }}>
            <img
              src="about_image_1.webp"
              alt="Wooden table with builder tools"
              style={{ width: "100%" }}
            />
          </Box>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2em",
            }}
          >
            <Typography variant="h5" sx={{ margin: "1em" }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ color: "#696969" }}>
              At TurnKey Solutions Co., we have been providing high-quality home
              repair services for over 10 years. Our team of experienced
              professionals strives to exceed your expectations with every
              project we take on.
            </Typography>
          </Box>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2em",
            }}
          >
            <Typography variant="h5" sx={{ margin: "1em" }}>
              Our Services
            </Typography>
            <Typography variant="body1" sx={{ color: "#696969" }}>
              We offer home repair services, including moisture control and
              structural. Whether you need a small repair or a major renovation,
              we have the skills and expertise to get the job done right.
            </Typography>
          </Box>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12} md={6}>
          <Box sx={{ margin: "1em" }}>
            <img
              src="about_image_2.webp"
              alt="Crawlspace before and after pictures, second looks clean and organized"
              style={{ width: "100%" }}
            />
          </Box>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12} md={6}>
          <Box sx={{ margin: "1em" }}>
            <img
              src="about_image_3.webp"
              alt="A bunch of tools on a wooden table"
              style={{ width: "100%" }}
            />
          </Box>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2em",
            }}
          >
            <Typography variant="h5" sx={{ margin: "0.5em" }}>
              Our Process
            </Typography>
            <Typography variant="body1" sx={{ color: "#696969" }}>
              We believe in transparent and open communication with our clients.
              From the initial consultation to the final walk-through, we keep
              you informed every step of the way. Our goal is to make the home
              repair process as stress-free as possible.
            </Typography>
          </Box>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Container>
  );
}

export default AboutSection;
