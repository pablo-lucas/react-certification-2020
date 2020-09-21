import React from 'react';
import { Embed, Header, Segment } from 'semantic-ui-react';

const VideoDetail = ({ video }) => {
  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Embed
        id={video.id.videoId}
        placeholder={video.snippet.thumbnails.high.url}
        source="youtube"
      />
      <Segment>
        <Header as="h4">{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    </>
  );
};

export default VideoDetail;
