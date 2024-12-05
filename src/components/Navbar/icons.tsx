import React from "react";


// Tipos para os props dos ícones
type IconProps = {
  size?: number;
  color?: string;
};

export const ChevronDown: React.FC<IconProps> = ({ size = 24, color = "black" }) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const navMenuItems = [
  {
    label: "Home",
    href: "/",
  }
];
