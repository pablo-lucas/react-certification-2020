import React, { useState, useEffect, useContext, useCallback } from 'react';

import { FAVORITE_VIDEOS_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const VideoContext = React.createContext(null);

function useVideoStorageState() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideoStorageState" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [videos, setVideos] = useState(() => storage.get(FAVORITE_VIDEOS_KEY) || []);

  useEffect(() => {
    storage.set(FAVORITE_VIDEOS_KEY, videos);
  }, [videos]);

  const addVideo = useCallback((videoSelected) => {
    setVideos((currentVideos) => [...currentVideos, videoSelected]);
  }, []);

  const removeVideo = useCallback((videoSelected) => {
    setVideos((currentVideos) =>
      currentVideos.filter(
        (storedVideo) => storedVideo.id.videoId !== videoSelected.id.videoId
      )
    );
  }, []);

  return (
    <VideoContext.Provider value={{ videos, addVideo, removeVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export { useVideoStorageState, VideoContext };
export default VideoProvider;
