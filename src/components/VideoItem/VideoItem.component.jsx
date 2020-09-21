import './VideoItem.styles.css';
import React from 'react';
import { Image, List } from 'semantic-ui-react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item className="video-item" onClick={() => onVideoSelect(video)}>
      <Image
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <List.Content>
        <List.Header>{video.snippet.title}</List.Header>
        <List.Description>{video.snippet.channelTitle}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;
