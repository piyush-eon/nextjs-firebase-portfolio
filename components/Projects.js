import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { usePortfolio } from "../context/ContextProvider";

const Projects = () => {
  const { projects } = usePortfolio();

  return (
    <>
      <div
        id="projects"
        className="relative w-full z-10 flex flex-col items-center bg-brand"
      >
        <svg
          className="absolute top-[-35px] sm:top-[-55px] md:top-[-65px] lg:top-[-90px] xl:top-[-110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 190 1440 320"
        >
          <path
            fill="#2baaff"
            fillOpacity="1"
            d="M0,192L120,213.3C240,235,480,277,720,282.7C960,288,1200,256,1320,240L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div className="p-10 w-full h-full flex flex-col items-center">
          <Zoom>
            <h1 className="text-4xl md:text-5xl text-white font-mono">
              My Projects
            </h1>
          </Zoom>
          <div className="flex flex-wrap justify-around pt-5">
            {projects?.map(
              (vid) =>
                vid.thumbnail && (
                  <div
                    key={vid.id}
                    className="bg-white p-2 flex flex-col items-center justify-between w-[90vw] sm:w-[42%] lg:w-[30%] m-5 cursor-pointer transition hover:scale-105"
                  >
                    <JackInTheBox>
                      <img
                        src={vid.thumbnail}
                        width={1280}
                        height={720}
                        alt={vid.title}
                        className="h-52 object-contain"
                      />
                    </JackInTheBox>
                    <span className="text-lg font-mono p-2">{vid.title}</span>
                    <div className="flex gap-2 w-full">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={vid.github}
                        className="btn2 w-full bg-red-500"
                      >
                        Source Code
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={vid.url}
                        className="btn2 w-full bg-blue-500"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <a
          className="btn"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/piyush-eon"
        >
          View More
        </a>
      </div>
      <svg
        // className="absolute bottom-[-35px] sm:bottom-[-55px] md:bottom-[-65px] lg:bottom-[-90px] xl:bottom-[-110px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 70"
      >
        <path
          fill="#2baaff"
          fillOpacity="1"
          d="M0,64L80,53.3C160,43,320,21,480,26.7C640,32,800,64,960,64C1120,64,1280,32,1360,16L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Projects;
