import React from 'react'
import { Container, Typography, Box, Paper, Grid } from '@mui/material'

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Career Sync
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Empowering Career Management and Professional Growth
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              Career Sync is dedicated to streamlining the career development process for professionals and organizations. 
              We provide a comprehensive platform that helps manage professional growth, track achievements, and facilitate 
              career advancement opportunities.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              What We Offer
            </Typography>
            <Typography paragraph>
              • Career progress tracking and milestone management<br />
              • Professional development planning tools<br />
              • Achievement documentation and portfolio building<br />
              • Performance review management<br />
              • Goal setting and progress monitoring
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography paragraph>
                We envision a future where career development is transparent, organized, and accessible to everyone. 
                Through our platform, we aim to bridge the gap between professional aspirations and achievements, 
                making career growth a structured and attainable journey.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
