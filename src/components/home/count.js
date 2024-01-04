import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 bg-gradient-to-br from-green-200 p-5  lg:p-16">
      <div className="text-center gap-3">
        <h1 className="text-xl font-semibold">Happy Customers</h1>
        <p className="text-3xl font-semibold mt-2">
          <CountUp start={0} end={1200} duration={5} />+
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Happy Customers</h1>
        <p className="text-3xl font-semibold mt-2">
          <CountUp start={0} end={100} duration={5} /> %
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Happy Customers</h1>
        <p className="text-3xl font-semibold mt-2">
          {" "}
          <CountUp start={0} end={70} duration={5} /> M +
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold">Happy Customers</h1>
        <p className="text-3xl font-semibold mt-2">
          <CountUp start={0} end={778} duration={5} /> +
        </p>
      </div>
    </div>
  );
};

export default Count;
