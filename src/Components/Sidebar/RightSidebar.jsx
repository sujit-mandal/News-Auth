import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const RightSidebar = () => {
  const { GoogleSignIn } = useContext(AuthContext);

  const handlegoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile updated");
          })
          .catch((error) => {
            // An error occurred
            console.log("Error occurred in profile updating");
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="">
      <div>
        <h3 className="text-xl text-primary-text font-semibold">Login With</h3>
        <button
          onClick={handlegoogleSignIn}
          className="w-full border-2 py-2 mt-5 rounded-md border-black hover:border-green-500 hover:text-green-500"
        >
          <FaGoogle className="inline mr-3"></FaGoogle>Login with Google
        </button>
        <button className="w-full border-2 py-2 mt-5 rounded-md border-black hover:border-green-500 hover:text-green-500">
          <FaGithub className="inline mr-3"></FaGithub>Login with Github
        </button>
      </div>
      <div>
        <h3 className="text-xl text-primary-text font-semibold mt-5">
          Find Us On
        </h3>
        <div className="mt-5">
          <Link className="flex items-center border-[1px] border-secondary-text py-4 pl-4 rounded-t-md">
            <FaFacebook className="text-3xl mr-3"></FaFacebook>
            <span className="text-secondary-text font-medium">Facebook</span>
          </Link>
          <Link className="flex items-center border-[1px] border-x-secondary-text py-4 pl-4 ">
            <FaSquareXTwitter className="text-3xl mr-3"></FaSquareXTwitter>
            <span className="text-secondary-text font-medium">Twitter</span>
          </Link>
          <Link className="flex items-center border-[1px] border-secondary-text py-4 pl-4 rounded-b-md">
            <FaInstagram className="text-3xl mr-3"></FaInstagram>
            <span className="text-secondary-text font-medium">Instagram</span>
          </Link>
        </div>
      </div>
      <div className="bg-bg-color mt-5">
        <h3 className="text-xl text-primary-text font-semibold pt-4 pl-4 mb-5">
          Q-Zone
        </h3>
        <div className="space-y-2">
          <img src={qZone1} alt="" className="mx-auto" />
          <img src={qZone2} alt="" className="mx-auto" />
          <img src={qZone3} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="bg-card-bg mt-5 mb-10 flex flex-col items-center">
        <h2 className="text-white font-bold text-3xl text-center px-10 pt-16">
          Create an Amazing Newspaper
        </h2>
        <p className="text-white text-center p-10 pt-3">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>

        <button className=" text-lg font-semibold text-white bg-button-color p-4 mx-auto mb-10">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
