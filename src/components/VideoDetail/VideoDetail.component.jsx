import React from 'react';
import { Button, Divider, Embed, Grid, Header, Icon, Segment } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

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
            <Grid.Column width={2}>
              <div>
                <Button animated floated="right" size="tiny" color="yellow">
                  <Button.Content visible>Favorite</Button.Content>
                  <Button.Content hidden>
                    <Icon name="favorite" />
                  </Button.Content>
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted />
        <p>{video.snippet.description}</p>
      </Segment>
    </>
  );
};

export default VideoDetail;
