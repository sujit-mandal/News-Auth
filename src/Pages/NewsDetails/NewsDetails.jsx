import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightSidebar from "../../Components/Sidebar/RightSidebar";
import { ScrollRestoration } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { id } = useParams();
  const {news, categories} = useLoaderData();
  const singleNews = news.find((newsItem) => newsItem._id == id);
  const category = categories.find((category) => category.id == singleNews.category_id);
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <h3 className="text-xl text-primary-text font-semibold mb-2">
            {category.name}
          </h3>
          <div className="border-2 border-[#E7E7E7] rounded-md p-7">
            <img src={singleNews.image_url} alt="" className="w-full h-auto" />
            <h1 className="text-xl font-semibold text-primary-text mt-2 mb-5">
              {singleNews?.title}
            </h1>
            <p className="text-secondary-text mb-3 text-justify">
              {singleNews.details}
            </p>

            <Link to={"/"}>
              <button className="flex items-center bg-button-color text-white text-xl font-medium py-2 px-5">
                <FaArrowLeft className="mr-2"></FaArrowLeft>All news in this
                category
              </button>
            </Link>
          </div>
        </div>
        <RightSidebar></RightSidebar>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default NewsDetails;
