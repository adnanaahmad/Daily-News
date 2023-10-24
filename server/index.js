const express = require('express');
const axios = require('axios');
const app = express();

const port = 3200;


app.get('/topStories', async(req, res) => {
    try {
        const apiKey = 'fONYDRpTk2fOUOlGQzWN9mT4OpB9PkUu';
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
    
        // Make a GET request to the New York Times API
        const response = await axios.get(apiUrl);
    
        // Send the data from the New York Times API as a response
        res.status(200).json({
            status: 'success',
            data: response.data
        });
      } catch (error) {
        console.error('Error fetching data from New York Times API:', error);
        res.status(500).send('Internal Server Error');
      }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});