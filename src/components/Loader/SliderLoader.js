import React from "react";
import ContentLoader from "react-content-loader";

const SliderLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1260}
    height={460}
    viewBox="0 0 1260 460"
    backgroundColor="#f7f7f7"
    foregroundColor="#eeecec"
    {...props}
  >
    <rect x="5" y="42" rx="29" ry="29" width="1260" height="400" />
  </ContentLoader>
);

export default SliderLoader;
