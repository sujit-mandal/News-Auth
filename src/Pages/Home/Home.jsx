import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Header/Navbar";
import ScrollBar from "../../Components/Header/ScrollBar";
import LeftSidebar from "../../Components/Sidebar/LeftSidebar";
import RightSidebar from "../../Components/Sidebar/RightSidebar";
import News from "../News/News";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import wa_logo from "../../assets/whatsapp.png";
import MessengerChatPlugin from "../../Components/MessengerChat";
import MessengerChat from "../../Components/MessengerChat";
const Home = () => {
  const { news, categories } = useLoaderData();
  const { categoryId } = useContext(AuthContext);
  const [categoryWiseNews, setCategoryWiseNews] = useState([]);
  const category = categories.find((category) => category.id == categoryId);

  useEffect(() => {
    if (categoryId === 0 || categoryId === "0") {
      setCategoryWiseNews(news);
    } else {
      setCategoryWiseNews(
        news.filter((news) => news.category_id === categoryId)
      );
    }
  }, [news, categoryId]);

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-5 z-10">
        <Link
          to="https://wa.me/+8801744424480"
          className="flex gap-2 items-center"
        >
          <p className="bg-gray-100 px-2 py-1 rounded-md">
            Need Help? <span className="font-semibold">Chat with us</span>
          </p>
          <img src={wa_logo} alt="Whatsapp logo" className="w-12 h-12" />
        </Link>
      </div>
      {/* <MessengerChatPlugin appId="1196263888185302" pageId="101261925336664" /> */}
      <MessengerChat />
      <div>
        <Header></Header>
        <ScrollBar></ScrollBar>
        <Navbar></Navbar>
      </div>
      {/* <div className="grid grid-cols-4 gap-4 mt-16">
        <div className="">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="col-span-2 overflow-y-auto h-screen">
          <h3 className="text-xl text-primary-text font-semibold mb-5">
            {category.name}
          </h3>
          {categoryWiseNews &&
            categoryWiseNews?.map((news) => (
              <News key={news._id} news={news}></News>
            ))}
          {categoryWiseNews.length <= 0 ? (
            <p className="flex justify-center items-center">No news found</p>
          ) : (
            ""
          )}
        </div>
        <div className="sticky top-0">
          <RightSidebar></RightSidebar>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
