import Image from "next/image";
import Link from "next/link";

const RightProj = (props) => {
  return (
    <div className="sm:p-5 p-3 flex flex-row justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <Image
          src={props.imgSrc}
          alt={props.alt}
          width={300}
          height={300}
          className="sm:w-[350px] sm:h-[250px] w-[120px] h-[100px] opacity-50 border-2 border-black shadow-[0.25rem_0.25rem_4px_4px_rgba(0,0,0,1)] rounded hover:opacity-100 duration-300 lg:m-14 m-8 lg:mt-0 mt-16"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center p-0">
        <Link
          href={props.projLink}
          target="_blank"
          className="uppercase sm:text-2xl text-lg sm:font-semibold font-semibold text-black sm:p-3 mb-5 sm:mb-8 p-2 border-4 border-gray-300 bg-[#15f4ee] shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-xl"
        >
          {props.projName}
        </Link>
        <p className="text-black text-center capitalize sm:text-md text-xs font-medium sm:font-semibold mb-5 sm:mb-8">
          {props.projDetails}
        </p>
      </div>
    </div>
  );
};

export default RightProj;
