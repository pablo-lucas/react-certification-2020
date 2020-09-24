import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, FAVORITE_VIDEOS_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  useEffect(() => {
    const favoriteVideos = storage.get(FAVORITE_VIDEOS_KEY);

    setFavorites(favoriteVideos);
  }, []);

  const addFavorite = useCallback((videoSelected) => {
    const storedVideos = storage.get(FAVORITE_VIDEOS_KEY) || [];
    const favoriteVideosUpdated = [...storedVideos, videoSelected];
    setFavorites(favorites);
    storage.set(FAVORITE_VIDEOS_KEY, favoriteVideosUpdated);
  }, []);

  const removeFavorite = useCallback((videoSelected) => {
    const storedVideos = storage.get(FAVORITE_VIDEOS_KEY) || [];
    const favoriteVideosUpdated = storedVideos.filter(
      (storedVideo) => storedVideo.id.videoId !== videoSelected.id.videoId
    );
    setFavorites(favoriteVideosUpdated);
    storage.set(FAVORITE_VIDEOS_KEY, favoriteVideosUpdated);
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
