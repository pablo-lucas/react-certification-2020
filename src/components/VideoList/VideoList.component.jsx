import React from 'react';
import { List } from 'semantic-ui-react';
import VideoItem from '../VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    );
  });

  return (
    <List divided relaxed>
      {renderedList}
    </List>
  );
};

export default VideoList;
