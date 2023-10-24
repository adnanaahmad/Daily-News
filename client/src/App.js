import { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import StoryCard from './components/Card';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  // Define the asynchronous function to fetch top stories
  const getTopStories = async () => {
    try {
      const response = await axios.get('/topStories');
      //console.log(response.data.data);
      setData(response.data.data.results);
    } catch (error) {
      console.error('Error fetching top stories:', error);
    }
  };

  useEffect(() => {
    // Call the getTopStories function when the component is mounted
    getTopStories();
  }, []);
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
