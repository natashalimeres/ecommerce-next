import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-mainGray text-white py-10">
      <div className="max-w-4xl">
        <Image
          src="/banner.png"
          alt="Imagem do Banner"
          width={2500}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
