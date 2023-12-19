import React from 'react';

const ProgressBar = ({ percentage }) => {
  const progressStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={progressStyle}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;


