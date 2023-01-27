import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';


function dashboard() {
    return (
      <Container maxwidth="lg">
        <h1>This is Container</h1>
        <Grid container spacing={3}>
          <Grid xs>
          <Button variant="outlined">Overview</Button>
          </Grid>
          <Grid xs>
          <Button variant="outlined">Map</Button>
          </Grid>
          <Grid xs>
          <Button variant="outlined">Heatmap</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default dashboard;