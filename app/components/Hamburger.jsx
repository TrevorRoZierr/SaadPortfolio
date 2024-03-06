import Link from "next/link";

const Hamburger = () => {
  return (
    <div className="sm:hidden absolute right-[20px] top-[110px] bg-gray-300 px-4 py-6 border-4 font-unbounded border-red-900 rounded-lg">
      <ul className="text-xs font-medium capitalize">
        <li className="mb-5">
          <Link href="/resume">Resume</Link>
        </li>
        <li className="mb-5">
          <Link href="/certificates">Certificates</Link>
        </li>
        <li>
          <Link href="/internship">Internship</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
