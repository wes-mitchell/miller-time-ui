import { useMemo } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col } from 'reactstrap';

interface VideoPlayerProps {
  video: MillerTime.Video | null;
  handleClick: () => void;
}

const VideoPlayer = ({ video, handleClick }: VideoPlayerProps) => {
  const beerCan = useMemo(
    () => new Audio(`${process.env.PUBLIC_URL}/open-beer.mp3`),
    []
  );

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      fs: 0,
    },
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Row className="w-100">
        <Col sm={12} className="d-flex justify-content-center">
          <div className="youtube-wrapper">
            <YouTube
              videoId={video?.YoutubeVideoId}
              opts={opts}
              onReady={onPlayerReady}
              className="youtube-iframe"
            />
          </div>
        </Col>
      </Row>
      <Row className="w-100 mt-4">
        <Col sm={12} className="d-flex justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/miller-lite-button.png`}
            alt="Miller Lite logo"
            onClick={() => {
              beerCan.play();
              handleClick();
            }}
            className="miller-button"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPlayer;
