import Image from "next/image";
import footerImg from "../../../../public/new-project/f-logo.png";
import { BsArrow90DegRight } from "react-icons/bs";

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
            className="border rounded lg:w-96 p-3"
            placeholder="Enter your Mail Here.."
          />
          <button className="bg-red-400 p-3 text-white font-bold">
            SUBMITE
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20 px-5 p-12 relative">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Market.</h1>
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

          <Image src={footerImg}></Image>
        </div>
        <ul>
          <li className="text-xl font-bold text-gray-600">Quick Links</li>
          <li className="text-gray-500 my-2">Support Center</li>
          <li className="text-gray-500">Term & Conditions</li>
          <li className="text-gray-500 my-2">Shipping</li>
          <li className="text-gray-500 ">Privacy Policy</li>
          <li className="text-gray-500 my-2">Help</li>
          <li className="text-gray-500 ">Products Return</li>
          <li className="text-gray-500">FAQS</li>
        </ul>
        <ul>
          <li className="text-xl font-bold text-gray-600">Our Stores</li>
          <li className="text-gray-500 my-2">New York</li>
          <li className="text-gray-500">London SF</li>
          <li className="text-gray-500 my-2">Cockfosters BP</li>
          <button className="flex items-center bg-red-400 p-3 mt-3 text-white font-bold absolute ml-36 -rotate-90">
            Back Top <BsArrow90DegRight className="text-2xl m-2" />{" "}
          </button>
          <li className="text-gray-500">Los Angeles</li>
          <li className="text-gray-500 my-2">Chincago</li>
          <li className="text-gray-500">Las Vegas</li>
          <li className="text-gray-500">Albarto</li>
        </ul>
      </div>

      <div className="flex flex-row justify-between bg-gray-100 lg:px-20 px-5 p-8">
        <div>
          <p>All Rights Reserved ©Copyright 2018 by XpeedStudio.</p>
        </div>
        <div>
          <ui className="flex list-none gap-5">
            <li>copy</li>
            <li>help</li>
            <li>security</li>
            <li>list</li>
          </ui>
        </div>
      </div>
    </div>
  );
};
