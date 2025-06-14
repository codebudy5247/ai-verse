import React from "react";

interface PlusSvgProps {
  className?: string;
}

const PlusSvg: React.FC<PlusSvgProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ada8c4"
      />
    </svg>
  );
};

export default PlusSvg;
