import React, { useMemo, useState } from 'react';
import { useGetAllVideos } from '../data/Video';
import VideoPlayer from '../components/VideoPlayer';

const MillerTimeView = () => {
    // const [isLoading, setIsLoading] = useState(true);
    const [currentVideo, setCurrentVideo] = useState({} as MillerTime.Video);
    const { data: videoData, isLoading: videosLoading } = useGetAllVideos();
    const [previouslyPlayedVideoIds, setPreviouslyPlayedVideoIds] = useState<Set<number>>(new Set());

    const videos = useMemo(() => {
        if (!videosLoading && videoData) {
            setCurrentVideo(videoData[0])
            return videoData ?? [];
        }
        return [];
    }, [videoData, videosLoading]);

    const getRandomVideo = () => {
        const availableVideos = videos.filter(video => !previouslyPlayedVideoIds.has(video.Id));
        if (availableVideos.length === 0) {
            setPreviouslyPlayedVideoIds(new Set());
            availableVideos.push(...videos);
        }
        const randomIndex = Math.floor(Math.random() * availableVideos.length);
        const video = availableVideos[randomIndex];
        setPreviouslyPlayedVideoIds(prevSet => new Set(prevSet).add(video.Id));
        return video;
    }

    const handleClick = () => {
        // setIsLoading(true);
        const randomVideo = getRandomVideo();
        setCurrentVideo(randomVideo);
        // setIsLoading(false);
    }

    return (
        <VideoPlayer video={videos && currentVideo} handleClick={handleClick} />
    );
}

export default MillerTimeView;
