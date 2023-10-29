


const Banner = () => {

  
  return (
    <div className="text-center text-white z-10 ">
      <p className="text-xl md:text-3xl font-semibold ">
        Rev Up Your Ride with Expert Automotive Solutions |
        <span
              className="text-xl md:text-3xl font-semibold"
              style={{
                background: "linear-gradient(45deg, #657DE6, #A93DFF, #F26091)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              AutoMotive
            </span>
      </p>
      <br />
      <p className="hidden md:block">
        Discover a world of automotive excellence at AutoMotive. From
        maintenance tips to in-depth reviews, we re your go-to resource <br />
        for all things automotive. Get expert insights, product recommendations,
        and stay ahead in the fast lane of automotive innovation.
      </p>
      <a href="#card">Explore More...</a>
    </div>
  );
};

export default Banner;
