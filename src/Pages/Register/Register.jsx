import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile updated");
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
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
    <div className="mt-5">
      <Navbar></Navbar>
      <div className="mx-auto mt-20 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <h1 className="text-center text-2xl font-semibold text-primary-text">
          Register your account
        </h1>
        <hr className="m-4" />
        <form onSubmit={handleCreateUser} className="space-y-2">
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Accept
              </label>
              <a
                href="#"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500 ml-2"
              >
                Term & Conditions.
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Have Account?
            <Link
              to={"/login"}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
