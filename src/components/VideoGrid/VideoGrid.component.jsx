import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Card from '../Card';

const VideoGrid = ({ videos, onVideoSelect, isFromFavorite }) => {
  return (
    <Grid doubling columns={4}>
      {videos &&
        videos.map((video) => {
          return (
            <Grid.Column key={video.snippet.title} width={4} stretched>
              <Link
                to={
                  isFromFavorite
                    ? `/favorites/${video.id.videoId}`
                    : `/watch/${video.id.videoId}`
                }
                style={null}
              >
                <Card video={video} onVideoSelect={onVideoSelect} />
              </Link>
            </Grid.Column>
          );
        })}
    </Grid>
  );
};

export default VideoGrid;
