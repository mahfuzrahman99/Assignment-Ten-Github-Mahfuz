/* eslint-disable react/prop-types */
import memberBG from "../assets/R.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Member = ({ member }) => {
  // Destructure the member object to access its properties
  const { name, email, photo, description } = member;

  const backgroundStyle = {
    backgroundImage: `url(${memberBG})`, // Set the background image
  };

  return (
    <div
      className="p-4 overflow-hidden text-white font-semibold rounded-lg relative"
      style={backgroundStyle}
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
        <p>{name}</p>
        <p>{description}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Member;
