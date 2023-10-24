import { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import StoryCard from './components/Card';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/topStories')
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.results);
      setData(data.data.results);
    })
  }, [])
  return (
    <Box>
      <Typography sx={{textAlign: 'center', mb: 10}} variant="h2" gutterBottom>
        The New York Times
      </Typography>
      <Box sx={{ flexGrow: 1, maxWidth: 1000, margin: 'auto'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((node, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <StoryCard data={node}/>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}

export default App;
