import { Inter } from "next/font/google";
import News from "./news";
import Formate from "../components/layout/formate";
import {
  Product,
  Products,
  Banner,
  Features,
  Features1,
  Features2,
  Features3,
  Mlogo,
  Count,
} from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, products }) {
  return (
    <Formate>
      <Banner />
      <Features products={products} />
      <Product products={products} title={"Tranding Product"} />
      <Features3 />
      <Features2 />
      <Products products={products} title={"Discover More"} />
      <Count />
      <News />
      <Mlogo />
    </Formate>
  );
}
//https://market-shop-server.onrender.com

export async function getServerSideProps() {
  const res = await fetch("https://market-shop-server.onrender.com/market");
  const resProduct = await fetch("https://market-shop-server.onrender.com/product");

  if (res && resProduct) {
    const data = await res.json();
    const products = await resProduct.json();
    return {
      props: {
        data,
        products,
      },
    };
  }
}
