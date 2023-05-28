import Image from "next/image";
import { useRouter } from "next/router";

const productDetails = ({ post }) => {

    const router = useRouter();
    const { id } = router.query;

    const newNews = post.find((x) => x._id === id);

    return (
        <div>

            <Image className="w-96 transition duration-300 ease-in-out hover:scale-110" src={newNews.image} width={500} height={300} alt="product" />

            <h1>hello id {newNews._id}</h1>
            <h1>hello id {newNews.title}</h1>


        </div>
    )

};


export const getServerSideProps = async (context) => {
    const { params } = context;
    const { id } = params;
    const res = await fetch(`http://localhost:5000/product?id=${id}`)

    const products = await res.json();


    return {
        props: {
            post: products,
            id,
        }
    }

}

export default productDetails;