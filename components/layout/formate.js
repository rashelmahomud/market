import Footer from "@/pages/footer";
import Header from "@/pages/header";
import Head from "next/head";


function Formate({ children }) {
    return (
        <>
            <Head><title>market</title></Head>
            <Header />
            <main className="mx-auto my-10 ">{children}</main>

            <Footer />
        </>
    )
}

export default Formate;