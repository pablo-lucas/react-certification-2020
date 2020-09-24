import React, { useEffect, useState } from 'react';
import { Button, Divider, Embed, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth';

const existInFavorites = (videos, id) => videos.some((fav) => fav.id.videoId === id);

const VideoDetail = ({ video }) => {
  const { authenticated, getFavorites, addFavorite, removeFavorite } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  const favorites = getFavorites();

  useEffect(() => {
    if (authenticated && favorites) {
      setIsFavorite(existInFavorites(favorites, video.id.videoId));
    }
  }, []);

  useEffect(() => {
    if (authenticated && favorites) {
      setIsFavorite(existInFavorites(favorites, video.id.videoId));
    }
  }, [video]);

  const onAddFavorite = (videoSelected) => () => {
    addFavorite(videoSelected);
    setIsFavorite(!isFavorite);
  };

  const onRemoveFavorite = (videoSelected) => () => {
    removeFavorite(videoSelected);
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Embed
        id={video.id.videoId}
        placeholder={video.snippet.thumbnails.high.url}
        source="youtube"
      />
      <Segment compact>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <Header as="h4">{video.snippet.title}</Header>
            </Grid.Column>
            {authenticated && (
              <Grid.Column width={2}>
                <div>
                  <Button
                    animated
                    floated="right"
                    size="tiny"
                    color={isFavorite ? 'yellow' : 'grey'}
                    onClick={isFavorite ? onRemoveFavorite(video) : onAddFavorite(video)}
                  >
                    <Button.Content visible>Favorite</Button.Content>
                    <Button.Content hidden>
                      <Icon name="favorite" />
                    </Button.Content>
                  </Button>
                </div>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
        <Divider inverted />
        <p>{video.snippet.description}</p>
      </Segment>
    </>
  );
};

export default VideoDetail;
