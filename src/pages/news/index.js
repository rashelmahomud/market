import Newspost from "@/src/components/home/newspost";
import Link from "next/link";

const News = ({ data, loading }) => {
  return (
    <div className="mx-5 lg:mx-20 lg:p-10 my-5">
      <div className="flex flex-wrap justify-between p-5">
        <h1 className="text-2xl font-bold">Marketplace News</h1>
        <Link className="font-semibold text-green-500" href={"/news"}>
          {" "}
          View All Ariticles
        </Link>
      </div>
      {loading ? (
        <p className="text-5xl p-10">loading......</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-10">
          {data?.map((post) => {
            return (
              <div key={post._id}>
                {" "}
                <Newspost post={post} />
              </div>
            );
          })}
        </div>
      )}
      ) )
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/market");
  const news = await res.json();

  return {
    props: {
      data: news,
    },
  };
};

export default News;
