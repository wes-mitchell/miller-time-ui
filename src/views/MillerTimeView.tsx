import React, { useEffect, useMemo, useState } from 'react';
import { useGetAllVideos } from '../data/Video';
import VideoPlayer from '../components/VideoPlayer';

const MillerTimeView = () => {
    const [currentVideo, setCurrentVideo] = useState<MillerTime.Video | null>(null);
    const { data: videoData, isLoading: videosLoading } = useGetAllVideos();
    const [previouslyPlayedVideoIds, setPreviouslyPlayedVideoIds] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (!videosLoading && videoData && videoData.length > 0) {
            setCurrentVideo(videoData[0]);
        }
    }, [videoData, videosLoading]);

    const videos = useMemo(() => videoData ?? [], [videoData]);

    const getRandomVideo = () => {
        const availableVideos = videos.filter(video => !previouslyPlayedVideoIds.has(video.Id));
        if (availableVideos.length === 0) {
            setPreviouslyPlayedVideoIds(new Set());
            return videos[Math.floor(Math.random() * videos.length)];
        }
        const randomIndex = Math.floor(Math.random() * availableVideos.length);
        const video = availableVideos[randomIndex];
        setPreviouslyPlayedVideoIds(prevSet => new Set(prevSet).add(video.Id));
        return video;
    };

    const handleClick = () => {
        const randomVideo = getRandomVideo();
        setCurrentVideo(randomVideo);
    };

    return (
        currentVideo ? (
            <VideoPlayer video={currentVideo} handleClick={handleClick} />
        ) : (
            <div>Loading...</div>
        )
    );
};

export default MillerTimeView;