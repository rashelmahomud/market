import Image from "next/image";
import { useRouter } from "next/router";

const NewsDetails = ({ post }) => {
  console.log(post);
  const router = useRouter()
  const { id } = router.query

  const newNews = post.find((x) => x._id === id);

  if (!newNews) {
    return <p>News Note make..</p>
  }

  return (
    <div>

      <div className="shadow relative overflow-hidden">
        <Image className="w-96 transition duration-300 ease-in-out hover:scale-110" src={newNews.img1} width={500} height={300} alt="product" />
        <div className="lg:p-10 p-3">

          <h1 className="text-xl font-semibold text-blue-600">{newNews.title}</h1>


          <p className="text-2xl font-bold mt-3">{newNews.dec}</p>
          
        </div>

      </div>

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