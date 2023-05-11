import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillChatLeftFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from "next/router";
import Footer from "../footer";
import Header from "../header";

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
      <Header></Header>

      <div>
        <div className="flex gap-5 items-center font-semibold lg:px-20 p-10 bg-gray-100 my-10 lg:mt-20">
          <Link href={'/'}>Home</Link>
          <p><AiOutlineArrowLeft /></p>
          <Link href={''}>market</Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="text-3xl font-bold my-10 mx-20">
              <h1 className="pb-5">Category: Speaker</h1>
              <hr />

            </div>

            <div className="shadow relative overflow-hidden lg:px-20">
              <Image className="w-96 transition duration-300 ease-in-out hover:scale-110" src={newNews.img1} width={500} height={300} alt="product" />

              <div className="bg-gray-100 flex" >

                <div className="lg:p-10 p-3 ">
                  <p className="flex items-center text-5xl bg-gray-400 w-16 h-16 p-2 rounded-full"><AiOutlineUser /></p>
                  <span className="p-3 my-2">Cztql</span>
                  <hr className="w-16 mx-3 m-2" />
                  <span className="px-3">0</span>
                </div>
                <div className="mt-32 p-10">
                  <span className="flex items-center gap-3 text-gray-600"> <BsFillChatLeftFill /> Electronics</span>
                  <h2 className="font-bold text-2xl text-gray-600 my-3">Seating Collection Inspiration Is Not Enough For People</h2>
                  <p className="font-semibold text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem…</p>

                  <button className="bg-green-700 p-3 mt-3 text-white font-bold ">continue Reading</button>
                </div>

              </div>

            </div>
          </div>
          <div>

            <div className="p-10 mt-10 border w-96 flex">
              <input type="text" className="border rounded lg:w-96 p-3" placeholder="Enter your Mail Here.." />
              <button className="bg-yellow-300 p-3 text-white font-bold"><BsSearch /></button>
            </div>
            <div className="border p-5 my-3 w-96">
              <h3 className="font-semibold text-xl mb-3 border-l-4 px-2">Recent Posts</h3>
              <Link href='#'>Seating Collection Inspiration Is Not Enough For People</Link><hr />
              <br />
              <Link href='#'>Exterior Ideas: 10 Colored Fiber Garden Seats</Link><hr />
              <br />
              <Link href='#'>Creative Water Features And Exterior Design</Link><hr />
              <br />
              <Link href='#' className="">Seating Collection Inspiration Is Not Enough For People</Link><hr />

            </div>
            <div className="border p-5 my-5 w-96 ">
              <h3 className="font-semibold text-xl mb-3 border-l-4 px-2">Recent Commante</h3>
              <Link href='#'>Maria on Xpeed computer</Link><hr />
              <br />
              <Link href='#'>Maria on Xpeed Laptop</Link><hr />
              <br />
              <Link href='#'> Maria on Fuji Film Camera</Link><hr />
              <br />
              <Link href='#'>Maria on Xpeed Headset</Link><hr />
              <br />
              <Link href='#' className="">Ryan on Drone WI FI FPV</Link><hr />

              
              
             
              
              

            </div>
            <div className="border p-5 my-5 w-96">
              <h3 className="font-semibold text-xl mb-3 border-4 border-l-indigo-400 px-2">Archives</h3>
              <Link href='#'>May 2018</Link><hr />
              <br />
              <Link href='#'>April 2018</Link><hr />
              <br />
              <Link href='#'>March 2018</Link><hr />




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