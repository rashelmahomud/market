import Image from "next/image";
import { useRouter } from "next/router";

const details = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  const trandingProduct = product?.find((p) => p._id === id);

  if (!trandingProduct) {
    console.log("Server site errors.");
  }

  return (
    <div>
      <Image
        className="w-96 transition duration-300 ease-in-out hover:scale-110"
        src={trandingProduct?.image}
        width={500}
        height={300}
        alt="product"
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const res = await fetch(`https://market-shop-server.onrender.com/product?id=${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
      id,
    },
  };
};

export default details;
