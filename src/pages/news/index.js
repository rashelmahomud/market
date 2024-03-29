import Newspost from "@/src/components/home/newspost";
import Link from "next/link";

const News = ({ data }) => {
  return (
    <div className="mx-5 lg:mx-20 lg:p-10 my-5">
      <div className="flex flex-wrap justify-between p-5">
        <h1 className="text-2xl font-bold">Marketplace News</h1>
        <Link className="font-semibold text-green-500" href={"/news"}>
          {" "}
          View All Ariticles
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-10">
        {data?.map((post) => {
          return (
            <div key={post._id}>
              <Newspost post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://market-shop-server.vercel.app/market");
  const news = await res.json();

  return {
    props: {
      data: news,
    },
  };
};

export default News;
