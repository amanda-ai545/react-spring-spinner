import { useState } from "react";
import { useSpring } from "react-spring";

export const useAnimatedSVGPath = ({ toggle, delay }) => {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay
  });

  return {
    style: animatedStyle,
    ref: (ref) => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    }
  };
};
