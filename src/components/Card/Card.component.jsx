import React from 'react';
import { useHistory } from 'react-router';
import { Card as SemanticCard, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(SemanticCard)`
  &&& {
    background-color: ${(props) => props.theme.card.backgroundColor};
    &:hover {
      background-color: ${(props) => props.theme.card.backgroundColor};
    }
    .header {
      color: ${(props) => props.theme.textColor};
    }
    .meta {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Card = ({ video, onVideoSelect, isFromFavorite }) => {
  const history = useHistory();

  const onLinkTo = () => {
    const linkTo = isFromFavorite
      ? `/favorites/${video.id.videoId}`
      : `/watch/${video.id.videoId}`;

    history.push(linkTo);
  };

  return (
    <StyledCard
      fluid
      style={{ cursor: 'pointer' }}
      onClick={() => {
        onVideoSelect(video);
        onLinkTo();
      }}
    >
      <Image src={video.snippet.thumbnails.medium.url} wrapped ui={false} />
      <StyledCard.Content>
        <StyledCard.Header>
          <h4>{video.snippet.title}</h4>
        </StyledCard.Header>
        <StyledCard.Meta>
          <span className="date">{video.snippet.channelTitle}</span>
        </StyledCard.Meta>
      </StyledCard.Content>
    </StyledCard>
  );
};

export default Card;
