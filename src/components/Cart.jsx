/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import swal from "sweetalert";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Cart = ({ cart, setRemoveData, removeData }) => {
  const {
    _id,
    name,
    brandName,
    Product_type,
    price,
    rating,
    photoURL,
    currentId
  } = cart;

  const handleDelete = (_id) => {
    fetch(
      `https://assignment-teen-server-site-ogzkadkvh.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          swal("product Deleted!", "Your product has been deleted.", "success");
          const remaining = removeData.filter((card) => card._id !== _id);
          setRemoveData(remaining);
        }
        // navigate("/");
      });
  };

  return (
    <div>
      <div className="md:grid grid-cols-3 text-black rounded-xl my-3 md:my-auto shadow-lg bg-pink-300 ">
        <div>
          <img
            className="w-full h-full rounded-tr-xl rounded-tl-xl md:rounded-tl-xl md:rounded-bl-xl bg-gray-400"
            src={photoURL}
            alt=""
          />
        </div>
        <div className="col-span-2 p-4  ">
          <div className="flex">
            <div className="flex-1">
              <p className="font-bold text-xl">{name}</p>
              <p className="font-medium">Brand: {brandName}</p>
              <p className="font-medium">Type: {Product_type}</p>
              <div className="">
                <p className="font-medium">
                  Price <span className="text-red-500">${price}</span>
                </p>
                <p className=" font-medium flex items-center">
                  Rating: <span className="text-blue-500"> {rating}</span>
                  <span>
                    <Rating
                      style={{ maxWidth: 100 }}
                      readOnly
                      halfFillMode="svg"
                      value={rating < 4.5 ? Math.floor(rating) : rating}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around items-center">
              <Link>
                <div
                  className="badge badge-outline text-black bg-blue-500 h-8 border-none rounded-md w-20 text-2xl"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete!"
                  onClick={() => handleDelete(_id)}
                >
                  <MdDelete />
                </div>
              </Link>
              <Tooltip id="my-tooltip" />
              <Link to={`/productDetails/${currentId}`}>
                <div
                  className="badge badge-outline text-black bg-amber-500 h-8 border-none rounded-md w-20 text-2xl"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="View Details!"
                >
                  <FaEye />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
