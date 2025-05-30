import React from "react";
import type { MouseEvent, ReactNode } from "react";
import ButtonSvg from "../assets/ButtonSvg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  px?: string;
  white?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-c1 ${px} ${
    white ? "text-n8" : "text-n1"
  } ${className}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
