import Image from "next/image";
import Link from "next/link";
import { BsFillChatLeftFill } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import moment from "moment";
const Newspost = ({ post }) => {
  let date = moment(new Date()).format("DD-MM-YYYY");

  return (
    <div>
      <div className="shadow relative overflow-hidden">
        <Image
          className="w-full transition duration-300 ease-in-out hover:scale-110"
          src={post.img1}
          width={300}
          height={300}
          alt="product"
        />
        <div className="lg:p-10 p-3">
          <Link href={`/news/${post._id}`}>
            <h1 className="text-xl font-semibold text-blue-600">
              {post.title}
            </h1>
          </Link>

          <p className="text-2xl font-bold mt-3">{post.dec}</p>
          <div className="flex items-center align-items-center text-2xl gap-5 mt-5 text-gray-500">
            <BsFillChatLeftFill />
            <span className="text-xs font-bold">{0}</span>
            <BsStopwatch />
            <p className="text-xs font-bold">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newspost;
