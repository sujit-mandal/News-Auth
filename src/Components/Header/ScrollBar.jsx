import Marquee from "react-fast-marquee";
const ScrollBar = () => {
  return (
    <div className="bg-bg-color p-4 flex">
      <button className="bg-button-color text-white text-xl py-2 px-6">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default ScrollBar;
