import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button, Divider, Embed, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth';
import { useVideoStorageState } from '../../providers/Video';

const existInFavorites = (videos, id) => videos.some((fav) => fav.id.videoId === id);

const StyledSegment = styled(Segment)`
  &&&{
    background: ${(props) => props.theme.backgroundColor};
    .header {
      color: ${(props) => props.theme.icon}
    }
`;

const VideoDetail = ({ video }) => {
  const { authenticated } = useAuth();
  const { videos, addVideo, removeVideo } = useVideoStorageState();
  const isFavorite = useMemo(() => existInFavorites(videos, video.id.videoId), [
    videos,
    video.id.videoId,
  ]);

  const onAddFavorite = (videoSelected) => () => {
    addVideo(videoSelected);
  };

  const onRemoveFavorite = (videoSelected) => () => {
    removeVideo(videoSelected);
  };

  return (
    <>
      {video.id && (
        <>
          <Embed
            id={video.id.videoId}
            placeholder={video.snippet.thumbnails.high.url}
            source="youtube"
          />
          <StyledSegment compact>
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
                        onClick={
                          isFavorite ? onRemoveFavorite(video) : onAddFavorite(video)
                        }
                        data-testid="favorite-btn"
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
          </StyledSegment>
        </>
      )}
    </>
  );
};

export default VideoDetail;
