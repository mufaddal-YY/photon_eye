"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBars = () => {
  return (
    <ProgressBar
      height="4px"
      color="#000076"
      options={{ showSpinner: false, easing: "ease" }}
      shallowRouting
    />
  );
};

export default ProgressBars;
