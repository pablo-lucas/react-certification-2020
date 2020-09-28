import React from 'react';
import { useHistory } from 'react-router';
import { Card as SemanticCard, Image } from 'semantic-ui-react';

const Card = ({ video, onVideoSelect, isFromFavorite }) => {
  const history = useHistory();

  const onLinkTo = () => {
    const linkTo = isFromFavorite
      ? `/favorites/${video.id.videoId}`
      : `/watch/${video.id.videoId}`;

    history.push(linkTo);
  };

  return (
    <SemanticCard
      fluid
      as="div"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        onVideoSelect(video);
        onLinkTo();
      }}
    >
      <Image src={video.snippet.thumbnails.medium.url} wrapped ui={false} />
      <SemanticCard.Content>
        <SemanticCard.Header>
          <h4>{video.snippet.title}</h4>
        </SemanticCard.Header>
        <SemanticCard.Meta>
          <span className="date">{video.snippet.channelTitle}</span>
        </SemanticCard.Meta>
      </SemanticCard.Content>
    </SemanticCard>
  );
};

export default Card;
