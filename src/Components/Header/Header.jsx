import logo from "../../assets/logo.png";
import dayjs from "dayjs";

const Header = () => {
  return (
    <div className="mt-12 mb-7">
      <img src={logo} alt="" className="mx-auto mb-5" />
      <h3 className="text-lg text-secondary-text text-center mb-2">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-xl text-primary-text text-center">
        {dayjs().format("dddd,")}
        <span className="text-secondary-text">
          {dayjs().format(" MMMM DD, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
