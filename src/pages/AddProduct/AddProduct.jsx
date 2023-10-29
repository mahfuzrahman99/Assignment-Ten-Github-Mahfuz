import swal from "sweetalert";
import Navbar from "../../Shared/Navbar/Navbar";
import navbarADBG from "../../assets/automotive-logo-design-vector-update.jpg";

const AddProduct = () => {
  const handleAddFourProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const Product_type = form.Product_type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    form.reset();
    const product = {
      name,
      brandName,
      Product_type,
      price,
      rating,
      details,
      photoURL,
    };

    fetch("https://assignment-teen-server-site-ogzkadkvh.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("product Added!", "Your product has been added.", "success");
        }
        // navigate("/");
      });
  };

  const parentDivStyle = {
    backgroundImage: `url(${navbarADBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="bg-gray-400">
      <div style={parentDivStyle} className="">
        <Navbar />
      </div>
      <div className="md:w-1/2 mx-auto h-auto mt-10 rounded-lg bg-[#F4F3F0] p-7 md:p-24">
        <form onSubmit={handleAddFourProducts}>
          <div className="text-center">
            <p className=" text-2xl font-semibold md:font-bold md:text-4xl my-4 text-[#374151]">
              Add Your Product Hare
            </p>
          </div>
          <div className="md:flex justify-between gap-3">
            <div>
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="name"
                defaultValue={name}
                placeholder="Enter Model name"
                id=""
              />
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="brandName"
                placeholder="Enter Brand Name"
                id=""
              />
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="Product_type"
                placeholder="Enter product type"
                id=""
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="price"
                placeholder="Enter product price"
                id=""
              />
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="details"
                placeholder="Enter product details"
                id=""
              />
              <input
                type="text"
                className="w-full my-2 p-1 rounded-md"
                name="rating"
                placeholder="Product Rating"
                id=""
              />
            </div>
          </div>
          <input
            type="text"
            name="photoURL"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Enter product photoURL"
            id=""
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Add Product"
            className="text-lg btn p-1 my-2 text-white w-full font-semibold text-center rounded-md bg-[#444342] hover:text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
