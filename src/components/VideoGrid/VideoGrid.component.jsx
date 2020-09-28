import React from 'react';
import { Grid } from 'semantic-ui-react';
import Card from '../Card';

const VideoGrid = ({ videos, onVideoSelect, isFromFavorite }) => {
  return (
    <Grid doubling columns={4}>
      {videos &&
        videos.map((video) => {
          return (
            <Grid.Column key={video.snippet.title} width={4} stretched>
              <Card
                video={video}
                onVideoSelect={onVideoSelect}
                isFromFavorite={isFromFavorite}
              />
            </Grid.Column>
          );
        })}
    </Grid>
  );
};

export default VideoGrid;
