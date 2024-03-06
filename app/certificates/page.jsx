import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center sm:p-10 p-8 flex-col">
      <h1 className="text-center sm:px-7 px-4 py-2 sm:py-3 rounded font-bold font-unbounded sm:text-4xl text-2xl text-gray-300 bg-indigo-500 border-4 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]">
        Certificates
      </h1>
      <p className="text-center p-8 sm:p-10 text-gray-300">
        Click/Tap below to view my certificates.
      </p>
      <div className="flex justify-center items-center sm:mt-3 mt-2 border-2 border-indigo-300 rounded-lg">
        <Link
          href="https://coursera.org/share/0796de65bd63c3539fea3837c52855f9"
          target="_blank"
        >
          <Image
            src="/certone.png"
            alt="Certificate One"
            width={500}
            height={500}
            className="w-[300px] h-[220px] sm:w-full sm:h-full opacity-20 rounded-lg hover:opacity-50 duration-300"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center sm:mt-24 mt-16 border-2 border-indigo-300 rounded-lg">
        <Link
          href="https://coursera.org/share/5fe886ea995bb985494522d753ed5d24"
          target="_blank"
        >
          <Image
            src="/certtwo.png"
            alt="Certificate Two"
            width={500}
            height={500}
            className="w-[300px] h-[220px] sm:w-full sm:h-full opacity-20 rounded-lg hover:opacity-50 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
