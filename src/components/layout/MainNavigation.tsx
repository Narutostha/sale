import React from "react";

const MainNavigation: React.FC = () => {
  const navItems = ["HOME", "ABOUT US", "PRODUCTS", "SALE", "BLOG"];

  return (
    <nav>
      <div className="flex gap-12 mx-10 my-0 max-md:gap-6 max-sm:hidden">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="text-[#1D2939] text-base font-medium cursor-pointer hover:text-[#286847]"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigation;
