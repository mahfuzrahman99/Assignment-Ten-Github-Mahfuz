import swal from "sweetalert";

const AddCoffee = () => {
  const handleAddBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    form.reset();
    const addBrand = {
      name,
      photoURL,
    };
    fetch(
      "https://assignment-teen-server-site-ogzkadkvh.vercel.app/addBrands",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addBrand),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Coffee Added!", "Your coffee has been added.", "success");
        }
        // navigate("/");
      });
  };

  return (
    <div>
      <div className="w-1/2 mx-auto h-auto my-10 bg-[#F4F3F0] p-16">
        <form onSubmit={handleAddBrand}>
          <div className="text-center">
            <p className="text-5xl font-normal text-[#374151]">Add New Brand</p>
            <p className="my-3">
              Iconic car brands offer a blend of innovation, quality, and
              luxury, creating a diverse automotive landscape.
            </p>
          </div>

          <input
            type="text"
            className="w-full my-2 p-1 rounded-md"
            name="name"
            placeholder="Enter coffee name"
            id=""
          />
          <input
            type="text"
            name="photoURL"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL"
            id=""
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Add Brand"
            className="text-lg btn p-1 my-2 text-black w-full font-normal text-center rounded-md bg-[#D2B48C]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
