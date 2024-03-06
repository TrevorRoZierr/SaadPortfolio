import { FiArrowUpCircle } from "react-icons/fi";
import Link from "next/link";

const GoUp = () => {
  return (
    <div className="fixed sm:top-[580px] top-[500px] bg-white rounded-full right-5">
      <Link href="#nav" className="sm:text-4xl text-2xl  text-red-700 font-bold">
        <FiArrowUpCircle />
      </Link>
    </div>
  );
};

export default GoUp;
