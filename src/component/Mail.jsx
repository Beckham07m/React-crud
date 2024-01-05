import { Container, Typography,Box } from "@mui/material";
import Navbar from "./Navbar";

function Mail() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "10px" }}>
          <Typography variant="h4" gutterBottom>
            this is mail page
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Mail;