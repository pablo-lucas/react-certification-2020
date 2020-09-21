import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Card from '../../components/Card';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage({ videos }) {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const renderedVideos = () => {
    if (videos) {
      return (
        <Grid doubling columns={4}>
          {videos.map((video) => {
            return (
              <Grid.Column key={video.snippet.title} width={4} stretched>
                <Card
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.medium.url}
                />
              </Grid.Column>
            );
          })}
        </Grid>
      );
    }
  };

  return (
    <section className="" ref={sectionRef}>
      {renderedVideos()}
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
