import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from "next/router";
import Footer from "../footer";

const NewsDetails = ({ post }) => {
  const router = useRouter()
  const { id } = router.query

  const newNews = post.find((x) => x._id === id);

  if (!newNews) {
    return <p>News NOT Founds....</p>
  }

  return (
    <div>
      <Head><title> Market /News Details</title></Head>

      <div>
        <div className="flex gap-5 items-center font-semibold lg:px-20 p-10 bg-gray-100 my-10 lg:mt-20">
          <Link href={'/'}>Home</Link>
          <p><AiOutlineArrowLeft /></p>
          <Link href={''}>market</Link>
        </div>
        <div>
          <div className="text-3xl font-bold my-10 mx-20">
            <h1 className="pb-5">Category: Speaker</h1>
            <hr />

          </div>

          <div className="shadow relative overflow-hidden lg:px-20">
            <Image className="w-96 transition duration-300 ease-in-out hover:scale-110" src={newNews.img1} width={500} height={300} alt="product" />
            <div className="lg:p-10 p-3">

              <h1 className="text-xl font-semibold text-blue-600">{newNews.title}</h1>


              <p className="text-2xl font-bold mt-3">{newNews.dec}</p>

            </div>

          </div>
        </div>

      </div>
      <Footer />

    </div>
  )
}



export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`http://localhost:5000/market?id=${id}`)

  const posts = await res.json()


  return {
    props: {
      post: posts,
      id,
    }
  }

}



export default NewsDetails;















// export const getStaticProps = async (context) => {

//     const { params } = context;

//     const res = await fetch(`http://localhost:5000/market/${params.id}`)
//     const data = await res.json();

//     return {
//         props: {
//             post: data,
//         }
//     }

// }



// export const getStaticPaths = async () => {

//     const res = await fetch('http://localhost:5000/market')
//     const data = await res.json();

//     const paths = data.map((post) => {
//         return {
//             params: {
//                 id: `${post.id}`
//             }
//         }

//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }




// export default PostId;