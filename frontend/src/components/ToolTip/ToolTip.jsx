import React, { useState } from 'react';

const Tooltip = ({ text, children, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!text) return <>{children}</>;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Trigger */}
      <div className="hover:cursor-pointer h-fit w-fit">
        {children}
      </div>

      {/* Tooltip box */}
      {isHovered && (
        <div
          className={`absolute z-10 mt-1 px-2 py-1 rounded text-sm text-white ${
            style ? '' : 'left-1/2 -translate-x-1/2 bg-black border border-gray-500'
          }`}
          style={style}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
