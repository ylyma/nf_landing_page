const root = document.querySelector(":root");

export const PRIMARY =
  root === null
    ? ""
    : getComputedStyle(root).getPropertyValue("--primary").toString();

export const LIGHTPRIMARY =
  root === null
    ? ""
    : getComputedStyle(root).getPropertyValue("--primary-light").toString();

export const LIGHTGRAY =
  root === null
    ? ""
    : getComputedStyle(root).getPropertyValue("--gray-light").toString();
