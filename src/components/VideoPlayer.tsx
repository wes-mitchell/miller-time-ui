import YouTube from 'react-youtube';
import { Container, Row, Col } from 'reactstrap';

interface VideoPlayerProps {
    video: MillerTime.Video;
    handleClick: () => void;
}

const VideoPlayer = ({ video, handleClick }: VideoPlayerProps) => {
    const beerCan = new Audio('../open-beer.mp3');

    const onPlayerReady = (event: any) => {
        event.target.playVideo();
    };

    const opts = {
        height: '480',
        width: '853',
        playerVars: {
            autoplay: 1,
            fs: 0,
        },
    };

    return (
        video &&
        <Container className="d-flex justify-content-center flex-column align-items-center" style={{ marginTop: '20vh' }}>
            <Row>
                <Col sm={11} className="text-center">
                    <YouTube
                        videoId={video.YoutubeVideoId}
                        opts={opts}
                        onReady={onPlayerReady}
                    />
                </Col>
                <Col sm={11} className="text-center">
                    <img
                        src='../images/miller-lite-button.png'
                        alt="miller lite logo"
                        onClick={() => {
                            handleClick();
                            beerCan.play();
                        }}
                        style={{ cursor: 'pointer' }}
                    />
                </Col>
            </Row>
        </Container >
    )
};

export default VideoPlayer;