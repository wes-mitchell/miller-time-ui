import { useEffect, useMemo, useState } from 'react';
import { useGetAllVideos } from '../data/Video';
import VideoPlayer from '../components/VideoPlayer';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../components/Loader';
import NoVideoAlert from '../components/NoVideoAlert';

const MillerTimeView = () => {
  const [currentVideo, setCurrentVideo] = useState<MillerTime.Video | null>(
    null
  );
  const {
    data: videoData,
    isFetching: videosLoading,
    isError: errorLoading,
  } = useGetAllVideos();
  const [previouslyPlayedVideoIds, setPreviouslyPlayedVideoIds] = useState<
    Set<number>
  >(new Set());

  useEffect(() => {
    if (!videosLoading && videoData && videoData.length > 0) {
      setCurrentVideo(videoData[0]);
    }
  }, [videoData, videosLoading]);

  const videos = useMemo(() => videoData ?? [], [videoData]);

  const getRandomVideo = () => {
    const availableVideos = videos.filter(
      (video) => !previouslyPlayedVideoIds.has(video.Id)
    );
    if (availableVideos.length === 0) {
      setPreviouslyPlayedVideoIds(new Set());
      return videos[Math.floor(Math.random() * videos.length)];
    }
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const video = availableVideos[randomIndex];
    setPreviouslyPlayedVideoIds((prevSet) => new Set(prevSet).add(video.Id));
    return video;
  };

  const handleClick = () => {
    const randomVideo = getRandomVideo();
    setCurrentVideo(randomVideo);
  };

  if (videosLoading) return <Loader color="primary" />;
  const noVideos = videoData?.length === 0 && !currentVideo;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          {noVideos || errorLoading ? (
            <NoVideoAlert />
          ) : (
            <VideoPlayer video={currentVideo} handleClick={handleClick} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MillerTimeView;
