import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center sm:p-5 p-3 sm:mt-2 mt-1 flex-col">
      <div className="sm:p-3 p-2">
        <Image
          src="/logo.gif"
          alt="bg"
          width={100}
          height={100}
          className="sm:w-full w-full sm:h-full h-full p-3 lg:w-[800px] lg:h-[600px] my-4"
          priority
        />
      </div>

      <div className="sm:p-5 p-3 sm:mt-8 mt-5">
        <h1 className="uppercase sm:text-4xl text-2xl sm:font-bold font-semibold text-white sm:p-5 p-2 border-4 border-black bg-red-900 sm:bg-red-950 shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)] rounded-xl">
          About me
        </h1>
      </div>
      <p className="sm:p-5 p-3 sm:w-[30%] w-[80%] capitalize sm:text-lg text-sm text-white text-center">
        Hey there{" "}
        <span className="font-bold text-red-900 uppercase tracking-widest underline">
          Saad
        </span>{" "}
        here! I am a full stack web developer. I create full stack projects on
        NextJS, ReactJS, NodeJS & ExpressJS using Databases... Check out my
        projects below, check my resume to know more about me too. Apart from
        programming I am an architect that loves neo-gothic architecture. If you
        wanna share any thoughts then feel free to drop texts either in Gram
        above or Lets Talk below.
      </p>
    </div>
  );
};

export default About;
