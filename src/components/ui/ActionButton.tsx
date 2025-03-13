import React, { ReactNode } from "react";

interface ActionButtonProps {
  icon: ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon }) => {
  return (
    <div className="flex p-2 rounded-[100px] border-[1.5px] border-solid border-[#090909] cursor-pointer">
      {icon}
    </div>
  );
};

export default ActionButton;
