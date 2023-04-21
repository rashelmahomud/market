import { Inter } from 'next/font/google'
import Formate from '../components/layout/formate';
import Mlogo from '../components/home/mlogo';
import News from '@/components/home/News';
import Features1 from '@/components/home/features1';
import Features2 from '@/components/home/features2';
import Features3 from '../components/home/Features3';
import Count from '@/components/home/count';
import Product from '../components/home/product';
import Products from '../components/home/products';
import Features from '@/components/home/features';
const inter = Inter({ subsets: ['latin'] })



export default function Home({ data, products }) {

  return (
    <Formate>

      <Features products={products} />

      <Product products={products} title={'Tranding Product'} />
      <Features3 />
      <Features2 />
      <Products products={products} title={'Discover More'} />
      <Features1 />
      <Count />
      <News data={data} />

      <Mlogo />
    </Formate>
  )
}



export async function getServerSideProps() {

  const res = await fetch('http://localhost:5000/market')
  const resProduct = await fetch('http://localhost:5000/product')

  const data = await res.json();
  const products = await resProduct.json();


  return {
    props: {
      data,
      products

    }
  }
}
