import React from "react";
import TopBanner from "./TopBanner";
import MainNavigation from "./MainNavigation";
import SearchBar from "../ui/SearchBar";
import ActionButton from "../ui/ActionButton";

const Header: React.FC = () => {
  return (
    <>
      <TopBanner />
      <header className="flex items-center border bg-[#D9D9D9] px-10 py-5 border-solid border-[#969191] max-sm:flex-col max-sm:gap-5">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8dbc7631fab6eea50048ea1ed482dfa6a7f6ae"
            alt="Organic Fiber"
            className="w-[358px] h-auto"
          />
        </div>
        <MainNavigation />
        <div className="flex gap-4 ml-auto max-sm:w-full max-sm:justify-between">
          <SearchBar />
          <ActionButton
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_624_652)">
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_624_652">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <ActionButton
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_624_654)">
                  <path
                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4955 12H15.5045"
                    stroke="#1D2939"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.49451 12H8.50349"
                    stroke="#1D2939"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_624_654">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
      </header>
    </>
  );
};

export default Header;
