import React from "react";

const CustomMoreButton = () => {
  const handleIconClick = () => {
    alert("More Button: Implementation not included!");
  };

  return (
    <button className="more-button" onClick={handleIconClick}>
      ...
      <style jsx>{`
        .more-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px; 
          color: rgba(0, 0, 0, 0.54); 
          padding: 0;
          margin: 0;
        }

        .more-button:hover {
          color: rgba(0, 0, 0, 0.87); 
        }
      `}</style>
    </button>
  );
};

export default CustomMoreButton;
