import React from "react";

const TopBanner: React.FC = () => {
  return (
    <div className="text-white text-center text-sm font-semibold uppercase bg-[#1A432E] p-3">
      <span>Get up to 35% OFF today!</span>{" "}
      <span className="underline cursor-pointer">GET NOW</span>
    </div>
  );
};

export default TopBanner;
