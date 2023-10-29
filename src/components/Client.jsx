/* eslint-disable react/prop-types */
import clientBG from "../assets/OIP.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Client = ({ client }) => {
  const { name, photo, review } = client;

  const backgroundStyle = {
    backgroundImage: `url(${clientBG})`, // Set the background image
  };

  return (
    <div
      className="p-4 text-white font-semibold rounded-lg relative"
      style={backgroundStyle}
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="absolute inset-0 opacity-10 bg-black "></div>
      <div className="flex justify-center relative">
        <img
          className="h-[100px] w-[100px] rounded-full z-10"
          src={photo}
          alt=""
        />
      </div>
      <div className="z-10 mt-4 space-y-2">
        <p>Name: {name}</p>
        <p>Review: {review}</p>
      </div>
    </div>
  );
};

export default Client;
