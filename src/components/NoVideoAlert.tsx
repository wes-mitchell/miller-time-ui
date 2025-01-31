import React from 'react';

const NoVideoAlert = () => {
  return (
    <div className="loader-overlay d-flex justify-content-center align-items-center">
      <div className="no-video-alert text-white display-4 p-4 text-center">
        Whoops, our system might be down right now. Try refreshing or visiting
        again soon!
      </div>
    </div>
  );
};

export default NoVideoAlert;
