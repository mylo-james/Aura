import {
  RiEmotionLaughLine,
  RiEmotionLine,
  RiEmotionNormalLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
} from "react-icons/ri";

export default function chooseTheme(contextNumber) {
  switch (contextNumber) {
    case 1:
      return {
        primary: "#5c619f",
        borderColor: "#c6c6c6",
        textColor: "white",
        backgroundColor: "#c8c8c8",
        icon: RiEmotionSadLine,
      };
    case 2:
      return {
        primary: "#7c81bd",
        borderColor: "#d2d2d2",
        textColor: "white",
        backgroundColor: "#d4d4d4",
        icon: RiEmotionUnhappyLine,
      };
    case 4:
      return {
        primary: "#dda0dd",
        borderColor: "#ececec",
        textColor: "white",
        backgroundColor: "#eeeeee",
        icon: RiEmotionLine,
      };
    case 5:
      return {
        primary: "#eb93d7",
        borderColor: "#f9f9f9",
        textColor: "white",
        backgroundColor: "#fbfbfb",
        icon: RiEmotionLaughLine,
      };

    default:
      return {
        primary: "#b19cd9",
        borderColor: "#262626",
        textColor: "#262626",
        backgroundColor: "lightblue",
        icon: RiEmotionNormalLine,
      };
  }
}
