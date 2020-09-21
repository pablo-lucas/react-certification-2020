import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Navbar from '../Navbar';
import youtube from '../../apis/youtube';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar onFormSubmit={search} />
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage videos={videos} setSelectedVideo={setSelectedVideo} />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="/watch/:id">
                <VideoPage
                  selectedVideo={selectedVideo}
                  videos={videos}
                  setSelectedVideo={setSelectedVideo}
                />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
