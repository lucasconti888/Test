import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import somBotao from '../audio/stout.mp3';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Button, Grid, Icon } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Media(props) {
  const [loading, setLoading] = useState(props.loading);
  const audio = new Audio(somBotao);

  function handleClick() {
    audio.play();
    setLoading(true);
  }

  function handleClick2() {
    setLoading(false);
  }

  function handlePause() {
    audio.pause();
    audio.currentTime = 0;
    console.log('pause')
  }


  return (
    <>
      <Card sx={{ maxWidth: 345, m: 2, opacity: loading ? 0 : 1,
        transition: 'opacity 5s ease-out'
 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings" onClick={handleClick}>
                <MusicNoteIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              'Ted'
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              '5 hours ago'
            )
          }
        />

        {loading ? (
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        ) : (
          <CardMedia
            component="img"
            height="140"
            image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt="Nicola Sturgeon on a TED talk stage"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
              }
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};


export default function Facebook() {
  const [numCards, setNumCards] = useState(1);
  const cards = [
    { id: 1, loading: false },
    { id: 2, loading: false },
    { id: 3, loading: false },
    { id: 4, loading: false },
    { id: 5, loading: false },
    { id: 6, loading: false },
    // add more cards as needed
  ];
  
  function handleButtonClick() {
    setNumCards(numCards + 1);
  }
    

  function handleButtonClick2() {
    setNumCards(numCards - 1);
  }


  return (<>
    <IconButton onClick={handleButtonClick}><AddIcon/></IconButton>
    <IconButton onClick={handleButtonClick2}><RemoveIcon/></IconButton>
    <Grid container spacing={2} sx={{ mt: 4 }}>
    {cards.slice(0, numCards).map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Media loading={card.loading} />
          </Grid>
        ))}
       
      {/* {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Media loading={card.loading} />
        </Grid>
      ))} */}
    </Grid>
    </>
  );
}