import React, { useRef } from 'react';
import { Header } from 'semantic-ui-react';
import VideoGrid from '../../components/VideoGrid';
import { useVideoStorageState } from '../../providers/Video';

const Favorites = ({ setSelectedVideo }) => {
  const { videos } = useVideoStorageState();
  const sectionRef = useRef(null);

  return (
    <section className="" ref={sectionRef}>
      <Header as="h1" style={{ color: 'grey' }}>
        Favorites
      </Header>
      <VideoGrid videos={videos} onVideoSelect={setSelectedVideo} isFromFavorite />
    </section>
  );
};

export default Favorites;
