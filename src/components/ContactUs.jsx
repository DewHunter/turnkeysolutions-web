import { useState } from "react";
import {
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ContactUs() {
  const [files, setAttachedFiles] = useState([]);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    alert("jaja esto no hace nada!");
  }
  function handleFileClicked(index) {
    const newFiles = files.filter((_, itemIndex) => itemIndex !== index);
    setAttachedFiles(newFiles);
  }
  return (
    <Container
      id="contact"
      sx={{
        padding: "1em",
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
        Contact Us
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" sx={{ width: "45%" }}>
          <form onSubmit={handleSubmit}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5">To get a quote!</Typography>
              <TextField
                required
                name="contactName"
                label="Name"
                variant="filled"
                margin="dense"
              />
              <TextField
                required
                name="contactEmail"
                label="Email"
                variant="filled"
                margin="dense"
              />
              <TextField
                required
                name="contactPhone"
                label="Phone"
                variant="filled"
                margin="dense"
              />
              <TextField
                required
                name="contactAddress"
                label="Address (Street, City, Zip, Code)"
                variant="filled"
                margin="dense"
              />
              <TextField
                name="contactDetails"
                label="Details"
                placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
                multiline
                rows={5}
                variant="filled"
                margin="dense"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="text"
                  size="small"
                  startIcon={<AttachFileIcon />}
                >
                  Attach file(s)
                  <VisuallyHiddenInput
                    name="contactAttachments"
                    multiple
                    type="file"
                    onChange={(e) => {
                      setAttachedFiles(Array.from(e.target.files));
                    }}
                  />
                </Button>
                <Typography variant="subtitle2">
                  Attached ({files.length})
                </Typography>
              </div>
              <List dense>
                {files.map((file, id) => (
                  <ListItem
                    key={id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleFileClicked(id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={file.name} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="info"
                sx={{ width: "40%" }}
              >
                SEND
              </Button>
            </CardActions>
          </form>
        </Card>
      </Container>
    </Container>
  );
}

export default ContactUs;
