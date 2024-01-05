import Image from "next/image";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

export const Products = ({ title, products }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap mx-auto lg:mx-28 lg:p-20 p-3">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 justify-between grid-cols-1">
            <h1 className="-mb-px mr-2 last:mr-0 basis-1/4 font-bold text-2xl">
              {title}
            </h1>

            <ul className="flex mb-0 list-none pt-3 pb-4" role="tablist">
              <li className="-mb-px mr-2 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-green-600"
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
                  On-Sell
                </a>
              </li>
              <li className="-mb-px mr-2 basis-1/4 last:mr-0 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-green-600"
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
                  Trand
                </a>
              </li>
              <li className="-mb-px mr-2 basis-1/4 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-green-600"
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
                  Hot-Sell
                </a>
              </li>
            </ul>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10"> */}
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {products?.map((product) => (
                      <SwiperSlide>
                        <div
                          key={product._id}
                          className="border rounded lg:p-5 p-3"
                        >
                          <Link href={`/products/${product._id}`}>
                            <Image
                              className="mx-auto"
                              src={product.image}
                              width={200}
                              height={200}
                              alt="product"
                            />
                            <h1 className="font-semibold my-3 text-center">
                              {product.title}
                            </h1>
                            <p className="text-center font-semibold">
                              <span className="delete text-gray-300">
                                $340.00
                              </span>{" "}
                              {product.price}
                            </p>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
                    ...
                  </Swiper>
                  {/* </div> */}
                  HELLO RASHEL MAHOMUD
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                    {products?.slice(2, 6).map((product) => (
                      <div
                        key={product._id}
                        className="border rounded lg:p-5 p-3"
                      >
                        <Link href={`/products/${product._id}`}>
                          <Image
                            className="mx-auto"
                            src={product.image}
                            width={200}
                            height={200}
                            alt="product"
                          />
                          <h1 className="font-semibold my-3 text-center">
                            {product.title}
                          </h1>
                          <p className="text-center font-semibold">
                            <span className="delete text-gray-300">
                              $340.00
                            </span>{" "}
                            {product.price}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                    {products?.slice(1, 6).map((product) => (
                      <div
                        key={product._id}
                        className="border rounded lg:p-5 p-3"
                      >
                        <Link href={`/products/${product._id}`}>
                          <Image
                            className="mx-auto"
                            src={product.image}
                            width={200}
                            height={200}
                            alt="product"
                          />
                          <h1 className="font-semibold my-3 text-center">
                            {product.title}
                          </h1>
                          <p className="text-center font-semibold">
                            <span className="delete text-gray-300">
                              $340.00
                            </span>{" "}
                            {product.price}
                          </p>
                        </Link>
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
