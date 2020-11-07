import devdrill from "Images/devdrill.png";
import codesnippets from "Images/codesnippets-small.png";
// import rdny from "Images/rdny-small.png";
import typingPracticer from "Images/typing-practicer-small.png";
// import loremIpsum from "Images/lorem-ipsum-small.png";
import portfolioV3 from "Images/portfolio-v3-small.png";
// import { backgroundColours } from "Styles/colours";

const portfolioItems = [
  {
    name: "DEV DRILL",
    image: devdrill,
    textColor: "white",
    bgColor: "#4a4973",
    boxShadowColor: "#414069",
    shadowColor: `#414069`,
    link: "https://devdrill.netlify.app/",
    githubLink: "https://github.com/RodneyCumming/flash"
    // note: "- Contributed as part of an agile team."
  },
  {
    name: "CODE SNIPPETS",
    image: codesnippets,
    textColor: "white",
    bgColor: "#39757f",
    boxShadowColor: "#2b5961",
    shadowColor: "#2b5961",
    overlayColor: "#244248",
    link: "https://codingsnippets.netlify.com",
    githubLink: "https://github.com/RodneyCumming/snippets"
  },
  {
    name: "THIS SITE",
    image: portfolioV3,
    textColor: "white",
    bgColor: "#343954",
    boxShadowColor: "#2a2d40",
    shadowColor: "#2a2d40",
    link: "https://www.rodneycumming.com",
    githubLink: "https://github.com/RodneyCumming/portfolio-v3"
  },
  {
    name: "TYPING PRACTICER",
    image: typingPracticer,
    textColor: "white",
    bgColor: "#29475d",
    boxShadowColor: "#243b4c",
    shadowColor: "#243b4c",
    link: "https://rodneycumming.github.io/react-typing/",
    githubLink: "https://github.com/RodneyCumming/react-typing"
  }
  // {
  //   name: "LOREM IPSUM DOLOR",

  //   image: loremIpsum,
  //   textColor: "white",
  //   bgColor: "#463a46",
  //   boxShadowColor: "#332c33",
  //   shadowColor: "#332c33",
  //   link: "https://lorem-ipsum-dolor.netlify.com",
  //   githubLink: "https://github.com/RodneyCumming/lorem-ipsum"
  // },
  // {
  //   name: "PORTFOLIO V2",
  //   image: rdny,
  //   textColor: "white",
  //   bgColor: "#2d4463",
  //   boxShadowColor: "#20334c",
  //   shadowColor: "#20334c",
  //   link: "https://rdny.me/",
  //   githubLink: "https://github.com/RodneyCumming/parallax-portfolio"
  // }
];

export default portfolioItems;
