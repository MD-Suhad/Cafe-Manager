import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="body1">
          Here you can add various widgets and data visualizations.
        </Typography>
      </Box>
    </Container>
  );
}

export default Dashboard;