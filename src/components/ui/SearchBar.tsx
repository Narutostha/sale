import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-[83px] border-[1.5px] border-solid border-[#090909]">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
        >
          <g clipPath="url(#clip0_624_649)">
            <path
              d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z"
              stroke="#1D2939"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3332 18.3332L16.6665 16.6665"
              stroke="#1D2939"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_624_649">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="text-[#667085] text-base">Search Product</div>
    </div>
  );
};

export default SearchBar;
