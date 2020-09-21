import React from 'react';
import { Card as SemanticCard, Image } from 'semantic-ui-react';

const Card = ({ title, thumbnail }) => {
  return (
    <SemanticCard>
      <Image src={thumbnail} wrapped ui={false} />
      <SemanticCard.Content>
        <SemanticCard.Header>{title}</SemanticCard.Header>
        <SemanticCard.Meta>
          <span className="date">Joined in 2015</span>
        </SemanticCard.Meta>
      </SemanticCard.Content>
    </SemanticCard>
  );
};

export default Card;
