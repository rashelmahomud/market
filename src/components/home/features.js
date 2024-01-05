import { useState } from "react";

import icon1 from "../../../public/new-project/icon2-1.png";
import icon2 from "../../../public/new-project/icon3.png";
import icon3 from "../../../public/new-project/icon4.png";
import icon4 from "../../../public/new-project/icon5.png";
import icon5 from "../../../public/new-project/icon2-1.png";

import icon6 from "../../../public/new-project/icon5.png";

import Image from "next/image";

export const Features = ({ products }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap mx-auto lg:mx-28 lg:p-20 p-3">
        <div className="w-full">
          <ul
            className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 mb-0 list-none pt-3 pb-4 border p-3"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center border-r-2">
              <a
                className={
                  "font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon1} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    5 Items abailave
                  </p>
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 basis-1/4 last:mr-0 text-center border-r-2">
              <a
                className={
                  " font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon2} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    10 Items abailave
                  </p>
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 basis-1/4 last:mr-0 flex-auto text-center border-r-2">
              <a
                className={
                  "font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon3} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    9 Items abailave
                  </p>
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 basis-1/4 last:mr-0 flex-auto text-center border-r-2">
              <a
                className={
                  "font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon4} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    16 Items abailave
                  </p>
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 basis-1/4 last:mr-0 flex-auto text-center border-r-2">
              <a
                className={
                  "font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon5} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    13 Items abailave
                  </p>
                </div>
              </a>
            </li>
            <li className="-mb-px mr-2 basis-1/4 last:mr-0 flex-auto text-center ">
              <a
                className={
                  " font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-lime-500"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div>
                  <Image className="w-16 mx-auto mb-3" src={icon6} />
                  <p>Geocary</p>
                  <p className="text-sm lowercase text-gray-600">
                    22 Items abailave
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(0, 6).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(2, 8).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(4, 10).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(6, 11).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(2, 8).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link3">
                  <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-3">
                    {products?.slice(3, 9).map((product) => (
                      <div key={product._id}>
                        <Image
                          className="mx-auto"
                          src={product.image}
                          width={100}
                          height={100}
                          alt="product"
                        />
                        <h1 className="font-semibold my-3 text-center">
                          {product.title}
                        </h1>
                        <p className="text-center">
                          <span className="delete text-gray-300">$340.00</span>{" "}
                          {product.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
