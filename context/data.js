/* eslint-disable no-template-curly-in-string */
import {
  CodeIcon,
  DesktopComputerIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import { v4 } from "uuid";

export const ServicesData = [
  {
    id: v4(),
    icon: CodeIcon,
    title: "Web Development",
    description:
      "Get a full stack website done with all types of features that you aspire and desire. I've built tons of websites, checkout my portfolio section",
  },
  {
    id: v4(),
    icon: DesktopComputerIcon,
    title: "One on one Mentoring",
    description:
      "I've taught programming to lots of students both privately and for larger groups. Some of the domains I've helped students with - ES6 , React , HTML5 , CSS3, Node JS etc.",
  },
  {
    id: v4(),
    icon: MicrophoneIcon,
    title: "Voice Over",
    description:
      "A voice-over that sounds natural, articulate, and approachable - without sounding too announcer-y or cheeseball radio.",
  },
];

export const MyProjects = [
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Full Stack Chat App ( Built using MERN Stack )",
    techStack: "React JS,Node JS,Socket IO,Express JS,Mongo DB,Chakra UI",
    description:
      "Learn Context API by making simple Shopping Cart Project in React JS in one video.",
    thumbnail: "/1.gif",
    url: "https://talk-a-tive.herokuapp.com/",
    github: "https://github.com/piyush-eon/mern-chat-app",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Full Stack Notes Taking App ( Built using MERN Stack )",
    techStack: "React JS,Node JS,Express JS,Mongo DB,React Bootstrap",
    description:
      "Learn Context API by making simple Shopping Cart Project in React JS in one video.",
    thumbnail: "/4.gif",
    url: "https://notezipper.herokuapp.com/",
    github: "https://github.com/piyush-eon/notezipper",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "News App ( Built using React Native )",
    techStack: "React Native",
    description:
      "Learn Context API by making simple Shopping Cart Project in React JS in one video.",
    thumbnail: "/2.gif",
    url: "https://drive.google.com/file/d/1hHY0V9j8YcjzP_-l-vnEln8KncW-cvB6/view?usp=sharing",
    github: "https://github.com/piyush-eon/react-native-news-app",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Full Stack E-Commerce App ( Built using MERN Stack )",
    techStack: "React JS,Node JS,Express JS,Mongo DB,React Bootstrap",
    description:
      "Learn Context API by making simple Shopping Cart Project in React JS in one video.",
    thumbnail: "/3.gif",
    url: "http://artixie.herokuapp.com/",
    github: "https://github.com/piyush-eon/Artixie-ecommerce-store",
  },
  {
    id: "VVVJUFpWQXdER2EtQTRaSnhDQnZYUnVRLmdRX2wtMXpwVkJv",
    title: "Quiz App ( Built using React JS )",
    techStack: "React JS,Material UI",
    description:
      "Learn Context API by making simple Shopping Cart Project in React JS in one video.",
    thumbnail: "/5.gif",
    url: "https://intuitive-quiz-hub.netlify.app/",
    github: "https://github.com/piyush-eon/Reactjs-Quiz-App",
  },
];
