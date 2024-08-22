import { AppBar, Toolbar, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";

function NavBar() {
  const [selectedTab, setTab] = useState(0);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 99;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const tabToSection = ["home", "aboutus", "gallery", "ourservices", "contact"];

  const handleTabChange = (_event, newTab) => {
    scrollToSection(tabToSection[newTab]);
    setTab(newTab);
  };

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ color: "var(--theme-main-color)", backgroundColor: "#fff" }}
    >
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4">TurnKey Solutions Company</Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          role="navigation"
        >
          <Tab label="HOME" sx={{ fontWeight: "bold" }} />
          <Tab label="ABOUT US" sx={{ fontWeight: "bold" }} />
          <Tab label="GALLERY" sx={{ fontWeight: "bold" }} />
          <Tab label="OUR SERVICES" sx={{ fontWeight: "bold" }} />
          <Tab label="CONTACT" sx={{ fontWeight: "bold" }} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
