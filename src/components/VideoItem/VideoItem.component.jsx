import './VideoItem.styles.css';
import React from 'react';
import styled from 'styled-components';
import { Image, List } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router';

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
  const history = useHistory();
  const location = useLocation();

  const onRedirectVideo = () => {
    const isFavorite = location.pathname.includes('favorites');
    history.push(
      `${isFavorite ? `/favorites/${video.id}` : `/watch/${video.id.videoId}`}`
    );
  };

  return (
    <List.Item
      className="video-item"
      onClick={() => {
        onVideoSelect(video);
        onRedirectVideo();
      }}
    >
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
