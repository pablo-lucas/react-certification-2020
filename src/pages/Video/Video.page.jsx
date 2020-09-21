import React from 'react';
import { Grid } from 'semantic-ui-react';
import VideoDetail from '../../components/VideoDetail';
import VideoList from '../../components/VideoList';

const Video = ({ selectedVideo, videos, setSelectedVideo }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <VideoDetail video={selectedVideo} videos={videos} />
        </Grid.Column>
        <Grid.Column width={6}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Video;
