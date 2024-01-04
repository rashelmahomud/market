import Footer from "@/src/pages/footer";
import Navigation from "@/src/pages/header";
import Head from "next/head";

function Formate({ children }) {
  return (
    <>
      <Head>
        <title>market</title>
      </Head>
      <Navigation />
      <main className="mx-auto my-10 ">{children}</main>

      <Footer />
    </>
  );
}

export default Formate;
