import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
export const TicketingPage = ({ open, toggleDrawer }) => {
  return (
    <>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { borderRadius: "20px 20px 0 0", padding: 2 },
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: 750,
            textAlign: "center",
          }}
          role="presentation"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Typography variant="h6" sx={{ mb: 2 }}>
            Bottom Sheet Content
          </Typography>

          <Typography variant="body1">This is your bottom sheet.</Typography>
        </Box>
      </Drawer>
    </>
  );
};
