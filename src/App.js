import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-27&sortBy=publishedAt&apiKey=fa44c6cae5c94f739b7db22c2c7cc475');
      const result = await response.json();
      const arr = result['articles'];
      setData(arr);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="padding">
        {data && (
          <ul>
            {data.map(item => (
              <Card key={item.title} sx={{ maxWidth: 345, margin: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.urlToImage}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary"  href={item.url} target="_blank" rel="noopener noreferrer">
                    click
                  </Button>
                </CardActions>
              </Card>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
