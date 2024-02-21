"use client";

import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
      <Image
        src={"/assets/icons/Infinity.svg"}
        alt="loader"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loader;
