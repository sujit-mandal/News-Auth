import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="mt-4">
      <nav>
        <div className="flex items-center justify-between mx-auto">
          <div className="flex-grow flex justify-center">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={user ? user?.photoURL : ""}
              alt="user photo"
            />

            {user ? (
              <Link>
                <button
                  onClick={handleLogOut}
                  className="text-lg text-white px-10 py-2 bg-primary-text"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="text-lg text-white px-10 py-2 bg-primary-text">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
