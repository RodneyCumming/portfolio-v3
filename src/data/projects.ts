import type { ImageMetadata } from 'astro';
import stoicismAi from '../assets/stoicism-ai.png';
import devDrill from '../assets/devdrill.png';
import thisSite from '../assets/portfolio-v3-small.png';
import typingPracticer from '../assets/typing-practicer-small.png';

export interface Project {
  name: string;
  image: ImageMetadata;
  /** Tile colour, its inner shadow and the image tint */
  bg: string;
  shadow: string;
  overlay?: string;
  link: string;
  github?: string;
}

// Same projects and colours as the 2020 site
export const projects: Project[] = [
  {
    name: 'STOICISM AI',
    image: stoicismAi,
    bg: '#39757f',
    shadow: '#2b5961',
    overlay: '#244248',
    link: 'https://www.stoicismai.com/',
  },
  {
    name: 'DEV DRILL',
    image: devDrill,
    bg: '#4a4973',
    shadow: '#414069',
    link: 'https://devdrill.netlify.app/',
    github: 'https://github.com/RodneyCumming/flash',
  },
  {
    name: 'THIS SITE',
    image: thisSite,
    bg: '#343954',
    shadow: '#2a2d40',
    link: 'https://www.rodneycumming.com',
    github: 'https://github.com/RodneyCumming/portfolio-v3',
  },
  {
    name: 'TYPING PRACTICER',
    image: typingPracticer,
    bg: '#29475d',
    shadow: '#243b4c',
    link: 'https://rodneycumming.github.io/react-typing/',
    github: 'https://github.com/RodneyCumming/react-typing',
  },
];
