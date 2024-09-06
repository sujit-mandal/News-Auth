import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const LeftSidebar = () => {
  const [categories, setCategories] = useState([]);
  const { onClick } = useContext(AuthContext);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="">
      <h3 className="text-xl text-primary-text font-semibold">All Category</h3>
      {
        categories.map(category=><h3 onClick={() => onClick(category.id)} className="text-xl px-3 w-fit cursor-pointer hover:px-3 hover:py-2 hover:bg-[#E7E7E7] hover:rounded-lg hover:text-primary-text text-secondary-text font-semibold leading-9 mt-7" key={category.id}>{category.name}</h3>)
      }
      
    </div>
  );
};

export default LeftSidebar;
