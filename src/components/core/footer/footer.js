import Image from "next/image";
import footerImg from "../../../../public/new-project/f-logo.png";
import { BsArrow90DegRight } from "react-icons/bs";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  lg:px-20 px-5 p-16 bg-lime-500 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white text-center">
            Newsletter & Get Updates
          </h1>
          <p className="text-white">
            Sign up for our newsletter to get up-to-date from us
          </p>
        </div>

        <div>
          <input
            type="text"
            className="border rounded lg:w-96 p-3 outline-0"
            placeholder="Enter your Mail Here.."
          />
          <button className="bg-red-400 p-3 text-white font-bold">
            SUBMITE
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20 px-5 p-12 relative">
        <div>
          <Link href="/">
            <h1 className="text-4xl font-bold text-gray-800">Market.</h1>
          </Link>
          <h3 className="mt-5 text-gray-400 text-2xl">
            Got Question? Call us 24/7
          </h3>
          <h2 className="text-2xl font-bold text-gray-500">[80] 1017 197</h2>
          <p className="mt-3">17 Princess Road, London, Greater London</p>
          <span className="mb-3">NW1 8JR, UK</span> <br />
          <button className="bg-red-400 p-3 mt-3 text-white font-bold">
            View On Map
          </button>
        </div>
        <div>
          <h1 className="text-2xl text-gray-600 font-bold">
            We Using Safe Payments
          </h1>

          <p className="text-xl font-bold text-gray-400">
            <span className="mx-2">Skrill</span>
            <span>PayPal</span>
            <span className="text-sm mx-2">Americal Express</span>
          </p>
          <p className="text-xl my-3">Secured by:</p>

          <Image src={footerImg} alt="image"></Image>
        </div>
        <ul>
          <Link href="/">
            <li className="text-xl font-bold text-gray-600 hover:underline">
              Quick Links
            </li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline my-2">
              Support Center
            </li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline">Term & Conditions</li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline my-2">Shipping</li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline ">Privacy Policy</li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline my-2">Help</li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline ">Products Return</li>
          </Link>
          <Link href="/">
            <li className="text-gray-500 hover:underline">FAQS</li>
          </Link>
        </ul>
        <ul>
          <Link href="#">
            <li className="text-xl font-bold text-gray-600 hover:underline">
              Our Stores
            </li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline my-2">New York</li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline">London SF</li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline my-2">
              Cockfosters BP
            </li>
          </Link>
          <button className="flex items-center bg-red-400 p-3 mt-3 text-white font-bold absolute ml-36 -rotate-90">
            Back Top <BsArrow90DegRight className="text-2xl m-2" />{" "}
          </button>
          <Link href="#">
            <li className="text-gray-500 hover:underline">Los Angeles</li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline my-2">Chincago</li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline">Las Vegas</li>
          </Link>
          <Link href="#">
            <li className="text-gray-500 hover:underline">Albarto</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-row justify-between bg-gray-100 lg:px-20 px-5 p-8">
        <div>
          <p>All Rights Reserved ©Copyright 2018 by XpeedStudio.</p>
        </div>
        <div>
          <ui className="flex list-none gap-5">
            <Link href="#">
              <li className="hover:underline">copy</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">help</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">security</li>
            </Link>
            <Link href="#">
              <li className="hover:underline">list</li>
            </Link>
          </ui>
        </div>
      </div>
    </div>
  );
};
