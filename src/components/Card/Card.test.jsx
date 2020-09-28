import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';
import { video } from '../../__mocks__/videoMock';

describe('Card component', () => {
  it('Matches the snapshot', () => {
    const card = create(<Card video={video} isFromFavorite={false} />);
    expect(card.toJSON()).toMatchSnapshot();
  });

  it('renders provided properties', () => {
    render(<Card video={video} isFromFavorite={false} />);

    expect(screen.getByText(video.snippet.title)).toBeTruthy();
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      video.snippet.thumbnails.medium.url
    );
  });
});
