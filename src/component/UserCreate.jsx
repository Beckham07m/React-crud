import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography, TextField, Button, Card, CardContent } from '@mui/material';

export default function UserCreate() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="md" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Create Users
          </Typography>
          <Card>
          <CardContent>
          <form >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField id="fname" label="First Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField id="lname" label="Last Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField id="username" label="Username" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField id="email" label="Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                  <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} align="right">
                  <Button variant="contained" >Create</Button>
              </Grid>
            </Grid>
          </form>
          </CardContent>
          </Card>
        </Container>
    </React.Fragment>
  );
}