import React, { useRef } from 'react';
import { Header } from 'semantic-ui-react';
import VideoGrid from '../../components/VideoGrid';
import { useAuth } from '../../providers/Auth';

const Favorites = ({ setSelectedVideo }) => {
  const { getFavorites } = useAuth();
  const sectionRef = useRef(null);

  return (
    <section className="" ref={sectionRef}>
      <Header as="h1" style={{ color: 'grey' }}>
        Favorites
      </Header>
      <VideoGrid
        videos={getFavorites()}
        onVideoSelect={setSelectedVideo}
        isFromFavorite
      />
    </section>
  );
};

export default Favorites;
