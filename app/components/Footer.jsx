import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-red-900 to-red-950 flex-col">
      <div className="sm:p-5 p-3">
        <p className="text-gray-300 font-unbounded capitalize font-semibold text-[8px] sm:text-sm text-center">
          All Copyright Reserved © Sayyed Saad.
        </p>
      </div>
      {/* <Image
        src="/footer.png"
        alt="Illuminati"
        width={300}
        height={300}
        className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] mb-5"
      /> */}
    </div>
  );
};

export default Footer;
