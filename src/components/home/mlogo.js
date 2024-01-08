import Image from "next/image";
import React from "react";
import img1 from "/public/new-project/sponsors_1.png";
import img2 from "/public/new-project/sponsors_2.png";
import img3 from "/public/new-project/sponsors_3.png";
import img4 from "/public/new-project/sponsors_4.png";
import img5 from "/public/new-project/sponsors_5.png";
import Link from "next/link";

export const Mlogo = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  gap-10 p-5 lg:p-20 ">
      <Link href="#">
        <Image
          className="hover:text-gray-500 mx-auto hover:bg-slate-100 rounded-full"
          src={img1}
        />
      </Link>
      <Link href="#">
        <Image src={img2} className="mx-auto hover:bg-slate-100 rounded-full" />
      </Link>
      <Link href="#">
        <Image src={img3} className="mx-auto hover:bg-slate-100 rounded-full" />
      </Link>
      <Link href="#">
        <Image src={img4} className="mx-auto hover:bg-slate-100 rounded-full" />
      </Link>
      <Link href="#">
        <Image src={img5} className="mx-auto hover:bg-slate-100 rounded-full" />
      </Link>
    </div>
  );
};
