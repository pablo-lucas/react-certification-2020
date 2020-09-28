import './VideoItem.styles.css';
import React from 'react';
import styled from 'styled-components';
import { Image, List } from 'semantic-ui-react';

const StyledListContet = styled(List.Content)`
  &&& {
    .header {
      color: ${(props) => props.theme.icon};
    }
    .description {
      color: ${(props) => props.theme.meta};
    }
  }
`;
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item className="video-item" onClick={() => onVideoSelect(video)}>
      <Image
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <StyledListContet>
        <List.Header>{video.snippet.title}</List.Header>
        <List.Description>{video.snippet.channelTitle}</List.Description>
      </StyledListContet>
    </List.Item>
  );
};

export default VideoItem;
