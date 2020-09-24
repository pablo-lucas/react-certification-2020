import React, { useRef } from 'react';
import VideoGrid from '../../components/VideoGrid';

import './Home.styles.css';

function HomePage({ videos, setSelectedVideo }) {
  const sectionRef = useRef(null);

  return (
    <section className="" ref={sectionRef}>
      <VideoGrid videos={videos} onVideoSelect={setSelectedVideo} />
    </section>
  );
}

export default HomePage;
