import { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

function GalleryHighlights() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const handleOpen = (src) => {
    setOpen(true);
    setImgSrc(src);
  };
  const handleClose = () => setOpen(false);

  return (
    <div
      id="gallery"
      style={{
        backgroundColor: "var(--theme-secondary-bg-color)",
        padding: "1em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: "0.5em",
          color: "var(--theme-main-color)",
          fontWeight: "bold",
        }}
      >
        Picture Perfect: Our Home Repair Projects
      </Typography>
      <Box sx={{ width: "70%" }}>
        <ImageList cols={3}>
          {imageData.map((item) => (
            <ImageListItem
              className="zoom-on-hover"
              key={item.img}
              onClick={() => handleOpen(item.img)}
            >
              <img src={`${item.img}`} alt={item.alt} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalContainerStyle}
      >
        <Box sx={modalStyle}>
          <img style={imgModalStyle} src={imgSrc} />
        </Box>
      </Modal>
    </div>
  );
}

const imageData = [
  {
    img: "gallery_pic_1.webp",
    alt: "patio finished in cement",
  },
  {
    img: "gallery_pic_2.webp",
    alt: "fixed irrigation leak",
  },
  {
    img: "gallery_pic_3.webp",
    alt: "fixed basement thing",
  },
  {
    img: "gallery_pic_4.webp",
    alt: "fixed crawlspace, new foundation",
  },
  {
    img: "gallery_pic_5.webp",
    alt: "fixed crawlspace, new foundation, clean",
  },
  {
    img: "gallery_pic_6.webp",
    alt: "fixed basement",
  },
];

const modalContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const modalStyle = { width: "80%" };
const imgModalStyle = { width: "100%" };

export default GalleryHighlights;
