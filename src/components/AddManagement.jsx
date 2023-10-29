import swal from "sweetalert";

const AddManagement = () => {
  const handleAddManagement = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const description = form.description.value;
    form.reset();
    const members = {
      name,
      email,
      photo,
      description,
    };

    fetch(
      "https://assignment-teen-server-site-ogzkadkvh.vercel.app/addManagements",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(members),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Member Added!", "Your member has been added.", "success");
        }
      });
  };
  return (
    <div>
      <div className="w-1/2 mx-auto h-auto my-10 bg-[#F4F3F0] p-16">
        <form onSubmit={handleAddManagement}>
          <div className="text-center">
            <p className="text-5xl font-normal text-[#374151]">
              Add New Management member
            </p>
            <p className="my-3">
              Iconic car brands offer a blend of innovation, quality, and
              luxury, creating a diverse automotive landscape.
            </p>
          </div>

          <input
            type="text"
            className="w-full my-2 p-1 rounded-md"
            name="name"
            placeholder="Enter Member name"
            id=""
          />
          <input
            type="text"
            name="photoURL"
            className="w-full my-2 p-1 rounded-md"
            placeholder="Photo URL"
            id=""
          />
          <input
            type="text"
            className="w-full my-2 p-1 rounded-md"
            name="description"
            placeholder="Enter member description"
            id=""
          />
          <input
            type="email"
            className="w-full my-2 p-1 rounded-md"
            name="email"
            placeholder="Enter member email address"
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

export default AddManagement;
