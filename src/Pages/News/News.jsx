import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
const News = ({ news }) => {
  
  const {_id, title, author, total_view, rating, image_url, details } = news;
  return (
    <div className="border-2 border-[#E7E7E7] rounded-md mb-5">
      <div className="flex justify-between px-5 py-6 bg-news-bg">
        <div className="flex items-center space-x-4">
          <img
            src={author.img}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-primary-text font-semibold">{author.name? author.name : "Author"}</h3>
            <p className="text-sm">{author?.published_date?.split(" ")[0]}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-3xl">
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <div className="px-5">
        <div>
          <h2 className="text-xl font-semibold text-primary-text mt-2 mb-5">
            {title}
          </h2>
          <img src={image_url} className="mb-8" />
          {details.length > 200 ? (
            <p className="text-secondary-text"> {details.slice(0, 200)}...</p>
          ) : (
            <p>{details}</p>
          )}
          <Link to={`/news-details/${_id}`} className="text-[#FF8C47]">Read More</Link>
          <hr className="divide-[#E7E7E7] px-20 my-5" />
          <div className="flex justify-between px-5 mb-5">
            <p>Rating</p>
            <p className="flex items-center">
              <AiFillEye className="text-xl"></AiFillEye>
              <span className="ml-3">{total_view}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
