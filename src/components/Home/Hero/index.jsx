import bannerImage from "../../../assets/hero.svg";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('${bannerImage}')` }}
      className="py-72 "
    >
      <div className="max-w-7xl mx-auto flex flex-row gap-5">
        <div className="w-5/12 "></div>
        <div className="  text-white w-7/12 ">
          <h2 className="font-rancho text-[55px]">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-base font-raleway mt-4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] text-coffee py-4 px-6 rounded-sm font-rancho text-2xl mt-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
