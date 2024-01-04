import { Inter } from "next/font/google";

import News from "./news";
import Formate from "../components/layout/formate";
import Banner from "../components/home/banner";
import Features from "../components/home/features";
import Product from "../components/home/product";
import Features2 from "../components/home/features2";
import Products from "../components/home/products";
import Features1 from "../components/home/features1";
import Features3 from "../components/home/Features3";
import Count from "../components/home/count";
import Mlogo from "../components/home/mlogo";

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
      <Features1 />
      <Count />
      <News data={data} />
      <Mlogo />
    </Formate>
  );
}
//https://market-shop-server.vercel.app/
export async function getServerSideProps() {
  const res = await fetch("https://market-shop-server.vercel.app/market");
  const resProduct = await fetch(
    "https://market-shop-server.vercel.app/product"
  );

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
