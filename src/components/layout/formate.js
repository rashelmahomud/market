import Head from "next/head";
import { Footer, Header } from "../core";

function Formate({ children }) {
  return (
    <>
      <Head>
        <title>fruite shop</title>
      </Head>
      <Header />
      <main className="mx-auto my-10 ">{children}</main>

      <Footer />
    </>
  );
}

export default Formate;
