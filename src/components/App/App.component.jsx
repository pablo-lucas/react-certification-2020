import React, { createContext, useLayoutEffect, useReducer, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Favorites from '../../pages/Favorites';
import FavoritesDetail from '../../pages/FavoritesDetail';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import youtube from '../../apis/youtube';
import { initialState, reducer } from '../../providers/Theme/reducer';

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: sans-serif;
  }
`;
const ThemeContext = createContext();

function App() {
  const [visible, setVisible] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentTheme } = state;

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

  const onShowSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={currentTheme}>
          <ThemeContext.Provider value={{ ...state, dispatch }}>
            <GlobalStyles />
            <AuthProvider>
              <Navbar onFormSubmit={search} onShowSidebar={onShowSidebar} />
              <Sidebar visible={visible} setVisible={setVisible}>
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <HomePage videos={videos} setSelectedVideo={setSelectedVideo} />
                    </Route>
                    <Route exact path="/login">
                      <LoginPage />
                    </Route>
                    <Private exact path="/favorites">
                      <Favorites setSelectedVideo={setSelectedVideo} />
                    </Private>
                    <Private exact path="/favorites/:id">
                      <FavoritesDetail
                        selectedVideo={selectedVideo}
                        setSelectedVideo={setSelectedVideo}
                      />
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
              </Sidebar>
            </AuthProvider>
          </ThemeContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export { ThemeContext };
export default App;
