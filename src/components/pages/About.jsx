import React from "react";
import useThemeStore from "../../stores/themeStore";
import Theme from "../Theme";

const About = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Theme>
      <div className={`flex items-center justify-center mt-4 p-6  `}>
        About me page
      </div>
    </Theme>
  );
};

export default About;
