import Link from "next/link";

export const Features3 = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center mx-auto lg:p-10 p-3 gap-10 shadow w-9/12 mb-10">
      <Link href="#">
        {" "}
        <div className="text-center border-r-2 hover:bg-zinc-300">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="font-semibold mt-2">from $78</p>
        </div>
      </Link>
      <Link href="#">
        {" "}
        <div className="text-center border-r-2 hover:bg-zinc-300">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="font-semibold mt-2">from $78</p>
        </div>
      </Link>
      <Link href="#">
        {" "}
        <div className="text-center border-r-2 hover:bg-zinc-300">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="font-semibold mt-2">from $78</p>
        </div>
      </Link>
      <Link href="#">
        {" "}
        <div className="text-center border-r-2 hover:bg-zinc-300">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="font-semibold mt-2">from $78</p>
        </div>
      </Link>
      <Link href="#">
        {" "}
        <div className="text-center hover:bg-zinc-300">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="font-semibold mt-2">from $78</p>
        </div>
      </Link>
    </div>
  );
};
