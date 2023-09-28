import React, { ReactNode, useState } from "react";
import "./CustomButton.css";
import { PRIMARY } from "../constants/colors";

type Props = {
  title?: string;
  icon?: ReactNode;
  fill: boolean;
};

const CustomButton = ({ title, icon, fill }: Props) => {
  const getFill = () => {
    if (fill) {
      return PRIMARY;
    }
    return "white";
  };

  const getContentColor = () => {
    if (fill) {
      return "white";
    }
    return PRIMARY;
  };

  return (
    <button
      className="button"
      style={{ backgroundColor: getFill(), color: getContentColor() }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
