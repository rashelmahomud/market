import { Inter } from 'next/font/google'
import Formate from '../components/layout/formate';
import Mlogo from '../components/home/mlogo';
import News from '@/components/home/News';
import Features1 from '@/components/home/features1';
import Features2 from '@/components/home/features2';
import Count from '@/components/home/count';

const inter = Inter({ subsets: ['latin'] })
export default function Home({ data }) {
  return (
    <Formate>

      <Features2 />
      <Features1 />
      <Count />
      <News data={data} />

      <Mlogo />
    </Formate>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/market')
  const data = await res.json()

  return {
    props: { data: data }
  }
}
