import React from 'react';
import { Card as SemanticCard, Image } from 'semantic-ui-react';

const Card = ({ video, onVideoSelect }) => {
  return (
    <SemanticCard
      as="div"
      style={{ cursor: 'pointer' }}
      onClick={() => onVideoSelect(video)}
    >
      <Image src={video.snippet.thumbnails.medium.url} wrapped ui={false} />
      <SemanticCard.Content>
        <SemanticCard.Header>
          <h4>{video.snippet.title}</h4>
        </SemanticCard.Header>
        <SemanticCard.Meta>
          <span className="date">Joined in 2015</span>
        </SemanticCard.Meta>
      </SemanticCard.Content>
    </SemanticCard>
  );
};

export default Card;
