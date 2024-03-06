import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center sm:p-10 p-8 flex-col">
      <h1 className="text-center sm:px-7 px-4 py-2 sm:py-3 rounded font-bold font-unbounded sm:text-4xl text-2xl text-black bg-gradient-to-r from-green-200 to-green-950 border-4 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]">
        Resume
      </h1>
      <p className="text-center p-8 sm:p-10 text-gray-300">
        Click/Tap below to view my resume.
      </p>
      <div className="flex justify-center items-center sm:mt-3 mt-2 border-2 border-green-200 rounded-lg">
        <Link href="/Resume.pdf" target="_blank">
          <Image
            src="/resume.png"
            alt="Resume"
            width={200}
            height={200}
            className="w-[250px] h-[320px] sm:w-[450px] sm:h-[600px] opacity-20 rounded-lg hover:opacity-50 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
