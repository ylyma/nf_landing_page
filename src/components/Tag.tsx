import React, { ReactNode, useState } from "react";
import "./Tag.css";
import { PRIMARY, SECONDARY, GREY, DARKGREY } from "../constants/colors";

type Props = {
  colored: boolean;
  title: string;
};

const Tag: React.FC<Props> = ({ colored, title }: Props) => {
  const getBgColor = () => {
    if (colored) {
      return SECONDARY;
    }
    return GREY;
  };

  const getTextColor = () => {
    if (colored) {
      return PRIMARY;
    }
    return "grey";
  };
  return (
    <div
      className="tag"
      style={{ backgroundColor: getBgColor(), color: getTextColor() }}
    >
      {title}
    </div>
  );
};

export default Tag;
