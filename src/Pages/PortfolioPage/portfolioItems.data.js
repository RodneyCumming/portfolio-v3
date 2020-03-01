import crimsonEducation from "Images2/crimsoneducation-small.png";
import codesnippets from "Images2/codesnippets-small.png";
import rdny from "Images2/rdny-small.png";
import typingPracticer from "Images2/typing-practicer-small.png";
import loremIpsum from "Images2/lorem-ipsum-small.png";
import portfolioV3 from "Images2/portfolio-v3-small.png";
import { backgroundColours } from "Styles2/colours";

const portfolioItems = [
  {
    name: "CRIMSON EDUCATION",
    image: crimsonEducation,
    textColor: "white",
    bgColor: "#40415E",
    boxShadowColor: "#36374e",
    shadowColor: `${backgroundColours.martinique}`,
    link: "https://www.crimsoneducation.org/nz",
    note: "- Contributed as part of an agile team."
  },
  {
    name: "CODE SNIPPETS",
    image: codesnippets,
    textColor: "white",
    bgColor: "#39757f",
    boxShadowColor: "#2b5961",
    shadowColor: "#2b5961",
    overlayColor: "#244248",
    link: "https://www.codingsnippets.netlify.com",
    githubLink: "https://github.com/RodneyCumming/snippets"
  },
  {
    name: "PORTFOLIO V2",
    image: rdny,
    textColor: "white",
    bgColor: "#2d4463",
    boxShadowColor: "#20334c",
    shadowColor: "#20334c",
    link: "https://rdny.me/",
    githubLink: "https://github.com/RodneyCumming/parallax-portfolio"
  },
  {
    name: "LOREM IPSUM DOLOR",

    image: loremIpsum,
    textColor: "white",
    bgColor: "#463a46",
    boxShadowColor: "#332c33",
    shadowColor: "#332c33",
    link: "https://lorem-ipsum-dolor.netlify.com",
    githubLink: "https://github.com/RodneyCumming/lorem-ipsum"
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
  }
];

export default portfolioItems;
