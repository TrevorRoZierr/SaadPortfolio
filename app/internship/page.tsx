import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex justify-center items-center sm:p-10 p-8 flex-col">
      <h1 className="text-center sm:px-7 px-4 py-2 sm:py-3 rounded font-bold font-unbounded sm:text-4xl text-2xl text-black bg-gradient-radial from-blue-200 to-pink-300 border-4 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]">
        Internship 2024
      </h1>
      <p className="text-center p-8 sm:p-10 text-gray-300">
        Click/Tap below to view.
      </p>
      <div className="flex justify-center items-center sm:mt-3 mt-2 border-2 border-pink-200 rounded-lg">
        <Link href="/Internship.pdf" target="_blank">
          <Image
            src="/intern.png"
            alt="Internship"
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
