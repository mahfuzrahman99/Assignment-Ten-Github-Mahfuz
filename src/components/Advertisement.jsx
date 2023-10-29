import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import navbarADBG from "../assets/automotive-logo-design-vector-update.jpg";
import { useEffect, useState } from "react";
import OneProduct from "./OneProduct";
import NotFound from "./NotFound";

const Advertisement = () => {
  const brand = useLoaderData();
  const [product, setProduct] = useState([]);
  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    fetch("https://assignment-teen-server-site-ogzkadkvh.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const productData = product.filter((p) => p.brandName === brand.name);
  console.log(productData);

  return (
    <div>
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>
      <div className="">
        <div
          className={`carousel ${
            productData.length > 0 ? "h-[30vh] md:h-[90vh]" : ""
          }`}
        >
          <div id="slide1" className="carousel-item relative w-full">
            <img src={brand.ad_img_1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={brand.ad_img_2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={brand.ad_img_3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-200 p-2 m-2 rounded-xl">
        <h2 className="text-xl md:text-5xl font-bold text-center my-6 md:my-16">
          Our Featured Products
        </h2>
        <div>
          {productData.length > 0 ? (
            <div className="max-w-5xl mx-auto p-2 md:p-0 mb-10 grid justify-center items-center gap-4  grid-cols-1 md:grid-cols-2 ">
              {productData.map((prod) => (
                <OneProduct key={prod._id} prod={prod} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
