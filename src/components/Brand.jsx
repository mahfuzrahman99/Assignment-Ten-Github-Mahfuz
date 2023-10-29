import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const {_id, name, photoURL } = brand;
  const naviget = useNavigate();

  const handleBrandAdvertisement = () => {
    naviget("/advertisement");
  };

  return (
    <Link to={`/advertisement/${_id}`}>
      <div
        onClick={handleBrandAdvertisement}
        className="max-w-6xl mx-auto  "
        data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        <div className="card shadow-xl hover:bg-red-400   hover:text-white">
          <figure>
            <img src={photoURL} className="h-[250px] w-full" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">{name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
