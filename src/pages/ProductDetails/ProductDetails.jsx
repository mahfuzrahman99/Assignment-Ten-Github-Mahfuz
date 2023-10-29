import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import navbarADBG from "../../assets/automotive-logo-design-vector-update.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
// ..
AOS.init();

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    Product_type,
    brandName,
    details,
    name,
    photoURL,
    price,
    rating,
    // eslint-disable-next-line no-unused-vars
    _id,
  } = productDetails;

  const newDataToSend = {
    Product_type,
    brandName,
    details,
    name,
    photoURL,
    price,
    rating,
    currentId: _id,
  };

  const newData = Object.assign(newDataToSend, { userEmail: user.email });

  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [allCartCards, setAllCartCards] = useState([]);
  // console.log(product);
  useEffect(() => {
    fetch("https://assignment-teen-server-site-ogzkadkvh.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => setAllCartCards(data));
  }, [allCartCards]);

  const handleAddToCart = () => {
    // console.log(product);
    const getCartCards = allCartCards || [];
    const isExist = getCartCards.find(
      (cartCard) => cartCard._id === productDetails._id
    );
    if (!isExist) {
      fetch("https://assignment-teen-server-site-ogzkadkvh.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            return Swal.fire({
              title: "Success!",
              text: "Added to Cart Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    } else {
      return Swal.fire({
        title: "Error!",
        text: "Duplicate Item",
        icon: "error",
        confirmButtonText: "Go back",
      });
    }
  };
  return (
    <div>
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>
      <div className="md:mx-24 p-4 md:mb-16 space-y-3rounded-xl">
        <div className="relative rounded-xl">
          <div
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              className="w-full h-[30vh] md:h-[80vh] bg-pink-300  rounded-xl"
              src={photoURL}
              alt=""
            />
          </div>
          <div
            className="p-3 md:p-6 absolute bottom-0 w-full rounded-br-xl rounded-bl-xl"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
          >
            <Link className="flex justify-between items-center">
              <button
                onClick={handleAddToCart}
                className=" md:btn btn-sm text-black md:text-black bg-blue-400 md:bg-blue-400 rounded-md font-medium"
              >
                Add To Cart
              </button>
              <button className=" md:btn btn-sm text-black md:text-black bg-orange-400 md:bg-orange-400 rounded-md font-medium">
                Price: ${price}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2
              className="text-lg md:text-4xl font-bold relative"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-red-400 to-blue-400">
                {name}
              </span>
            </h2>

            <h2 className=" text-sm md:text-xl font-bold">
              Brand: {brandName}
            </h2>
          </div>
          <div className="my-5 space-y-2">
            <h2 className=" text-sm md:text-xl font-bold">
              Rating: <span className="text-amber-400">{rating}</span>
            </h2>
            <h2 className=" text-sm md:text-xl font-bold">
              Category: {Product_type}
            </h2>
          </div>
        </div>
        <p className=" text-xs md:text-xl  font-normal text-gray-500">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
