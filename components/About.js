import React from "react";

const About = () => {
  return (
    <div
      id="aboutme"
      className="min-h-screen max-w-6xl px-5 pt-10 pb-16 md:pb-10"
    >
      <div className="text-center mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
          About Me
        </h1>
        {/* <h3 className="text-xl mb-5 font-light">
                Some of the awesome comments from our YouTube channel.
              </h3> */}
        <div className="text-center mb-10">
          {/* Custom Style Used */}
          <span className="line w-1"></span>
          <span className="line w-3"></span>
          <span className="line w-40"></span>
          <span className="line w-3"></span>
          <span className="line w-1"></span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 justify-items-center">
        <img
          src="/about.jpeg"
          alt="Piyush Agarwal"
          className="border-[16px] mb-5 md:m-0 md:h-5/6 border-black"
        />
        <div className="flex flex-col h-5/6 gap-7 font-mono justify-between text-justify">
          <span className="text-xl sm:text-2xl">
            Piyush Agarwal is a Full Stack Developer working on technologies
            like React JS, Typescript, React Native, Next JS, Node JS, etc...
            Plus, He Likes to talk in third person about himself. <br />
            Born and raised in Kanpur, Uttar Pradesh. In his free time he likes
            to work as a freelance voice over artist.
          </span>
          <table className="flex flex-col text-lg sm:text-xl gap-5">
            <tr className="flex justify-between">
              <th>Name</th>
              <td>Piyush Agarwal</td>
            </tr>
            <tr className="flex justify-between">
              <th>Born</th>
              <td>22 December 1997</td>
            </tr>
            <tr className="flex justify-between">
              <th>Occupation</th>
              <td>Web Developer</td>
            </tr>
            <tr className="flex justify-between">
              <th>Hobbies</th>
              <td>Teaching on YouTube</td>
            </tr>
          </table>
          <div className="grid grid-cols-3 gap-3 text-lg">
            <a
              href="https://www.youtube.com/c/RoadsideCoder"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 btn2"
            >
              YouTube
            </a>
            <a
              href="https://github.com/piyush-eon"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 btn2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-agarwal-440976179/"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 btn2"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
