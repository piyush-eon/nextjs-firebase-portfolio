import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { ServicesData } from "../context/data";

const Services = () => {
  return (
    <>
      <div
        id="services"
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
              Services
            </h1>
          </Zoom>
          <div className="flex flex-wrap justify-around pt-5">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white p-2 flex flex-col w-[90vw] sm:w-[42%] lg:w-[30%] m-5 cursor-pointer transition hover:scale-105"
              >
                <JackInTheBox>
                  <service.icon className="h-16 p-1 text-blue-400" />
                </JackInTheBox>
                <h2 className="text-3xl font-bold font-mono p-2 pb-0">
                  {service.title}
                </h2>
                <span className="text-lg font-mono p-2">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <a className="btn" href="mailto:piyushagarwalvo@gmail.com">
          Contact Me
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

export default Services;
