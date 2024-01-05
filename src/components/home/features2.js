import Image from "next/image";
import img from "../../../public/new-project/ad-min.png";
export const Features2 = () => {
  return (
    <div>
      <Image src={img} className="mx-auto w-9/12" alt="banner img" />
    </div>
  );
};
