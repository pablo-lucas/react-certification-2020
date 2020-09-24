import React from 'react';
import { Grid } from 'semantic-ui-react';
import VideoDetail from '../../components/VideoDetail';
import VideoList from '../../components/VideoList';
import { useAuth } from '../../providers/Auth';

const FavoritesDetail = ({ selectedVideo, setSelectedVideo }) => {
  const { getFavorites } = useAuth();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <VideoDetail video={selectedVideo} />
        </Grid.Column>
        <Grid.Column width={6}>
          <VideoList videos={getFavorites()} onVideoSelect={setSelectedVideo} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FavoritesDetail;
