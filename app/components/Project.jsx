import LeftProj from "./LeftProj";
import RightProj from "./RightProj";

const Project = () => {
  return (
    <div className="flex justify-center items-center sm:p-5 p-3 sm:mt-2 mt-1 flex-col w-full bg-gray-300">
      <div className="sm:p-10 p-8">
        <h1 className="uppercase sm:text-4xl text-2xl sm:font-bold font-semibold text-black sm:p-5 p-2 border-4 border-gray-300 bg-[#ccff00] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-xl">
          Project
        </h1>
      </div>
      <LeftProj
        projLink="https://grove-restaurant.vercel.app/"
        projName="Restaurant"
        projDetails="made with NextJS, prisma, mysql, tailwind. Tap the button to visit project."
        imgSrc="/proj3.png"
        alt="proj1"
      />
      <RightProj
        projLink="https://hotel-booking-info.vercel.app/"
        projName="Hotel Booking"
        projDetails="made with NextJS, ShadCN, tailwind. Tap the button to visit project."
        imgSrc="/proj2.png"
        alt="proj2"
      />
      <LeftProj
        projLink="https://grovetodolist.onrender.com/"
        projName="To-Do List"
        projDetails="made with EJS, ExpressJS, CSS. Tap the button to visit project."
        imgSrc="/proj1.png"
        alt="proj1"
      />
      <RightProj
        projLink="https://groveweatherapp.netlify.app/"
        projName="Weather App"
        projDetails="made with EJS, ExpressJS, API, CSS. Tap the button to visit project."
        imgSrc="/proj4.png"
        alt="proj2"
      />
    </div>
  );
};

export default Project;
