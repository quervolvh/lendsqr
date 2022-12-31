import React from 'react';
import { classnames } from 'utils';

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  disabled,
  color,
}) => {

  const ButtonTitle = () => {
    return (
      <span className={classnames("button-title")}>
        <span className={color || ""}> {label || "button"} </span>
      </span>
    );
  };

  const click = (event: any) => {
    if (onClick) {
      onClick(event);
      return null;
    }
  }

  return (

    <button
      className={
        classnames(
          'button',
          className
        )
      }
      onClick={(event) => click(event)}
      disabled={disabled}
    >

      <ButtonTitle />

    </button>
  );

};

interface ButtonProps {
  label?: string,
  onClick?(event?: any): void,
  className?: string,
  disabled?: boolean,
  color?: string,
}
