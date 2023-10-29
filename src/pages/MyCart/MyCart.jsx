import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";
import Navbar from "../../Shared/Navbar/Navbar";
import navbarADBG from "../../assets/automotive-logo-design-vector-update.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {

  const {user} = useContext(AuthContext)
  const myCart = useLoaderData();
  const [difrentEmail, setDefrentEmail] = useState([]);
  const [removeData, setRemoveData] = useState([])

  useEffect(()=>{
    const currentData = myCart.filter(cart => cart.userEmail === user.email)
    setDefrentEmail(currentData)
  },[myCart,user])

  useEffect(()=> {
    setRemoveData(difrentEmail)
  },[difrentEmail])

  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>
      <p
        className="text-xl md:text-3xl font-bold max-w-6xl mx-auto"
        style={{
          background: "linear-gradient(45deg, #657DE6, #A93DFF, #F26091)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Total Carted Products: {removeData.length}
      </p>
      <div className="md:grid grid-cols-2 justify-center items-center gap-3 my-10 max-w-6xl mx-auto">
        {removeData.map((cart) => (
          <Cart key={cart._id} removeData={removeData} setRemoveData={setRemoveData} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
